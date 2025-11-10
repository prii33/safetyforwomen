
import React from 'react';
import { Link } from 'react-router-dom';
import { initiatives } from '../data/mockData';
import { PledgeForm } from '../components/PledgeForm';

// Fix: Changed component to be of type React.FC to correctly handle the 'key' prop when used in a list.
const InitiativeCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-brand-dark p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
        <div className="flex justify-center items-center h-16 w-16 rounded-full bg-brand-red/10 text-brand-red mx-auto">
            {icon}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-brand-red">{title}</h3>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
    </div>
);

const HomePage: React.FC = () => {
    return (
        <div className="bg-brand-dark">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
                >
                    <source src="/assets/redmist1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                        <span className="block">One Voice, One Mission</span>
                        <span className="block text-brand-red">A Safer India for Women</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                        Join our diverse, pan-India collective dedicated to transforming distress into meaningful action and building a nation where every woman feels secure.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/get-involved" className="w-full sm:w-auto bg-brand-red text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors shadow-md">
                            Join the Movement
                        </Link>
                        <Link to="/impact" className="w-full sm:w-auto bg-brand-dark text-brand-red border border-brand-red px-8 py-3 rounded-md text-lg font-semibold hover:bg-brand-red/10 transition-colors shadow-md">
                            See Our Impact
                        </Link>
                    </div>
                </div>
            </section>
            
            {/* Our Mission Section */}
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-brand-red">Our 9 Core Objectives</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                            To empower communities, engage key stakeholders, and drive actionable change to create a safer environment for women across India.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {initiatives.map((initiative) => (
                            <InitiativeCard key={initiative.id} icon={initiative.icon} title={initiative.title} description={initiative.description} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Take the Pledge Section */}
             <section className="bg-brand-dark py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-brand-red">Take The Safety Pledge</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                            Commit to being an active part of the solution. Your pledge is a promise to stand for safety, respect, and equality.
                        </p>
                    </div>
                    <PledgeForm />
                </div>
            </section>
        </div>
    );
};

export default HomePage;
