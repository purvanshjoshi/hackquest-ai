import React, { useState, useEffect } from "react";
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

interface User {
  id?: string;
  email: string;
  username: string;
  full_name?: string;
  avatar_url?: string;
}

function App() {
  const { mounted } = useTheme();
  const [showLoading, setShowLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState("dashboard");

  useEffect(() => {
    // Show loading overlay for 3 seconds on initial mount
    if (mounted) {
      const timer = setTimeout(() => setShowLoading(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-white">Loading...</div>
      </div>
    );
  }

  const handleLoginSuccess = (userData: User) => {
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
      return <AuthGithubCallback />;
    }
    if (location.pathname === '/auth/google/callback') {
      return <AuthGoogleCallback />;
    }

    // If not authenticated, show login
    if (!isAuthenticated) {
      return <Login onLoginSuccess={handleLoginSuccess} />;
    }

    // If authenticated, show main app
    return (
      <div className="dark relative w-screen h-screen overflow-hidden">
        {/* WebGL Background */}
        <div className="fixed inset-0 z-0 pointer-events-none" style={{ width: "100vw", height: "100vh" }}>
          <AnimatedBackground />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full overflow-auto bg-black/20 backdrop-blur-sm">
          <LoadingOverlay isVisible={showLoading} />
          <Layout user={user} onLogout={handleLogout}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/explore" element={<Home />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/generate" element={<CodeGenerator />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </Layout>
        </div>
      </div>
    );
  };

  return (
    <ErrorBoundary>
      <Router>
        <AppRoutes />
      </Router>
    </ErrorBoundary>
  );
}

export default App;