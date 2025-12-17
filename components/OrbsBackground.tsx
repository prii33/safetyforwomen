import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type OrbVariant = 'default' | 'subtle';

type OrbsBackgroundProps = {
  variant?: OrbVariant;
};

const OrbsBackground: React.FC<OrbsBackgroundProps> = ({ variant = 'default' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const isSubtle = variant === 'subtle';

  const orb = {
    o1: { size: isSubtle ? 220 : 300, blur: isSubtle ? 60 : 80, opacity: isSubtle ? 0.24 : 0.4 },
    o2: { size: isSubtle ? 260 : 350, blur: isSubtle ? 70 : 90, opacity: isSubtle ? 0.22 : 0.4 },
    o3: { size: isSubtle ? 300 : 400, blur: isSubtle ? 60 : 80, opacity: isSubtle ? 0.22 : 0.35 },
    o4: { size: isSubtle ? 220 : 300, blur: isSubtle ? 60 : 80, opacity: isSubtle ? 0.24 : 0.4 },
    o5: { size: isSubtle ? 360 : 500, blur: isSubtle ? 80 : 100, opacity: isSubtle ? 0.18 : 0.3 },
  };

  const noiseOpacity = isSubtle ? 0.08 : 0.15;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 bg-black" />
      
      {/* Orb 1 - Top Left - Red */}
      <motion.div
        animate={{
          x: [0, 300, 0],
          y: [0, 200, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 rounded-full mix-blend-screen filter"
        style={{
          width: orb.o1.size,
          height: orb.o1.size,
          backgroundColor: '#DC2626',
          filter: `blur(${orb.o1.blur}px)`,
          opacity: orb.o1.opacity,
        }}
      />

      {/* Orb 2 - Top Right - Maroon */}
      <motion.div
        animate={{
          x: [0, -250, 0],
          y: [0, 300, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 rounded-full mix-blend-screen filter"
        style={{
          width: orb.o2.size,
          height: orb.o2.size,
          backgroundColor: '#800000',
          filter: `blur(${orb.o2.blur}px)`,
          opacity: orb.o2.opacity,
        }}
      />

      {/* Orb 3 - Bottom Left - Dark Red */}
      <motion.div
        animate={{
          x: [0, 250, 0],
          y: [0, -250, 0],
          scale: [1, 1.6, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 rounded-full mix-blend-screen filter"
        style={{
          width: orb.o3.size,
          height: orb.o3.size,
          backgroundColor: '#991B1B',
          filter: `blur(${orb.o3.blur}px)`,
          opacity: orb.o3.opacity,
        }}
      />

      {/* Orb 4 - Bottom Right - Red */}
      <motion.div
        animate={{
          x: [0, -300, 0],
          y: [0, -150, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 right-0 rounded-full mix-blend-screen filter"
        style={{
          width: orb.o4.size,
          height: orb.o4.size,
          backgroundColor: '#DC2626',
          filter: `blur(${orb.o4.blur}px)`,
          opacity: orb.o4.opacity,
        }}
      />

      {/* Orb 5 - Center - Follows Mouse loosely */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 100
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen filter"
        style={{
          width: orb.o5.size,
          height: orb.o5.size,
          backgroundColor: '#800000',
          filter: `blur(${orb.o5.blur}px)`,
          opacity: orb.o5.opacity,
        }}
      />

      {/* Extra Closely Knit Sharp Grainy Texture Overlay - On Top */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          opacity: noiseOpacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4.0' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -15'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          transform: 'scale(1)',
          filter: 'contrast(120%) brightness(100%)'
        }}
      />
    </div>
  );
};

export default OrbsBackground;
