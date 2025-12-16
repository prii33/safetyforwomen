import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const OrbsBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
        className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#DC2626] rounded-full mix-blend-screen filter blur-[80px] opacity-40"
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
        className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#800000] rounded-full mix-blend-screen filter blur-[90px] opacity-40"
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
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#991B1B] rounded-full mix-blend-screen filter blur-[80px] opacity-35"
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
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#DC2626] rounded-full mix-blend-screen filter blur-[80px] opacity-40"
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#800000] rounded-full mix-blend-screen filter blur-[100px] opacity-30"
      />

      {/* Extra Closely Knit Sharp Grainy Texture Overlay - On Top */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4.0' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -15'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          transform: 'scale(1)',
          filter: 'contrast(120%) brightness(100%)'
        }}
      />
    </div>
  );
};

export default OrbsBackground;
