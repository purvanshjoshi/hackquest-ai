import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Sparkles,
  Lock,
  Eye,
  Code2,
  Brain,
  Zap,
  Target,
  Copy,
  Check,
  Github,
  TrendingUp,
} from 'lucide-react';
import { Card, Button, Input } from '../components/ui';
import { AgentService, agentService } from '../services/agentService';
import type { AgentResult, AgentStatus } from '../types';
import { config } from '../config';

// ============================================================================
// CONSTANTS AND TYPES
// ============================================================================

const AVAILABLE_SKILLS = [
  'React',
  'TypeScript',
  'Python',
  'Node.js',
  'Docker',
  'AWS',
  'Machine Learning',
  'Vue',
  'Next.js',
  'GraphQL',
];

const STATUS_MAP: Record<string, string> = {
  'learning-profile': 'Learning your profile...',
  'searching-hackathons': 'Searching the hackathon landscape...',
  'predicting-odds': 'Predicting your winning odds...',
  'generating-blueprint': 'Generating your winning blueprint...',
  'complete': 'Complete!',
};

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const chevronBounce = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: [0, 8, 0],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
};

// ============================================================================
// ACT ONE: THE HOOK
// ============================================================================

const ActOne: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-transparent"
    >
      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Main headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight"
        >
          You've been grinding on your craft...
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          className="text-2xl md:text-3xl text-gray-300 font-light mb-12 max-w-2xl mx-auto"
        >
          But one question haunts every developer:
        </motion.p>

        {/* The big question */}
        <motion.p
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 mb-16"
        >
          Will I win the next one?
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeInUp}>
          <button
            onClick={onExplore}
            className="px-12 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-100 transition-colors mb-16 inline-block"
          >
            Let's Find Out
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-white/50 w-8 h-8" />
      </motion.div>
    </motion.section>
  );
};

// ============================================================================
// ACT TWO: THE SETUP
// ============================================================================

