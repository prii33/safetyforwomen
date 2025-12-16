
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pressCoverage } from '../data/mockData';
import { timelineEvents, upcomingEvent } from '../data/eventsData';
import Hero from '../components/Hero';
import redmist from '@/assets/redmist2.mov';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        transition: { 
            type: "spring", 
            stiffness: 100,
            damping: 15
        }
    }
};

// Helper to highlight numbers in text
const StatDisplay: React.FC<{ text: string }> = ({ text }) => {
    // Attempt to split number and text if it starts with digits
    const match = text.match(/^(\d+[\+\,\.]?\d*)\s+(.*)$/);
    if (match) {
        return (
            <div className="flex flex-col items-center justify-center p-2 bg-brand-maroon/30 rounded-lg border border-brand-red/20 w-full">
                <span className="text-xl font-bold text-brand-light">{match[1]}</span>
                <span className="text-[10px] text-brand-light-text text-center uppercase tracking-wide leading-tight">{match[2]}</span>
            </div>
        );
    }
    return (
        <div className="flex items-center justify-center p-2 bg-brand-maroon/30 rounded-lg border border-brand-red/20 w-full text-xs text-brand-light text-center font-medium">
            {text}
        </div>
    );
};

const EventsMediaPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'awareness' | 'safe'>('awareness');

    const filteredEvents = timelineEvents.filter(event => {
        if (activeTab === 'safe') return event.isPanel;
        return !event.isPanel;
    });

    return (
        <div className="bg-brand-dark text-brand-light min-h-screen">
            <Hero
                title="Events & Media"
                subtitle="Our Journey & Impact"
                description="Explore our awareness programs, collaborations, and community initiatives making a difference."
                videoSrc={redmist}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-0">
                
                {/* Upcoming Event Section */}
                {upcomingEvent && (
                    <section className="mb-8">
                         <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-gradient-to-br from-[#2a100e] to-black rounded-xl overflow-hidden border border-brand-red/20 shadow-xl"
                        >
                            <div className="grid md:grid-cols-2 gap-4 p-5 items-center">
                                <div className="space-y-3">
                                    <div className="inline-block px-3 py-1 bg-brand-red/20 border border-brand-red/40 rounded-full">
                                        <span className="text-brand-red font-bold tracking-wider uppercase text-xs">Upcoming Event</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">{upcomingEvent.title}</h2>
                                    
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                        <div className="flex items-center gap-2 text-brand-light-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-red" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-base">{upcomingEvent.date}</span>
                                        </div>
                                        <div className="hidden sm:block w-1 h-1 rounded-full bg-brand-red/40"></div>
                                        <div className="flex items-center gap-2 text-brand-light-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-red" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-base">{upcomingEvent.time}</span>
                                        </div>
                                        <div className="hidden sm:block w-1 h-1 rounded-full bg-brand-red/40"></div>
                                        <div className="flex items-center gap-2 text-brand-light-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-red" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-base">{upcomingEvent.venue}</span>
                                        </div>
                                    </div>

                                    <p className="text-brand-light-text/80 text-sm leading-relaxed">
                                        {upcomingEvent.description}
                                    </p>

                                    <a 
                                        href={upcomingEvent.link}
                                        className="inline-block px-6 py-2 bg-brand-red hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-300 text-sm"
                                    >
                                        Register with Us (coming soon)
                                    </a>
                                </div>
                                <div className="relative h-[250px] rounded-xl overflow-hidden">
                                    <img 
                                        src={upcomingEvent.image} 
                                        alt="Upcoming Event" 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                    </section>
                )}

                {/* Tab Navigation */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-12">
                    <button 
                        onClick={() => setActiveTab('awareness')}
                        className={`px-6 py-2 rounded-md font-semibold text-base transition-all duration-300 border ${
                            activeTab === 'awareness' 
                                ? 'bg-[#271111] border-[#5a2301] text-white hover:bg-opacity-90' 
                                : 'bg-transparent border-[#5a2301]/30 text-brand-light-text hover:border-[#5a2301] hover:text-[#5a2301]'
                        }`}
                    >
                        Awareness Programs
                    </button>
                    <button 
                        onClick={() => setActiveTab('safe')}
                        className={`px-6 py-2 rounded-md font-semibold text-base transition-all duration-300 border ${
                            activeTab === 'safe' 
                                ? 'bg-[#271111] border-[#5a2301] text-white hover:bg-opacity-90' 
                                : 'bg-transparent border-[#5a2301]/30 text-brand-light-text hover:border-[#5a2301] hover:text-[#5a2301]'
                        }`}
                    >
                        Safe & Well-Lit Communities
                    </button>
                </div>

                {/* Filtered Events Grid */}
                <section className="mb-24">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeTab}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: 20 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {filteredEvents.map((event, index) => (
                                <motion.div 
                                    key={`${activeTab}-${index}`}
                                    variants={itemVariants}
                                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                    className="group bg-gradient-to-br from-[#2a100e] to-black rounded-xl overflow-hidden border border-brand-red/20 hover:border-brand-red/60 shadow-lg hover:shadow-brand-red/20 transition-all duration-300 flex flex-col h-full"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden shrink-0">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
                                        <motion.img 
                                            src={event.image} 
                                            alt={event.title} 
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        
                                        {/* Date Badge */}
                                        <div className="absolute top-3 left-3 z-20">
                                            <div className="bg-brand-red/70 backdrop-blur-sm px-3 py-1 rounded shadow-md">
                                                <span className="text-xs font-bold text-white tracking-wider uppercase">{event.date}</span>
                                            </div>
                                        </div>

                                        {/* Panel Badge */}
                                        {event.isPanel && (
                                            <div className="absolute top-3 right-3 z-20">
                                                <div className="bg-yellow-600/90 backdrop-blur-sm px-2 py-1 rounded shadow-md">
                                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">PANEL</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold text-brand-red uppercase mb-2 leading-snug transition-colors">{event.title}</h3>
                                    <div className="flex items-start gap-2 mb-4 text-brand-light-text text-base font-medium border-b border-white/10 pb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-red shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="leading-snug">{event.location}</span>
                                    </div>
                                    
                                    {/* Highlighted Stats Grid */}
                                        {event.stats && (
                                            <div className="mt-auto grid grid-cols-2 gap-2">
                                                {event.stats.slice(0, 4).map((stat, i) => (
                                                    <StatDisplay key={i} text={stat} />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </section>

                {/* Press Coverage */}
                <section>
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 mb-10"
                    >
                        
                        <h2 className="text-xl font-semibold text-brand-red tracking-widest uppercase">In The Press</h2>
                    </motion.div>
                    
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {pressCoverage.map((item, i) => (
                            <motion.a 
                                key={item.outlet}
                                variants={itemVariants} 
                                href={item.link} 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="block p-6 rounded-xl bg-gradient-to-br from-[#2a100e] to-black border border-brand-red/10 hover:border-brand-red/40 transition-all group shadow-md"
                            >
                                <div className="flex flex-col h-full justify-between gap-4">
                                    <div className="flex justify-between items-start">
                                        <p className="font-semibold text-lg text-brand-light group-hover:text-brand-red transition-colors leading-snug">{item.title}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-red/50 group-hover:text-brand-red transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                    <div className="flex justify-between items-center text-xs text-brand-light-text font-medium tracking-wide">
                                        <span className="bg-brand-red/10 text-brand-red px-3 py-1 rounded-full uppercase">{item.outlet}</span>
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default EventsMediaPage;
