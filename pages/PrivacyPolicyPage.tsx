import React from 'react';
import Hero from '../components/Hero';
import redmist from '@/assets/redmist2.mov';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="bg-brand-dark text-brand-light min-h-screen">
            <div className="relative z-10">
                <div className="relative">
                    <Hero
                        title="Safety for Women (SFW)"
                        subtitle="Privacy Policy"
                        description=""
                        videoSrc={redmist}
                        scrollY={0}
                        className="!pb-0 md:!pb-4"
                    />

                    <div className="bg-brand-dark relative z-10">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
                            <div className="max-w-4xl mx-auto space-y-8 text-brand-light-text text-base leading-relaxed">
                                <section>
                                    <p className="mb-4">
                                        Safety for Women (“SFW”, “we”, “our”, “us”), an initiative powered by <strong>Iron Feather Foundation</strong>, is committed to protecting the privacy, dignity, and personal data of all individuals who engage with our movement. This Privacy Policy is framed in accordance with the <strong>Digital Personal Data Protection Act, 2023 (India)</strong> and applicable laws.
                                    </p>
                                    <p>
                                        By accessing or using our website, programs, or services, you acknowledge and consent to the practices described in this Privacy Policy.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">1. Data Fiduciary Information</h2>
                                    <p className="mb-2">For the purposes of the DPDP Act, 2023:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Data Fiduciary:</strong> Iron Feather Foundation</li>
                                        <li><strong>Initiative:</strong> Safety for Women (SFW)</li>
                                        <li><strong>Nature:</strong> Non-profit, public-interest, safety and awareness initiative</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">2. Scope of This Policy</h2>
                                    <p className="mb-2">This policy applies to personal data collected through:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Our website and digital platforms</li>
                                        <li>Program registrations and forms</li>
                                        <li>Volunteer and partner onboarding</li>
                                        <li>Awareness initiatives and safety audits</li>
                                        <li>Survivor support coordination (SSS)</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">3. Personal Data We Collect</h2>
                                    <p className="mb-4">We collect <strong>only such personal data as is necessary</strong> to further our stated objectives.</p>
                                    
                                    <h3 className="text-lg font-semibold text-white mb-2">a. Personal Data Provided Voluntarily</h3>
                                    <p className="mb-2">May include:</p>
                                    <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>Name</li>
                                        <li>Phone number</li>
                                        <li>Email address</li>
                                        <li>City or general location</li>
                                        <li>Organization / institution (if applicable)</li>
                                        <li>Areas of participation or interest</li>
                                    </ul>

                                    <h3 className="text-lg font-semibold text-white mb-2">b. Sensitive / High-Risk Data (Handled with Enhanced Safeguards)</h3>
                                    <p className="mb-2">In limited cases, particularly under the <strong>Survivor Support System (SSS)</strong>, data may include:</p>
                                    <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>Nature of support required</li>
                                        <li>Referral-related information</li>
                                    </ul>
                                    <p className="mb-2">Such data is:</p>
                                    <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>Collected with consent wherever possible</li>
                                        <li>Accessed only by authorized personnel</li>
                                        <li>Shared strictly on a need-to-know basis with verified support partners</li>
                                    </ul>
                                    <p className="text-brand-red font-semibold">⚠️ SFW does not publicly disclose survivor identities or sensitive personal data.</p>

                                    <h3 className="text-lg font-semibold text-white mt-4 mb-2">c. Automatically Collected Data</h3>
                                    <p className="mb-2">Includes:</p>
                                    <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>IP address</li>
                                        <li>Browser and device information</li>
                                        <li>Website usage data</li>
                                    </ul>
                                    <p>This data is used solely for security, analytics, and service improvement.</p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">4. Purpose of Processing</h2>
                                    <p className="mb-2">Personal data is processed only for <strong>lawful, specific, and explicit purposes</strong>, including:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Coordinating safety awareness programs</li>
                                        <li>Managing volunteer and partner participation</li>
                                        <li>Facilitating survivor support and referrals</li>
                                        <li>Improving program effectiveness and outreach</li>
                                        <li>Responding to inquiries and requests</li>
                                        <li>Compliance with legal or regulatory obligations</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">5. Consent & Lawful Processing</h2>
                                    <p className="mb-2">We process personal data:</p>
                                    <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>With <strong>free, informed, specific, and unambiguous consent</strong>, or</li>
                                        <li>As permitted under the DPDP Act for legitimate, public-interest purposes</li>
                                    </ul>
                                    <p>Consent may be withdrawn at any time, subject to legal or operational constraints.</p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">6. Data Sharing & Disclosure</h2>
                                    <p className="mb-2">Personal data may be shared only:</p>
                                    <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>With verified NGOs, counselors, legal experts, or crisis responders under SSS</li>
                                        <li>With authorities where legally required or for safety coordination</li>
                                        <li>When mandated by law or a lawful government order</li>
                                    </ul>
                                    <p>We <strong>do not sell, rent, or commercially exploit personal data</strong>.</p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">7. Data Retention</h2>
                                    <p>
                                        Personal data is retained <strong>only for as long as necessary</strong> to fulfill the stated purpose or to comply with legal obligations. Data that is no longer required is securely deleted or anonymized.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">8. Data Security Safeguards</h2>
                                    <p className="mb-2">We implement reasonable security practices, including:</p>
                                    <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>Restricted access controls</li>
                                        <li>Secure storage mechanisms</li>
                                        <li>Administrative and procedural safeguards</li>
                                    </ul>
                                    <p>While we take all reasonable steps, no digital system can guarantee absolute security.</p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">9. Rights of Data Principals</h2>
                                    <p className="mb-2">As a Data Principal under the DPDP Act, you have the right to:</p>
                                    <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>Access your personal data</li>
                                        <li>Request correction or erasure</li>
                                        <li>Withdraw consent</li>
                                        <li>Seek grievance redressal</li>
                                    </ul>
                                    <p>Requests can be made using the contact details below.</p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">10. Children’s Data</h2>
                                    <p>
                                        We do not knowingly collect personal data of children without appropriate institutional consent or guardian involvement. School-based programs are conducted through authorized institutions.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">11. Cookies & Analytics</h2>
                                    <p>
                                        Our website may use cookies and analytics tools to improve functionality and user experience. Users may control cookie preferences through browser settings.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">12. External Links</h2>
                                    <p>
                                        Our platforms may contain links to third-party websites (e.g., police resources or partner organizations). We are not responsible for their privacy practices.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">13. Grievance Redressal</h2>
                                    <p className="mb-2">In accordance with the DPDP Act, grievances may be addressed to:</p>
                                    <div className="bg-white/5 p-4 rounded-lg mb-4">
                                        <p className="font-semibold text-white">Grievance Officer</p>
                                        <p>Safety for Women (SFW)</p>
                                        <p>Powered by Iron Feather Foundation</p>
                                        <p>📧 <a href="mailto:reach@safetyforwomen.org" className="text-brand-red hover:underline">reach@safetyforwomen.org</a></p>
                                    </div>
                                    <p>We will endeavor to resolve concerns within a reasonable timeframe.</p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-white mb-4">14. Policy Updates</h2>
                                    <p>
                                        This Privacy Policy may be updated periodically to reflect legal, operational, or programmatic changes. Updates will be published with a revised effective date.
                                    </p>
                                </section>

                                <section className="border-t border-white/10 pt-8 mt-8">
                                    <h2 className="text-xl font-bold text-white mb-4">Our Commitment</h2>
                                    <p className="italic">
                                        Safety for Women exists to <strong>protect, empower, and support</strong>.<br/>
                                        We treat personal data with responsibility, restraint, and respect — because trust is foundational to safety.
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

export default PrivacyPolicyPage;
