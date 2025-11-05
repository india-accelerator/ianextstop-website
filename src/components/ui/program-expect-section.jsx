'use client';

import * as React from 'react';
import { 
  Mic, 
  User, 
  Handshake, 
  Network, 
  Megaphone, 
  Target, 
  Layers, 
  GraduationCap 
} from 'lucide-react';

const IconBox = ({ icon: Icon, title, description }) => {
  return (
    <div 
      className="flex flex-col items-center p-6 sm:p-5"
      style={{ 
        background: 'linear-gradient(129.07deg, #FFFFFF 18.75%, #F7CBC7 108.92%)'
      }}
    >
      {/* Circular Icon */}
      <div 
        className="mb-4 p-4 rounded-full flex items-center justify-center"
        style={{ 
          background: 'linear-gradient(39.47deg, #4D2420 5.65%, #BF483C 51.32%, #782821 103.43%)'
        }}
      >
        <Icon 
          className="w-6 h-6 sm:w-7 sm:h-7"
          style={{ color: '#FFFFFF' }}
        />
      </div>
      
      {/* Title */}
      <h3 
        className="text-lg sm:text-xl font-normal mb-3 text-center text-black"
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
      >
        {title}
      </h3>
      
      {/* Description */}
      <p 
        className="text-sm sm:text-sm text-center leading-relaxed"
        style={{ 
          fontFamily: 'var(--font-poppins), sans-serif',
          color: '#782821'
        }}
      >
        {description}
      </p>
    </div>
  );
};

export const ProgramExpectSection = () => {
  const features = [
    {
      icon: Mic,
      title: 'LIVE Pitching',
      description: 'Present your startup to top VCs, mentors, and partners.',
    },
    {
      icon: User,
      title: 'Mentor Access',
      description: 'Personalized guidance from domain experts.',
    },
    {
      icon: Handshake,
      title: 'Investor connect',
      description: 'Get connected with top institutional and angel investors.',
    },
    {
      icon: Network,
      title: 'Founder Network',
      description: 'Join a high-impact peer group of change-makers.',
    },
    {
      icon: Megaphone,
      title: 'Brand Credibility',
      description: 'Boost visibility with program-wide PR coverage.',
    },
    {
      icon: Target,
      title: 'Live Pitch & Demo',
      description: 'Continued mentorship and partnership access.',
    },
    {
      icon: Layers,
      title: 'Growth Amplifier (IA ecosystem)',
      description: 'Unlock funding and pilot opportunities.',
    },
    {
      icon: GraduationCap,
      title: 'Exclusive Masterclasses',
      description: 'Dive deep into growth, scaling, and tech strategy.',
    },
  ];

  return (
    <section 
      className="w-full py-16 sm:py-20 md:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #1E071E 50%, #782821 100%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div 
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ 
              fontFamily: 'var(--font-poppins), sans-serif',
              color: '#fff'
            }}
          >
            ABOUT THE PROGRAM
          </div>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          >
            What To Expect
          </h2>
        </div>

        {/* Icon Boxes Grid - 2 rows, 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <IconBox
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

