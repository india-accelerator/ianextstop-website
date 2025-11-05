'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// Simple logo component for the navbar
const Logo = (props) => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 324 323' fill='currentColor' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect
        x='88.1023'
        y='144.792'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 88.1023 144.792)'
        fill='currentColor'
      />
      <rect
        x='85.3459'
        y='244.537'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 85.3459 244.537)'
        fill='currentColor'
      />
    </svg>
  );
};

// Hamburger icon component
const HamburgerIcon = ({ className, ...props }) => (
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
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

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

// Close icon component
const CloseIcon = ({ className, ...props }) => (
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
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
);

// Default navigation links
const defaultNavigationLinks = [
  { href: '#about', label: 'About' },
  { href: '#what-to-expect', label: 'What To Expect' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#eligibility-criteria', label: 'Eligibility Criteria' },
  { href: '#why-bigshift', label: 'Why BIGShift?' },
];

export const Navbar01 = React.forwardRef(({
  className,
  logo = <Logo />,
  logoHref = '#',
  navigationLinks = defaultNavigationLinks,
  signInText = 'Sign In',
  signInHref = '#signin',
  ctaText = 'APPLY NOW',
  ctaHref = '#get-started',
  onSignInClick,
  onCtaClick,
  showSubNavbar = true,
  subNavbarText = "igniting a movement to power bold ideas from India's emerging startup hubs.",
  ...props
}, ref) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSubNavbarVisible, setIsSubNavbarVisible] = useState(showSubNavbar);
  const [isSubNavbarClosing, setIsSubNavbarClosing] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setIsMobile(width < 768); // 768px is md breakpoint
      }
    };

    checkWidth();
    const resizeObserver = new ResizeObserver(checkWidth);

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Combine refs
  const combinedRef = React.useCallback((node) => {
    containerRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  }, [ref]);

  return (
    <div className="sticky top-0 z-50">
      <header
        ref={combinedRef}
        className={cn(
          'w-full px-4 md:px-6 [&_*]:no-underline',
          className
        )}
        style={{ backgroundColor: '#1E071EE5' }}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center gap-4 relative">
        {/* Left side */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Mobile menu trigger */}
          {isMobile && (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground"
                  variant="ghost"
                  size="icon"
                >
                  <HamburgerIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-48 p-2">
                <NavigationMenu className="max-w-none">
                  <NavigationMenuList className="flex-col items-start gap-1">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index} className="w-full">
                        <Button
                          variant="ghost"
                          effect="hoverUnderline"
                          onClick={(e) => e.preventDefault()}
                          className={cn(
                            "w-full justify-start rounded-md px-3 py-2 text-sm font-medium uppercase",
                            link.active
                              ? "bg-accent text-white hover:text-black"
                              : "text-white/80 hover:text-black"
                          )}
                        >
                          {link.label}
                        </Button>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          )}
          {/* Logo */}
          <button
            onClick={(e) => e.preventDefault()}
            className="flex items-center space-x-2 text-white hover:text-white/90 transition-colors cursor-pointer"
          >
            <div className="text-2xl text-white">
              <Image src="/programLogo.png" alt="Next Stop" width={100} height={100} />
            </div>
          </button>
        </div>
        
        {/* Center - Navigation menu */}
        {!isMobile && (
          <div className="flex-1 flex justify-center">
            <NavigationMenu className="flex">
              <NavigationMenuList className="gap-1">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <Button
                      variant="ghost"
                      effect="hoverUnderline"
                      onClick={(e) => e.preventDefault()}
                      className={cn(
                        "h-9 px-4 py-2 text-sm font-medium uppercase",
                        link.active
                          ? "text-white hover:text-black"
                          : "text-white/80 hover:text-black"
                      )}
                    >
                      {link.label}
                    </Button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
        
        {/* Right side - CTA Button */}
        <div className="flex items-center gap-3 shrink-0">
          <Button
            size="sm"
            effect="expandIcon"
            icon={ArrowRightIcon}
            iconPlacement="right"
            className="text-md font-medium px-6 py-3 h-9 rounded-full shadow-sm text-white hover:opacity-90"
            style={{
              background: 'linear-gradient(90deg, #4C231F 12.02%, #8D413A 49.04%, #4C231F 91.83%)',
              border: 'none'
            }}
            onClick={(e) => {
              e.preventDefault();
              if (onCtaClick) onCtaClick();
            }}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </header>
    
    {/* Sub Navbar */}
    {isSubNavbarVisible && (
      <div 
        className={`w-full px-4 md:px-6 py-1 overflow-hidden transition-all duration-300 ease-in-out ${
          isSubNavbarClosing ? 'opacity-0 max-h-0 py-0' : 'opacity-100 max-h-20'
        }`}
        style={{ backgroundColor: '#F8DCD9' }}
      >
        <div className="container mx-auto flex items-center justify-between max-w-screen-2xl gap-4">
          <p className="text-sm md:text-base flex-1 text-left" style={{ color: '#782821' }}>
            {subNavbarText}
          </p>
          <button
            onClick={() => {
              setIsSubNavbarClosing(true);
              setTimeout(() => {
                setIsSubNavbarVisible(false);
              }, 300); // Match the transition duration
            }}
            className="shrink-0 p-1 hover:opacity-70 transition-opacity"
            style={{ color: '#4C231F' }}
            aria-label="Close banner"
          >
            <CloseIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    )}
    </div>
  );
});

Navbar01.displayName = 'Navbar01';

export { Logo, HamburgerIcon };

