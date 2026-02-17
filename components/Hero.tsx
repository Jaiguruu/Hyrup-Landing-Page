import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MoveRight, Star } from 'lucide-react';

const StatBox: React.FC<{ value: string; label: string; delay: number }> = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-light-card/50 dark:bg-dark-card/50 border border-gray-200 dark:border-white/10 p-6 flex flex-col items-center justify-center text-center backdrop-blur-sm hover:border-brand/30 transition-colors"
  >
    <span className="text-3xl md:text-4xl font-bold text-brand mb-1">{value}</span>
    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">{label}</span>
  </motion.div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 opacity-20 dark:opacity-10 animate-spin-slow">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="20" />
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="50" />
        </svg>
      </div>
      <div className="absolute top-40 right-20 opacity-20 dark:opacity-10">
        <Star className="w-16 h-16 text-gray-500" strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 dark:opacity-10 rotate-45">
        <div className="w-12 h-12 border border-gray-500"></div>
        <div className="w-12 h-12 border border-gray-500 -mt-8 ml-4"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-3 py-1 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></div>
          <span className="text-[10px] font-bold text-brand uppercase tracking-wider">Free for Students</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6"
        >
          Get Hired For Your <span className="text-brand inline-block relative">
            Skills
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>,<br className="hidden md:block" /> Not Your Degree
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          The student career launchpad where your abilities matter more than your college name. Connect with mentors, build real skills, and land opportunities that actually fit you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button className="cursor-target w-full sm:w-auto bg-brand hover:bg-brand-hover text-white font-bold py-3 px-8 rounded shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group uppercase text-sm tracking-wide cursor-target">
            Get Started Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="cursor-target w-full sm:w-auto bg-transparent border border-gray-800 dark:border-white hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white font-bold py-3 px-8 rounded shadow-sm hover:shadow-md transition-all uppercase text-sm tracking-wide cursor-target">
            Explore Features
          </button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatBox value="3,154+" label="Students Connected" delay={0.4} />
          <StatBox value="500+" label="Partner Companies" delay={0.5} />
          <StatBox value="2K+" label="Active Jobs" delay={0.6} />
          <StatBox value="100%" label="Free Forever" delay={0.7} />
        </div>
      </div>
    </section>
  );
};

export default Hero;