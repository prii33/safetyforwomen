import React from 'react';
import { partners } from '../data/mockData';
import LogoLoop from '../components/LogoLoop';
import Hero from '../components/Hero';
import redmist from '@/assets/redmist2.mov';
import storyBg from '../assets/story.png';
import UNSDGSection from '../components/UNSDGSection';
const AboutPage: React.FC = () => {
    return (
        <div 
            className="bg-brand-dark text-brand-light"
            style={{
                backgroundImage: `url(${storyBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <Hero
                title="About the Movement"
                subtitle="Our Story, Mission, and Vision"
                description="A diverse, non-partisan, non-political, and pan-India collective dedicated to creating a safer nation for women."
                videoSrc={redmist}
            />

            <div className="bg-black bg-opacity-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-6 rounded-lg text-left">
                        <h2 className="text-4xl font-bold text-brand-red tracking-wide">Our Story</h2>
                        <p className="mt-4 text-brand-light-text">
                            Born from the urgent need for change following tragic gender-based violence incidents, the Safety for Women Movement transforms distress and outrage into meaningful action. Uniting members from all backgrounds, we focus on practical solutions, community collaboration, and sustainable impact.
                        </p>
                        <p className="mt-4 text-brand-light-text">
                            Our strength is in our unity. We believe that by working together—citizens, communities, law enforcement, and policymakers—we can build a future where every woman in India is safe, respected, and empowered.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
                <div className="mt-10">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="p-6 rounded-lg text-left">
                            <p className="text-sm font-semibold text-brand-red tracking-widest">WHAT WE DO</p>
                            <h3 className=" text-4xl font-bold ">Our Mission</h3>
                            <p className="mt-4 text-brand-light-text">Our goal is to convert emotional distress into concrete actions that ensure real and lasting change for women’s safety. We seek to channel our grief, anger, and frustration into productive efforts. While recognizing the ideals of what ‘can be,’ ‘should be,’ and ‘must be,’ we are dedicated to the practical question: ‘how can it be changed?’</p>
                        </div>
                        <div className="p-6 rounded-lg text-left">
                            <p className="text-sm font-semibold text-brand-red tracking-widest">WHAT WE ASPIRE TO BE</p>
                            <h3 className="mt-2 text-4xl font-bold">Our Vision</h3>
                            <p className="mt-4 text-brand-light-text">Identify the steps to drive change by engaging key stakeholders. Research and gather data to understand the current state and identify gaps. Develop strategies and implement solutions to address these gaps. Explore methods for lasting change. Focusing on the “how” turns our vision into concrete actions and creates meaningful impact.</p>
                        </div>
                        <div className="p-6 rounded-lg text-left">
                            <p className="text-sm font-semibold text-brand-red tracking-widest">WHAT GUIDES US</p>
                            <h3 className="mt-2 text-4xl font-bold ">Our Values</h3>
                            <p className="mt-4 text-brand-light-text">We are non-political, non-religious, non-partisan, and do not engage in monetary transactions or accept donations. Our belief is in driving change through direct action.</p>
                        </div>
                    </div>
                </div>

                <UNSDGSection />

                <div className="mt-10 text-center">
                    <h2 className="text-4xl font-bold text-brand-red">Our Partners & Collaborators</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-brand-light-text">We are grateful for the support of organizations who share our vision for a safer India.</p>
                    <div className="mt-10">
                        <LogoLoop
                            logos={[...partners.map(p => ({ src: p.logoUrl, alt: p.name })), { src: '/assets/icon8.gif', alt: 'icon8' }]}
                            speed={100}
                            direction="left"
                            logoHeight={64}
                            gap={40}
                            fadeOut
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;
