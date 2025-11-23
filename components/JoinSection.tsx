import React, { useState, useEffect, useRef } from 'react';
import pledgebk from '@/assets/pledgebk.jpg';

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
    >
      {children}
    </div>
  );
};

const JoinSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      const animationDuration = sectionHeight - viewportHeight;
      const scrolledInSection = -rect.top + viewportHeight;

      if (scrolledInSection >= 0 && scrolledInSection <= sectionHeight) {
        const p = scrolledInSection / animationDuration;
        setProgress(p);
      } else if (scrolledInSection < 0) {
        setProgress(0);
      } else {
        setProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const numRows = 12;
  const numCols = 10;
  
  const getGridContainerStyle = (): React.CSSProperties => {
    const scale = 1 + progress * 4;
    const fadeOutStartProgress = 0.7;
    const fadeOutEndProgress = 0.9;

    let opacity = 1;
    if (progress >= fadeOutStartProgress) {
        const fadeOutProgress = (progress - fadeOutStartProgress) / (fadeOutEndProgress - fadeOutStartProgress);
        opacity = 1 - Math.min(fadeOutProgress, 1);
    }

    return {
        transform: `scale(${scale})`,
        opacity: opacity,
    };
  }
  
  const getFinalContentStyle = (): React.CSSProperties => {
      const fadeInStartProgress = 0.5;
      if (progress <= fadeInStartProgress) {
          return { opacity: 0, visibility: 'hidden' };
      }
      const fadeInProgress = (progress - fadeInStartProgress) / (1 - fadeInStartProgress);
      return {
          opacity: fadeInProgress,
          visibility: 'visible'
      };
  }

  const getGridItemStyle = (index: number): React.CSSProperties => {
      const totalItems = numRows * numCols;
      const revealEndProgress = 0.5;
      const itemRevealProgress = ((index + 1) / totalItems) * revealEndProgress;
      const isVisible = progress >= itemRevealProgress;
      return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(100%)'
      }
  }

  return (
    <section ref={sectionRef} className="relative h-[500vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-cover bg-center transition-opacity duration-1000 ease-in" style={{ backgroundImage: `url(${pledgebk})`, opacity: progress > 0 ? 1 : 0 }}>
        <div 
          className="absolute inset-0 flex flex-col w-full h-full"
          style={getGridContainerStyle()}
        >
          {Array.from({ length: numRows }).map((_, rowIndex) => (
            <div 
              key={rowIndex} 
              className={`flex-1 flex items-center overflow-hidden`}
            >
              <div 
                className={`flex w-fit ${rowIndex % 2 === 0 ? 'animate-scroll-right' : 'animate-scroll-left'}`}
              >
                {/* Render twice for seamless loop */}
                {Array.from({ length: numCols * 2 }).map((_, colIndex) => {
                  const itemIndex = rowIndex * numCols + (colIndex % numCols);
                  const isMissionText = itemIndex % 2 === 0;
                  const textSizeClass = isMissionText ? 'font-semibold text-2xl uppercase tracking-[0.5em]' : 'text-xl';
                  return (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`w-auto h-full flex-shrink-0 rounded-2xl mx-4 flex justify-center items-center text-black font-medium transition-all duration-500 ease-out px-4 text-center ${textSizeClass}`}
                      style={getGridItemStyle(itemIndex)}
                    >
                      {isMissionText ? "ONE VOICE, ONE MISSION" : "Take the Safety Pledge"}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-black"
          style={getFinalContentStyle()}
        >
          <h1 className="text-4xl sm:text-6xl font-bold whitespace-nowrap leading-tight">Let's Act for Women's <br></br>Safety. Together.</h1>
          <p className="text-lg sm:text-xl mt-4" style={{ color: '#000000' }}>
            Commit to being an active part of the solution. Your pledge is a promise to stand for safety, respect, and equality.
          </p>
        
          <button className="mt-8 py-3 px-10 rounded-full border border-black bg-black text-white text-xl font-semibold transition-transform transform hover:scale-105">
            Join the Movement
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
