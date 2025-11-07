'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Handshake, Layers, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const BenefitCard = ({ icon: Icon, title, description, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6,
        delay: index * 0.1
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: index * 0.1 + 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1 + 0.3
      }
    }
  };

  return (
    <motion.div
      className="group relative p-6 sm:p-8 transition-all duration-300 cursor-pointer h-full flex flex-col"
      style={{
        background: 'linear-gradient(324.12deg, #F7CBC7 -7.78%, #FFFFFF 99.7%)'
      }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
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
      
      <div className="relative z-10 flex flex-col items-center text-center flex-1 justify-center">
        {/* Circular Icon Container */}
        <motion.div 
          className={`mb-4 p-4 rounded-full flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          style={{
            background: 'linear-gradient(39.47deg, #4D2420 5.65%, #BF483C 51.32%, #782821 103.43%)'
          }}
          variants={iconVariants}
        >
          <Icon 
            className="w-6 h-6 sm:w-7 sm:h-7 text-white"
          />
        </motion.div>

        {/* Card Title */}
        <motion.h3 
          className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-[#222] group-hover:text-[#000] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          variants={textVariants}
        >
          {title}
        </motion.h3>

        {/* Card Description */}
        <motion.p 
          className="text-sm sm:text-base text-[#E55B4D] font-light leading-relaxed group-hover:text-[#D44A3D] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          variants={textVariants}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <motion.section 
      id="why-bigshift"
      className="w-full py-16 sm:py-20 md:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, #000410 0%, #350602 100%)'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={headerVariants}
        >
          <motion.div 
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ 
              fontFamily: 'var(--font-poppins), sans-serif',
              color: '#E55B4D'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            THE BENEFITS
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Gateway to Global Markets
          </motion.h2>
          <motion.p 
            className="text-base sm:text-md md:text-md text-white/90 font-light max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Pathway to international expansion with programs, partnerships and bridges that help founders scale exceptionally.
          </motion.p>
        </motion.div>

        {/* Benefit Cards Grid - Horizontal scroll on mobile, grid on larger screens */}
        <div className="overflow-x-auto sm:overflow-visible -mx-4 sm:mx-0 px-4 sm:px-0 mb-12">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 min-w-max sm:min-w-0 sm:items-stretch">
            {benefits.map((benefit, index) => (
              <div key={index} className="shrink-0 w-[280px] sm:w-auto sm:flex sm:flex-col">
                <BenefitCard
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* World Map Section */}
        <motion.div 
          className="mb-12 sm:mb-16 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-6xl mx-auto px-2 sm:px-0">
            {/* World Map Image with Overlays */}
            <div className="relative w-full scale-110 sm:scale-100 origin-center">
              <img 
                src="/map-world-black-dots.png" 
                alt="World Map" 
                className="w-full h-auto rounded-lg"
                style={{ filter: 'brightness(0.7) contrast(1.1)' }}
              />
              
              {/* SVG Overlay for markers and labels */}
              <svg 
                viewBox="0 0 1200 600" 
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <style>{`
                  .mobile-markers { display: block; }
                  .desktop-markers { display: none; }
                  .mobile-labels { display: block; }
                  .desktop-labels { display: none; }
                  @media (min-width: 640px) {
                    .mobile-markers { display: none; }
                    .desktop-markers { display: block; }
                    .mobile-labels { display: none; }
                    .desktop-labels { display: block; }
                  }
                `}</style>
                <defs>
                  {/* Animated Beam Gradients */}
                  <linearGradient id="beam1" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E55B4D" stopOpacity="0">
                      <animate attributeName="offset" values="-0.5;1.5" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="10%" stopColor="#E55B4D" stopOpacity="1">
                      <animate attributeName="offset" values="-0.4;1.6" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#FF8A7A" stopOpacity="1">
                      <animate attributeName="offset" values="0;2" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#E55B4D" stopOpacity="0">
                      <animate attributeName="offset" values="0.5;2.5" dur="3s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  
                  <linearGradient id="beam2" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E55B4D" stopOpacity="0">
                      <animate attributeName="offset" values="-0.5;1.5" dur="3.5s" begin="0.5s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="10%" stopColor="#E55B4D" stopOpacity="1">
                      <animate attributeName="offset" values="-0.4;1.6" dur="3.5s" begin="0.5s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#FF8A7A" stopOpacity="1">
                      <animate attributeName="offset" values="0;2" dur="3.5s" begin="0.5s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#E55B4D" stopOpacity="0">
                      <animate attributeName="offset" values="0.5;2.5" dur="3.5s" begin="0.5s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  
                  <linearGradient id="beam3" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E55B4D" stopOpacity="0">
                      <animate attributeName="offset" values="-0.5;1.5" dur="4s" begin="1s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="10%" stopColor="#E55B4D" stopOpacity="1">
                      <animate attributeName="offset" values="-0.4;1.6" dur="4s" begin="1s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#FF8A7A" stopOpacity="1">
                      <animate attributeName="offset" values="0;2" dur="4s" begin="1s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#E55B4D" stopOpacity="0">
                      <animate attributeName="offset" values="0.5;2.5" dur="4s" begin="1s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  
                  <linearGradient id="beam4" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E55B4D" stopOpacity="0">
                      <animate attributeName="offset" values="-0.5;1.5" dur="3.2s" begin="1.5s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="10%" stopColor="#E55B4D" stopOpacity="1">
                      <animate attributeName="offset" values="-0.4;1.6" dur="3.2s" begin="1.5s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#FF8A7A" stopOpacity="1">
                      <animate attributeName="offset" values="0;2" dur="3.2s" begin="1.5s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#E55B4D" stopOpacity="0">
                      <animate attributeName="offset" values="0.5;2.5" dur="3.2s" begin="1.5s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  
                  <linearGradient id="beam5" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E55B4D" stopOpacity="0">
                      <animate attributeName="offset" values="-0.5;1.5" dur="3.8s" begin="2s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="10%" stopColor="#E55B4D" stopOpacity="1">
                      <animate attributeName="offset" values="-0.4;1.6" dur="3.8s" begin="2s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#FF8A7A" stopOpacity="1">
                      <animate attributeName="offset" values="0;2" dur="3.8s" begin="2s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#E55B4D" stopOpacity="0">
                      <animate attributeName="offset" values="0.5;2.5" dur="3.8s" begin="2s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                </defs>
                
                {/* Base Connection Lines (static) - Mobile */}
                <g stroke="#E55B4D" strokeWidth="2" fill="none" opacity="0.2" className="mobile-markers">
                  <path d="M820,250 Q530,200 240,190" />
                  <path d="M820,250 Q700,195 580,140" />
                  <path d="M820,250 Q755,245 690,240" />
                  <path d="M820,250 Q772,250 725,250" />
                  <path d="M820,250 Q910,215 1000,180" />
                  <path d="M820,250 Q905,335 990,420" />
                </g>
                
                {/* Animated Beam Lines - Mobile */}
                <g strokeWidth="3" fill="none" strokeLinecap="round" className="mobile-markers">
                  <path d="M820,250 Q530,200 240,190" stroke="url(#beam1)" />
                  <path d="M820,250 Q700,195 580,140" stroke="url(#beam2)" />
                  <path d="M820,250 Q755,245 690,240" stroke="url(#beam3)" />
                  <path d="M820,250 Q772,250 725,250" stroke="url(#beam4)" />
                  <path d="M820,250 Q910,215 1000,180" stroke="url(#beam5)" />
                  <path d="M820,250 Q905,335 990,420" stroke="url(#beam1)" />
                </g>
                
                {/* Base Connection Lines (static) - Desktop */}
                <g stroke="#E55B4D" strokeWidth="2" fill="none" opacity="0.2" className="desktop-markers">
                  <path d="M795,370 Q537,310 280,250" />
                  <path d="M795,370 Q702,305 610,240" />
                  <path d="M795,370 Q722,332 650,295" />
                  <path d="M795,370 Q742,345 690,320" />
                  <path d="M795,370 Q872,335 950,300" />
                  <path d="M795,370 Q872,425 950,480" />
                </g>
                
                {/* Animated Beam Lines - Desktop */}
                <g strokeWidth="3" fill="none" strokeLinecap="round" className="desktop-markers">
                  <path d="M795,370 Q537,310 280,250" stroke="url(#beam1)" />
                  <path d="M795,370 Q702,305 610,240" stroke="url(#beam2)" />
                  <path d="M795,370 Q722,332 650,295" stroke="url(#beam3)" />
                  <path d="M795,370 Q742,345 690,320" stroke="url(#beam4)" />
                  <path d="M795,370 Q872,335 950,300" stroke="url(#beam5)" />
                  <path d="M795,370 Q872,425 950,480" stroke="url(#beam1)" />
                </g>
                
                {/* Country Markers - Mobile (larger) */}
                <g className="mobile-markers">
                  {/* USA */}
                  <circle cx="240" cy="190" r="10" fill="#E55B4D" />
                  <circle cx="240" cy="190" r="14" fill="#E55B4D" opacity="0.3">
                    <animate attributeName="r" values="14;20;14" dur="2s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Germany */}
                  <circle cx="580" cy="140" r="10" fill="#E55B4D" />
                  <circle cx="580" cy="140" r="14" fill="#E55B4D" opacity="0.3">
                    <animate attributeName="r" values="14;20;14" dur="2s" begin="0.2s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Saudi Arabia */}
                  <circle cx="690" cy="240" r="10" fill="#E55B4D" />
                  <circle cx="690" cy="240" r="14" fill="#E55B4D" opacity="0.3">
                    <animate attributeName="r" values="14;20;14" dur="2s" begin="0.4s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* UAE */}
                  <circle cx="725" cy="250" r="10" fill="#E55B4D" />
                  <circle cx="725" cy="250" r="14" fill="#E55B4D" opacity="0.3">
                    <animate attributeName="r" values="14;20;14" dur="2s" begin="0.6s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* India */}
                  <circle cx="820" cy="250" r="10" fill="#E55B4D" />
                  <circle cx="820" cy="250" r="14" fill="#E55B4D" opacity="0.3">
                    <animate attributeName="r" values="14;20;14" dur="2s" begin="0.8s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Japan */}
                  <circle cx="1000" cy="180" r="10" fill="#E55B4D" />
                  <circle cx="1000" cy="180" r="14" fill="#E55B4D" opacity="0.3">
                    <animate attributeName="r" values="14;20;14" dur="2s" begin="1s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Australia */}
                  <circle cx="990" cy="420" r="10" fill="#E55B4D" />
                  <circle cx="990" cy="420" r="14" fill="#E55B4D" opacity="0.3">
                    <animate attributeName="r" values="14;20;14" dur="2s" begin="1.2s" repeatCount="indefinite" />
                  </circle>
                </g>
                
                {/* Country Markers - Desktop (normal size) */}
                <g className="desktop-markers">
                  {/* USA */}
                  <circle cx="280" cy="250" r="7" fill="#E55B4D" />
                  <circle cx="280" cy="250" r="10" fill="#E55B4D" opacity="0.3">
                    <animate attributeName="r" values="10;15;10" dur="2s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Germany */}
                  <circle cx="610" cy="240" r="7" fill="#E55B4D" />
                  <circle cx="610" cy="240" r="10" fill="#E55B4D" opacity="0.3">
                    <animate attributeName="r" values="10;15;10" dur="2s" begin="0.2s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Saudi Arabia */}
                  <circle cx="650" cy="295" r="7" fill="#E55B4D" />
                  <circle cx="650" cy="295" r="10" fill="#E55B4D" opacity="0.3">
                    <animate attributeName="r" values="10;15;10" dur="2s" begin="0.4s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* UAE */}
                  <circle cx="690" cy="320" r="7" fill="#E55B4D" />
                  <circle cx="690" cy="320" r="10" fill="#E55B4D" opacity="0.3">
                    <animate attributeName="r" values="10;15;10" dur="2s" begin="0.6s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* India */}
                  <circle cx="795" cy="370" r="7" fill="#E55B4D" />
                  <circle cx="795" cy="370" r="10" fill="#E55B4D" opacity="0.3">
                    <animate attributeName="r" values="10;15;10" dur="2s" begin="0.8s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Japan */}
                  <circle cx="950" cy="300" r="7" fill="#E55B4D" />
                  <circle cx="950" cy="300" r="10" fill="#E55B4D" opacity="0.3">
                    <animate attributeName="r" values="10;15;10" dur="2s" begin="1s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Australia */}
                  <circle cx="950" cy="480" r="7" fill="#E55B4D" />
                  <circle cx="950" cy="480" r="10" fill="#E55B4D" opacity="0.3">
                    <animate attributeName="r" values="10;15;10" dur="2s" begin="1.2s" repeatCount="indefinite" />
                  </circle>
                </g>
                
                {/* Country Labels - Mobile (larger) */}
                <g fill="white" fontWeight="700" fontFamily="var(--font-poppins), sans-serif" className="mobile-labels">
                  <text x="240" y="170" textAnchor="middle" fontSize="24" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>USA</text>
                  <text x="580" y="120" textAnchor="middle" fontSize="24" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>Germany</text>
                  <text x="690" y="210" textAnchor="middle" fontSize="22" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>Saudi</text>
                  <text x="765" y="210" textAnchor="middle" fontSize="22" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>Arabia</text>
                  <text x="725" y="235" textAnchor="middle" fontSize="24" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>UAE</text>
                  <text x="820" y="235" textAnchor="middle" fontSize="24" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>India</text>
                  <text x="1000" y="165" textAnchor="middle" fontSize="24" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>Japan</text>
                  <text x="990" y="405" textAnchor="middle" fontSize="24" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>Australia</text>
                </g>
                
                {/* Country Labels - Desktop (normal size) */}
                <g fill="white" fontSize="20" fontWeight="700" fontFamily="var(--font-poppins), sans-serif" className="desktop-labels">
                  <text x="280" y="230" textAnchor="middle" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>USA</text>
                  <text x="610" y="220" textAnchor="middle" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>Germany</text>
                  <text x="650" y="275" textAnchor="middle" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>Saudi</text>
                  <text x="720" y="275" textAnchor="middle" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>Arabia</text>
                  <text x="690" y="305" textAnchor="middle" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>UAE</text>
                  <text x="795" y="355" textAnchor="middle" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>India</text>
                  <text x="950" y="285" textAnchor="middle" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>Japan</text>
                  <text x="950" y="465" textAnchor="middle" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}>Australia</text>
                </g>
              </svg>
            </div>
            
            {/* Subtitle below the map */}
            <motion.p 
              className="text-center text-white/80 text-sm sm:text-base mt-8 font-light"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Connect with global markets across 7+ countries
            </motion.p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: 'spring',
            stiffness: 100,
            damping: 15,
            duration: 0.6,
            delay: 0.6
          }}
        >
          <Link href="/apply">
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
          </Link>
        </motion.div>
      </div>

      {/* Decorative gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(229, 91, 77, 0.1) 0%, transparent 70%)',
        }}
      />
    </motion.section>
  );
};

