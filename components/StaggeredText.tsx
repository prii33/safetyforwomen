import React from 'react';
import { motion } from 'framer-motion';

interface StaggeredTextProps {
  text: string;
  className?: string;
}

const StaggeredText: React.FC<StaggeredTextProps> = ({ text, className }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <div key={index} style={{ display: 'flex', whiteSpace: 'nowrap', marginRight: '0.25em' }}>
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span variants={child} key={letterIndex}>
              {letter}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default StaggeredText;
