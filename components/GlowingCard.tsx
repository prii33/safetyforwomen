import React, { useRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlowingCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export const GlowingCard = ({ children, className = "", innerClassName = "", ...props }: GlowingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={`group relative w-full cursor-pointer rounded-2xl bg-[#724b4b54] p-[2px] transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,4,64,0.5)] ${className}`}
        {...props}
      >
        {/* Glowing Border Gradient */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(800px circle at var(--x) var(--y), rgba(255, 4, 64, 0.8), transparent 40%)`,
          }}
        />

        {/* Content Container */}
        <div className={`relative h-full w-full rounded-[14px] bg-[#000000] overflow-hidden ${innerClassName}`}>
            
            {/* Inner Spotlight */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                    background: `radial-gradient(600px circle at var(--x) var(--y), rgba(255, 4, 64, 0.1), transparent 40%)`,
                }}
            />

            {/* Content Wrapper */}
            <div className="relative z-10 w-full h-full p-3 md:p-6 flex flex-col items-center justify-center text-center">
                {children}
            </div>
        </div>
      </motion.div>
  );
};
