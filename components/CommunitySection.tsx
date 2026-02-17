import React from 'react';
import SectionLabel from './ui/SectionLabel';
import { motion } from 'framer-motion';
import { College } from '../types';

const colleges: College[] = [
  { name: "SASTRA University", count: 834, max: 1000 },
  { name: "JIT", count: 676, max: 1000 },
  { name: "PEC", count: 559, max: 1000 },
  { name: "Manipur University", count: 358, max: 1000 },
];

const CommunitySection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Student Community</SectionLabel>

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Join <span className="text-brand">3,154+</span> Students Already On HYRUP
        </h2>

        <p className="text-center text-gray-500 mb-16 max-w-lg mx-auto text-sm">
          Students from colleges across India are already building their future with HYRUP.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 bg-light-card/50 dark:bg-dark-card/30 p-8 md:p-12 border border-gray-300 dark:border-white/5 rounded-sm">
          {/* Colleges List */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold mb-6">Top Active Colleges</h3>
            <div className="space-y-6">
              {colleges.map((college, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="font-mono">{college.name}</span>
                    <span className="text-brand text-xs">{college.count} students</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(college.count / college.max) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-brand rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Stats */}
          <div className="lg:border-l border-gray-300 dark:border-white/10 lg:pl-12 space-y-12">
             <h3 className="text-xl font-bold mb-6">Community Growth</h3>
             
             <div className="space-y-8">
               <div className="border-b border-gray-200 dark:border-white/5 pb-6">
                 <div className="flex items-baseline gap-2">
                   <span className="text-4xl md:text-5xl font-bold text-brand">3,154</span>
                   <span className="text-xs text-brand font-bold bg-brand/10 px-2 py-1 rounded">+12% this month</span>
                 </div>
                 <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-wide">Total Active Students</p>
               </div>

               <div className="border-b border-gray-200 dark:border-white/5 pb-6">
                 <div className="flex items-baseline gap-2">
                   <span className="text-4xl md:text-5xl font-bold text-brand">4</span>
                   <span className="text-sm text-brand font-bold">top colleges</span>
                 </div>
                 <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-wide">Participating Colleges</p>
               </div>

               <div className="border-b border-gray-200 dark:border-white/5 pb-6">
                 <div className="flex items-baseline gap-2">
                   <span className="text-4xl md:text-5xl font-bold text-brand">500+</span>
                   <span className="text-xs text-brand font-bold bg-brand/10 px-2 py-1 rounded">hiring now</span>
                 </div>
                 <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-wide">Partner Companies</p>
               </div>

                <div>
                 <div className="flex items-baseline gap-2">
                   <span className="text-4xl md:text-5xl font-bold text-brand">100%</span>
                   <span className="text-sm text-gray-500">forever free</span>
                 </div>
                 <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-wide">Free For All Students</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;