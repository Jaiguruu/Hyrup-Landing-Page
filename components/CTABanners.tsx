import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTABanners: React.FC = () => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg pb-20 px-6 md:px-12 space-y-20">
      
      {/* Red/Pink Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-gradient-to-r from-[#DFA8A1] to-[#DCA09A] dark:from-brand/10 dark:to-brand/5 dark:border dark:border-brand/20 p-12 md:p-16 text-center rounded-sm shadow-sm"
      >
         <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
           100% Free. Forever.
         </h2>
         <p className="text-gray-800 dark:text-gray-300 mb-8 max-w-lg mx-auto">
           Join 3,154+ students who are already using HYRUP to build their careers. No hidden fees, no premium plans, no credit card required.
         </p>
         <button className="cursor-target bg-brand hover:bg-brand-hover text-white font-bold py-3 px-8 rounded shadow-lg transition-all uppercase text-xs tracking-widest inline-flex items-center gap-2 group">
           Start For Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
         </button>
      </motion.div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Ready To Launch Your <span className="text-brand block md:inline">Career?</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-lg mx-auto">
          Join 3,154+ students who are getting hired for their skills, not their degrees.
        </p>
        
        <button className="cursor-target bg-brand hover:bg-brand-hover text-white font-bold py-4 px-10 rounded shadow-lg transition-all uppercase text-sm tracking-widest inline-flex items-center gap-2 group hover:shadow-brand/40 mb-6">
           Join Hyrup Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-[10px] text-gray-500 dark:text-gray-500 font-mono tracking-tight uppercase">
          No credit card required • 100% free forever • 2 min setup
        </p>
      </div>

    </div>
  );
};

export default CTABanners;