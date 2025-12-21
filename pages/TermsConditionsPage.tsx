import React from 'react';
import Hero from '../components/Hero';
import redmist from '@/assets/redmist2.mov';

const TermsConditionsPage: React.FC = () => {
    return (
        <div className="bg-brand-dark text-brand-light min-h-screen">
            <div className="relative z-10">
                <div className="relative">
                    <Hero
                        title="Policies and Guidelines"
                        subtitle="Terms & Conditions"
                        description=""
                        videoSrc={redmist}
                        scrollY={0}
                        className="!pb-0 md:!pb-4"
                    />

                    <div className="bg-brand-dark relative z-10">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
                            <div className="max-w-4xl mx-auto space-y-8 text-brand-light-text text-base leading-relaxed">
                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
                                    <p>
                                        Welcome to Safety for Women. These Terms and Conditions govern your use of our website and services. 
                                        By accessing or using our website, you agree to be bound by these terms.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
                                    <p>
                                        Other than the content you own, under these Terms, Safety for Women and/or its licensors own all the intellectual property rights and materials contained in this Website.
                                        You are granted limited license only for purposes of viewing the material contained on this Website.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">3. Restrictions</h2>
                                    <p className="mb-2">You are specifically restricted from all of the following:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Publishing any Website material in any other media without prior consent.</li>
                                        <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
                                        <li>Publicly performing and/or showing any Website material.</li>
                                        <li>Using this Website in any way that is or may be damaging to this Website.</li>
                                        <li>Using this Website in any way that impacts user access to this Website.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">4. Your Content</h2>
                                    <p>
                                        In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website. 
                                        By displaying Your Content, you grant Safety for Women a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">5. No warranties</h2>
                                    <p>
                                        This Website is provided "as is," with all faults, and Safety for Women express no representations or warranties, of any kind related to this Website or the materials contained on this Website.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">6. Limitation of liability</h2>
                                    <p>
                                        In no event shall Safety for Women, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. 
                                        Safety for Women, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                                    </p>
                                </section>
                                
                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">7. Contact Us</h2>
                                    <p>
                                        If you have any questions about these Terms, please contact us at <a href="mailto:safetyforwomen@gmail.com" className="text-brand-red hover:underline">safetyforwomen@gmail.com</a>.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsConditionsPage;
