import React from 'react';
import { initiatives } from '../data/mockData';
import { motion } from 'framer-motion';

const InteractiveObjectives: React.FC = () => {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {initiatives.map((initiative) => (
                    <motion.div
                        key={initiative.id}
                        className="relative p-6 rounded-lg text-left"
                        whileHover={{ scale: 1.05, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative z-10">
                            <div className="flex items-center mb-4">
                                <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center text-brand-red mr-4">
                                    {initiative.icon}
                                </div>
                                <h3 className="text-xl font-semibold" style={{ color: '#ff0441' }}>{initiative.title}</h3>
                            </div>
                            <p className="text-base text-brand-light-text">{initiative.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default InteractiveObjectives;
