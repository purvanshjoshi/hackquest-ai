/**
 * API Service - Centralized API communication layer
 */

import { config } from "@/config";

export interface AuthResponse {
    access_token: string;
    token_type: string;
    user: {
        id: string;
        email: string;
        username: string;
        full_name?: string;
        avatar_url?: string;
    };
}

export interface HackathonMatch {
    id: string;
    title: string;
    description: string;
    platform: string;
    difficulty: string;
    skills_match: number;
    win_probability: number;
    prize_pool: number;
    matched_skills: string[];
    missing_skills: string[];
    start_date: string;
    end_date: string;
    registration_link: string;
    theme?: string;
}

export interface AgentAnalysisRequest {
    user_id: string;
    skills: string[];
    github_summary?: string;
}

export interface AgentAnalysisResponse {
    status: string;
    user_id: string;
    selected_hackathon?: {
        id: string;
        title: string;
        ps: string;
        difficulty?: string;
        prize_pool?: number;
    };
    win_probability: number;
    judge_critique?: string;
    boilerplate_code?: {
        backend?: string;
        frontend?: string;
        docker_compose?: string;
        requirements?: string;
        package_json?: string;
    };
    timestamp: string;
}

export interface GenerateCodeRequest {
    user_id: string;
    problem_statement: string;
    skills: string[];
}

class APIClient {
    private baseUrl: string;
    private token: string | null = null;

    constructor() {
        this.baseUrl = config.api.baseUrl;
        this.loadToken();
    }

    private loadToken() {
        this.token = localStorage.getItem("access_token");
    }

    private setToken(token: string) {
        this.token = token;
        localStorage.setItem("access_token", token);
    }

    private getHeaders(): Record<string, string> {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        };

        if (this.token) {
            headers["Authorization"] = `Bearer ${this.token}`;
        }

