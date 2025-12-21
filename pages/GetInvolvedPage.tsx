import React, { useState } from 'react';
import { PledgeForm } from '../components/PledgeForm';
import Hero from '../components/Hero';
import redmist from '@/assets/redmist2.mov';
import bgSafetyPledge from '@/assets/BgSafetyPledge.jpeg';
import bgAwareness from '@/assets/bgawareness.jpeg';
import bgVolunteer from '@/assets/bgvolunteer.jpeg';
import bgPartner from '@/assets/bgpartnerwithus.jpeg';
import bgAudit from '@/assets/bgstreetsafety.jpeg';
import bgSurvivor from '@/assets/bgnsss.jpeg';
import Accordion from '../components/Accordion';

const GetInvolvedPage: React.FC = () => {

    const accordionItems = [
        {
            number: "1",
            title: "Take The Safety Pledge",
            content: (
                <div className="relative rounded-xl overflow-hidden">
                    <div 
                        className="absolute inset-0 bg-contain bg-right bg-no-repeat"
                        style={{ backgroundImage: `url(${bgSafetyPledge})` }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 py-8 px-4">
                        <div className="max-w-md mx-auto bg-black/70 p-6 rounded-xl backdrop-blur-sm border border-white/10 shadow-xl">
                            <PledgeForm />
                        </div>
                    </div>
                </div>
            )
        },
        {
            number: "2",
            title: "Request an Awareness Program",
            content: (
                <div className="relative rounded-xl overflow-hidden pt-12 pb-60 px-4">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${bgAwareness})` }}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 text-center">
                        <h3 className="md:text-4xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                           Would you like us to conduct an <br></br>awareness program at your school, College, <br></br>Organisation or Community?
                        </h3>
                        <p className="max-w-2xl mx-auto text-white mb-8 text-lg font-medium">
                            
                        </p>
                        <button 
                            onClick={() => window.open(
                                'https://docs.google.com/forms/d/e/1FAIpQLSe8qqs23o94pBGpib1APpzrNaU9NRhCk4vrzDFHnltjuAKKIQ/viewform',
                                'googleFormPopup',
                                'width=800,height=800,scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no'
                            )}
                            className="bg-brand-red text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors inline-block shadow-lg"
                        >
                            Request Program
                        </button>
                    </div>
                </div>
            )
        },
        {
            number: "3",
            title: "Become a Volunteer",
            content: (
                <div className="relative rounded-xl overflow-hidden pt-12 pb-60 px-4">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${bgVolunteer})` }}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 text-center">
                        <h3 className="md:text-4xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Want to become <br></br>a volunteer?
                        </h3>
                        <p className="max-w-2xl mx-auto text-white mb-8 text-base font-medium">
                           Whether remotely or on-ground, you can contribute based on your time, skills, and capacity even by simply spreading the word. Let’s move beyond complains and be a doer.
                        </p>
                        <button 
                            onClick={() => window.open(
                                'https://docs.google.com/forms/d/e/1FAIpQLSdqzAMP1VKX1S0NbQK24R9EaO7jqOdSbq1DWz_p78ugd_8yKw/viewform',
                                'googleFormPopup',
                                'width=800,height=800,scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no'
                            )}
                            className="bg-brand-red text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors inline-block shadow-lg"
                        >
                            Sign Up Now
                        </button>
                    </div>
                </div>
            )
        },
        {
            number: "4",
            title: "Partner With Us",
            content: (
                <div className="relative rounded-xl overflow-hidden pt-12 pb-60 px-4">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${bgPartner})` }}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 text-center">
                        <h3 className="md:text-4xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Want to partner <br></br>with us?
                        </h3>
                        <p className="max-w-2xl mx-auto text-white mb-8 text-lg font-medium">
                             Collaborate with us to amplify our impact and create systemic change.
                        </p>
                        <button 
                            onClick={() => window.open(
                                'https://docs.google.com/forms/d/e/1FAIpQLSeH9SZu6loQT4irZowzBIHJZl_SFc10JGsD6fFClXJ6cWQXcQ/viewform',
                                'googleFormPopup',
                                'width=800,height=800,scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no'
                            )}
                            className="bg-brand-red text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors inline-block shadow-lg"
                        >
                            Connect With Us
                        </button>
                    </div>
                </div>
            )
        },
        {
            number: "5",
            title: "Audit Your Street's Safety",
            content: (
                <div className="relative rounded-xl overflow-hidden pt-12 pb-60 px-4">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${bgAudit})` }}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 text-center">
                        <h3 className="md:text-4xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Want to audit <br></br>your street's safety?
                        </h3>
                        <p className="max-w-2xl mx-auto text-white mb-8 text-lg font-medium">
                            Identify and report safety concerns in your neighborhood. <br></br>Help us identify areas that need improvement.
                        </p>
                        <button 
                            onClick={() => window.open(
                                'https://docs.google.com/forms/d/e/1FAIpQLScx666YVpXuUUZUUJGqDEfClxmHn9fM48Fmdmbkd_sqD8e_IA/viewform',
                                'googleFormPopup',
                                'width=800,height=800,scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no'
                            )}
                            className="bg-brand-red text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors inline-block shadow-lg"
                        >
                            Start Audit
                        </button>
                    </div>
                </div>
            )
        },
        {
            number: "6",
            title: "Join the National Survivor Support System",
            content: (
                <div className="relative rounded-xl overflow-hidden pt-12 pb-60 px-4">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${bgSurvivor})` }}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 text-center">
                        <h3 className="md:text-4xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Want to join the National <br></br>Survivor Support System?
                        </h3>
                        <p className="max-w-2xl mx-auto text-white mb-8 text-lg font-medium">
                            Connect with a supportive community dedicated to healing, <br></br>empowerment, and justice for survivors.
                        </p>
                        <button 
                            onClick={() => window.open(
                                'https://docs.google.com/forms/d/1h0AZLB5OkGn8oBA0aFLJKr4r9gjK56rXCaRPUjZ6_xE/viewform?edit_requested=true',
                                'googleFormPopup',
                                'width=800,height=800,scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no'
                            )}
                            className="bg-brand-red text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors inline-block shadow-lg"
                        >
                            Join Now
                        </button>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="bg-brand-dark text-brand-light">
            <Hero
                title="Join The Movement"
                subtitle="Be the Change"
                description="Your voice, time, and commitment can create a ripple effect of change. Here’s how you can contribute."
                videoSrc={redmist}
                scrollY={0}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-0">
                <Accordion items={accordionItems} layout="grid" />
            </div>
        </div>
    );
};

export default GetInvolvedPage;
