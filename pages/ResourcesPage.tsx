
import React, { useState } from 'react';
import { safetyTips, survivorSupport } from '../data/mockData';
import type { Resource } from '../types';
import Hero from '../components/Hero';

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => (
    <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h3 className="font-bold text-brand-red text-lg">{resource.title}</h3>
        <p className="text-brand-light-text mt-2 text-sm">{resource.description}</p>
        <a href={resource.link} className="text-brand-red hover:underline mt-4 inline-block font-semibold text-sm">Learn More &rarr;</a>
    </div>
);

const ResourcesPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('teens');

    return (
        <div className="bg-brand-dark text-brand-light">
            <Hero
                title="Knowledge & Support"
                subtitle="Empowerment Through Information"
                description="Empower yourself with essential safety information, skills, and access to support networks."
                videoSrc="/assets/redmist2.mp4"
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                {/* Safety Tips Section */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-brand-red text-center mb-8">Safety Tips for All Ages</h2>
                    <div className="max-w-3xl mx-auto rounded-lg shadow-lg p-8">
                        <div className="flex justify-center border-b border-gray-700">
                            <button onClick={() => setActiveTab('teens')} className={`px-6 py-3 font-semibold ${activeTab === 'teens' ? 'text-brand-red border-b-2 border-brand-red' : 'text-brand-light-text'}`}>For Teens</button>
                            <button onClick={() => setActiveTab('adults')} className={`px-6 py-3 font-semibold ${activeTab === 'adults' ? 'text-brand-red border-b-2 border-brand-red' : 'text-brand-light-text'}`}>For Adults</button>
                            <button onClick={() => setActiveTab('seniors')} className={`px-6 py-3 font-semibold ${activeTab === 'seniors' ? 'text-brand-red border-b-2 border-brand-red' : 'text-brand-light-text'}`}>For Seniors</button>
                        </div>
                        <div className="pt-6">
                           {safetyTips[activeTab as keyof typeof safetyTips].map(tip => (
                               <div key={tip.title} className="mb-4">
                                   <h4 className="font-semibold text-brand-red">{tip.title}</h4>
                                   <p className="text-brand-light-text">{tip.description}</p>
                               </div>
                           ))}
                        </div>
                    </div>
                </section>
                
                {/* Self-Defence Demos */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-brand-red text-center mb-8">Self-Defense Demos</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="rounded-lg shadow-lg overflow-hidden">
                                <img src={`https://picsum.photos/400/225?random=def${i}`} alt={`Self-defense move ${i}`} className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <h3 className="font-bold text-brand-red">Basic Escape Technique {i}</h3>
                                    <p className="text-brand-light-text mt-2 text-sm">A short video demonstrating a crucial self-defense maneuver.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Survivor Support System */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-brand-red text-center mb-8">Survivor Support Network</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {survivorSupport.map(resource => <ResourceCard key={resource.title} resource={resource} />)}
                    </div>
                </section>

                 {/* Safety Apps & Devices */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-brand-red text-center mb-8">Safety Apps & Wearables</h2>
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
