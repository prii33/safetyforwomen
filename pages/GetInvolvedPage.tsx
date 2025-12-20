import React, { useState } from 'react';
import { PledgeForm } from '../components/PledgeForm';
import Hero from '../components/Hero';
import redmist from '@/assets/redmist2.mov';
import Accordion from '../components/Accordion';

const GetInvolvedPage: React.FC = () => {

    const accordionItems = [
        {
            number: "1",
            title: "Take The Safety Pledge",
            content: (
                <>
                    
                    <PledgeForm />
                </>
            )
        },
        {
            number: "2",
            title: "Request an Awareness Program",
            content: (
                <div className="text-center">
                    <p className="max-w-2xl mx-auto text-brand-light-text mb-8">
                        Bring our workshops to your school, college, workplace, or community.
                    </p>
                    <button 
                        onClick={() => window.open(
                            'https://docs.google.com/forms/d/e/1FAIpQLSe8qqs23o94pBGpib1APpzrNaU9NRhCk4vrzDFHnltjuAKKIQ/viewform',
                            'googleFormPopup',
                            'width=800,height=800,scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no'
                        )}
                        className="bg-brand-red text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors inline-block"
                    >
                        Request Program
                    </button>
                </div>
            )
        },
        {
            number: "3",
            title: "Become a Volunteer",
            content: (
                <div className="text-center">
                    <p className="mb-6 text-brand-light-text text-l">Join our on-ground safety squadrons, contribute your skills, and be a last-mile responder in your community.</p>
                    <button 
                        onClick={() => window.open(
                            'https://docs.google.com/forms/d/e/1FAIpQLSdqzAMP1VKX1S0NbQK24R9EaO7jqOdSbq1DWz_p78ugd_8yKw/viewform',
                            'googleFormPopup',
                            'width=800,height=800,scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no'
                        )}
                        className="bg-brand-red text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                    >
                        Sign Up Now
                    </button>
                </div>
            )
        },
        {
            number: "4",
            title: "Partner With Us",
            content: (
                <div className="text-center">
                    <p className="mb-6 text-brand-light-text text-l">Unite with other organizations and doers. Collaborate with us to amplify our impact and create systemic change.</p>
                    <button 
                        onClick={() => window.open(
                            'https://docs.google.com/forms/d/e/1FAIpQLSeH9SZu6loQT4irZowzBIHJZl_SFc10JGsD6fFClXJ6cWQXcQ/viewform',
                            'googleFormPopup',
                            'width=800,height=800,scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no'
                        )}
                        className="bg-brand-red text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                    >
                        Connect With Us
                    </button>
                </div>
            )
        },
        {
            number: "5",
            title: "Audit Your Street's Safety",
            content: (
                <div className="text-center">
                    <p className="mb-6 text-brand-light-text text-l">Identify and report safety concerns in your neighborhood. Help us identify areas that need improvement.</p>
                    <button 
                        onClick={() => window.open(
                            'https://docs.google.com/forms/d/e/1FAIpQLScx666YVpXuUUZUUJGqDEfClxmHn9fM48Fmdmbkd_sqD8e_IA/viewform',
                            'googleFormPopup',
                            'width=800,height=800,scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no'
                        )}
                        className="bg-brand-red text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                    >
                        Start Audit
                    </button>
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

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 pt-0">
                <Accordion items={accordionItems} layout="grid" />
            </div>
        </div>
    );
};

export default GetInvolvedPage;
