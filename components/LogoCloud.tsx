import React, { useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './LogoCloud.css';
import cl1 from '/assets/cl1.png';
import cl2 from '/assets/cl2.png';
import cl3 from '/assets/cl3.png';
import cl4 from '/assets/cl4.png';
import cl5 from '/assets/cl5.png';
import cl6 from '/assets/cl6.png';
import cl7 from '/assets/cl7.png';
import cl8 from '/assets/cl8.png';
import cl9 from '/assets/cl9.png';
import cl10 from '/assets/cl10.png';
import cl11 from '/assets/cl11.png';
import cl12 from '/assets/cl12.png';
import cl13 from '/assets/cl13.png';
import cl14 from '/assets/cl14.png';
import cl15 from '/assets/cl15.png';

const LogoCloud: React.FC = () => {
  const logos = [
    cl1, cl2, cl3, cl4, cl5, 
    cl6, cl7, cl8, cl9, cl10, 
    cl11, cl12, cl13, cl14, cl15
  ];

  const [direction, setDirection] = useState<number>(-1); // -1 for left, 1 for right
  const [speed, setSpeed] = useState<number>(50); // Pixels per second
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const LOGO_WIDTH = 256; // w-64
  const GAP = 32; // mx-4 * 2 = 32px
  const TOTAL_ITEM_WIDTH = LOGO_WIDTH + GAP;
  const NUM_LOGOS = 15;
  const LOOP_WIDTH = TOTAL_ITEM_WIDTH * NUM_LOGOS; // Width of one set of logos

  useAnimationFrame((t, delta) => {
    let moveBy = direction * speed * (delta / 1000);
    
    let currentX = baseX.get() + moveBy;
    
    // Wrap logic based on pixels
    if (currentX <= -LOOP_WIDTH) {
      currentX = 0;
    } else if (currentX > 0) {
      currentX = -LOOP_WIDTH;
    }
    
    baseX.set(currentX);
  });

  const x = useTransform(baseX, (v) => `${v}px`);

  const handleManualScroll = (scrollDirection: 'left' | 'right') => {
    // Scroll by 3 logos width
    const scrollAmount = TOTAL_ITEM_WIDTH * 3;
    let newX = baseX.get();
    
    if (scrollDirection === 'left') {
      // Move content right (show previous)
      newX += scrollAmount;
    } else {
      // Move content left (show next)
      newX -= scrollAmount;
    }

    // Apply wrap logic immediately for smooth feeling
    if (newX <= -LOOP_WIDTH) {
      newX += LOOP_WIDTH;
    } else if (newX > 0) {
      newX -= LOOP_WIDTH;
    }

    baseX.set(newX);
  };

  return (
    <div className="relative w-full overflow-hidden py-12 bg-black">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
      
      <div className="relative z-20 flex flex-col items-center mb-8 px-4">
        <h2 className="text-2xl font-semibold text-brand-red uppercase tracking-wide mb-2 text-center">Our Partners & Collaborators</h2>
        <p className="text-lg text-brand-dull-white text-center mb-6">We are grateful for the support of organizations who share our vision for a safer India.</p>
        
        {/* Controls */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleManualScroll('left')}
            className="p-3 rounded-full transition-all duration-300 border border-brand-red/30 bg-black/50 text-brand-dull-white hover:bg-brand-red/20 hover:text-white hover:scale-110 active:scale-95"
            aria-label="Previous"
          >
            <FaChevronLeft size={20} />
          </button>

          <button 
            onClick={() => handleManualScroll('right')}
            className="p-3 rounded-full transition-all duration-300 border border-brand-red/30 bg-black/50 text-brand-dull-white hover:bg-brand-red/20 hover:text-white hover:scale-110 active:scale-95"
            aria-label="Next"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      <motion.div 
        className="flex w-fit"
        style={{ x }}
        ref={containerRef}
        onHoverStart={() => setSpeed(0)} // Stop on hover
        onHoverEnd={() => setSpeed(50)} // Resume speed
      >
        {/* Tripling the logos to ensure smooth infinite scroll even on large screens */}
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-64 h-32 flex items-center justify-center mx-4 bg-gradient-to-br from-[#2a100e] to-black rounded-xl p-4 shadow-lg hover:bg-[#e1d5d5] hover:from-[#e1d5d5] hover:to-[#e1d5d5] hover:shadow-brand-red/20 hover:scale-105 transition-all duration-300 group border border-[#5a2301]/30">
            <img src={logo} alt={`Partner ${index}`} className="max-h-full max-w-full object-contain filter grayscale invert opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0 transition-all duration-300" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCloud;
