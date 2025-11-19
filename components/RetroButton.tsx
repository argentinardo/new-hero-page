import React from 'react';

interface RetroButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'danger' | 'metal';
  className?: string;
}

export const RetroButton: React.FC<RetroButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = ''
}) => {
  let bgClass = '';
  let borderClass = '';
  let textClass = 'text-white';

  switch (variant) {
    case 'danger':
      bgClass = 'bg-slug-rust hover:bg-red-600';
      borderClass = 'border-red-900';
      break;
    case 'metal':
      bgClass = 'bg-slug-metal hover:bg-gray-500';
      borderClass = 'border-gray-800';
      break;
    case 'primary':
    default:
      bgClass = 'bg-slug-green hover:bg-green-600';
      borderClass = 'border-green-900';
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`
        relative font-retro text-xs sm:text-sm px-6 py-3 uppercase tracking-widest
        transition-transform active:scale-95
        ${bgClass} ${textClass} ${className}
      `}
      style={{
        boxShadow: `
          inset 2px 2px 0px rgba(255, 255, 255, 0.3),
          inset -2px -2px 0px rgba(0, 0, 0, 0.3),
          2px 2px 0px #000,
          4px 4px 0px rgba(0,0,0,0.5)
        `
      }}
    >
      {children}
    </button>
  );
};