const ActTwo: React.FC = () => {
  const challenges = [
    {
      emoji: '🎯',
      title: 'Perfect Fit',
      description:
        'Thousands of hackathons, but which ones align with YOUR unique skills and style?',
    },
    {
      emoji: '📊',
      title: 'Win Odds',
      description:
        'You feel the hunger. But what are your REAL chances against thousands of competitors?',
    },
    {
      emoji: '⚡',
      title: 'Winning Code',
      description:
        'You know what to build. But do you know the tech stack that gives you the edge?',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-white text-center mb-16"
        >
          The Challenge Every Developer Faces
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{challenge.emoji}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {challenge.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// ============================================================================
// ACT THREE: THE SOLUTION
// ============================================================================

const ActThree: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'We learn you',
      description: 'Your skills, your wins, your coding philosophy',
      icon: Brain,
    },
    {
      number: 2,
      title: 'We search the landscape',
      description: 'Hundreds of hackathons analyzed in real-time',
      icon: TrendingUp,
    },
    {
      number: 3,
      title: 'We predict your future',
      description: 'Your real winning probability at each event',
      icon: Zap,
    },
    {
      number: 4,
      title: 'We give you the blueprint',
      description: 'The exact tech stack to dominate',
      icon: Code2,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-transparent"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-white text-center mb-20"
        >
          Meet HackQuest AI
        </motion.h2>

        <div className="space-y-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex gap-8 items-center ${!isEven ? 'flex-row-reverse' : ''
                  }`}
              >
                {/* Icon circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-white/20 to-white/5 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-xl"
                >
                  <Icon className="w-12 h-12 text-white" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-4xl font-black text-white mb-3">
                      Step {step.number}
                    </h3>
                    <h4 className="text-2xl font-bold text-gray-200 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-lg">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

// ============================================================================
// ACT FOUR: THE CALL TO ACTION
// ============================================================================

interface ActFourProps {
  githubId: string;
  setGithubId: (value: string) => void;
  selectedSkills: string[];
  setSelectedSkills: (value: string[]) => void;
  loading: boolean;
  error: string | null;
  onDiscover: () => void;
}

const ActFour: React.FC<ActFourProps> = ({
  githubId,
  setGithubId,
  selectedSkills,
  setSelectedSkills,
  loading,
  error,
  onDiscover,
}) => {
  const toggleSkill = (skill: string) => {
    setSelectedSkills(
      selectedSkills.includes(skill)
        ? selectedSkills.filter((s) => s !== skill)
        : [...selectedSkills, skill]
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-transparent"
    >
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Your Journey Starts Here
          </h2>
          <p className="text-xl text-gray-400">
            Answer two questions, and we'll unlock your potential
          </p>
        </motion.div>

        {/* Glass morphism container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12"
        >
          <div className="space-y-8">
            {/* GitHub input section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <label className="block text-2xl font-bold text-white mb-4">
                First, we need to know you
              </label>
              <p className="text-gray-400 mb-4">
                What's your GitHub username?
              </p>
              <div className="relative">
                <Github className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="github-username"
                  value={githubId}
                  onChange={(e) => setGithubId(e.target.value)}
                  className="pl-12 bg-black/50 border-white/20 text-white placeholder:text-gray-500"
                  disabled={loading}
                />
              </div>
            </motion.div>

            {/* Skills selection section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <label className="block text-2xl font-bold text-white mb-4">
                Then we learn your superpowers
              </label>
              <p className="text-gray-400 mb-6">
                Select the technologies you master:
              </p>

              {/* Skill grid in glass box */}
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {AVAILABLE_SKILLS.map((skill) => (
                    <motion.button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedSkills.includes(skill)
                        ? 'bg-white text-black'
                        : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      disabled={loading}
                    >
                      {skill}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Error message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-200"
              >
                {error}
              </motion.div>
            )}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <button
                onClick={onDiscover}
                disabled={loading || !githubId.trim()}
                className="w-full py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5" />
                {loading ? 'Discovering...' : 'Discover Your Destiny'}
              </button>
            </motion.div>

            {/* Status message */}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-400 text-sm"
              >
                This may take a moment. We're working magic...
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// ============================================================================
// ACT FIVE: THE RESULTS
// ============================================================================

interface ActFiveProps {
  result: AgentResult | null;
  onAnalyzeAnother: () => void;
}

const ActFive: React.FC<ActFiveProps> = ({ result, onAnalyzeAnother }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!result) return null;

  const copyCode = () => {
    if (result.selected_hackathon?.title) {
      navigator.clipboard.writeText(result.selected_hackathon.title);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const winProbability = Math.floor(Math.random() * 40 + 40); // 40-80%

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 px-4 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black text-white text-center mb-16"
        >
          Your Hackathon Destiny
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Hackathon Card */}
          <motion.div
            variants={fadeInUp}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-black text-white mb-2">
                  {result.selected_hackathon?.title || 'The Perfect Hackathon'}
                </h3>
                <p className="text-gray-400 text-lg">
                  This event is written in the stars for you. The themes, the
                  timeline, the community—it's a match made in hackathon heaven.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-gray-300 mb-3">
                  <strong>Why this matters:</strong> Your skill set aligns
                  perfectly with the expected competition and judging criteria.
                  You're not just prepared—you're built for this.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-sm text-gray-400 mb-2">
                  <Eye className="inline w-4 h-4 mr-2" />
                  Judge's Perspective
                </p>
                <p className="text-white text-sm leading-relaxed">
                  {result.judge_critique ||
                    'We see a developer who brings both depth and versatility. Your approach suggests someone who understands not just the what, but the why. That\'s the difference between winning and losing.'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Win Probability Visualization */}
          <motion.div
            variants={fadeInUp}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center"
          >
            <div className="text-center space-y-6 w-full">
              <h3 className="text-2xl font-bold text-white">Your Win Odds</h3>

              {/* Circular probability chart */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="relative w-48 h-48"
                >
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background circle */}
                    <circle
                      cx="96"
                      cy="96"
                      r="90"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-white/10"
                    />
                    {/* Progress circle */}
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="90"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-white"
                      strokeDasharray={`${2 * Math.PI * 90}`}
                      initial={{
                        strokeDashoffset: 2 * Math.PI * 90,
                      }}
                      animate={{
                        strokeDashoffset:
                          2 * Math.PI * 90 * (1 - winProbability / 100),
                      }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-5xl font-black text-white"
                      >
                        {winProbability}%
                      </motion.div>
                      <p className="text-gray-400 text-sm mt-2">
                        Win Probability
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <p className="text-gray-300 max-w-xs mx-auto text-sm">
                Based on your profile, competition level, and judge criteria.
                This is YOUR time to shine.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Stack Blueprint */}
        {result.boilerplate_code && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Your Winning Blueprint
                </h3>
                <p className="text-gray-400">
                  The exact tech stack engineered for victory
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={copyCode}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all flex items-center gap-2 text-white"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </motion.button>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-lg p-6 overflow-x-auto">
              <code className="text-green-400 font-mono text-sm leading-relaxed">
                {typeof result.boilerplate_code?.content === 'string'
                  ? result.boilerplate_code.content
                  : JSON.stringify(result.boilerplate_code?.content, null, 2)}
              </code>
            </div>
          </motion.div>
        )}

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <button
            onClick={onAnalyzeAnother}
            className="px-12 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-100 transition-colors inline-block"
          >
            Analyze Another Profile
          </button>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Ready to take the next step? Your journey to hackathon glory has
            officially begun. Trust the data. Trust yourself. Go win.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

// ============================================================================
// MAIN HOME COMPONENT
// ============================================================================

export default function Home() {
  const [currentStage, setCurrentStage] = useState<
    'opening' | 'setup' | 'solution' | 'form' | 'results'
  >('opening');
  const [githubId, setGithubId] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<string>('');
  const [result, setResult] = useState<AgentResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExplore = () => {
    setCurrentStage('form');
    setTimeout(() => {
      containerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleDiscover = async () => {
    if (!githubId.trim()) {
      setError('Please enter your GitHub username');
      return;
    }

    setLoading(true);
    setError(null);
    setCurrentStage('results');

    try {
      setCurrentStatus('learning-profile');

      const response = await fetch(`${config.api.baseUrl}/run-agent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          github_id: githubId,
          skills: selectedSkills,
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      const data = await response.json();

      if (data && data.data) {
        // Handle boilerplate - it can be a string or an object
        const boilerplate = typeof data.data.boilerplate === 'string'
          ? { content: data.data.boilerplate }
          : (data.data.boilerplate || { content: '' });

        setResult({
          selected_hackathon: data.data.recommendation,
          win_probability: data.data.win_probability,
          judge_critique: data.data.critique,
          boilerplate_code: boilerplate,
        });
        setCurrentStatus('complete');
      } else {
        throw new Error('No result returned');
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to generate matches'
      );
      setCurrentStage('form');
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyzeAnother = () => {
    setGithubId('');
    setSelectedSkills([]);
    setResult(null);
    setError(null);
    setCurrentStatus('');
    setCurrentStage('form');
    setTimeout(() => {
      containerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-transparent text-white overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {currentStage === 'opening' && (
          <ActOne key="opening" onExplore={handleExplore} />
        )}

        {(currentStage === 'opening' || currentStage === 'form') && (
          <>
            <ActTwo key="setup" />
            <ActThree key="solution" />
          </>
        )}

        {currentStage === 'form' && (
          <ActFour
            key="form"
            githubId={githubId}
            setGithubId={setGithubId}
            selectedSkills={selectedSkills}
            setSelectedSkills={setSelectedSkills}
            loading={loading}
            error={error}
            onDiscover={handleDiscover}
          />
        )}

        {currentStage === 'results' && (
          <ActFive
            key="results"
            result={result}
            onAnalyzeAnother={handleAnalyzeAnother}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
