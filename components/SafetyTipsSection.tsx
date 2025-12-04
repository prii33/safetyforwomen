import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserGraduate, FaUserTie, FaUserClock, FaArrowRight } from 'react-icons/fa';
import { safetyTips } from '../data/mockData';
import bk1 from '../assets/bk1.jpg';

const SafetyTipsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'teens' | 'adults' | 'seniors'>('teens');

    const tabs: {
        id: 'teens' | 'adults' | 'seniors';
        label: string;
        color: string;
        textColor: string;
        title: string;
        description: string;
    }[] = [
        { 
            id: 'teens', 
            label: 'TEENS', 
            color: 'bg-[#7f1d1d]', // Red 900
            textColor: 'text-[#ef4444]', // Red 500 for text/icon
            title: 'Empower Your Teen Years', 
            description: "Navigating adolescence comes with unique challenges. Learn how to stay safe online, at school, and while out with friends."
        },
        { 
            id: 'adults', 
            label: 'ADULTS', 
            color: 'bg-[#450a0a]', // Red 950
            textColor: 'text-[#ef4444]',
            title: 'Stay Secure in Daily Life', 
            description: "From commuting to workplace safety, equip yourself with the knowledge to handle any situation with confidence."
        },
        { 
            id: 'seniors', 
            label: 'SENIORS', 
            color: 'bg-[#2a0a0a]', // Very Dark Red
            textColor: 'text-[#ef4444]',
            title: 'Safety & Independence', 
            description: "Maintain your independence while staying safe from scams and ensuring physical security at home and outside."
        },
    ];

    const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];
    const tips = safetyTips[activeTab as keyof typeof safetyTips];

    return (
        <section className="pb-12 md:pb-24 pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="text-xl md:text-xl uppercase font-semibold text-brand-red text-center mb-12  tracking-wider">Safety Tips for All Ages</h2>
                
                {/* Tabs Navigation */}
                <div className="flex justify-center">
                    <div className="flex flex-wrap justify-center">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`relative flex items-center gap-2 px-8 py-4 font-bold transition-all duration-300 rounded-t-2xl ${
                                    activeTab === tab.id ? 'text-white' : 'text-brand-dull-white hover:text-white'
                                }`}
                            >
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className={`absolute inset-0 rounded-t-2xl ${tab.color}`}
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2 tracking-wider text-l">
                                    {tab.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Card */}
                <div 
                    className="rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bk1})` }}
                >
                    <div className={`absolute inset-0 transition-colors duration-500 ${currentTab.color} opacity-70`} />
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-full relative z-10"
                        >
                        <div className="grid lg:grid-cols-2 min-h-[500px]">
                            {/* Left Content */}
                            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white">
                                <motion.h2 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
                                >
                                    {currentTab.title}
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed font-medium"
                                >
                                    {currentTab.description}
                                </motion.p>
                                
                                <button 
                                    className="flex items-center gap-2 bg-white text-brand-dark px-6 py-3 rounded-full font-bold text-base shadow-lg hover:bg-red-50 hover:scale-105 transition-all duration-300 w-fit mt-4"
                                >
                                    View Full Guide <span className="text-brand-red"><FaArrowRight /></span>
                                </button>
                            </div>

                            {/* Right Visual / Tips List */}
                            <div className=" backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center">
                                <div 
                                    className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-none"
                                    style={{
                                        scrollbarWidth: 'none',
                                        msOverflowStyle: 'none'
                                    }}
                                >
                                    <style>{`
                                        .scrollbar-none::-webkit-scrollbar {
                                            display: none;
                                        }
                                    `}</style>
                                    {tips.map((tip, idx) => (
                                        <motion.div 
                                            key={`${activeTab}-${idx}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + (idx * 0.05), duration: 0.3 }}
                                            className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-current hover:shadow-xl transition-shadow duration-300"
                                            style={{ borderColor: '#ef4444' }}
                                        >
                                            <h4 className="text-lg font-bold text-brand-brown mb-1">{tip.title}</h4>
                                            <p className="text-brand-brown-light text-sm leading-relaxed">{tip.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default SafetyTipsSection;
