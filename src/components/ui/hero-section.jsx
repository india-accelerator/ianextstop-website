'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// Arrow top-right icon component
const ArrowRightIcon = ({ className, ...props }) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 max-w-5xl mx-auto" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
        {/* Logo */}
        <div className="mb-8 sm:mb-6 flex flex-col items-center">
          <Image 
            src="/ia-program-logo.png" 
            alt="IA Next Stop" 
            width={300} 
            height={200} 
            className="object-contain"
            priority
          />
        </div>
        {/* Location Text */}
        <p className="text-white text-base sm:text-lg md:text-xl mb-8" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
          Chandigarh , Panchkula , Mohali
        </p>

        {/* IA Lands in Tricity */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 leading-tight uppercase" style={{ 
          fontFamily: 'var(--font-poppins), sans-serif',
          background: 'linear-gradient(180deg, #631A13 17.55%, #EE594C 50%, #631A13 83.42%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          IA LANDS IN TRICITY
        </h1>


        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            size="lg"
            effect="expandIcon"
            icon={ArrowRightIcon}
            iconPlacement="right"
            className="text-white text-base sm:text-lg px-10 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border-none"
            style={{ 
              background: 'linear-gradient(90deg, #C82516 0%, #EE594C 51.44%, #C82516 100%)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
              fontFamily: 'var(--font-poppins), sans-serif'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(200, 37, 22, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)';
            }}
          >
            APPLY NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

