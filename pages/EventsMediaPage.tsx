
import React from 'react';
import { pastPrograms, pressCoverage } from '../data/mockData';

const EventsMediaPage: React.FC = () => {
    return (
        <div className="bg-brand-dark py-16 sm:py-20 text-brand-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-brand-red">Events & Media</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-400">
                        Stay updated with our latest events, browse our history of programs, and see our media features.
                    </p>
                </div>

                {/* Upcoming Events */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-brand-red text-center mb-8">Upcoming Events</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-brand-red">
                            <p className="text-sm font-semibold text-brand-red">DEC 15, 2024</p>
                            <h3 className="font-bold text-brand-light mt-1 text-lg">Annual Safety Recognition Awards</h3>
                            <p className="text-gray-400 text-sm mt-2">Virtual Event - Honoring changemakers in women's safety.</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-brand-red">
                            <p className="text-sm font-semibold text-brand-red">JAN 10, 2025</p>
                            <h3 className="font-bold text-brand-light mt-1 text-lg">Community Safety Walk - Delhi</h3>
                            <p className="text-gray-400 text-sm mt-2">Connaught Place, New Delhi - Join us to identify and report safety hazards.</p>
                        </div>
                    </div>
                </section>

                {/* Past Awareness Programs */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-brand-red text-center mb-8">26 Awareness Programs Held To Date</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pastPrograms.slice(0, 6).map(program => ( // Show first 6 for brevity
                            <div key={program.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden group">
                                <img src={program.imageUrl} alt={program.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-4">
                                    <h3 className="font-bold text-brand-light">{program.title}</h3>
                                    <p className="text-sm text-gray-400">{program.location} - {program.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="text-center mt-8">
                        <a href="#" className="text-brand-red font-semibold hover:underline">View All Programs &rarr;</a>
                    </div>
                </section>
                
                {/* Podcast & Social Feed */}
                <section className="mt-16">
                     <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-gray-800 p-8 rounded-lg">
                            <h2 className="text-2xl font-bold text-brand-red mb-4 text-center">Our Podcast: Safety Stories</h2>
                            <div className="flex flex-col items-center">
                                <img src="https://picsum.photos/seed/podcast/200/200" alt="Podcast cover" className="w-40 h-40 rounded-lg shadow-lg"/>
                                <p className="text-center text-gray-400 mt-4">Listen to inspiring stories from survivors, experts, and volunteers. Available on all major platforms.</p>
                                <button className="mt-4 bg-brand-red text-white px-6 py-2 rounded-md font-semibold hover:bg-opacity-90">Listen Now</button>
                            </div>
                        </div>
                        <div className="bg-gray-800 p-8 rounded-lg">
                            <h2 className="text-2xl font-bold text-brand-red mb-4 text-center">Social Media Feed</h2>
                            <div className="h-64 bg-gray-700 rounded-md flex items-center justify-center">
                                <p className="text-gray-400 font-semibold">Social media feed would be embedded here.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Press Coverage */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-brand-red text-center mb-8">In The Press</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {pressCoverage.map(item => (
                            <a key={item.outlet} href={item.link} className="block bg-gray-800 p-4 rounded-lg hover:bg-brand-red/10 transition-colors">
                                <p className="font-semibold text-brand-light">{item.title}</p>
                                <p className="text-sm text-gray-500">{item.outlet} - {item.date}</p>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EventsMediaPage;
