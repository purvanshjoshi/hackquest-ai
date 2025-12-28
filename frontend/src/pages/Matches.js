import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button } from '../components/ui';
import { Trophy, Users, Calendar, Link as LinkIcon } from 'lucide-react';
import { apiClient } from '../services/api';
const Matches = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [filters, setFilters] = useState({
        difficulty: 'all',
        platform: 'all',
    });
    useEffect(() => {
        fetchMatches();
    }, [filters]);
    const fetchMatches = async () => {
        setLoading(true);
        setError('');
        try {
            const filterObj = {};
            if (filters.difficulty !== 'all')
                filterObj.difficulty = filters.difficulty;
            if (filters.platform !== 'all')
                filterObj.platform = filters.platform;
            const response = await apiClient.findMatches([], filterObj);
            setMatches(response.data || []);
        }
        catch (err) {
            console.error('Failed to fetch matches:', err);
            setError(err instanceof Error ? err.message : 'Failed to fetch matches');
        }
        finally {
            setLoading(false);
        }
    };
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
    const getDifficultyColor = (difficulty) => {
        const colors = {
            beginner: 'bg-green-500/20 text-green-300',
            intermediate: 'bg-blue-500/20 text-blue-300',
            advanced: 'bg-orange-500/20 text-orange-300',
            expert: 'bg-red-500/20 text-red-300',
        };
        return colors[difficulty] || colors.intermediate;
    };
    return (_jsx("div", { className: "min-h-screen bg-transparent text-white pt-32 pb-20", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { variants: fadeInUp, className: "mb-12", children: [_jsx("h1", { className: "text-5xl md:text-6xl font-black mb-4", children: "Hackathon Matches" }), _jsx("p", { className: "text-gray-400 text-lg", children: "Browse all active hackathons and find your perfect match" })] }), _jsxs(motion.div, { variants: fadeInUp, className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-8", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold mb-2", children: "Difficulty Level" }), _jsxs("select", { value: filters.difficulty, onChange: (e) => setFilters({ ...filters, difficulty: e.target.value }), className: "w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500", children: [_jsx("option", { value: "all", children: "All Levels" }), _jsx("option", { value: "beginner", children: "Beginner" }), _jsx("option", { value: "intermediate", children: "Intermediate" }), _jsx("option", { value: "advanced", children: "Advanced" }), _jsx("option", { value: "expert", children: "Expert" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold mb-2", children: "Platform" }), _jsxs("select", { value: filters.platform, onChange: (e) => setFilters({ ...filters, platform: e.target.value }), className: "w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500", children: [_jsx("option", { value: "all", children: "All Platforms" }), _jsx("option", { value: "devpost", children: "DevPost" }), _jsx("option", { value: "unstop", children: "Unstop" }), _jsx("option", { value: "hackerearth", children: "HackerEarth" }), _jsx("option", { value: "devfolio", children: "DevFolio" })] })] })] }), error && (_jsx(motion.div, { variants: fadeInUp, className: "mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400", children: error })), _jsx(motion.div, { variants: fadeInUp, children: loading ? (_jsxs("div", { className: "text-center py-12", children: [_jsx("div", { className: "inline-block animate-spin", children: _jsx(Trophy, { className: "w-8 h-8 text-blue-400" }) }), _jsx("p", { className: "text-gray-400 mt-4", children: "Loading matches..." })] })) : matches.length === 0 ? (_jsx(Card, { className: "bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-12 text-center rounded-2xl", children: _jsx("p", { className: "text-gray-400 text-lg", children: "No hackathons found matching your filters" }) })) : (_jsx("div", { className: "space-y-4", children: matches.map((match) => (_jsxs(motion.div, { variants: fadeInUp, whileHover: { scale: 1.01 }, className: "bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 cursor-pointer transition-all", onClick: () => setSelectedMatch(selectedMatch?.id === match.id ? null : match), children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [_jsxs("div", { className: "md:col-span-2", children: [_jsx("p", { className: "text-blue-400 text-sm font-semibold mb-1", children: match.platform?.toUpperCase() || 'PLATFORM' }), _jsx("h3", { className: "text-xl font-bold mb-2", children: match.title }), _jsxs("p", { className: "text-gray-400 text-sm", children: [match.description?.substring(0, 100) || 'No description', "..."] })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "bg-white/5 rounded-lg p-3", children: [_jsx("p", { className: "text-gray-400 text-xs mb-1", children: "Skill Match" }), _jsxs("p", { className: "text-lg font-bold text-green-400", children: [((match.skills_match || 0) * 100).toFixed(0), "%"] })] }), _jsxs("div", { className: "bg-white/5 rounded-lg p-3", children: [_jsx("p", { className: "text-gray-400 text-xs mb-1", children: "Win Probability" }), _jsxs("p", { className: "text-lg font-bold text-blue-400", children: [((match.win_probability || 0) * 100).toFixed(0), "%"] })] })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx("span", { className: `px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(match.difficulty || 'intermediate')}`, children: match.difficulty || 'intermediate' }), _jsxs("span", { className: "px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-semibold", children: ["$", ((match.prize_pool || 0) / 1000).toFixed(1), "K"] })] }), _jsx(Button, { className: "w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold", children: "View Details" })] })] }), _jsxs("div", { className: "mt-4 pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "w-4 h-4" }), _jsx("span", { children: match.end_date ? new Date(match.end_date).toLocaleDateString() : 'TBA' })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Users, { className: "w-4 h-4" }), _jsxs("span", { children: [(match.matched_skills || []).length, " matched skills"] })] }), match.registration_link && (_jsxs("a", { href: match.registration_link, target: "_blank", rel: "noopener noreferrer", onClick: (e) => e.stopPropagation(), className: "flex items-center gap-2 text-blue-400 hover:text-blue-300", children: [_jsx(LinkIcon, { className: "w-4 h-4" }), _jsx("span", { children: "Register" })] }))] }), selectedMatch?.id === match.id && (_jsxs(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, className: "mt-6 pt-6 border-t border-white/10", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-3", children: "Matched Skills" }), _jsx("div", { className: "flex flex-wrap gap-2", children: (match.matched_skills || []).map((skill) => (_jsxs("span", { className: "px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs", children: ["\u2713 ", skill] }, skill))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-3", children: "Skills to Learn" }), _jsx("div", { className: "flex flex-wrap gap-2", children: (match.missing_skills || []).slice(0, 5).map((skill) => (_jsxs("span", { className: "px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs", children: ["\u25CB ", skill] }, skill))) })] })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx(Button, { className: "flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg", children: "Generate Code" }), _jsx(Button, { onClick: () => match.registration_link && window.open(match.registration_link, '_blank'), className: "flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg", children: "Register Now" })] })] }))] }, match.id))) })) })] }) }));
};
export default Matches;
