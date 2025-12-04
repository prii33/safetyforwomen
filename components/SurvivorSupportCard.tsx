import React from 'react';
import { motion } from 'framer-motion';
import type { Resource } from '../types';

const SurvivorSupportCard: React.FC<{ resource: Resource }> = ({ resource }) => {
    return (
        <motion.div 
            className="relative h-80 overflow-hidden rounded-3xl bg-[#0d0202] border border-brand-maroon group cursor-pointer"
            initial="closed"
            whileHover="open"
        >
            {/* Content Layer (Revealed on hover) */}
            <div className="absolute inset-0 p-8 flex flex-col justify-center bg-[#0d0202]/90">
                <h3 className="text-2xl font-bold text-[#DC2626] mb-3 leading-tight">{resource.title}</h3>
                <p className="text-brand-dull-white text-sm mb-6 leading-relaxed">
                    {resource.description}
                </p>
                <a 
                    href={resource.link} 
                    className="flex items-center text-white text-sm font-semibold group-hover:text-[#DC2626] transition-colors"
                >
                    Learn More 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>

            {/* Cover Layer (Slides right on hover) */}
            <motion.div 
                className="absolute inset-0 z-10"
                variants={{
                    closed: { x: 0 },
                    open: { x: "85%" }
                }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }} // Cubic bezier for smooth sliding
            >
                <div className="relative w-full h-full bg-[#1a0505]">
                     {/* Image with overlay */}
                    {resource.image && (
                        <div className="absolute inset-0">
                            <img 
                                src={resource.image} 
                                alt={resource.title} 
                                className="w-full h-full object-cover opacity-60 sepia group-hover:sepia-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40" />
                        </div>
                    )}
                    
                    {/* Title on Cover (Visible initially) */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 to-transparent">
                        <h3 className="text-2xl font-bold text-white mb-2">{resource.title}</h3>
                        <div className="w-12 h-1 bg-[#DC2626] rounded-full mt-2" />
                    </div>
                    
                    {/* Visual hint to slide/open */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 animate-pulse hidden group-hover:block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SurvivorSupportCard;
