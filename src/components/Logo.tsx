import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
  showTagline = false
}) => {
  const isLight = variant === 'light'; // Light background -> Dark text
  
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Geometric Roofline Icon */}
      <div className={`relative shrink-0 ${iconSizes[size]} flex items-center justify-center`}>
        <svg 
          viewBox="0 0 44 44" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
          aria-hidden="true"
        >
          {/* Subtle structural shield / base */}
          <rect width="44" height="44" rx="10" fill={isLight ? "#071B2D" : "#102F49"} />
          
          {/* Main steep roofline pitch */}
          <path 
            d="M22 9L7 26.5H13L22 15.5L31 26.5H37L22 9Z" 
            fill="#F5C52E" 
          />
          
          {/* Inner roofline / attic truss angle */}
          <path 
            d="M22 17.5L14 26.5H19L22 22.5L25 26.5H30L22 17.5Z" 
            fill={isLight ? "#FFD653" : "#FFFFFF"} 
          />
          
          {/* Baseline foundation */}
          <rect x="15" y="28.5" width="14" height="2.5" rx="1" fill="#F5C52E" />
          
          {/* Precision apex indicator */}
          <circle cx="22" cy="9" r="1.8" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Distinctive Typography Wordmark */}
      <div className="flex flex-col leading-none">
        <div className={`font-heading font-extrabold tracking-tight ${textSizes[size]} ${isLight ? 'text-[#071B2D]' : 'text-white'}`}>
          <span>Bay Area</span>{' '}
          <span className="text-[#F5C52E]">Roof Master</span>
        </div>
        {showTagline && (
          <span className={`text-[10px] tracking-wider uppercase font-semibold mt-0.5 ${isLight ? 'text-[#5D6B78]' : 'text-slate-400'}`}>
            Lic. #1014432 · Nine Bay Area Counties
          </span>
        )}
      </div>
    </div>
  );
};
