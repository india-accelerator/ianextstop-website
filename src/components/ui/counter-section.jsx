'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

// Counter component with animation
const CounterItem = ({ value, description, prefix = '', suffix = '', duration = 2000 }) => {
  // Check if value should be animated (only for pure numbers or when explicitly numeric)
  const shouldAnimate = typeof value === 'number' || (typeof value === 'string' && /^\d+$/.test(value.trim()));
  
  const [count, setCount] = React.useState(shouldAnimate ? 0 : value);
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  // Extract numeric value from string if possible
  const extractNumber = (val) => {
    if (typeof val === 'number') return val;
    if (typeof val === 'string') {
      // Don't extract if it's a range (contains dash) or has text after numbers
      // Only extract if it's a pure number or has prefix/suffix that we handle
      if (val.includes('-') || /\d+\s+[a-zA-Z]/.test(val)) {
        return null; // Don't animate ranges or text with numbers
      }
      const match = val.match(/^\d+$/);
      return match ? parseInt(match[0], 10) : null;
    }
    return null;
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  React.useEffect(() => {
    if (!isVisible) {
      if (!shouldAnimate) {
        setCount(value);
      }
      return;
    }

    if (!shouldAnimate) {
      setCount(value);
      return;
    }

    const numericValue = typeof value === 'number' ? value : parseInt(value, 10);
    if (isNaN(numericValue)) {
      setCount(value);
      return;
    }

    // For numeric values, animate from 0 to target
    const startTime = Date.now();
    const startValue = 0;
    const endValue = numericValue;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animate();
  }, [isVisible, value, duration, shouldAnimate]);

  // Format display value
  const displayValue = shouldAnimate && typeof count === 'number' 
    ? `${prefix}${count}${suffix}`
    : (typeof count === 'string' ? count : value);

  return (
    <motion.div 
      ref={ref} 
      className="flex flex-col items-center text-center py-6 sm:py-8"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }}
    >
      {/* Main Value */}
      <motion.div 
        className="text-2xl sm:text-3xl md:text-4xl font-normal mb-2 text-white"
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          delay: 0.1
        }}
      >
        {displayValue}
      </motion.div>
      
      {/* Description */}
      <motion.div 
        className="text-xs sm:text-sm md:text-sm text-white font-light px-2"
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3
        }}
      >
        {description}
      </motion.div>
    </motion.div>
  );
};

export const CounterSection = () => {
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

  return (
    <motion.section 
      className="w-full relative overflow-hidden py-8 sm:py-2"
      style={{
        background: 'linear-gradient(90deg, #782821 19.71%, #EE594C 52.88%, #782821 84.13%)'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <CounterItem
            value={50}
            prefix="₹"
            suffix=" Cr"
            description="Capital Commitments Across cities within a year"
          />
          <CounterItem
            value={5}
            // suffix=" State"
            description="cities"
          />
          <CounterItem
            value="5-7 startups"
            description="Shortlisted"
          />
          <CounterItem
            value="Stages"
            description="Early to Growth stage"
          />
        </div>
      </div>
    </motion.section>
  );
};

