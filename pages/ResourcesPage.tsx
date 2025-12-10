
import React from 'react';
import { motion } from 'framer-motion';
import { survivorSupport } from '../data/mockData';
import type { Resource } from '../types';
import Hero from '../components/Hero';
import SafetyTipsSection from '../components/SafetyTipsSection';
import SelfDefenseCards from '../components/SelfDefenseCards';
import SurvivorSupportCard from '../components/SurvivorSupportCard';
import redmist from '@/assets/redmist2.mov';

const ResourcesPage: React.FC = () => {
    return (
        <div className="bg-brand-dark text-brand-light">
            <Hero
                title="Knowledge & Support"
                subtitle="Empowerment Through Information"
                description="Empower yourself with essential safety information, skills, and access to support networks."
                videoSrc={redmist}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Safety Tips Section */}
                <SafetyTipsSection />
                
                {/* Self-Defence Demos */}
                <section className="mt-2">
                    <h2 className="text-xl font-semibold uppercase text-brand-red text-center mb-8 tracking-wider">Self-Defense Demos</h2>
                    <SelfDefenseCards />
                </section>

                {/* Survivor Support System */}
                <section className="mt-16">
                    <h2 className="text-xl font-semibold uppercase text-brand-red text-center mb-8 tracking-wider">Survivor Support Network</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {survivorSupport.map(resource => <SurvivorSupportCard key={resource.title} resource={resource} />)}
                    </div>
                </section>

                 {/* Safety Apps & Devices */}
                <section className="mt-20 mb-12">
                    <h2 className="text-xl font-semibold uppercase text-brand-red text-center mb-10 tracking-wider">Safety Apps & Wearables</h2>
                     <div className="grid md:grid-cols-2 gap-8">
                         {/* Apps Card */}
                         <motion.div 
                            whileHover={{ y: -5 }}
                            className="relative bg-gradient-to-br from-[#2a100e] to-black p-1 rounded-3xl transition-all duration-500 group overflow-hidden hover:bg-[#3d1a15]/30"
                         >
                             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl group-hover:bg-brand-red/10 transition-all duration-500"></div>
                             
                             <div className="relative p-8 sm:p-10 z-10">
                                 <div className="flex items-center mb-6">
                                     <div className="p-3 bg-brand-red/10 rounded-xl mr-4 text-brand-red group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                     </div>
                                     <h3 className="text-2xl font-bold text-white group-hover:text-brand-red transition-colors duration-300">Authorized Safety Apps</h3>
                                 </div>
                                 
                                 <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-brand-red flex-shrink-0" />
                                        <div>
                                            <strong className="text-white block mb-1">Himmat Plus</strong>
                                            <p className="text-brand-light-text text-sm group-hover:text-white transition-colors duration-300">Official app by Delhi Police for women's safety with direct emergency line.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-brand-red flex-shrink-0" />
                                        <div>
                                            <strong className="text-white block mb-1">My Safetipin</strong>
                                            <p className="text-brand-light-text text-sm group-hover:text-white transition-colors duration-300">Provides safety scores for areas to help you plan safer routes.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-brand-red flex-shrink-0" />
                                        <div>
                                            <strong className="text-white block mb-1">SHOUT</strong>
                                            <p className="text-brand-light-text text-sm group-hover:text-white transition-colors duration-300">An emergency app connecting you instantly with a network of responders.</p>
                                        </div>
                                    </li>
                                 </ul>
                             </div>
                         </motion.div>

                         {/* Devices Card */}
                         <motion.div 
                            whileHover={{ y: -5 }}
                            className="relative bg-gradient-to-br from-[#2a100e] to-black p-1 rounded-3xl transition-all duration-500 group overflow-hidden hover:bg-[#3d1a15]/30"
                         >
                             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl group-hover:bg-brand-red/10 transition-all duration-500"></div>
                             
                             <div className="relative p-8 sm:p-10 z-10">
                                 <div className="flex items-center mb-6">
                                     <div className="p-3 bg-brand-red/10 rounded-xl mr-4 text-brand-red group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                     </div>
                                     <h3 className="text-2xl font-bold text-white group-hover:text-brand-red transition-colors duration-300">Modern Safety Devices</h3>
                                 </div>
                                 
                                 <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-brand-red flex-shrink-0" />
                                        <div>
                                            <strong className="text-white block mb-1">Smart Jewelry</strong>
                                            <p className="text-brand-light-text text-sm group-hover:text-white transition-colors duration-300">Elegant bracelets and pendants with discreet SOS buttons.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-brand-red flex-shrink-0" />
                                        <div>
                                            <strong className="text-white block mb-1">Personal Alarms</strong>
                                            <p className="text-brand-light-text text-sm group-hover:text-white transition-colors duration-300">Keychain devices that emit a loud sound to deter potential attackers.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-brand-red flex-shrink-0" />
                                        <div>
                                            <strong className="text-white block mb-1">GPS Trackers</strong>
                                            <p className="text-brand-light-text text-sm group-hover:text-white transition-colors duration-300">Small, concealable devices that can be placed in a bag or worn.</p>
                                        </div>
                                    </li>
                                 </ul>
                             </div>
                         </motion.div>
                     </div>
                </section>
            </div>
        </div>
    );
};

export default ResourcesPage;
