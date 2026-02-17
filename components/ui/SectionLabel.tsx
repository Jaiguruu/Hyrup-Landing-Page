import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex justify-center mb-6 ${className}`}>
      <span className="mono-label text-xs tracking-widest text-gray-500 dark:text-gray-400 uppercase">
        [ {children} ]
      </span>
    </div>
  );
};

export default SectionLabel;