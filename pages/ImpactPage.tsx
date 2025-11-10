
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { impactStats, volunteers } from '../data/mockData';
import type { Volunteer } from '../types';
import Map from '../components/Map';
import Hero from '../components/Hero';

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

    return (
        <div className="bg-brand-dark text-brand-light">
            <Hero
                title="Our Collective Impact"
                subtitle="Visualizing Our Journey"
                description="Visualizing our journey towards a safer India, one step at a time."
                videoSrc="/assets/redmist2.mp4"
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                {/* Statistics Section */}
                <section className="mt-16 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-brand-red mb-6 text-center">Movement by the Numbers</h2>
                    <div style={{ width: '100%', height: 400 }}>
                        <ResponsiveContainer>
                            <BarChart data={impactStats} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip wrapperClassName="!bg-gray-700 !border-gray-600 !rounded-md !shadow-lg" />
                                <Legend />
                                <Bar dataKey="value" fill="#DC2626" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </section>

                {/* Volunteer Map Section */}
                <section className="mt-16 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-brand-red mb-2 text-center">Our Pan-India Volunteer Network</h2>
                    <p className="text-center text-gray-400 mb-6">Hover over the dots to see our presence across the nation.</p>
                    <div className="relative">
                        <Map volunteers={volunteers} />
                    </div>
                </section>

                {/* Street Safety Audit & Heatmap */}
                <section className="mt-16">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-brand-red mb-4">Audit Your Street's Safety</h2>
                            <p className="text-gray-400 mb-6">Your feedback helps us identify and address unsafe areas. Fill out this quick survey to contribute to our community safety heatmap.</p>
                            {isSubmitted ? (
                                <div className="text-center p-8 bg-green-900 text-green-100 rounded-lg">
                                    <h3 className="text-xl font-bold">Thank you for your submission!</h3>
                                    <p>Your audit data has been recorded and will contribute to our safety map.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleAuditSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="streetName" className="block text-sm font-medium text-gray-300">Street / Area Name</label>
                                        <input type="text" name="streetName" id="streetName" value={auditData.streetName} onChange={handleAuditChange} className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="safetyRating" className="block text-sm font-medium text-gray-300">Safety Rating (1=Unsafe, 10=Very Safe)</label>
                                        <select name="safetyRating" id="safetyRating" value={auditData.safetyRating} onChange={handleAuditChange} className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red">
                                            {Array.from({ length: 10 }, (_, i) => i + 1).map(num => <option key={num} value={num}>{num}</option>)}
                                        </select>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="comments" className="block text-sm font-medium text-gray-300">Comments (e.g., poor lighting, no police presence)</label>
                                        <textarea name="comments" id="comments" rows={3} value={auditData.comments} onChange={handleAuditChange} className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-brand-red text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors font-semibold">Submit Audit</button>
                                </form>
                            )}
                        </div>
                        <div className="p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
                            <h2 className="text-2xl font-bold text-brand-red mb-4 text-center">Community Safety Heatmap</h2>
                            <p className="text-gray-400 mb-6 text-center">This map highlights areas based on citizen safety audits. Red indicates areas needing attention.</p>
                            <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center relative overflow-hidden">
                                <img src="https://picsum.photos/seed/map/500/300" alt="Map of a city" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/50 via-yellow-500/30 to-green-500/20 mix-blend-multiply"></div>
                                <p className="absolute text-white font-bold text-lg bg-black/50 p-2 rounded">CONCEPTUAL HEATMAP</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ImpactPage;
