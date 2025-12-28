import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Logo3D } from '../components/Logo3D';

export default function AuthGoogleCallback() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleCallback = async () => {
            try {
                const code = searchParams.get('code');
                const errorParam = searchParams.get('error');

                if (errorParam) {
                    throw new Error(`Google OAuth error: ${errorParam}`);
                }

                if (!code) {
                    throw new Error('No authorization code received from Google');
                }

                setIsLoading(true);

                // Exchange authorization code for tokens
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
                const response = await fetch(`${apiUrl}/api/auth/oauth/callback/google?code=${code}`, {
                    method: 'POST',
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.detail || 'OAuth authentication failed');
                }

                const data = await response.json();

                // Store tokens and user info
                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('refresh_token', data.refresh_token);
                localStorage.setItem('user', JSON.stringify(data.user));

                // Redirect to dashboard
                navigate('/dashboard');
            } catch (err) {
                console.error('Google OAuth callback error:', err);
                setError(err instanceof Error ? err.message : 'Authentication failed');
                setIsLoading(false);
            }
        };

        handleCallback();
    }, [searchParams, navigate]);

    if (error) {
        return (
            <div className="h-screen w-screen bg-black relative overflow-hidden flex items-center justify-center">
                <div className="max-w-md w-full mx-4 bg-white/[0.08] backdrop-blur-lg border border-white/[0.15] rounded-2xl p-8 shadow-2xl text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Authentication Error</h1>
                    <p className="text-red-400 mb-6">{error}</p>
                    <button
                        onClick={() => navigate('/login')}
                        className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all"
                    >
                        Back to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen w-screen bg-black relative overflow-hidden flex items-center justify-center">
            <div className="max-w-md w-full mx-4 bg-white/[0.08] backdrop-blur-lg border border-white/[0.15] rounded-2xl p-8 shadow-2xl text-center">
                <div className="mb-8 pointer-events-none">
                    <Logo3D />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">Completing Authentication</h1>
                <p className="text-gray-400">Please wait while we authenticate you with Google...</p>
                <div className="mt-6 flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"></div>
                </div>
            </div>
        </div>
    );
}
