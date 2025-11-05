'use client';

import * as React from 'react';

export const AboutSection = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-3 lg:px-3 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Heading and Question */}
          <div>
            {/* IA LANDS IN TRICITY Heading */}
            <div 
              className="text-base sm:text-lg md:text-lg font-medium uppercase mb-6 sm:mb-8"
              style={{ 
                fontFamily: 'var(--font-poppins), sans-serif',
                color: '#EE594C'
              }}
            >
              IA LANDS IN TRICITY
            </div>
            
            {/* Are You Ready to Step In? Question */}
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight"
              style={{ 
                fontFamily: 'var(--font-poppins), sans-serif',
                color: '#1E071E'
              }}
            >
              Are You Ready<br />
              to Step In?
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className="flex flex-col gap-6">
            <p 
              className="text-base sm:text-lg md:text-lg text-black leading-relaxed"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              Not every big idea starts in metros. Some start right here—in Tricity's hostels, co-working corners and late-night chai break chats. IA's Next Stop brings early to growth-stage founders from Chandigarh, Mohali and Panchkula to pitch live on stage and showcase what they have been building silently.
            </p>
            <p 
              className="text-base sm:text-lg md:text-xl text-black font-medium leading-relaxed"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              Your idea deserves its moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

