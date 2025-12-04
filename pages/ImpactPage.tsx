
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { FaUsers, FaCity, FaCalendarCheck, FaHeart, FaHandPaper } from 'react-icons/fa';
import { volunteers } from '../data/mockData';
import type { Volunteer } from '../types';
import Map from '../components/Map';
import Hero from '../components/Hero';
import IncidentReportSection from '../components/IncidentReportSection';
import redmist from '@/assets/redmist2.mov';
import volunteerIcon from '../assets/volunteer.gif';
import citiesIcon from '../assets/cities.gif';
import programsIcon from '../assets/programs.gif';
import livesIcon from '../assets/lives.gif';
import pledgeIcon from '../assets/pledge.gif';

// Animated Counter Component
const AnimatedCounter = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 100, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString();
            }
        });
    }, [springValue]);

    return <span ref={ref} />;
};

const ImpactPage: React.FC = () => {
    const [activeVolunteer, setActiveVolunteer] = useState<Volunteer | null>(null);
    const [auditData, setAuditData] = useState({ streetName: '', safetyRating: 5, comments: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAuditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setAuditData({ ...auditData, [e.target.name]: e.target.value });
    };

    const handleAuditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const stats: { name: string; value: number; icon: React.ComponentType<any> | string; isImage?: boolean }[] = [
        { name: 'Volunteers', value: 5000, icon: volunteerIcon, isImage: true },
        { name: 'Cities Reached', value: 75, icon: citiesIcon, isImage: true },
        { name: 'Programs Held', value: 26, icon: programsIcon, isImage: true },
        { name: 'Lives Touched', value: 100000, icon: livesIcon, isImage: true },
        { name: 'Pledges Taken', value: 25000, icon: pledgeIcon, isImage: true },
    ];

    return (
        <div className="bg-brand-dark text-brand-light">
            <Hero
                title="Our Collective Impact"
                subtitle="Visualizing Our Journey"
                description="Visualizing our journey towards a safer India, one step at a time."
                videoSrc={redmist}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-12 pt-0">
                {/* Statistics Section */}
                <section className="mb-16 pt-12">
                    <h2 className="text-2xl md:text-xl font-semibold bg-clip-text text-brand-red uppercase tracking-wider mb-12 text-center">Movement by the Numbers</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={stat.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.15, translateY: -10 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="relative group flex flex-col items-center justify-center text-center cursor-pointer transition-colors duration-300"
                            >
                                <motion.div 
                                    className="mb-4 p-4 rounded-full group-hover:bg-[#7f1d1d] group-hover:text-white transition-colors duration-300 z-10"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {stat.isImage ? (
                                        <img src={stat.icon as string} alt={stat.name} className="w-16 h-16 object-contain" />
                                    ) : (
                                        // @ts-ignore
                                        <stat.icon className="w-16 h-16 text-[#8a3c3c] group-hover:text-brand-red transition-colors duration-300" />
                                    )}
                                </motion.div>
                                <h3 className="text-5xl font-bold text-brand-light-text mb-2 z-10 relative">
                                    <AnimatedCounter value={stat.value} />+
                                </h3>
                                <p className="text-white font-bold uppercase text-sm tracking-wide z-10 relative group-hover:text-red-200 transition-colors duration-300">{stat.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Volunteer Map Section */}
                <section className="mt-2 p-8 rounded-2xl shadow-2xl bg-[#000000] backdrop-blur-sm transform hover:scale-[1.01] transition-all duration-300 border border-brand-maroon/30">
                    <h2 className="text-2xl md:text-xl font-semibold text-brand-red bg-clip-text mb-4 text-center uppercase tracking-wider">Our Pan-India Volunteer Network</h2>
                    <p className="text-center text-brand-dull-white mb-8 text-lg opacity-80 max-w-2xl mx-auto">Hover over the locations to explore our growing presence across the nation.</p>
                    <div className="relative overflow-hidden rounded-xl shadow-inner border border-brand-maroon">
                        <Map volunteers={volunteers} />
                    </div>
                </section>

                {/* Incident Report Section */}
                <IncidentReportSection />

                {/* Street Safety Audit */}
                <section className="mt-8">
                     <div className="p-8 rounded-2xl shadow-2xl bg-[#000000] border border-brand-maroon/50 backdrop-blur-sm max-w-4xl mx-auto">
                        <h2 className="text-2xl font-semibold text-brand-red  bg-clip-text mb-6 uppercase">Audit Your Street's Safety</h2>
                        <p className="text-brand-dull-white mb-8 text-lg">Your feedback helps us identify and address unsafe areas. Fill out this quick survey to contribute to our community safety heatmap.</p>
                        {isSubmitted ? (
                            <div className="text-center p-8 bg-green-900/20 border border-green-800 text-green-100 rounded-xl backdrop-blur-sm">
                                <h3 className="text-2xl font-bold mb-2">Thank you for your submission!</h3>
                                <p className="text-green-200">Your audit data has been recorded and will contribute to our safety map.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleAuditSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label htmlFor="streetName" className="block text-sm font-semibold text-brand-dull-white mb-2 group-focus-within:text-brand-red transition-colors">Street / Area Name</label>
                                        <input 
                                            type="text" 
                                            name="streetName" 
                                            id="streetName" 
                                            value={auditData.streetName} 
                                            onChange={handleAuditChange} 
                                            className="block w-full px-4 py-3 bg-brand-brown/50 border border-brand-maroon text-white rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-all duration-300 placeholder-brand-brown-light hover:border-brand-maroon" 
                                            placeholder="Enter location..."
                                            required 
                                        />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="safetyRating" className="block text-sm font-semibold text-brand-dull-white mb-2 group-focus-within:text-brand-red transition-colors">Safety Rating (1=Unsafe, 10=Very Safe)</label>
                                        <select 
                                            name="safetyRating" 
                                            id="safetyRating" 
                                            value={auditData.safetyRating} 
                                            onChange={handleAuditChange} 
                                            className="block w-full px-4 py-3 bg-brand-brown/50 border border-brand-maroon text-white rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-all duration-300 hover:border-brand-maroon cursor-pointer"
                                        >
                                            {Array.from({ length: 10 }, (_, i) => i + 1).map(num => <option key={num} value={num} className="bg-brand-brown">{num} - {num === 1 ? 'Very Unsafe' : num === 10 ? 'Very Safe' : ''}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="group">
                                    <label htmlFor="comments" className="block text-sm font-semibold text-brand-dull-white mb-2 group-focus-within:text-brand-red transition-colors">Comments</label>
                                    <textarea 
                                        name="comments" 
                                        id="comments" 
                                        rows={4} 
                                        value={auditData.comments} 
                                        onChange={handleAuditChange} 
                                        className="block w-full px-4 py-3 bg-brand-brown/50 border border-brand-maroon text-white rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-all duration-300 placeholder-brand-brown-light hover:border-brand-maroon"
                                        placeholder="e.g., poor lighting, no police presence..."
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-gradient-to-r from-brand-red to-red-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-red-900/20 hover:shadow-red-900/40 hover:from-red-600 hover:to-red-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                                >
                                    Submit Audit
                                </button>
                            </form>
                        )}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ImpactPage;
