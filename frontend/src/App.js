import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Layout } from "@/components/Layout";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { LoadingOverlay } from "@/components/LoadingOverlay";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import CodeGenerator from "./pages/CodeGenerator";
import AuthGithubCallback from "./pages/AuthGithubCallback";
import AuthGoogleCallback from "./pages/AuthGoogleCallback";
function App() {
    const { mounted } = useTheme();
    const [showLoading, setShowLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [currentPage, setCurrentPage] = useState("dashboard");
    useEffect(() => {
        // Show loading overlay for 3 seconds on initial mount
        if (mounted) {
            const timer = setTimeout(() => setShowLoading(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [mounted]);
    if (!mounted) {
        return (_jsx("div", { className: "min-h-screen bg-black flex items-center justify-center", children: _jsx("div", { className: "animate-pulse text-white", children: "Loading..." }) }));
    }
    const handleLoginSuccess = (userData) => {
        console.log('App: Login successful, updating auth state with:', userData);
        setUser(userData);
        setIsAuthenticated(true);
        console.log('App: Auth state updated, isAuthenticated should now be true');
    };
    const handleLogout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };
    // Create a separate component to handle OAuth routes
    const AppRoutes = () => {
        const location = useLocation();
        // OAuth callback routes should be accessible even without authentication
        if (location.pathname === '/auth/github/callback') {
            return _jsx(AuthGithubCallback, {});
        }
        if (location.pathname === '/auth/google/callback') {
            return _jsx(AuthGoogleCallback, {});
        }
        // If not authenticated, show login
        if (!isAuthenticated) {
            return _jsx(Login, { onLoginSuccess: handleLoginSuccess });
        }
        // If authenticated, show main app
        return (_jsxs("div", { className: "dark relative w-screen h-screen overflow-hidden", children: [_jsx("div", { className: "fixed inset-0 z-0 pointer-events-none", style: { width: "100vw", height: "100vh" }, children: _jsx(AnimatedBackground, {}) }), _jsxs("div", { className: "relative z-10 w-full h-full overflow-auto bg-black/20 backdrop-blur-sm", children: [_jsx(LoadingOverlay, { isVisible: showLoading }), _jsx(Layout, { user: user, onLogout: handleLogout, children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/explore", element: _jsx(Home, {}) }), _jsx(Route, { path: "/matches", element: _jsx(Matches, {}) }), _jsx(Route, { path: "/generate", element: _jsx(CodeGenerator, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/dashboard" }) })] }) })] })] }));
    };
    return (_jsx(ErrorBoundary, { children: _jsx(Router, { children: _jsx(AppRoutes, {}) }) }));
}
export default App;
