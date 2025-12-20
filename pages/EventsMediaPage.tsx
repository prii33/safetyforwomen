import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { pressCoverage } from '../data/mockData';
import { collaborationEvents, timelineEvents, upcomingEvent } from '../data/eventsData';
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
    hidden: { y: 20, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1, 
        transition: { 
            duration: 0.5,
            ease: "easeOut" as const
        }
    }
};

type GalleryState = {
    title: string;
    location?: string;
    images: string[];
};

const GalleryModal: React.FC<{
    gallery: GalleryState | null;
    onClose: () => void;
}> = ({ gallery, onClose }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (gallery) setActiveIndex(0);
    }, [gallery]);

    const images = gallery?.images || [];
    const current = images[activeIndex] ?? images[0];

    const nextImage = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevImage = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!gallery) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [gallery, onClose, nextImage, prevImage]);

    if (!gallery) return null;

    return (
        <AnimatePresence>
            {gallery && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="relative w-full max-w-6xl max-h-[90vh] bg-[#1a0f0f] rounded-2xl border border-brand-red/20 shadow-2xl overflow-hidden flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 bg-black/20 shrink-0">
                            <div className="flex flex-col pr-4 overflow-hidden">
                                <h3 className="text-xl md:text-2xl font-bold text-brand-light truncate">
                                    {gallery.title}
                                </h3>
                                {gallery.location && (
                                    <p className="text-sm md:text-base text-brand-light-text/80 mt-1 truncate">
                                        {gallery.location}
                                    </p>
                                )}
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors shrink-0"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Main Image Area */}
                        <div className="relative w-full h-[60vh] md:h-[70vh] bg-black/50 flex items-center justify-center overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeIndex}
                                    src={current}
                                    alt={gallery.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full object-contain"
                                />
                            </AnimatePresence>
                            
                            {/* Nav Buttons */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                        className="absolute left-4 p-3 rounded-full bg-black/50 hover:bg-brand-red text-white backdrop-blur-sm transition-all transform hover:scale-110 z-10"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                        className="absolute right-4 p-3 rounded-full bg-black/50 hover:bg-brand-red text-white backdrop-blur-sm transition-all transform hover:scale-110 z-10"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {images.length > 1 && (
                            <div className="bg-[#0f0505] p-4 overflow-x-auto shrink-0">
                                <div className="flex justify-center gap-3 min-w-max px-4">
                                    {images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveIndex(idx)}
                                            className={`relative w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                                                idx === activeIndex
                                                    ? 'ring-2 ring-brand-red scale-105 opacity-100'
                                                    : 'opacity-50 hover:opacity-100'
                                            }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`Thumbnail ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const StyledDateBadge: React.FC<{ dateStr: string }> = ({ dateStr }) => {
    // Attempt to parse "7 October 2025" or similar formats
    const parts = dateStr.split(' ');
    
    // Fallback if format is unexpected
    if (parts.length < 3) {
        return (
            <div className="bg-brand-red px-3 py-1 rounded shadow-lg">
                <span className="text-[11px] font-bold text-white tracking-wider uppercase">{dateStr}</span>
            </div>
        );
    }

    const [day, monthFull, year] = parts;
    const monthShort = monthFull.substring(0, 3).toUpperCase();

    return (
        <div className="flex flex-col items-center justify-center bg-[#b70831]/90 text-white w-14 py-1 rounded-md shadow-lg  ">
            <div className="text-xs font-bold tracking-widest uppercase opacity-90">
                {monthShort}
            </div>
            <div className="text-3xl font-black leading-none">
                {day}
            </div>
            <div className="text-xs font-bold tracking-wider opacity-90">
                {year}
            </div>
        </div>
    );
};

// Helper to highlight numbers in text
const StatDisplay: React.FC<{ text: string }> = ({ text }) => {
    // Attempt to split number (with commas/plus) and text if it starts with digits
    const match = text.match(/^([\d,]+\+?)\s+(.*)$/);
    if (match) {
        return (
            <div className="flex flex-col items-center justify-center p-2 bg-brand-maroon/30 rounded-lg w-full">
                <span className="text-3xl md:text-3xl font-extrabold text-brand-red">{match[1]}</span>
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

const EventCardLayout = ({ title, backgroundImage, children, tag }: any) => (
    <div className="flex flex-col md:flex-row gap-4 h-full items-stretch w-full">
        {/* Left Side - Image */}
        <div className="w-full md:w-[35%] relative min-h-[300px] md:min-h-[280px] rounded-[2rem] overflow-hidden shrink-0 bg-[#0f0f0f] group shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 h-full">
                    <div className="absolute inset-0 bg-[#ff0440] mix-blend-multiply z-10 opacity-60"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
                    <img 
                    src={backgroundImage} 
                    alt={title} 
                    className="w-full h-full object-cover contrast-110"
                />
            </div>

            {/* Top Content */}
            <div 
                className="absolute inset-0 z-30 flex flex-col items-start pt-5 px-5"
                style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 80%)'
                }}
            >
                {tag && (
                    <span className="mb-4 px-6 py-2 rounded-full bg-[#b70831] text-white text-xs md:text-sm font-bold uppercase tracking-widest border border-[#b70831] backdrop-blur-sm shadow-[0_0_20px_rgba(183,8,49,0.4)]">
                        {tag}
                    </span>
                )}
                
                {/* Title Group */}
                <div className="flex flex-row items-start justify-start gap-3 w-full mt-auto mb-5">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white leading-[0.9] uppercase tracking-wide break-words w-full">
                        {title}
                    </h2>
                </div>
            </div>
        </div>

        {/* Vertical Dotted Separator */}
        <div className="hidden md:block w-px border-l-2 border-dotted border-[#a84f3b] opacity-40 my-6"></div>

        {/* Right Side - Content */}
        <div className="w-full md:w-[60%] flex flex-col justify-center space-y-3 py-2 pl-3">
            {children}
        </div>
    </div>
);

const EventsMediaPage: React.FC = () => {
    const { hash } = useLocation();
    const [activeTab, setActiveTab] = useState<string>(() => 
        hash === '#safe-well-lit' ? 'safe' : 'awareness'
    );
    const [activeGallery, setActiveGallery] = useState<GalleryState | null>(null);

    useEffect(() => {
        if (hash === '#safe-well-lit') {
            setActiveTab('safe');
            setTimeout(() => {
                const element = document.getElementById('safe-well-lit');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [hash]);

    const filteredEvents = React.useMemo(() => timelineEvents.filter(event => {
        if (activeTab === 'safe') return event.isPanel;
        if (activeTab === 'awareness') return !event.isPanel;
        return false;
    }).reverse(), [activeTab]);

    const isCollabTab = activeTab.startsWith('collab-');
    const activeCollabIndex = isCollabTab ? parseInt(activeTab.split('-')[1]) : -1;

    return (
        <div className="bg-brand-dark text-brand-light min-h-screen">
            <Hero
                title="Our Journey"
                subtitle="Events & Media"
                description="Explore our awareness programs, collaborations, and community initiatives making a difference."
                videoSrc={redmist}
                scrollY={0}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-0">

                {/* Upcoming Event Section */}
                {upcomingEvent && (
                    <section className="mt-0 mb-8">
                         <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <EventCardLayout 
                                title={upcomingEvent.title} 
                                backgroundImage={upcomingEvent.image}
                                tag="Upcoming Event"
                            >
                                <div>
                                    <div className="flex flex-col gap-2 mb-4">
                                         {/* Date & Time */}
                                         <div className="flex flex-wrap items-center gap-4">
                                             <div className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8a4a3b]" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-[#e1d5d5] text-base font-medium tracking-wide">{upcomingEvent.date}</span>
                                             </div>
                                             
                                             <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#a84f3b] opacity-60"></div>

                                             <div className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8a4a3b]" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-[#e1d5d5] text-base font-medium tracking-wide">{upcomingEvent.time}</span>
                                             </div>
                                         </div>

                                         {/* Location */}
                                         <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8a4a3b]" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-[#e1d5d5] text-base font-medium tracking-wide">{upcomingEvent.venue}</span>
                                         </div>
                                    </div>

                                    <p className="text-[#e1d5d5] leading-relaxed text-base mb-4">
                                        {upcomingEvent.description}
                                    </p>

                                    <div>
                                         <a 
                                            href={upcomingEvent.link} 
                                            className="group inline-flex items-center gap-2 text-[#2DD4BF] font-bold text-base hover:text-[#2DD4BF]/80 transition-colors cursor-not-allowed opacity-80"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <svg className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                            </svg>
                                            <span className="underline decoration-2 tracking-wider underline-offset-2">Register with Us (coming soon)</span>
                                        </a>
                                    </div>
                                </div>
                            </EventCardLayout>
                        </motion.div>
                    </section>
                )}

                {/* Tab Navigation */}
                <div id="safe-well-lit" className="flex flex-wrap items-center justify-center gap-2 mb-4 md:mb-6">
                    <button 
                        onClick={() => setActiveTab('awareness')}
                        className={`px-6 py-2 rounded-full font-bold tracking-widest uppercase text-xs md:text-sm transition-all duration-300 border ${
                            activeTab === 'awareness' 
                                ? 'bg-[#b70831] border-[#b70831] text-white shadow-[0_0_20px_rgba(183,8,49,0.4)] scale-105' 
                                : 'bg-black/40 border-[#5a2323] text-[#8a4a4a] hover:text-[#c25e5e] hover:border-[#c25e5e] hover:bg-[#1a0505]'
                        }`}
                    >
                        Safety Awareness Programs
                    </button>
                    <button 
                        onClick={() => setActiveTab('safe')}
                        className={`px-6 py-2 rounded-full font-bold tracking-widest uppercase text-xs md:text-sm transition-all duration-300 border ${
                            activeTab === 'safe' 
                                ? 'bg-[#b70831] border-[#b70831] text-white shadow-[0_0_20px_rgba(183,8,49,0.4)] scale-105' 
                                : 'bg-black/40 border-[#5a2323] text-[#8a4a4a] hover:text-[#c25e5e] hover:border-[#c25e5e] hover:bg-[#1a0505]'
                        }`}
                    >
                        Safe & Well-Lit Communities
                    </button>
                    {collaborationEvents.map((event, index) => (
                        <button 
                            key={`tab-collab-${index}`}
                            onClick={() => setActiveTab(`collab-${index}`)}
                            className={`px-6 py-2 rounded-full font-bold tracking-widest uppercase text-xs md:text-sm transition-all duration-300 border ${
                                activeTab === `collab-${index}`
                                    ? 'bg-[#b70831] border-[#b70831] text-white shadow-[0_0_20px_rgba(183,8,49,0.4)] scale-105' 
                                    : 'bg-black/40 border-[#5a2323] text-[#8a4a4a] hover:text-[#c25e5e] hover:border-[#c25e5e] hover:bg-[#1a0505]'
                            }`}
                        >
                            {event.title}
                        </button>
                    ))}
                </div>

                {/* Main Content Area */}
                <section className="mb-24">
                    <div className="mb-6 text-center space-y-2">
                        {/* Title could go here if needed, or left empty as in original */}
                    </div>

                    <AnimatePresence mode="wait">
                        {isCollabTab && activeCollabIndex !== -1 ? (
                            // @ts-ignore
                            collaborationEvents[activeCollabIndex].items ? (
                                <motion.div
                                    key="collab-items-grid"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0, y: 20 }}
                                    className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                                >
                                    {/* @ts-ignore */}
                                    {collaborationEvents[activeCollabIndex].items.map((item: any, index: number) => (
                                        <motion.div
                                            key={`collab-item-${index}`}
                                            variants={itemVariants}
                                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                            onClick={() =>
                                                item.galleryImages &&
                                                setActiveGallery({
                                                    title: item.title,
                                                    images: item.galleryImages,
                                                })
                                            }
                                            className="group bg-gradient-to-br from-[#2a100e] to-black rounded-xl overflow-hidden border border-brand-red/20 hover:border-brand-red/60 shadow-lg hover:shadow-brand-red/20 transition-all duration-300 flex flex-col h-full cursor-pointer"
                                        >
                                            {/* Image Container */}
                                            <div className="relative overflow-hidden shrink-0 h-64 w-full">
                                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
                                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050101] to-transparent z-10" />
                                                <motion.img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.6 }}
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="p-5 flex flex-col flex-1">
                                                <h3 className="text-xl font-semibold text-white uppercase mb-2 tracking-wide leading-snug transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-xs md:text-sm text-brand-light-text/80 mb-3 whitespace-pre-line">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="collab-content"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setActiveGallery({
                                        title: collaborationEvents[activeCollabIndex].title,
                                        images: collaborationEvents[activeCollabIndex].galleryImages || []
                                    })}
                                    className="group bg-gradient-to-br from-[#2a100e] to-black rounded-xl overflow-hidden border border-brand-red/20 hover:border-brand-red/60 shadow-lg hover:shadow-brand-red/20 transition-all duration-300 flex flex-col md:flex-row cursor-pointer md:h-[350px]"
                                >
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden shrink-0 w-full md:w-1/2 h-64 md:h-full">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 z-10" />
                                        <motion.img 
                                            src={collaborationEvents[activeCollabIndex].image} 
                                            alt={collaborationEvents[activeCollabIndex].title} 
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.8 }}
                                        />
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-6 md:p-10 flex flex-col flex-1 justify-center relative">
                                        <h3 className="text-xl md:text2xl font-bold text-white uppercase mb-4 tracking-wide leading-none">
                                            {collaborationEvents[activeCollabIndex].title}
                                        </h3>

                                        <p className="text-brand-light-text/90 text-sm md:text-base leading-relaxed max-w-xl">
                                            {collaborationEvents[activeCollabIndex].description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        ) : (
                            <motion.div 
                                key={activeTab}
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, y: 20 }}
                                className={`grid gap-6 ${activeTab === 'safe' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}
                            >
                                {filteredEvents.map((event, index) => (
                                    <motion.div 
                                        key={`${activeTab}-${index}`}
                                        variants={itemVariants}
                                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                        onClick={() =>
                                            event.galleryImages &&
                                            setActiveGallery({
                                                title: event.title,
                                                location: event.location,
                                                images: event.galleryImages,
                                            })
                                        }
                                        className={`group bg-gradient-to-br from-[#2a100e] to-black rounded-xl overflow-hidden border border-brand-red/20 hover:border-brand-red/60 shadow-lg hover:shadow-brand-red/20 transition-all duration-300 flex ${activeTab === 'safe' ? 'flex-col md:flex-row' : 'flex-col h-full'} ${
                                            event.galleryImages ? 'cursor-pointer' : ''
                                        }`}
                                    >
                                        {/* Image Container */}
                                        <div className={`relative overflow-hidden shrink-0 ${activeTab === 'safe' ? 'w-full md:w-2/5 h-64 md:h-auto' : 'h-48 w-full'}`}>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
                                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050101] to-transparent z-10" />
                                            <motion.img 
                                                src={event.image} 
                                                alt={event.title} 
                                                className="w-full h-full object-cover"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                            />
                                            
                                            {/* Date Badge */}
                                            <div className="absolute top-4 left-4 z-20">
                                                <StyledDateBadge dateStr={event.date} />
                                            </div>

                                            {/* Panel Badge */}
                                            {event.isPanel && (
                                                <div className="absolute top-4 right-4 z-20">
                                                    <div className="bg-[#eab308] px-3 py-1 rounded shadow-lg">
                                                    <span className="text-[11px] font-bold text-white uppercase tracking-wider">PANEL</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="p-5 flex flex-col flex-1">
                                            <h3 className="text-xl font-semibold text-white uppercase mb-2 tracking-wide leading-snug transition-colors">
                                                {event.title}
                                            </h3>
                                            <div className="flex items-start gap-2 mb-3 text-brand-light-text text-sm md:text-base font-medium">
                                                {!event.isPanel && (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 text-brand-red shrink-0 mt-0.5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                )}
                                                <span className="leading-snug">{event.location}</span>
                                            </div>

                                            {event.description && (
                                                event.isPanel ? (
                                                    <div className="mt-2 space-y-4 text-xs md:text-sm text-white">
                                                        <div>
                                                            <h4 className="font-bold text-[#a84f3b] uppercase tracking-wider mb-2">Panelists</h4>
                                                            <ul className="space-y-1 list-disc list-inside">
                                                                <li>Arun Pai – Founder, Bangalore Walks</li>
                                                                <li>Baishaki – Executive VP, Axis Bank</li>
                                                                <li>Vikram Rai – President, Bangalore Apartment Federation</li>
                                                                <li>Priyanka Upendra – Cine Actor</li>
                                                                <li>Snehal – Joint Commissioner, BBMP East</li>
                                                                <li>Pushpa S – Chief GM (Corporate Affairs), BESCOM</li>
                                                                <li>Poornima Shetty – Founder, Safety for Women Foundation</li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-[#a84f3b] uppercase tracking-wider mb-1">Moderator</h4>
                                                            <p>Nithya Mandhyam – Times of India</p>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <p className="text-xs md:text-sm text-brand-light-text/80 mb-3 whitespace-pre-line">
                                                        {event.description}
                                                    </p>
                                                )
                                            )}


                                            {/* Highlighted Stats Grid */}
                                            {event.stats && (
                                                <div className="mt-auto grid grid-cols-2 gap-2 pt-1">
                                                    {event.stats.slice(0, 4).map((stat, i) => (
                                                        <StatDisplay key={i} text={stat} />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>
            </div>

            <GalleryModal gallery={activeGallery} onClose={() => setActiveGallery(null)} />
        </div>
    );
};

export default EventsMediaPage;