        return headers;
    }

    private async handleResponse<T>(response: Response): Promise<T> {
        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.detail || `HTTP ${response.status}`);
        }

        return response.json();
    }

    // Authentication endpoints
    async register(
        email: string,
        username: string,
        password: string,
        full_name?: string
    ): Promise<AuthResponse> {
        const response = await fetch(`${this.baseUrl}/api/auth/register`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({
                email,
                username,
                password,
                full_name,
            }),
        });

        const data = await this.handleResponse<AuthResponse>(response);
        this.setToken(data.access_token);
        return data;
    }

    async login(email: string, password: string): Promise<AuthResponse> {
        const response = await fetch(`${this.baseUrl}/api/auth/login`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ email, password }),
        });

        const data = await this.handleResponse<AuthResponse>(response);
        this.setToken(data.access_token);
        return data;
    }

    async refreshToken(refresh_token?: string): Promise<AuthResponse> {
        const token = refresh_token || localStorage.getItem("refresh_token");
        const response = await fetch(`${this.baseUrl}/api/auth/refresh`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ refresh_token: token }),
        });

        const data = await this.handleResponse<AuthResponse>(response);
        this.setToken(data.access_token);
        localStorage.setItem("refresh_token", data.access_token);
        return data;
    }

    // Profile endpoints
    async getProfile(userId: string) {
        const response = await fetch(`${this.baseUrl}/api/profile/${userId}`, {
            method: "GET",
            headers: this.getHeaders(),
        });

        return this.handleResponse(response);
    }

    async updateProfile(userId: string, data: Record<string, any>) {
        const response = await fetch(`${this.baseUrl}/api/profile/${userId}`, {
            method: "PATCH",
            headers: this.getHeaders(),
            body: JSON.stringify(data),
        });

        return this.handleResponse(response);
    }

    async syncGitHub(userId: string, githubUsername: string) {
        const response = await fetch(`${this.baseUrl}/api/profile/${userId}/sync-github`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ github_username: githubUsername }),
        });

        return this.handleResponse(response);
    }

    async getProfileStats(userId: string) {
        const response = await fetch(`${this.baseUrl}/api/profile/${userId}/stats`, {
            method: "GET",
            headers: this.getHeaders(),
        });

        return this.handleResponse(response);
    }

    // Matching endpoints
    async getMatches(limit: number = 10) {
        const response = await fetch(
            `${this.baseUrl}/api/matching/recommendations?limit=${limit}`,
            {
                method: "GET",
                headers: this.getHeaders(),
            }
        );

        return this.handleResponse<{ data: HackathonMatch[] }>(response);
    }

    async findMatches(skills: string[], filters?: Record<string, any>) {
        const body: any = { skills };
        if (filters) {
            body.filters = filters;
        }

        const response = await fetch(
            `${this.baseUrl}/api/matching/find`,
            {
                method: "POST",
                headers: this.getHeaders(),
                body: JSON.stringify(body),
            }
        );

        return this.handleResponse<{ data: HackathonMatch[] }>(response);
    }

    async getHackathonDetail(hackathonId: string) {
        const response = await fetch(
            `${this.baseUrl}/api/matching/${hackathonId}`,
            {
                method: "GET",
                headers: this.getHeaders(),
            }
        );

        return this.handleResponse<{ data: HackathonMatch }>(response);
    }

    async updateUserProfile(userId: string, skills: string[], experience: string) {
        const response = await fetch(
            `${this.baseUrl}/api/matching/profile/update`,
            {
                method: "POST",
                headers: this.getHeaders(),
                body: JSON.stringify({ user_id: userId, skills, experience }),
            }
        );

        return this.handleResponse(response);
    }

    async createHackathon(hackathonData: Record<string, any>) {
        const response = await fetch(
            `${this.baseUrl}/api/matching/hackathons`,
            {
                method: "POST",
                headers: this.getHeaders(),
                body: JSON.stringify(hackathonData),
            }
        );

        return this.handleResponse(response);
    }

    async searchHackathons(query: string, filters?: Record<string, any>) {
        const body: any = { query };
        if (filters) {
            body.filters = filters;
        }

        const response = await fetch(
            `${this.baseUrl}/api/matching/hackathons/search`,
            {
                method: "POST",
                headers: this.getHeaders(),
                body: JSON.stringify(body),
            }
        );

        return this.handleResponse(response);
    }

    // Agent endpoints
    async analyzeUser(
        request: AgentAnalysisRequest
    ): Promise<AgentAnalysisResponse> {
        const response = await fetch(`${this.baseUrl}/api/agent/analyze`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify(request),
        });

        return this.handleResponse<AgentAnalysisResponse>(response);
    }

    async getUserMatches(userId: string, limit: number = 5) {
        const response = await fetch(
            `${this.baseUrl}/api/agent/hackathons/${userId}/matches?limit=${limit}`,
            {
                method: "GET",
                headers: this.getHeaders(),
            }
        );

        return this.handleResponse(response);
    }

    async scoreMatch(userId: string, hackathonId: string) {
        const response = await fetch(
            `${this.baseUrl}/api/agent/matches/score`,
            {
                method: "POST",
                headers: this.getHeaders(),
                body: JSON.stringify({ user_id: userId, hackathon_id: hackathonId }),
            }
        );

        return this.handleResponse(response);
    }

    async getHackathonsList(limit?: number, offset?: number) {
        const params = new URLSearchParams();
        if (limit) params.append("limit", String(limit));
        if (offset) params.append("offset", String(offset));

        const response = await fetch(
            `${this.baseUrl}/api/matching/hackathons?${params.toString()}`,
            {
                method: "GET",
                headers: this.getHeaders(),
            }
        );

        return this.handleResponse(response);
    }

    // Code generation endpoints
    async generateCode(request: GenerateCodeRequest) {
        const response = await fetch(`${this.baseUrl}/api/generate/boilerplate`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify(request),
        });

        return this.handleResponse(response);
    }

    async explainCode(code: string, language?: string) {
        const response = await fetch(`${this.baseUrl}/api/generate/explain`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ code, language }),
        });

        return this.handleResponse(response);
    }

    async optimizeCode(code: string, language?: string) {
        const response = await fetch(`${this.baseUrl}/api/generate/optimize`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ code, language }),
        });

        return this.handleResponse(response);
    }

    async refactorCode(code: string, language?: string) {
        const response = await fetch(`${this.baseUrl}/api/generate/refactor`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ code, language }),
        });

        return this.handleResponse(response);
    }

    // Health check
    async healthCheck() {
        const response = await fetch(`${this.baseUrl}/api/health`, {
            method: "GET",
            headers: this.getHeaders(),
        });

        return this.handleResponse(response);
    }

    // WebSocket connections
    connectAgentStream(userId: string, onMessage: (data: any) => void, onError: (error: Event) => void): WebSocket {
        const wsUrl = `${this.baseUrl.replace(/^http/, 'ws')}/ws/agent/${userId}`;
        const ws = new WebSocket(wsUrl);

        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                onMessage(data);
            } catch (e) {
                console.error('Failed to parse WebSocket message:', e);
            }
        };

        ws.onerror = onError;

        return ws;
    }

    connectNotificationStream(userId: string, onMessage: (data: any) => void, onError: (error: Event) => void): WebSocket {
        const wsUrl = `${this.baseUrl.replace(/^http/, 'ws')}/ws/notifications/${userId}`;
        const ws = new WebSocket(wsUrl);

        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                onMessage(data);
            } catch (e) {
                console.error('Failed to parse WebSocket message:', e);
            }
        };

        ws.onerror = onError;

        return ws;
    }

    // Logout
    logout() {
        this.token = null;
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
    }

    isAuthenticated(): boolean {
        return !!this.token;
    }

    getToken(): string | null {
        return this.token;
    }
}

export const apiClient = new APIClient();
