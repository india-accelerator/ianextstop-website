'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const TimelineSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8
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
        duration: 0.6
      }
    }
  };

  return (
    <motion.section 
      id="timeline"
      className="w-full py-8 md:py-10 relative overflow-hidden"
      style={{
        background: 'linear-gradient(312.53deg, #EE5B4C -18.91%, #FFFFFF 121.57%)'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Dark CTA Card */}
        <motion.div 
          className="relative rounded-md sm:rounded-lg py-6 sm:py-8 md:py-10 overflow-hidden shadow-xl mx-auto max-w-5xl"
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #1E071E 50%, #350602 100%)'
          }}
          variants={cardVariants}
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
          <motion.div 
            className="relative z-10 py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 text-center"
            variants={containerVariants}
          >
            {/* Main Heading */}
            <motion.h2 
              className="text-2xl sm:text-4xl md:text-5xl font-medium mb-6 sm:mb-8 md:mb-10 leading-tight px-2"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              variants={itemVariants}
            >
              <motion.span 
                style={{ 
                  background: 'linear-gradient(180deg, #631A13 0%, #EE594C 50%, #631A13 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ready To
              </motion.span>
              <br />
              <motion.span 
                className="text-white font-bold text-3xl sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Accelerate?
              </motion.span>
            </motion.h2>

            {/* Application Details */}
            <motion.p 
              className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 px-2"
              style={{ 
                fontFamily: 'var(--font-poppins), sans-serif',
                color: '#EE5B4C'
              }}
              variants={itemVariants}
            >
              Applications Close On 13 November 2025
            </motion.p>

            {/* Contact Information */}
            <motion.p 
              className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4"
              style={{ 
                fontFamily: 'var(--font-poppins), sans-serif',
                color: '#fff'
              }}
              variants={itemVariants}
            >
              For queries, reach us at:{' '}
              <a 
                href="mailto:support@name.com"
                className="underline hover:text-[#EE5B4C] transition-colors duration-300 break-all sm:break-normal"
                style={{ color: '#fff' }}
              >
                support@name.com
              </a>
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              className="flex justify-center px-4"
              variants={itemVariants}
            >
              <Link href="/apply" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  effect="expandIcon"
                  icon={ArrowRight}
                  iconPlacement="right"
                  className="text-black text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border-none w-full sm:w-auto"
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
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

