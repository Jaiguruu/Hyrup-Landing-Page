import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const FixForwardSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#D8D8D4] dark:bg-[#0A0A0A] relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex justify-center mb-6">
           <span className="bg-brand/20 text-brand text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
             Hyrup Presents
           </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
          <span className="text-brand">FIX FORWARD</span> Challenge
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
          Healthcare's broken? Fix it. Education system outdated? Rebuild it. Climate crisis? Solve it. See something broken in your world? Don't just complain — fix it and pass it forward.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="bg-light-bg dark:bg-dark-card border border-gray-300 dark:border-white/10 p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6">The Meaning Behind FixForward</h3>
            <div className="space-y-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                There's a saying — when someone helps you, you don't just thank them. You help someone else in need. The cycle continues.
              </p>
              <p>
                FixForward is built on the same idea. You see something broken in society? Fix it. Not just for yourself, but for the next generation. Forward the fix.
              </p>
              <p>
                We're looking for problem-solvers who see issues in their daily lives and have the courage to create solutions that ripple forward.
              </p>
            </div>
            
            <div className="mt-8 space-y-3">
              {[
                "Build tech that actually matters",
                "Vibe with industry mentors who've been there",
                "Win cash + flex your project everywhere",
                "Network with builders, not just coders"
              ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <span className="text-brand">→</span>
                   <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 font-mono">{item}</span>
                 </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-light-bg dark:bg-dark-card border border-gray-300 dark:border-white/10 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Join?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Stop building todo apps. Start solving actual problems. Your skills deserve a better stage. This is where your code stops being homework and starts being a portfolio piece recruiters actually want to see.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-gray-200 dark:bg-white/5 rounded-sm">
                  <div className="w-10 h-10 flex items-center justify-center bg-brand/10 text-brand rounded">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Registration Closes</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Last Date: 25th February</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4 p-4 bg-gray-200 dark:bg-white/5 rounded-sm">
                   <div className="w-10 h-10 flex items-center justify-center bg-brand/10 text-brand rounded">
                    <span className="font-bold">₹3L</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Prize Pool</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Cash, awards, jobs & internships</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="cursor-target w-full bg-brand hover:bg-brand-hover text-white font-bold py-4 px-6 rounded shadow-lg uppercase text-sm tracking-widest flex items-center justify-center gap-2 group transition-all">
              Register For Fix Forward <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixForwardSection;