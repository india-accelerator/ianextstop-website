'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <div className="relative w-full min-h-[85vh] sm:min-h-screen overflow-hidden flex items-center justify-center">
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
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 max-w-5xl mx-auto" 
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div 
          className="mb-6 sm:mb-8 md:mb-6 flex flex-col items-center w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px]"
          variants={logoVariants}
        >
          <div className="relative w-full aspect-[3/2]">
            <Image 
              src="/ia-program-logo.png" 
              alt="IA Next Stop" 
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 400px"
            />
          </div>
        </motion.div>
        

        {/* IA Lands in Tricity */}
        <motion.h1 
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4 sm:mb-6 leading-tight sm:leading-tight uppercase px-2" 
          style={{ 
            fontFamily: 'var(--font-poppins), sans-serif',
            background: 'linear-gradient(180deg, #a55d5d 17.55%, #ffffff 50%, #a55d5d 83.42%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
          variants={itemVariants}
        >
          We’re coming to Tricity 
        </motion.h1>
            {/* Location Text */}
            <motion.p 
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 px-2" 
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              variants={itemVariants}
            >
              Chandigarh , Panchkula , Mohali
            </motion.p>

        {/* CTA Button */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0"
          variants={itemVariants}
        >
          <Link href="/apply" className="w-full sm:w-auto">
            <Button
              size="lg"
              effect="expandIcon"
              icon={ArrowRightIcon}
              iconPlacement="right"
              className="text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border-none w-full sm:w-auto"
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
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

