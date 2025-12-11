import React from 'react';
import { motion } from 'framer-motion';
import type { Resource } from '../types';

const SurvivorSupportCard: React.FC<{ resource: Resource }> = ({ resource }) => {
    return (
        <motion.div 
            className="group relative h-64 overflow-hidden rounded-3xl bg-neutral-900 border border-[#5a2301] shadow-2xl cursor-pointer"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {resource.image ? (
                    <img 
                        src={resource.image} 
                        alt={resource.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-red transition-colors duration-300">
                        {resource.title}
                    </h3>
                    
                    {/* Animated Accent Line */}
                    <div className="h-1 w-12 bg-brand-red rounded-full mb-4 transition-all duration-500 ease-out group-hover:w-full" />
                    
                    {/* Description - Hidden initially, revealed on hover */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                        <div className="overflow-hidden">
                             <p className="text-gray-300 text-sm mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                {resource.description}
                            </p>
                            
                            <a 
                                href={resource.link} 
                                className="inline-flex items-center text-white text-sm font-semibold hover:text-brand-red transition-colors group/link"
                            >
                                Learn More 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Top Right Decorative Icon */}
            <div className="absolute top-6 right-6 p-2 rounded-full bg-white/5 backdrop-blur-sm border border-[#5a2301] opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </div>
        </motion.div>
    );
};

export default SurvivorSupportCard;
