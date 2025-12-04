
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

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-2">
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
                <section className="mt-16">
                    <h2 className="text-xl font-semibold uppercase text-brand-red text-center mb-8 tracking-wider">Safety Apps & Wearables</h2>
                     <div className="grid md:grid-cols-2 gap-12">
                         <div className="p-8 rounded-lg shadow-lg">
                             <h3 className="font-bold text-brand-red text-2xl mb-4">Authorized Safety Apps</h3>
                             <ul className="space-y-3 list-disc list-inside text-brand-light-text">
                                <li><strong>Himmat Plus:</strong> Official app by Delhi Police for women's safety.</li>
                                <li><strong>My Safetipin:</strong> Provides safety scores for areas to help you plan safer routes.</li>
                                <li><strong>SHOUT:</strong> An emergency app connecting you with a network of responders.</li>
                             </ul>
                         </div>
                         <div className="p-8 rounded-lg shadow-lg">
                             <h3 className="font-bold text-brand-red text-2xl mb-4">Modern Safety Devices</h3>
                             <ul className="space-y-3 list-disc list-inside text-brand-light-text">
                                <li><strong>Smart Jewelry:</strong> Bracelets and pendants with discreet SOS buttons.</li>
                                <li><strong>Personal Alarms:</strong> Keychain devices that emit a loud sound to deter attackers.</li>
                                <li><strong>GPS Trackers:</strong> Small devices that can be placed in a bag or worn.</li>
                             </ul>
                         </div>
                     </div>
                </section>
            </div>
        </div>
    );
};

export default ResourcesPage;
