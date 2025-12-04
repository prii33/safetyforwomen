import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import bk1 from '../assets/bk1.jpg';
import bk2 from '../assets/bk2.jpg';
import slide3 from '../assets/slide3.webp';

interface DemoCardProps {
  image: string;
  stat: string;
  statLabel: string;
  quote: string;
  category: string;
  video?: string;
}

const DemoCard: React.FC<DemoCardProps> = ({ image, stat, statLabel, quote, category, video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (video) {
      setIsPlaying(true);
    }
  };

  return (
    <motion.div 
      className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={handlePlay}
    >
      {/* Background Media */}
      <div className="absolute inset-0">
        {video && isPlaying ? (
            <div className="w-full h-full relative z-20">
                <div 
                    className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:object-cover"
                    dangerouslySetInnerHTML={{ __html: video }} 
                />
                {/* Texture Overlay - Visible while playing as requested */}
                <div 
                    className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-40 pointer-events-none"
                    style={{ backgroundImage: `url(${image})` }}
                />
            </div>
        ) : (
            <>
                <img 
                  src={image} 
                  alt={category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {video && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-16 h-16 bg-brand-red/90 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-white/20">
                            <div className="text-white text-2xl flex items-center justify-center"><FaPlay /></div>
                        </div>
                    </div>
                )}
            </>
        )}
        
        {/* Gradient Overlay - Hidden when playing */}
        {!isPlaying && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none" />
        )}
      </div>

      {/* Content - Hidden when playing */}
      {!isPlaying && (
          <div className="relative h-full p-8 flex flex-col justify-between z-10">
            {/* Top Label */}
            <div className="flex justify-end">
               <span className="bg-brand-red/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                 {category}
               </span>
            </div>

            {/* Bottom Content */}
            <div className="mt-auto">
              <div className="mb-6">
                <h3 className="text-6xl font-extrabold text-white mb-2 tracking-tight">
                  {stat}
                </h3>
                <p className="text-xl text-brand-dull-white font-medium">
                  {statLabel}
                </p>
              </div>

              <div className="border-t border-brand-brown-light/50 pt-6">
                <p className="text-brand-dull-white text-sm leading-relaxed italic">
                  "{quote}"
                </p>
              </div>
            </div>
          </div>
      )}
    </motion.div>
  );
};

const SelfDefenseCards: React.FC = () => {
  const demos = [
    {
      image: bk1,
      
      statLabel: "Basic Escape Techniques",
      quote: "Learn the fundamental moves to break free from wrist grabs and holds effectively.",
      category: "Beginner",
      video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/k9Jn0eP-ZVg?si=pbHr2aARGoJGXqyB&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      image: slide3,
      stat: "02",
      statLabel: "Situational Awareness",
      quote: "The best self-defense is avoiding danger. Learn to spot threats before they escalate.",
      category: "Essential"
    },
    {
      image: bk2,
      stat: "03",
      statLabel: "Defensive Stance",
      quote: "Master the core stance that provides stability and readiness for any confrontation.",
      category: "Foundation"
    }
  ];

  return (
    <section className="py-2">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {demos.map((demo, index) => (
          <DemoCard key={index} {...demo} />
        ))}
      </div>
    </section>
  );
};

export default SelfDefenseCards;
