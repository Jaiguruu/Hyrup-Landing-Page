import React from 'react';
import SectionLabel from './ui/SectionLabel';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>About Hyrup</SectionLabel>
        
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          We're Fixing The <span className="text-brand">Broken System</span>
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
          Built by students, for students. We're tired of LinkedIn DMs that go nowhere, job applications that disappear into black holes, and a system that values college names over actual skills.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-light-card dark:bg-dark-card border border-gray-300 dark:border-white/5 p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">The Problem</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Your Resume Gets Ignored</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Cold emails, endless scrolling, zero responses. The traditional job hunt is broken. Your tier-3 college name shouldn't decide your career.
            </p>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gray-200 dark:bg-white/5 rounded-full blur-3xl group-hover:bg-gray-300 dark:group-hover:bg-white/10 transition-colors"></div>
          </motion.div>

          {/* Solution Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-brand/5 dark:bg-brand/5 border border-brand/20 p-8 md:p-12 relative overflow-hidden group"
          >
             <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-brand rounded-full"></div>
              <span className="text-xs font-bold text-brand tracking-widest uppercase">The Solution</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Skills Over Degrees</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              HYRUP matches you with opportunities based on what you can actually do. Real mentors. Real skills. Real jobs. No gatekeeping.
            </p>
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand/10 rounded-full blur-3xl group-hover:bg-brand/20 transition-colors"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;