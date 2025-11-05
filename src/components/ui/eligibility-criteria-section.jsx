'use client';

import * as React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CriteriaItem = ({ number, title, description, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="group relative py-4 sm:py-6 md:py-8 border-b border-white/20 transition-all duration-300 cursor-pointer"
      style={{
        animationDelay: `${index * 100}ms`,
        opacity: 0,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 200)}
    >
      {/* Mobile Layout - Stacked */}
      <div className="flex flex-col sm:hidden gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Number */}
            <div 
              className="text-xl font-light text-white/60 group-hover:text-white transition-all duration-300"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              {number}
            </div>
            {/* Title */}
            <div 
              className="text-lg font-semibold text-white"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              {title}
            </div>
          </div>
          {/* Arrow Icon - Mobile */}
          <div className="shrink-0">
            <div 
              className={`p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300 ${
                isHovered ? 'scale-110 rotate-45' : 'scale-100 rotate-0'
              }`}
            >
              <ArrowUpRight 
                className="w-4 h-4 text-white"
              />
            </div>
          </div>
        </div>
        {/* Description - Mobile */}
        <div 
          className="text-sm text-white/90 font-light group-hover:text-white transition-all duration-300 pl-8"
          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        >
          {description}
        </div>
      </div>

      {/* Desktop Layout - Horizontal */}
      <div className="hidden sm:flex items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Number */}
        <div 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/60 group-hover:text-white transition-all duration-300 shrink-0"
          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        >
          {number}
        </div>

        {/* Title */}
        <div 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white shrink-0 sm:min-w-[200px] md:min-w-[250px] group-hover:translate-x-2 transition-transform duration-300"
          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        >
          {title}
        </div>

        {/* Description */}
        <div 
          className="flex-1 text-sm sm:text-base md:text-lg text-white/90 font-light group-hover:text-white transition-all duration-300"
          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        >
          {description}
        </div>

        {/* Arrow Icon */}
        <div className="shrink-0">
          <div 
            className={`p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300 ${
              isHovered ? 'scale-110 rotate-45' : 'scale-100 rotate-0'
            }`}
          >
            <ArrowUpRight 
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
            />
          </div>
        </div>
      </div>

      {/* Animated underline on hover */}
      <div 
        className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ease-out ${
          isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      />
    </div>
  );
};

export const EligibilityCriteriaSection = () => {
  const criteria = [
    {
      number: '01',
      title: 'Incorporated',
      description: 'In India (year if we want to specify)',
    },
    {
      number: '02',
      title: 'Product Stage',
      description: 'MVP',
    },
    {
      number: '03',
      title: 'Previous Funding',
      description: 'Not more than XX Cr.',
    },
    {
      number: '04',
      title: 'USP',
      description: 'Innovative approach / IP / proprietary tech they can demonstrate or showcase',
    },
    {
      number: '05',
      title: 'Founding Team Commitment',
      description: 'Full-time founder(s)',
    },
    {
      number: '06',
      title: 'Revenue',
      description: 'Not mandatory, but traction preferred',
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <section 
        className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #E65B4E 0%, #922A20 100%)'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div 
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 text-white"
              style={{ 
                fontFamily: 'var(--font-poppins), sans-serif'
              }}
            >
              PROGRAM HIGHLIGHTS
            </div>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-4 text-white px-2"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              Eligibility Criteria
            </h2>
          </div>

          {/* Criteria List */}
          <div className="max-w-6xl mx-auto px-2 sm:px-0">
            {criteria.map((item, index) => (
              <CriteriaItem
                key={index}
                number={item.number}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
        />
      </section>
    </>
  );
};

