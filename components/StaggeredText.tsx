import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface StaggeredTextProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
}

const StaggeredText: React.FC<StaggeredTextProps> = ({ children, className, style }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const words = children.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const child: Variants = {
    hidden: { y: '100%' },
    visible: {
      y: '0%',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ marginRight: '5px', display: 'inline-block', overflow: 'hidden' }}
        >
          <motion.span style={{ display: 'inline-block' }} variants={child}>
            {word}
          </motion.span>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default StaggeredText;
