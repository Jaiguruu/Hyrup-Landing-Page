import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-bg dark:bg-dark-bg pt-20 pb-10 px-6 md:px-12 border-t border-gray-300 dark:border-white/10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
             <div className="relative w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand">
                  <path d="M4 4h4v8h8V4h4v16h-4v-8H8v8H4V4z" fill="currentColor"/>
                </svg>
              </div>
            <span className="text-lg font-bold">HYRUP</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed max-w-xs">
            Built by students, for students. Get hired for your skills, not your degree.
          </p>
          <div className="flex gap-4 text-gray-600 dark:text-gray-400">
            <Instagram size={18} className="hover:text-brand cursor-pointer transition-colors" />
            <Linkedin size={18} className="hover:text-brand cursor-pointer transition-colors" />
            <Twitter size={18} className="hover:text-brand cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Product</h4>
          <ul className="space-y-3 text-gray-500 dark:text-gray-400 text-xs font-mono">
            <li className="hover:text-brand cursor-pointer transition-colors">For Students</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Features</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Find Jobs</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Find Mentors</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Company</h4>
          <ul className="space-y-3 text-gray-500 dark:text-gray-400 text-xs font-mono">
            <li className="hover:text-brand cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Fix Forward</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Support</h4>
          <ul className="space-y-3 text-gray-500 dark:text-gray-400 text-xs font-mono">
            <li className="hover:text-brand cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Help Center</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Privacy Policy</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-300 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-500 font-mono">
        <p>&copy; 2024 HYRUP. All rights reserved.</p>
        <p className="mt-2 md:mt-0 flex items-center gap-1">
          Careers · Made with <span className="text-brand">♥</span> by students, for students. · Admin
        </p>
      </div>
    </footer>
  );
};

export default Footer;