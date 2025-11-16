
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import video from '@/assets/smoke2.mp4';
import image from '@/assets/image3.png';
import pledgebk from '@/assets/pledgebk.jpg';
import pledge from '@/assets/pledge.png';
import InteractiveObjectives from '../components/InteractiveObjectives';
import FloatingSocialIcons from '../components/FloatingSocialIcons';
import StaggeredText from '../components/StaggeredText';

const HomePage: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const xText = useTransform(scrollYProgress, [0, 1], ['0%', '-500%']);
    const xButtons = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    return (
        <div className="bg-brand-dark">
            <FloatingSocialIcons />
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center text-center overflow-hidden">
                <motion.div className="absolute inset-0 z-0" style={{ scale }}>
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
                        className="absolute top-0 left-0 w-full h-full z-0"
                        style={{ 
                            backgroundImage: `url(${image})`, 
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            opacity: 0.30 
                        }}
                    ></div>
                </motion.div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div style={{ x: xText, opacity }}>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking leading-loose">
                            <StaggeredText className="block">One Voice, One Mission</StaggeredText>
                            <StaggeredText className="block text-brand-red">A Safer India for Women</StaggeredText>
                        </h1>
                        <div className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                            <StaggeredText>Join our diverse, pan-India collective dedicated to transforming distress into meaningful action and building a nation where every woman feels secure.</StaggeredText>
                        </div>
                    </motion.div>
                    <motion.div style={{ x: xButtons }} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/get-involved" className="w-full sm:w-auto text-white px-8 py-3 rounded-3xl text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg bg-gradient-to-r from-red-600 to-[#FF0440] hover:from-red-700 hover:to-[#d90338]">
                            Join the Movement
                        </Link>
                        <Link to="/impact" className="w-full sm:w-auto bg-transparent text-[#FF0440] border border-[#FF0440] px-8 py-3 rounded-3xl text-lg font-semibold hover:bg-[#FF0440] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg">
                            See Our Impact
                        </Link>
                    </motion.div>
                </div>
            </section>
            
            {/* Our Mission Section */}
            <section className="py-16 sm:py-24" style={{ backgroundColor: '#0a0a0a' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <h2 className="text-5xl font-bold">
                            <StaggeredText className="inline-block" style={{ color: '#e1d5d5' }}>Our 9</StaggeredText> <StaggeredText className="inline-block" style={{ color: '#ff0440' }}>Core Objectives</StaggeredText>
                        </h2>
                        <StaggeredText className="mt-4 max-w-3xl mx-auto text-xl text-brand-light-text">
                            To empower communities, engage key stakeholders, and drive actionable change to create a safer environment for women across India.
                        </StaggeredText>
                    </div>
                    <div className="mt-12">
                        <InteractiveObjectives />
                    </div>
                </div>
            </section>

            {/* Take the Pledge Section */}
            <section className="py-16 sm:py-24 bg-cover bg-center" style={{ backgroundImage: `url(${pledgebk})` }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex-shrink-0">
                            <img src={pledge} alt="Pledge Icon" className="h-24 w-24" />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-5xl font-bold" style={{ color: '#e1d5d5' }}>
                                <StaggeredText>Take the</StaggeredText> <StaggeredText className="block text-6xl text-black">Safety Pledge</StaggeredText>
                            </h2>
                        </div>
                        <div className="text-left">
                            <p className="text-base" style={{ color: '#e1d5d5' }}>
                                Commit to being an active part of the solution. Your pledge is a promise to stand for safety, respect, and equality.
                            </p>
                        </div>
                        <div className="mt-8 md:mt-0 md:ml-8">
                            <button className="w-full sm:w-auto text-white px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg bg-gradient-to-r from-red-600 to-[#FF0440] hover:from-red-700 hover:to-[#d90338]">
                                Pledge
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
