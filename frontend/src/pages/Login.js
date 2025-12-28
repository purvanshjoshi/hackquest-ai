import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LoginBackground } from '../components/LoginBackground';
import { Logo3D } from '../components/Logo3D';
import { useState } from 'react';
import { Github, Chrome } from 'lucide-react';
import { apiClient } from '../services/api';
import { config } from '../config';
export default function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }
        setError('');
        setIsLoading(true);
        try {
            const result = await apiClient.login(email, password);
            localStorage.setItem('user', JSON.stringify(result.user));
            if (onLoginSuccess) {
                onLoginSuccess({
                    email: result.user.email,
                    username: result.user.username,
                    id: result.user.id
                });
            }
        }
        catch (err) {
            console.error('Login error:', err);
            setError(err instanceof Error ? err.message : 'Invalid email or password');
            setIsLoading(false);
        }
    };
    const handleGitHubLogin = async () => {
        try {
            setIsLoading(true);
            setError('');
            // Get OAuth authorization URL from backend using config
            const baseUrl = config.api.baseUrl;
            const response = await fetch(`${baseUrl}/api/auth/oauth/authorize/github`);
            const data = await response.json();
            if (data.authorization_url) {
                // Redirect to GitHub OAuth
                window.location.href = data.authorization_url;
            }
            else {
                throw new Error('Failed to get authorization URL');
            }
        }
        catch (err) {
            console.error('GitHub login error:', err);
            setError('Failed to initiate GitHub login. Please try again.');
            setIsLoading(false);
        }
    };
    const handleGoogleLogin = async () => {
        try {
            setIsLoading(true);
            setError('');
            // Get OAuth authorization URL from backend using config
            const baseUrl = config.api.baseUrl;
            const response = await fetch(`${baseUrl}/api/auth/oauth/authorize/google`);
            const data = await response.json();
            if (data.authorization_url) {
                // Redirect to Google OAuth
                window.location.href = data.authorization_url;
            }
            else {
                throw new Error('Failed to get authorization URL');
            }
        }
        catch (err) {
            console.error('Google login error:', err);
            setError('Failed to initiate Google login. Please try again.');
            setIsLoading(false);
        }
    };
    return (_jsxs("div", { className: "h-screen w-screen bg-black relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-black z-0" }), _jsx("div", { className: "fixed inset-0 z-10 pointer-events-none", children: _jsx(LoginBackground, {}) }), _jsxs("div", { className: "fixed inset-0 z-20 flex flex-col items-center justify-center px-6", children: [_jsx("div", { className: "mb-8 pointer-events-none", children: _jsx(Logo3D, {}) }), _jsx("div", { className: "w-full max-w-md", children: _jsxs("div", { className: "bg-white/[0.08] backdrop-blur-lg border border-white/[0.15] rounded-2xl p-8 shadow-2xl", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h1", { className: "text-3xl font-black text-white mb-1", children: "HackQuest AI" }), _jsx("p", { className: "text-sm text-gray-400", children: "Find your perfect hackathon match" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider", children: "Email Address" }), _jsx("input", { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "name@example.com", className: "w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/[0.3] focus:bg-white/[0.08] transition-all" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider", children: "Password" }), _jsx("input", { id: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", className: "w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/[0.3] focus:bg-white/[0.08] transition-all" })] }), error && (_jsx("div", { className: "px-4 py-3 bg-red-500/[0.1] border border-red-500/[0.3] rounded-lg", children: _jsx("p", { className: "text-sm text-red-400", children: error }) })), _jsx("button", { type: "submit", disabled: isLoading, className: "w-full px-4 py-3 mt-6 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-none", children: isLoading ? 'Logging in...' : 'Sign In' })] }), _jsxs("div", { className: "flex items-center my-6", children: [_jsx("div", { className: "flex-1 h-px bg-white/[0.1]" }), _jsx("span", { className: "px-3 text-xs text-gray-500", children: "OR" }), _jsx("div", { className: "flex-1 h-px bg-white/[0.1]" })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs("button", { type: "button", onClick: handleGitHubLogin, disabled: isLoading, className: "w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white font-medium hover:bg-white/[0.08] disabled:bg-white/[0.02] transition-all flex items-center justify-center gap-2", children: [_jsx(Github, { size: 18 }), "Continue with GitHub"] }), _jsxs("button", { type: "button", onClick: handleGoogleLogin, disabled: isLoading, className: "w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white font-medium hover:bg-white/[0.08] disabled:bg-white/[0.02] transition-all flex items-center justify-center gap-2", children: [_jsx(Chrome, { size: 18 }), "Continue with Google"] })] }), _jsx("div", { className: "mt-8 text-center text-sm text-gray-400", children: "Demo credentials: test@example.com / password123" })] }) })] })] }));
}
