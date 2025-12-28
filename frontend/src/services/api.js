/**
 * API Service - Centralized API communication layer
 */
import { config } from "@/config";
class APIClient {
    baseUrl;
    token = null;
    constructor() {
        this.baseUrl = config.api.baseUrl;
        this.loadToken();
    }
    loadToken() {
        this.token = localStorage.getItem("access_token");
    }
    setToken(token) {
        this.token = token;
        localStorage.setItem("access_token", token);
    }
    getHeaders() {
        const headers = {
            "Content-Type": "application/json",
        };
        if (this.token) {
            headers["Authorization"] = `Bearer ${this.token}`;
        }
        return headers;
    }
    async handleResponse(response) {
        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.detail || `HTTP ${response.status}`);
        }
        return response.json();
    }
    // Authentication endpoints
    async register(email, username, password, full_name) {
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
        const data = await this.handleResponse(response);
        this.setToken(data.access_token);
        return data;
    }
    async login(email, password) {
        const response = await fetch(`${this.baseUrl}/api/auth/login`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ email, password }),
        });
        const data = await this.handleResponse(response);
        this.setToken(data.access_token);
        return data;
    }
    async refreshToken(refresh_token) {
        const token = refresh_token || localStorage.getItem("refresh_token");
        const response = await fetch(`${this.baseUrl}/api/auth/refresh`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ refresh_token: token }),
        });
        const data = await this.handleResponse(response);
        this.setToken(data.access_token);
        localStorage.setItem("refresh_token", data.access_token);
        return data;
    }
    // Profile endpoints
    async getProfile(userId) {
        const response = await fetch(`${this.baseUrl}/api/profile/${userId}`, {
            method: "GET",
            headers: this.getHeaders(),
        });
        return this.handleResponse(response);
    }
    async updateProfile(userId, data) {
        const response = await fetch(`${this.baseUrl}/api/profile/${userId}`, {
            method: "PATCH",
            headers: this.getHeaders(),
            body: JSON.stringify(data),
        });
        return this.handleResponse(response);
    }
    async syncGitHub(userId, githubUsername) {
        const response = await fetch(`${this.baseUrl}/api/profile/${userId}/sync-github`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ github_username: githubUsername }),
        });
        return this.handleResponse(response);
    }
    async getProfileStats(userId) {
        const response = await fetch(`${this.baseUrl}/api/profile/${userId}/stats`, {
            method: "GET",
            headers: this.getHeaders(),
        });
        return this.handleResponse(response);
    }
    // Matching endpoints
    async getMatches(limit = 10) {
        const response = await fetch(`${this.baseUrl}/api/matching/recommendations?limit=${limit}`, {
            method: "GET",
            headers: this.getHeaders(),
        });
        return this.handleResponse(response);
    }
    async findMatches(skills, filters) {
        const body = { skills };
        if (filters) {
            body.filters = filters;
        }
        const response = await fetch(`${this.baseUrl}/api/matching/find`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify(body),
        });
        return this.handleResponse(response);
    }
    async getHackathonDetail(hackathonId) {
        const response = await fetch(`${this.baseUrl}/api/matching/${hackathonId}`, {
            method: "GET",
            headers: this.getHeaders(),
        });
        return this.handleResponse(response);
    }
    async updateUserProfile(userId, skills, experience) {
        const response = await fetch(`${this.baseUrl}/api/matching/profile/update`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ user_id: userId, skills, experience }),
        });
        return this.handleResponse(response);
    }
    async createHackathon(hackathonData) {
        const response = await fetch(`${this.baseUrl}/api/matching/hackathons`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify(hackathonData),
        });
        return this.handleResponse(response);
    }
    async searchHackathons(query, filters) {
        const body = { query };
        if (filters) {
            body.filters = filters;
        }
        const response = await fetch(`${this.baseUrl}/api/matching/hackathons/search`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify(body),
        });
        return this.handleResponse(response);
    }
    // Agent endpoints
    async analyzeUser(request) {
        const response = await fetch(`${this.baseUrl}/api/agent/analyze`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify(request),
        });
        return this.handleResponse(response);
    }
    async getUserMatches(userId, limit = 5) {
        const response = await fetch(`${this.baseUrl}/api/agent/hackathons/${userId}/matches?limit=${limit}`, {
            method: "GET",
            headers: this.getHeaders(),
        });
        return this.handleResponse(response);
    }
    async scoreMatch(userId, hackathonId) {
        const response = await fetch(`${this.baseUrl}/api/agent/matches/score`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ user_id: userId, hackathon_id: hackathonId }),
        });
        return this.handleResponse(response);
    }
    async getHackathonsList(limit, offset) {
        const params = new URLSearchParams();
        if (limit)
            params.append("limit", String(limit));
        if (offset)
            params.append("offset", String(offset));
        const response = await fetch(`${this.baseUrl}/api/matching/hackathons?${params.toString()}`, {
            method: "GET",
            headers: this.getHeaders(),
        });
        return this.handleResponse(response);
    }
    // Code generation endpoints
    async generateCode(request) {
        const response = await fetch(`${this.baseUrl}/api/generate/boilerplate`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify(request),
        });
        return this.handleResponse(response);
    }
    async explainCode(code, language) {
        const response = await fetch(`${this.baseUrl}/api/generate/explain`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ code, language }),
        });
        return this.handleResponse(response);
    }
    async optimizeCode(code, language) {
        const response = await fetch(`${this.baseUrl}/api/generate/optimize`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ code, language }),
        });
        return this.handleResponse(response);
    }
    async refactorCode(code, language) {
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
    connectAgentStream(userId, onMessage, onError) {
        const wsUrl = `${this.baseUrl.replace(/^http/, 'ws')}/ws/agent/${userId}`;
        const ws = new WebSocket(wsUrl);
        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                onMessage(data);
            }
            catch (e) {
                console.error('Failed to parse WebSocket message:', e);
            }
        };
        ws.onerror = onError;
        return ws;
    }
    connectNotificationStream(userId, onMessage, onError) {
        const wsUrl = `${this.baseUrl.replace(/^http/, 'ws')}/ws/notifications/${userId}`;
        const ws = new WebSocket(wsUrl);
        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                onMessage(data);
            }
            catch (e) {
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
    isAuthenticated() {
        return !!this.token;
    }
    getToken() {
        return this.token;
    }
}
export const apiClient = new APIClient();
