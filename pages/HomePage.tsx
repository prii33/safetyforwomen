
import React from 'react';
import { Link } from 'react-router-dom';
import { PledgeForm } from '../components/PledgeForm';
import video from '/assets/smoke2.mp4';
import image from '/assets/image3.png';
import pledgebk from '/assets/pledgebk.jpg';
import InteractiveObjectives from '../components/InteractiveObjectives';

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
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div 
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${image})`, opacity: 0.30 }}
                ></div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                        <span className="block">One Voice, One Mission</span>
                        <span className="block text-brand-red">A Safer India for Women</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                        Join our diverse, pan-India collective dedicated to transforming distress into meaningful action and building a nation where every woman feels secure.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/get-involved" className="w-full sm:w-auto text-white px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg bg-gradient-to-r from-red-600 to-[#FF0440] hover:from-red-700 hover:to-[#d90338]">
                            Join the Movement
                        </Link>
                        <Link to="/impact" className="w-full sm:w-auto bg-transparent text-[#FF0440] border border-[#FF0440] px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#FF0440] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg">
                            See Our Impact
                        </Link>
                    </div>
                </div>
            </section>
            
            {/* Our Mission Section */}
            <section className="py-16 sm:py-24" style={{ backgroundColor: '#0a0a0a' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-5xl font-bold">
                            <span style={{ color: '#e1d5d5' }}>Our 9</span> <span style={{ color: '#ff0440' }}>Core Objectives</span>
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-xl text-brand-light-text">
                            To empower communities, engage key stakeholders, and drive actionable change to create a safer environment for women across India.
                        </p>
                    </div>
                    <div className="mt-12">
                        <InteractiveObjectives />
                    </div>
                </div>
            </section>

            {/* Take the Pledge Section */}
            <section className="py-16 sm:py-24 bg-cover bg-center" style={{ backgroundImage: `url(${pledgebk})` }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex-shrink-0">
                            <img src="/assets/pledge.png" alt="Pledge Icon" className="h-24 w-24" />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-5xl font-bold" style={{ color: '#e1d5d5' }}>
                                Take the <span className="block text-6xl text-black">Safety Pledge</span>
                            </h2>
                        </div>
                        <div className="max-w-sm text-center md:text-left">
                            <p className="text-base" style={{ color: '#e1d5d5' }}>
                                Commit to being an active part of the solution. Your pledge is a promise to stand for safety, respect, and equality.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <PledgeForm />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
