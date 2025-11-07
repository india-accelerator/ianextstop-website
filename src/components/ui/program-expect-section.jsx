'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, 
  User, 
  Handshake, 
  Layers
} from 'lucide-react';

const IconBox = ({ icon: Icon, title, description, index }) => {
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
      className="flex flex-col items-center p-6 sm:p-8 h-full"
      style={{ 
        background: 'linear-gradient(129.07deg, #FFFFFF 18.75%, #F7CBC7 108.92%)'
      }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Circular Icon */}
      <motion.div 
        className="mb-4 p-4 rounded-full flex items-center justify-center"
        style={{ 
          background: 'linear-gradient(39.47deg, #4D2420 5.65%, #BF483C 51.32%, #782821 103.43%)'
        }}
        variants={iconVariants}
      >
        <Icon 
          className="w-6 h-6 sm:w-7 sm:h-7"
          style={{ color: '#FFFFFF' }}
        />
      </motion.div>
      
      {/* Title */}
      <motion.h3 
        className="text-lg sm:text-xl font-normal mb-3 text-center text-black"
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        variants={textVariants}
      >
        {title}
      </motion.h3>
      
      {/* Description */}
      <motion.p 
        className="text-sm sm:text-sm text-center leading-relaxed"
        style={{ 
          fontFamily: 'var(--font-poppins), sans-serif',
          color: '#782821'
        }}
        variants={textVariants}
      >
        {description}
      </motion.p>
    </motion.div>
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
      icon: Layers,
      title: 'Growth Amplifier (IA ecosystem)',
      description: 'Unlock funding and pilot opportunities.',
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
      id="what-to-expect"
      className="w-full py-16 sm:py-20 md:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #1E071E 50%, #782821 100%)'
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
              color: '#fff'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ABOUT THE PROGRAM
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What To Expect
          </motion.h2>
        </motion.div>

        {/* Icon Boxes Grid - Horizontal scroll on mobile, grid on larger screens */}
        <div className="overflow-x-auto sm:overflow-visible -mx-4 sm:mx-0 px-4 sm:px-0">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 min-w-max sm:min-w-0 sm:items-stretch">
            {features.map((feature, index) => (
              <div key={index} className="shrink-0 w-[280px] sm:w-auto sm:flex sm:flex-col">
                <IconBox
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

