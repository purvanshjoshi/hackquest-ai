import { LoginBackground } from '../components/LoginBackground';
import { Logo3D } from '../components/Logo3D';
import { useState } from 'react';
import { Github, Chrome } from 'lucide-react';
import { apiClient } from '../services/api';

interface LoginProps {
    onLoginSuccess?: (user: { email: string; username: string; id?: string }) => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        setError('');
        setIsLoading(true);

        try {
            const result = await apiClient.login(email, password);

            const userInfo = {
                email: result.user.email,
                username: result.user.username,
                id: result.user.id
            };
            localStorage.setItem('user', JSON.stringify(userInfo));

            if (onLoginSuccess) {
                onLoginSuccess(userInfo);
            }
        } catch (err) {
            console.error('Login error:', err);
            setError(err instanceof Error ? err.message : 'Invalid email or password');
            setIsLoading(false);
        }
    };

    const handleGitHubLogin = async () => {
        try {
            setIsLoading(true);
            setError('');

            // In production, this would redirect to GitHub OAuth
            // For demo, we'll use a simulated GitHub login
            const result = await apiClient.login(
                `github_${Date.now()}@github.com`,
                'password123'
            );

            const userInfo = {
                email: result.user.email,
                username: result.user.username,
                id: result.user.id
            };
            localStorage.setItem('user', JSON.stringify(userInfo));

            if (onLoginSuccess) {
                onLoginSuccess(userInfo);
            }
        } catch (err) {
            console.error('GitHub login error:', err);
            setError('GitHub login not yet configured. Use email login for now.');
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            setIsLoading(true);
            setError('');

            // In production, this would redirect to Google OAuth
            // For demo, we'll use a simulated Google login
            const result = await apiClient.login(
                `google_${Date.now()}@google.com`,
                'password123'
            );

            const userInfo = {
                email: result.user.email,
                username: result.user.username,
                id: result.user.id
            };
            localStorage.setItem('user', JSON.stringify(userInfo));

            if (onLoginSuccess) {
                onLoginSuccess(userInfo);
            }
        } catch (err) {
            console.error('Google login error:', err);
            setError('Google login not yet configured. Use email login for now.');
            setIsLoading(false);
        }
    };

    return (
        <div className="h-screen w-screen bg-black relative overflow-hidden">
            {/* Black background base */}
            <div className="absolute inset-0 bg-black z-0" />

            {/* Particle background layer */}
            <div className="fixed inset-0 z-10 pointer-events-none">
                <LoginBackground />
            </div>

            {/* Content container - centered */}
            <div className="fixed inset-0 z-20 flex flex-col items-center justify-center px-6">
                {/* 3D Logo - positioned above login card */}
                <div className="mb-8 pointer-events-none">
                    <Logo3D />
                </div>

                {/* Login box */}
                <div className="w-full max-w-md">
                    <div className="bg-white/[0.08] backdrop-blur-lg border border-white/[0.15] rounded-2xl p-8 shadow-2xl">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-black text-white mb-1">HackQuest AI</h1>
                            <p className="text-sm text-gray-400">Find your perfect hackathon match</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/[0.3] focus:bg-white/[0.08] transition-all"
                                />
                            </div>

                            {/* Password Input */}
                            <div>
                                <label htmlFor="password" className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/[0.3] focus:bg-white/[0.08] transition-all"
                                />
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="px-4 py-3 bg-red-500/[0.1] border border-red-500/[0.3] rounded-lg">
                                    <p className="text-sm text-red-400">{error}</p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full px-4 py-3 mt-6 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-none"
                            >
                                {isLoading ? 'Logging in...' : 'Sign In'}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="flex items-center my-6">
                            <div className="flex-1 h-px bg-white/[0.1]" />
                            <span className="px-3 text-xs text-gray-500">OR</span>
                            <div className="flex-1 h-px bg-white/[0.1]" />
                        </div>

                        {/* Social Login Buttons */}
                        <div className="space-y-3">
                            <button
                                type="button"
                                onClick={handleGitHubLogin}
                                disabled={isLoading}
                                className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white font-medium hover:bg-white/[0.08] disabled:bg-white/[0.02] transition-all flex items-center justify-center gap-2"
                            >
                                <Github size={18} />
                                Continue with GitHub
                            </button>
                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                disabled={isLoading}
                                className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white font-medium hover:bg-white/[0.08] disabled:bg-white/[0.02] transition-all flex items-center justify-center gap-2"
                            >
                                <Chrome size={18} />
                                Continue with Google
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="mt-8 text-center text-sm text-gray-400">
                            Demo credentials: test@example.com / password123
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
