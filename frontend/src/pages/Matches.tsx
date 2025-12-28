import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button } from '../components/ui';
import { Trophy, Users, Calendar, Link as LinkIcon } from 'lucide-react';
import { apiClient, HackathonMatch } from '../services/api';

const Matches: React.FC = () => {
    const [matches, setMatches] = useState<HackathonMatch[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedMatch, setSelectedMatch] = useState<HackathonMatch | null>(null);
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
            const filterObj: Record<string, string> = {};
            if (filters.difficulty !== 'all') filterObj.difficulty = filters.difficulty;
            if (filters.platform !== 'all') filterObj.platform = filters.platform;

            const response = await apiClient.findMatches([], filterObj);
            setMatches(response.data || []);
        } catch (err) {
            console.error('Failed to fetch matches:', err);
            setError(err instanceof Error ? err.message : 'Failed to fetch matches');
        } finally {
            setLoading(false);
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const getDifficultyColor = (difficulty: string) => {
        const colors: Record<string, string> = {
            beginner: 'bg-green-500/20 text-green-300',
            intermediate: 'bg-blue-500/20 text-blue-300',
            advanced: 'bg-orange-500/20 text-orange-300',
            expert: 'bg-red-500/20 text-red-300',
        };
        return colors[difficulty] || colors.intermediate;
    };

    return (
        <div className="min-h-screen bg-transparent text-white pt-32 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Header */}
                <motion.div variants={fadeInUp} className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-black mb-4">Hackathon Matches</h1>
                    <p className="text-gray-400 text-lg">
                        Browse all active hackathons and find your perfect match
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div>
                        <label className="block text-sm font-semibold mb-2">Difficulty Level</label>
                        <select
                            value={filters.difficulty}
                            onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        >
                            <option value="all">All Levels</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="expert">Expert</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2">Platform</label>
                        <select
                            value={filters.platform}
                            onChange={(e) => setFilters({ ...filters, platform: e.target.value })}
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        >
                            <option value="all">All Platforms</option>
                            <option value="devpost">DevPost</option>
                            <option value="unstop">Unstop</option>
                            <option value="hackerearth">HackerEarth</option>
                            <option value="devfolio">DevFolio</option>
                        </select>
                    </div>
                </motion.div>

                {/* Error Message */}
                {error && (
                    <motion.div variants={fadeInUp} className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                        {error}
                    </motion.div>
                )}

                {/* Matches List */}
                <motion.div variants={fadeInUp}>
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin">
                                <Trophy className="w-8 h-8 text-blue-400" />
                            </div>
                            <p className="text-gray-400 mt-4">Loading matches...</p>
                        </div>
                    ) : matches.length === 0 ? (
                        <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-12 text-center rounded-2xl">
                            <p className="text-gray-400 text-lg">No hackathons found matching your filters</p>
                        </Card>
                    ) : (
                        <div className="space-y-4">
                            {matches.map((match) => (
                                <motion.div
                                    key={match.id}
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.01 }}
                                    className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 cursor-pointer transition-all"
                                    onClick={() => setSelectedMatch(selectedMatch?.id === match.id ? null : match)}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                        {/* Title & Platform */}
                                        <div className="md:col-span-2">
                                            <p className="text-blue-400 text-sm font-semibold mb-1">{match.platform?.toUpperCase() || 'PLATFORM'}</p>
                                            <h3 className="text-xl font-bold mb-2">{match.title}</h3>
                                            <p className="text-gray-400 text-sm">{match.description?.substring(0, 100) || 'No description'}...</p>
                                        </div>

                                        {/* Metrics */}
                                        <div className="space-y-3">
                                            <div className="bg-white/5 rounded-lg p-3">
                                                <p className="text-gray-400 text-xs mb-1">Skill Match</p>
                                                <p className="text-lg font-bold text-green-400">{((match.skills_match || 0) * 100).toFixed(0)}%</p>
                                            </div>
                                            <div className="bg-white/5 rounded-lg p-3">
                                                <p className="text-gray-400 text-xs mb-1">Win Probability</p>
                                                <p className="text-lg font-bold text-blue-400">{((match.win_probability || 0) * 100).toFixed(0)}%</p>
                                            </div>
                                        </div>

                                        {/* Tags & Actions */}
                                        <div className="space-y-3">
                                            <div className="flex flex-wrap gap-2">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(match.difficulty || 'intermediate')}`}>
                                                    {match.difficulty || 'intermediate'}
                                                </span>
                                                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-semibold">
                                                    ${((match.prize_pool || 0) / 1000).toFixed(1)}K
                                                </span>
                                            </div>

                                            <Button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold">
                                                View Details
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Bottom Info */}
                                    <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{match.end_date ? new Date(match.end_date).toLocaleDateString() : 'TBA'}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            <span>{(match.matched_skills || []).length} matched skills</span>
                                        </div>
                                        {match.registration_link && (
                                            <a
                                                href={match.registration_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                                            >
                                                <LinkIcon className="w-4 h-4" />
                                                <span>Register</span>
                                            </a>
                                        )}
                                    </div>

                                    {/* Expanded Details */}
                                    {selectedMatch?.id === match.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="mt-6 pt-6 border-t border-white/10"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                <div>
                                                    <h4 className="font-semibold mb-3">Matched Skills</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {(match.matched_skills || []).map((skill) => (
                                                            <span key={skill} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                                                                ✓ {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-3">Skills to Learn</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {(match.missing_skills || []).slice(0, 5).map((skill) => (
                                                            <span key={skill} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">
                                                                ○ {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-3">
                                                <Button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
                                                    Generate Code
                                                </Button>
                                                <Button
                                                    onClick={() => match.registration_link && window.open(match.registration_link, '_blank')}
                                                    className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg"
                                                >
                                                    Register Now
                                                </Button>
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Matches;
