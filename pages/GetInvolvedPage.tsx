
import React, { useState } from 'react';
import { PledgeForm } from '../components/PledgeForm';

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
        <div className="bg-brand-light py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-brand-purple">Join The Movement</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
                        Your voice, time, and commitment can create a ripple effect of change. Here’s how you can contribute.
                    </p>
                </div>
                
                {/* Take the Pledge */}
                <section className="mt-16 bg-white p-8 md:p-12 rounded-lg shadow-lg">
                     <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-brand-purple">1. Take The Safety Pledge</h2>
                        <p className="mt-2 max-w-2xl mx-auto text-gray-600">
                            A personal commitment to fostering a safer environment for women in your community.
                        </p>
                    </div>
                    <PledgeForm />
                </section>

                {/* Request a Program */}
                <section className="mt-16 bg-white p-8 md:p-12 rounded-lg shadow-lg">
                     <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-brand-purple">2. Request an Awareness Program</h2>
                        <p className="mt-2 max-w-2xl mx-auto text-gray-600">
                            Bring our workshops to your school, college, workplace, or community.
                        </p>
                    </div>
                     {isRequestSubmitted ? (
                        <div className="text-center p-8 bg-green-100 text-green-800 rounded-lg">
                            <h3 className="text-xl font-bold">Thank you!</h3>
                            <p>Your request for an awareness program has been received. Our team will get in touch with you shortly.</p>
                        </div>
                    ) : (
                    <form onSubmit={handleRequestSubmit} className="max-w-2xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                                <input type="text" name="name" id="name" value={request.name} onChange={handleRequestChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-pink focus:border-brand-pink" />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" name="email" id="email" value={request.email} onChange={handleRequestChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-pink focus:border-brand-pink" />
                            </div>
                             <div>
                                <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization / Community Name</label>
                                <input type="text" name="organization" id="organization" value={request.organization} onChange={handleRequestChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-pink focus:border-brand-pink" />
                            </div>
                            <div>
                                <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type of Organization</label>
                                <select id="type" name="type" value={request.type} onChange={handleRequestChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-pink focus:border-brand-pink">
                                    <option>School</option>
                                    <option>College</option>
                                    <option>Workplace</option>
                                    <option>Community</option>
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Information</label>
                                <textarea name="message" id="message" rows={4} value={request.message} onChange={handleRequestChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-pink focus:border-brand-pink"></textarea>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <button type="submit" className="bg-brand-pink text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors">Submit Request</button>
                        </div>
                    </form>
                    )}
                </section>

                {/* Volunteer & Partner */}
                <section className="mt-16">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <h2 className="text-3xl font-bold text-brand-purple">3. Become a Volunteer</h2>
                            <p className="mt-4 text-gray-600">Join our on-ground safety squadrons, contribute your skills, and be a last-mile responder in your community.</p>
                            <button className="mt-6 bg-brand-yellow text-brand-purple px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">Sign Up Now</button>
                        </div>
                         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <h2 className="text-3xl font-bold text-brand-purple">4. Partner With Us</h2>
                            <p className="mt-4 text-gray-600">Unite with other organizations and doers. Collaborate with us to amplify our impact and create systemic change.</p>
                            <button className="mt-6 bg-brand-yellow text-brand-purple px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">Connect With Us</button>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default GetInvolvedPage;
