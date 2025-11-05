'use client';

import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const TimelineSection = () => {

  return (
    <section 
      className="w-full py-8 md:py-10 relative overflow-hidden"
      style={{
        background: 'linear-gradient(312.53deg, #EE5B4C -18.91%, #FFFFFF 121.57%)'
      }}
    >
      <div className="container mx-auto py-10">
        {/* Dark CTA Card */}
        <div 
          className="relative rounded-md sm:rounded-lg py-10 overflow-hidden shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #1E071E 50%, #350602 100%)'
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/Bg.png"
              alt="Background Pattern"
              fill
              className="object-fill"
              quality={100}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 py-8 text-center">
            {/* Main Heading */}
            <h2 
              className="text-3xl sm:text-5xl font-medium mb-8 sm:mb-10 leading-tight"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              <span 
                style={{ 
                  background: 'linear-gradient(180deg, #631A13 0%, #EE594C 50%, #631A13 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Ready To
              </span>
              <br />
              <span className="text-white font-bold sm:text-6xl text-4xl">Accelerate?</span>
            </h2>

            {/* Application Details */}
            <p 
              className="text-base sm:text-lg md:text-lg mb-6 sm:mb-8"
              style={{ 
                fontFamily: 'var(--font-poppins), sans-serif',
                color: '#EE5B4C'
              }}
            >
              Applications Close On 13 November 2025
            </p>

            {/* Contact Information */}
            <p 
              className="text-sm sm:text-base md:text-lg mb-10 sm:mb-12"
              style={{ 
                fontFamily: 'var(--font-poppins), sans-serif',
                color: '#fff'
              }}
            >
              For queries, reach us at:{' '}
              <a 
                href="mailto:support@name.com"
                className="underline hover:text-[#EE5B4C] transition-colors duration-300"
                style={{ color: '#fff' }}
              >
                support@name.com
              </a>
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                size="lg"
                effect="expandIcon"
                icon={ArrowRight}
                iconPlacement="right"
                className="text-black text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border-none"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
                  fontFamily: 'var(--font-poppins), sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.4)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                APPLY NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

