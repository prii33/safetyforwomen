import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaEye, FaHandHoldingHeart, FaGlobeAsia } from 'react-icons/fa';
import { partners } from '../data/mockData';
import LogoLoop from '../components/LogoLoop';
import LogoCloud from '../components/LogoCloud';
import Hero from '../components/Hero';
import redmist from '@/assets/redmist2.mov';
import storyBg from '../assets/story.png';
import goalIcon from '../assets/goal.gif';
import visionIcon from '../assets/vision.gif';
import valuesIcon from '../assets/values.gif';
import impactIcon from '../assets/impact.gif';
import yourRoleIcon from '../assets/yourrole.gif';

const AboutPage: React.FC = () => {
    return (
        <div 
            className="bg-brand-dark text-brand-light min-h-screen"
            style={{
                backgroundImage: `url(${storyBg})`,
                backgroundSize: 'contain',
                backgroundPosition: 'left',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="relative z-10">
                <div className="relative">
                    <div 
                        className="absolute inset-0 -z-10"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.9) 75%, transparent 100%)'
                        }}
                    />
                    <Hero
                        title="About the Movement"
                        subtitle="Our Story, Mission, and Vision"
                        
                        videoSrc={redmist}
                    />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Our Story - Layout inspired by user image */}
                        <div className="py-12 mx-auto relative">
                            {/* Top Left Section */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-col items-start "
                            >
                                <div className="border-l-2 border-[#5a2301]/60 pl-6 py-2  text-left">
                                    <p className="text-brand-light-text text-lg leading-relaxed">
                                       Born from the urgent need for change following tragic gender-based violence incidents, the Safety for Women Movement transforms distress into meaningful action. Uniting members from all backgrounds - including citizens, communities, law enforcement, and policymakers. We focus on practical solutions, collaboration, and sustainable impact.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Main Title - Removed to merge with Pillars section */}
                           

                            {/* Bottom Right Section */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col items-end"
                            >
                               
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    {/* Quadrant Analysis Layout */}
                    <div className="flex flex-col xl:flex-row gap-16 py-6 items-start">
                        {/* Left Title Block */}
                        <div className="xl:w-1/3 xl:sticky xl:top-48">
               
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8"><p className="text-brand-light-text text-lg leading-relaxed mt-10">
                                      We focus on practical solutions, collaboration, and sustainable impact.
                                    </p>
                                Our strength lies <span className="text-brand-red"><br></br>in our unity</span><br/>
                                
                            </h2>




                           
                        </div>

                        {/* Right Staggered Grid */}
                        <div className="xl:w-2/3">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Column 1 (Mission, Values) */}
                                <div className="space-y-8">
                                    {/* Mission */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="relative bg-gradient-to-br from-[#2a100e] to-black p-6 rounded-3xl transition-all duration-500 group overflow-hidden hover:bg-[#3d1a15]/30"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl group-hover:bg-brand-red/10 transition-all duration-500"></div>
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-6 mb-6">
                                                <div className="w-20 h-20 p-2 bg-brand-red/10 rounded-full group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                                                    <img src={goalIcon} alt="Mission" className="w-full h-full object-contain" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-brand-red uppercase tracking-[0.2em]">Mission</h3>
                                            </div>
                                            
                                            <ul className="space-y-2">
                                                {[
                                                    "Turn fear, anger, and frustration into concrete action.",
                                                    "Focus on the question: “What can we change today?”",
                                                    "Work on simple, local solutions that can be repeated across India."
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-brand-light-text group-hover:text-white transition-colors duration-300">
                                                        <span className="w-1.5 h-1.5 mt-2 bg-brand-red rounded-full flex-shrink-0"></span>
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>

                                    {/* Values */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                        className="relative bg-gradient-to-br from-[#2a100e] to-black p-6 rounded-3xl transition-all duration-500 group overflow-hidden hover:bg-[#3d1a15]/30"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl group-hover:bg-brand-red/10 transition-all duration-500"></div>
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-6 mb-6">
                                                <div className="w-20 h-20 p-2 bg-brand-red/10 rounded-full group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                                                    <img src={valuesIcon} alt="Values" className="w-full h-full object-contain" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-brand-red uppercase tracking-[0.2em]">Values</h3>
                                            </div>
                                            
                                            <ul className="space-y-2">
                                                {[
                                                    "Non-political, non-religious, non-partisan.",
                                                    "Real change comes from direct action, collaboration, and community ownership."
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-brand-light-text group-hover:text-white transition-colors duration-300">
                                                        <span className="w-1.5 h-1.5 mt-2 bg-brand-red rounded-full flex-shrink-0"></span>
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>

                                    {/* Your Role */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                        className="relative bg-gradient-to-br from-[#2a100e] to-black p-6 rounded-3xl transition-all duration-500 group overflow-hidden hover:bg-[#3d1a15]/30"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl group-hover:bg-brand-red/10 transition-all duration-500"></div>
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-6 mb-6">
                                                <div className="w-20 h-20 p-2 bg-brand-red/10 rounded-full group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                                                    <img src={yourRoleIcon} alt="Your Role" className="w-full h-full object-contain" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-brand-red uppercase tracking-[0.2em]">Your Role</h3>
                                            </div>
                                            
                                            <ul className="space-y-2">
                                                {[
                                                    "Everyone has something to offer – an hour a week, a skill, a contact, or a lived experience.",
                                                    "Join a team, lead a small action in your city, and help rewrite the story of India from unsafe and helpless to aware, prepared, and united for safety."
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-brand-light-text group-hover:text-white transition-colors duration-300">
                                                        <span className="w-1.5 h-1.5 mt-2 bg-brand-red rounded-full flex-shrink-0"></span>
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Column 2 (Vision, Plan) - Staggered */}
                                <div className="space-y-8 md:mt-16">
                                    {/* Vision */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                        className="relative bg-gradient-to-br from-[#2a100e] to-black p-6 rounded-3xl transition-all duration-500 group overflow-hidden hover:bg-[#3d1a15]/30"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl group-hover:bg-brand-red/10 transition-all duration-500"></div>
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-6 mb-6">
                                                <div className="w-20 h-20 p-2 bg-brand-red/10 rounded-full group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                                                    <img src={visionIcon} alt="Vision" className="w-full h-full object-contain" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-brand-red uppercase tracking-[0.2em]">Vision</h3>
                                            </div>
                                            
                                            <p className="text-brand-light-text text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                                                Change the narrative that “India is unsafe for women” by taking everyday, practical steps that make our streets, homes, workplaces, and public spaces safer.
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* The Plan */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                        className="relative bg-gradient-to-br from-[#2a100e] to-black p-6 rounded-3xl transition-all duration-500 group overflow-hidden hover:bg-[#3d1a15]/30"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl group-hover:bg-brand-red/10 transition-all duration-500"></div>
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-6 mb-6">
                                                <div className="w-20 h-20 p-2 bg-brand-red/10 rounded-full group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                                                    <img src={impactIcon} alt="The Plan" className="w-full h-full object-contain" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-brand-red uppercase tracking-[0.2em]">The Plan</h3>
                                            </div>
                                            
                                            <ul className="space-y-2">
                                                {[
                                                    "Build Safety for Women teams in every state and union territory.",
                                                    "Bring together “doers” – citizens, experts, volunteers, and authorities – who are ready to act, not just complain.",
                                                    "Connect people who can give time, skills, networks, or resources and channel them into clear initiatives."
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-brand-light-text group-hover:text-white transition-colors duration-300">
                                                        <span className="w-1.5 h-1.5 mt-2 bg-brand-red rounded-full flex-shrink-0"></span>
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <LogoCloud />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
