import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { FaUsers, FaCity, FaCalendarCheck, FaHeart, FaHandPaper, FaChevronDown } from 'react-icons/fa';
import Hero from '../components/Hero';
import { GlowingCard } from '../components/GlowingCard';
import redmist from '@/assets/redmist2.mov';
import volunteerIcon from '../assets/volunteer.gif';
import citiesIcon from '../assets/cities.gif';
import programsIcon from '../assets/programs.gif';
import livesIcon from '../assets/lives.gif';
import pledgeIcon from '../assets/pledge.gif';
import networkIcon from '../assets/network.gif';
import downloadIcon from '../assets/download.gif';

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
    const stats: { name: string; value: number; icon: React.ComponentType<any> | string; isImage?: boolean }[] = [
        { name: 'Community Members', value: 1375, icon: networkIcon, isImage: true },
        { name: 'Volunteers', value: 139, icon: volunteerIcon, isImage: true },
        { name: 'Programs Held', value: 26, icon: programsIcon, isImage: true },
        { name: 'Lives Touched', value: 4000, icon: livesIcon, isImage: true },
        { name: 'Pledges Taken', value: 4500, icon: pledgeIcon, isImage: true },
        { name: 'KSP App Downloads', value: 2240, icon: downloadIcon, isImage: true },
    ];

    return (
        <div className="bg-brand-dark text-brand-light">
            <Hero
                title="Our Collective Impact"
                subtitle="Visualizing Our Journey"
                description="Visualizing our journey towards a safer India, one step at a time."
                videoSrc={redmist}
                scrollY={0}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-12 pt-0">
                {/* Statistics Section */}
                <section className="mb-8 pt-8">
                    <h2 className="text-2xl md:text-2xl font-semibold bg-clip-text text-brand-red uppercase tracking-wider mb-8 text-center">Movement by the Numbers</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                        {stats.map((stat, index) => (
                            <GlowingCard 
                                key={stat.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover="hover"
                                variants={{ hover: { scale: 1.02 } }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <div className={`flex flex-col items-center justify-center w-full transition-transform duration-500 ${stat.name === 'KSP App Downloads' ? 'group-hover:-translate-y-56' : ''}`}>
                                    <motion.div 
                                        className="mb-4 p-3 rounded-full bg-brand-brown/20 group-hover:bg-[#7f1d1d] group-hover:text-white transition-colors duration-300 z-10"
                                        variants={{ hover: { scale: 1.3 } }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
        {stat.isImage ? (
                                            <img src={stat.icon as string} alt={stat.name} className="w-16 h-16 object-contain" />
                                        ) : (
                                            // @ts-ignore
                                            <stat.icon className="w-16 h-16 text-[#8a3c3c] group-hover:text-brand-red transition-colors duration-300" />
                                        )}
                                    </motion.div>
                                    <h3 className="text-4xl lg:text-5xl font-bold text-brand-light-text mb-2 z-10 relative">
                                        <AnimatedCounter value={stat.value} />+
                                    </h3>
                                    <p className="text-brand-dull-white font-bold uppercase text-sm tracking-wide z-10 relative group-hover:text-red-200 transition-colors duration-300">{stat.name}</p>
                                    {stat.name === 'KSP App Downloads' && (
                                        <div className="absolute top-full left-0 w-full flex flex-col items-center space-y-3 pt-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            <div className="h-px w-24 bg-brand-red/30 mb-2"></div>
                                                <p className="text-brand-light-text font-bold text-base tracking-wide">Download Karnataka State Police App</p>
                                                <p className="text-base text-brand-dull-white/80 max-w-[250px] leading-relaxed">
                                                    KSP Mobile App is the official mobile app of the Karnataka State Police.
                                                </p>
                                                <div className="flex gap-3 pt-2">
                                                    <a 
                                                        href="https://play.google.com/store/apps/details?id=com.capulustech.ksppqrs" 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="px-4 py-2 bg-brand-red hover:bg-red-700 text-white text-base font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-red-900/50 flex items-center gap-2"
                                                    >
                                                        <span>Android</span>
                                                    </a>
                                                    <a 
                                                        href="https://apps.apple.com/in/app/karnataka-state-police/id1358964762" 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="px-4 py-2 bg-brand-red hover:bg-red-700 text-white text-base font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-red-900/50 flex items-center gap-2"
                                                    >
                                                        <span>iOS</span>
                                                    </a>
                                                </div>
                                            </div>
                                    )}
                                </div>
                                {stat.name === 'KSP App Downloads' && (
                                    <div className="absolute bottom-4 right-4 text-brand-red/80 animate-bounce group-hover:opacity-0 transition-opacity duration-300 z-20">
                                        <FaChevronDown size={20} />
                                    </div>
                                )}
                            </GlowingCard>
                        ))}
                    </div>
                </section>



            </div>
        </div>
    );
};

export default ImpactPage;
