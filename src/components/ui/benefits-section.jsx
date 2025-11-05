'use client';

import * as React from 'react';
import { Search, Star, Handshake, Layers, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BenefitCard = ({ icon: Icon, title, description, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group relative p-6 sm:p-8 transition-all duration-300 cursor-pointer"
      style={{
        background: 'linear-gradient(324.12deg, #F7CBC7 -7.78%, #FFFFFF 99.7%)',
        animationDelay: `${index * 100}ms`,
        opacity: 0,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 200)}
    >
      {/* Hover effect - slight scale and shadow */}
      <div 
        className={`absolute inset-0 rounded-lg transition-all duration-300 ${
          isHovered ? 'shadow-2xl scale-[1.02]' : 'shadow-md scale-100'
        }`}
        style={{
          background: 'linear-gradient(324.12deg, #F7CBC7 -7.78%, #FFFFFF 99.7%)',
          zIndex: -1
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Circular Icon Container */}
        <div 
          className={`mb-4 p-4 rounded-full flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          style={{
            background: 'linear-gradient(39.47deg, #4D2420 5.65%, #BF483C 51.32%, #782821 103.43%)'
          }}
        >
          <Icon 
            className="w-6 h-6 sm:w-7 sm:h-7 text-white"
          />
        </div>

        {/* Card Title */}
        <h3 
          className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-[#222] group-hover:text-[#000] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        >
          {title}
        </h3>

        {/* Card Description */}
        <p 
          className="text-sm sm:text-base text-[#E55B4D] font-light leading-relaxed group-hover:text-[#D44A3D] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Search,
      title: 'Startup Discovery',
      description: 'Get discovered by corporates, investors & innovation hubs.',
    },
    {
      icon: Star,
      title: 'Market Expansion',
      description: 'Gain recognition through media & ecosystem coverage.',
    },
    {
      icon: Handshake,
      title: 'Investor Connect',
      description: 'Exclusive investor matchmaking sessions.',
    },
    {
      icon: Layers,
      title: 'Cross-Border Growth',
      description: 'Partner with top institutions, labs & incubators.',
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
        className="w-full py-16 sm:py-20 md:py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, #000410 0%, #350602 100%)'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div 
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ 
                fontFamily: 'var(--font-poppins), sans-serif',
                color: '#E55B4D'
              }}
            >
              THE BENEFITS
            </div>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              Gateway to Global Markets
            </h2>
            <p 
              className="text-base sm:text-md md:text-md text-white/90 font-light max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              Pathway to international expansion with programs, partnerships and bridges that help founders scale exceptionally.
            </p>
          </div>

          {/* Benefit Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                index={index}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              effect="expandIcon"
              icon={ArrowRight}
              iconPlacement="right"
              className="text-white text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border-none"
              style={{ 
                background: 'linear-gradient(90deg, #C82516 0%, #EE594C 51.44%, #C82516 100%)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
                fontFamily: 'var(--font-poppins), sans-serif'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(200, 37, 22, 0.5)';
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

        {/* Decorative gradient overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(229, 91, 77, 0.1) 0%, transparent 70%)',
          }}
        />
      </section>
    </>
  );
};

