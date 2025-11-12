
import React, { useState } from 'react';
import { PledgeForm } from '../components/PledgeForm';
import Hero from '../components/Hero';
import redmist from '@/assets/redmist2.mov';

const GetInvolvedPage: React.FC = () => {
    const [request, setRequest] = useState({ name: '', email: '', organization: '', type: 'School', message: '' });
    const [isRequestSubmitted, setIsRequestSubmitted] = useState(false);

    const handleRequestChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setRequest({ ...request, [e.target.name]: e.target.value });
    };

    const handleRequestSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsRequestSubmitted(true);
    };

    return (
        <div className="bg-brand-dark text-brand-light">
            <Hero
                title="Join The Movement"
                subtitle="Be the Change"
                description="Your voice, time, and commitment can create a ripple effect of change. Here’s how you can contribute."
                videoSrc={redmist}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                {/* Take the Pledge */}
                <section className="mt-16 p-8 md:p-12 rounded-lg shadow-lg">
                     <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-brand-red">1. Take The Safety Pledge</h2>
                        <p className="mt-2 max-w-2xl mx-auto text-brand-light-text">
                            A personal commitment to fostering a safer environment for women in your community.
                        </p>
                    </div>
                    <PledgeForm />
                </section>

                {/* Request a Program */}
                <section className="mt-16 p-8 md:p-12 rounded-lg shadow-lg">
                     <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-brand-red">2. Request an Awareness Program</h2>
                        <p className="mt-2 max-w-2xl mx-auto text-brand-light-text">
                            Bring our workshops to your school, college, workplace, or community.
                        </p>
                    </div>
                     {isRequestSubmitted ? (
                        <div className="text-center p-8 bg-green-900 text-green-100 rounded-lg">
                            <h3 className="text-xl font-bold">Thank you!</h3>
                            <p>Your request for an awareness program has been received. Our team will get in touch with you shortly.</p>
                        </div>
                    ) : (
                    <form onSubmit={handleRequestSubmit} className="max-w-2xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
                                <input type="text" name="name" id="name" value={request.name} onChange={handleRequestChange} required className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red" />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                                <input type="email" name="email" id="email" value={request.email} onChange={handleRequestChange} required className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red" />
                            </div>
                             <div>
                                <label htmlFor="organization" className="block text-sm font-medium text-gray-300">Organization / Community Name</label>
                                <input type="text" name="organization" id="organization" value={request.organization} onChange={handleRequestChange} required className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red" />
                            </div>
                            <div>
                                <label htmlFor="type" className="block text-sm font-medium text-gray-300">Type of Organization</label>
                                <select id="type" name="type" value={request.type} onChange={handleRequestChange} className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red">
                                    <option>School</option>
                                    <option>College</option>
                                    <option>Workplace</option>
                                    <option>Community</option>
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Additional Information</label>
                                <textarea name="message" id="message" rows={4} value={request.message} onChange={handleRequestChange} className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"></textarea>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <button type="submit" className="bg-brand-red text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors">Submit Request</button>
                        </div>
                    </form>
                    )}
                </section>

                {/* Volunteer & Partner */}
                <section className="mt-16">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="p-8 rounded-lg shadow-lg text-center">
                            <h2 className="text-3xl font-bold text-brand-red">3. Become a Volunteer</h2>
                            <p className="mt-4 text-brand-light-text">Join our on-ground safety squadrons, contribute your skills, and be a last-mile responder in your community.</p>
                            <button className="mt-6 bg-brand-red text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">Sign Up Now</button>
                        </div>
                         <div className="p-8 rounded-lg shadow-lg text-center">
                            <h2 className="text-3xl font-bold text-brand-red">4. Partner With Us</h2>
                            <p className="mt-4 text-brand-light-text">Unite with other organizations and doers. Collaborate with us to amplify our impact and create systemic change.</p>
                            <button className="mt-6 bg-brand-red text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">Connect With Us</button>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default GetInvolvedPage;
