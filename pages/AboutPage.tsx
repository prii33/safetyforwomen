
import React from 'react';
import { initiatives, partners } from '../data/mockData';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-brand-purple">About the Movement</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
                        A diverse, non-partisan, non-political, and pan-India collective dedicated to creating a safer nation for women.
                    </p>
                </div>

                <div className="mt-16 grid md:grid-cols-2 gap-16 items-center">
                    <img src="https://picsum.photos/600/400?random=100" alt="Group of diverse people" className="rounded-lg shadow-xl" />
                    <div>
                        <h2 className="text-3xl font-bold text-brand-purple">Our Story</h2>
                        <p className="mt-4 text-gray-600">
                            Born from the urgent need for change following tragic gender-based violence incidents, the Safety for Women Movement transforms distress and outrage into meaningful action. Uniting members from all backgrounds, we focus on practical solutions, community collaboration, and sustainable impact.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Our strength is in our unity. We believe that by working together—citizens, communities, law enforcement, and policymakers—we can build a future where every woman in India is safe, respected, and empowered.
                        </p>
                    </div>
                </div>

                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center text-brand-purple">Our Core Objectives</h2>
                    <div className="mt-10 grid gap-8 md:grid-cols-3">
                        {initiatives.map(item => (
                            <div key={item.id} className="bg-brand-light p-6 rounded-lg">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 text-brand-pink">{item.icon}</div>
                                    <h3 className="text-lg font-semibold text-brand-purple">{item.title}</h3>
                                </div>
                                <p className="mt-3 text-sm text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <h2 className="text-3xl font-bold text-brand-purple">Aligned with UN SDGs</h2>
                    <p className="mt-4 text-gray-600">We are committed to advancing the UN Sustainable Development Goals, particularly:</p>
                    <div className="flex justify-center space-x-8 mt-6">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded-full mx-auto font-bold text-lg">Goal 5</div>
                            <p className="mt-2 font-semibold">Gender Equality</p>
                        </div>
                        <div className="text-center">
                             <div className="w-24 h-24 bg-orange-500 text-white flex items-center justify-center rounded-full mx-auto font-bold text-lg">Goal 11</div>
                            <p className="mt-2 font-semibold">Sustainable Cities</p>
                        </div>
                        <div className="text-center">
                            <div className="w-24 h-24 bg-red-500 text-white flex items-center justify-center rounded-full mx-auto font-bold text-lg">Goal 16</div>
                            <p className="mt-2 font-semibold">Peace & Justice</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center text-brand-purple">Our Partners & Collaborators</h2>
                    <p className="mt-4 text-center max-w-2xl mx-auto text-gray-600">We are grateful for the support of organizations who share our vision for a safer India.</p>
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                        {partners.map(partner => (
                            <div key={partner.name} className="flex justify-center">
                                <img src={partner.logoUrl} alt={partner.name} className="h-16 object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;
