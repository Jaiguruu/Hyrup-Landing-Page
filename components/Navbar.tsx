import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="
  fixed top-0 left-0 right-0 z-50
  transition-all duration-300
  py-4 px-6 md:px-12
  backdrop-blur-md
  bg-white/80 dark:bg-black
  border-b border-gray-200 dark:border-white/10
">

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group cursor-target">
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Simple Logo Graphic */}
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-brand group-hover:scale-110 transition-transform">
              <path d="M4 4h4v8h8V4h4v16h-4v-8H8v8H4V4z" fill="currentColor" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-black dark:text-white">
            HYRUP
          </span>

        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="cursor-target bg-brand hover:bg-brand-hover text-white text-xs font-bold px-4 py-2 rounded shadow-sm hover:shadow-md transition-all uppercase tracking-wide cursor-target">
            Fix Forward
          </button>
          <button className="cursor-target border border-gray-400 dark:border-gray-600 text-xs font-bold px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-all uppercase tracking-wide cursor-target">
            Careers
          </button>
          <button className="cursor-target bg-brand hover:bg-brand-hover text-white text-xs font-bold px-4 py-2 rounded shadow-sm hover:shadow-md transition-all uppercase tracking-wide cursor-target">
            Join Now
          </button>

          <button
            onClick={toggleTheme}
            className="cursor-target ml-2 p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-target"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="cursor-target p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="
  md:hidden
  absolute top-full left-0 right-0
  bg-light-bg dark:bg-gray-900
  border-b border-gray-200 dark:border-gray-700
  p-4
  flex flex-col gap-4
  shadow-xl
">

  {/* Fix Forward */}
  <button
    className="
      cursor-target
      bg-brand text-white
      dark:bg-white dark:text-gray-900
      font-bold px-4 py-3 rounded w-full uppercase
      transition-colors
    "
  >
    Fix Forward
  </button>

  {/* Careers */}
  <button
    className="
      cursor-target
      border border-gray-400 text-gray-900
      dark:border-gray-500 dark:text-white
      dark:bg-transparent
      font-bold px-4 py-3 rounded w-full uppercase
      transition-colors
    "
  >
    Careers
  </button>

  {/* Join Now */}
  <button
    className="
      cursor-target
      bg-brand text-white
      dark:bg-white dark:text-gray-900
      font-bold px-4 py-3 rounded w-full uppercase
      transition-colors
    "
  >
    Join Now
  </button>

</div>

      )}
    </nav>
  );
};

export default Navbar;