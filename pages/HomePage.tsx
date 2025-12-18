import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import video from '@/assets/smoke2.mp4';
import Hero from '../components/Hero';
import slide1 from '@/assets/slide1.webp';
import slide2 from '@/assets/slide2.webp';
import slide3 from '@/assets/slide3.webp';
import LogoCloud from '../components/LogoCloud';
import icon1 from '../assets/icon1.gif';
import icon2 from '../assets/icon2.gif';
import icon3 from '../assets/icon3.gif';
import icon4 from '../assets/icon4.gif';
import icon5 from '../assets/icon5.gif';
import icon6 from '../assets/icon6.gif';
import icon7 from '../assets/icon7.gif';
import icon8 from '../assets/icon8.gif';
import icon9 from '../assets/icon9.gif';
import image5 from '@/assets/image5.png';
import awarenessBg from '@/assets/1awareness.jpg';
import sssImage from '@/assets/3sss.jpg';
import safeWellLitImage from '@/assets/4Safe&WellLit.jpg';
import citizenPoliceBg from '@/assets/5CitizenPolice.jpg';
import networkBg from '@/assets/6network.jpg';
import techBg from '@/assets/2tech.jpg';
import educationBg from '@/assets/7education.jpg';
import womenBg from '@/assets/8women.jpg';
import awardsBg from '@/assets/9awards.jpg';
import JoinSection from '../components/JoinSection';
import '../components/JoinSection.css';
import UNSDGSection from '../components/UNSDGSection';
import GoToTopButton from '../components/GoToTopButton';
import { ExpandableCard } from '../components/ExpandableCard';

import networkGif from '@/assets/network.gif';
import safetyGif from '@/assets/safety.gif';
import livesGif from '@/assets/lives.gif';
import programsGif from '@/assets/programs.gif';
import goalGif from '@/assets/goal.gif';
import impactGif from '@/assets/impact.gif';
import deviceGif from '@/assets/device.gif';

const CardLayout = ({ icon, number, title, backgroundImage, children, tag }: any) => (
    <div className="flex flex-col md:flex-row gap-4 h-full items-stretch">
        {/* Left Side - Image */}
        <div className="w-full md:w-[35%] relative min-h-[300px] md:min-h-[400px] rounded-[2rem] overflow-hidden shrink-0 bg-[#0f0f0f] group shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 h-full">
                    <div className="absolute inset-0 bg-[#ff0440] mix-blend-multiply z-10 opacity-60"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
                    <img 
                    src={backgroundImage} 
                    alt={title} 
                    className="w-full h-full object-cover contrast-110"
                />
            </div>

            {/* Top Content */}
            <div 
                className="absolute inset-0 z-30 flex flex-col items-start pt-4 px-4"
                style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 80%)'
                }}
            >
                {tag && (
                    <span className="mb-4 px-3 py-1 rounded-full bg-[#8a4a3b]/80 text-white text-xs font-bold uppercase tracking-wider border border-[#8a4a3b]/30 backdrop-blur-sm shadow-lg">
                        {tag}
                    </span>
                )}
                    {/* Icon */}
                <div className="mb-4 relative">
                        <div className="absolute inset-0 bg-[#ff0440] blur-2xl opacity-10 rounded-full"></div>
                        <img src={icon} alt="Icon" className="w-16 h-16 object-contain relative z-10" />
                </div>
                
                {/* Title Group */}
                <div className="flex flex-row items-start justify-start gap-3 w-full">
                    <div className="w-14 h-14 bg-[#ff0440] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,4,64,0.4)] shrink-0 mt-1">
                        <span className="text-white font-black text-3xl">{number}</span>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold text-white leading-[0.9] uppercase tracking-wide break-words w-full">
                        {title}
                    </h2>
                </div>
            </div>
        </div>

        {/* Vertical Dotted Separator */}
        <div className="hidden md:block w-px border-l-2 border-dotted border-[#a84f3b] opacity-40 my-8"></div>

        {/* Right Side - Content */}
        <div className="w-full md:w-[60%] flex flex-col justify-center space-y-5 py-4 pl-4">
            {children}
        </div>
    </div>
);

const HomePage: React.FC = () => {
    const headerClass = "text-[#a84f3b] font-semibold uppercase text-base tracking-wider mb-1";
    const textClass = "text-[#e1d5d5] leading-snug text-base";
    const listClass = "list-disc pl-5 space-y-1 text-[#e1d5d5] marker:text-[#8a4a3b] text-base";
    const promptClass = "text-[#e1d5d5] mb-2 text-sm opacity-80";

    const values = [
        { 
            icon: icon1, 
            title: "Safety Awareness Programs", 
            summary: "Educating and empowering communities through actionable knowledge and safety workshops.",
            hideHeader: true,
            description: (
            <CardLayout icon={icon1} number="1" title="Safety Awareness Programs" backgroundImage={awarenessBg}>
                <div>
                    <h3 className={headerClass}>Objective</h3>
                    <p className={textClass}>
                        To educate and empower communities through actionable knowledge. We conduct comprehensive safety workshops in schools, colleges, workplaces, and residential communities, often in collaboration with the Police Department.
                    </p>
                </div>
                
                <div>
                    <h3 className={headerClass}>Key Topics Covered</h3>
                    <ul className={listClass}>
                        <li>Self-defense demonstrations and techniques.</li>
                        <li>Legal rights and women's safety laws.</li>
                        <li>Essential safety protocols and emergency response.</li>
                    </ul>
                </div>

                <div className="pt-2">
                    <p className={promptClass}>
                        Would you like us to conduct an awareness program at your institution or community?
                    </p>
                    <a 
                        href="https://bit.ly/SFW-AwarenessProgramQuestionaire" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group inline-flex items-center gap-2 text-[#2DD4BF] font-bold text-base hover:text-[#2DD4BF]/80 transition-colors"
                    >
                        <svg className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                        <span className="underline decoration-2 tracking-wider underline-offset-2">Request a Safety Awareness Program</span>
                    </a>

                    <div className="mt-6">
                        <Link to="/events-media" className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#2DD4BF] text-[#2DD4BF] rounded-full text-sm font-semibold hover:bg-[#2DD4BF] hover:text-black transition-all duration-300 group">
                            <span>See Us in Action</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </CardLayout>
        ) },
        { 
            icon: icon2, 
            title: "Tech Solutions for Safety", 
            summary: "Leveraging technology for safety, including community maps, hackathons, and safety products.",
            hideHeader: true,
            description: (
            <CardLayout icon={icon2} number="2" title="Tech Solutions for Safety" backgroundImage={techBg}>
                <div>
                    <h3 className={headerClass}>Objective</h3>
                    <p className={textClass}>Leverage technology for safety and prevention.</p>
                </div>
                
                <div>
                    <h3 className={headerClass}>Key Initiatives</h3>
                    <ul className={listClass}>
                        <li>Develop Community safety map for public spaces, services & organizations.</li>
                        <li>Host hackathons to generate innovative ideas for safety technologies & solutions.</li>
                        <li>Collaborate with tech companies to develop safety-focused products.</li>
                    </ul>
                </div>

                <div className="pt-2">
                    <p className={promptClass}>Would you like us to conduct an awareness program at your institution or community?</p>
                    <a 
                        href="https://forms.gle/zgPLDgGwxYYPYavo9" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group inline-flex items-center gap-2 text-[#2DD4BF] font-bold text-base hover:text-[#2DD4BF]/80 transition-colors"
                    >
                        <svg className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                        <span className="underline decoration-2 tracking-wider underline-offset-2">Conduct your Street Safety Audit</span>
                    </a>
                </div>
            </CardLayout>
        ) },
        { 
            icon: icon6, 
            title: "Survivor Support System (SSS) – India", 
            summary: "Providing comprehensive, coordinated support to survivors of crime and violence.",
            hideHeader: true,
            description: (
            <CardLayout icon={icon6} number="3" title="Survivor Support System (SSS) – India" backgroundImage={sssImage}>
                <div>
                    <h3 className={headerClass}>Objective</h3>
                    <p className={textClass}>To provide comprehensive, coordinated support to survivors of crime, violence, abuse, and exploitation.</p>
                </div>
                
                <div className="mt-2">
                    <h3 className={headerClass}>The Challenge: Disconnected Efforts</h3>
                    <p className={textClass}>
                        Across India, countless individuals and organizations are working tirelessly to support survivors. Yet, too often, these efforts exist in isolation—disconnected, unknown to each other, and inaccessible to the very people who need them most.
                    </p>
                </div>

                <div className="mt-2">
                    <h3 className={headerClass}>The Solution: A Unified Network</h3>
                    <p className={textClass}>
                        The Survivor Support System (SSS) is our nationwide initiative designed to change that. We are building a unified, verified, and collaborative network of resources to guarantee that help is always available, immediate, and high-quality.
                    </p>
                </div>

                <div className="mt-1">
                    <h3 className={headerClass}>We are building a collaborative network of</h3>
                    <div className={`${textClass} mt-0 flex flex-wrap items-center leading-tight`}>
                        <span className="mr-1.5 text-[#8a4a3b] text-xl">•</span>
                        <span>NGOs & Support Groups</span>
                        <span className="mx-1.5 text-[#8a4a3b] text-xl">•</span>
                        <span>Legal Experts & Counsellors</span>
                        <span className="mx-1.5 text-[#8a4a3b] text-xl">•</span>
                        <span>Shelters & Crisis Responders</span>
                        <span className="mx-1.5 text-[#8a4a3b] text-xl">•</span>
                        <span>Trained Volunteers & Health Professionals</span>
                    </div>
                </div>

                <div className="mt-1">
                    <p className="text-[#2DD4BF] text-base leading-snug italic">Our goal is simple: To be the reliable safety net for survivors across India.</p>
                </div>

                <div className="pt-2">
                    <h3 className={headerClass}>Become a vital part of India's safety net</h3>
                    <p className={`${textClass} mt-1`}>Whether you are an NGO, an organization, or a dedicated volunteer, your service is needed. Join the pan-India SSS Network and ensure no survivor is left behind.</p>
                    <a 
                        href="https://bit.ly/SFW-PanIndia-SurvivorSupportSystem" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group inline-flex items-center gap-2 text-[#2DD4BF] font-bold text-base hover:text-[#2DD4BF]/80 transition-colors mt-2"
                    >
                        <svg className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                        <span className="underline decoration-2 tracking-wider underline-offset-2">JOIN THE NATIONAL SURVIVOR SUPPORT NETWORK</span>
                    </a>
                </div>
            </CardLayout>
        ) },
        { 
            icon: icon4, 
            title: "Safe & Well-Lit Communities", 
            summary: "Improving public infrastructure to ensure all common spaces are safe, visible, and well-illuminated.",
            hideHeader: true,
            description: (
            <CardLayout icon={icon4} number="4" title="Safe & Well-Lit Communities" backgroundImage={safeWellLitImage}>
                <div>
                    <h3 className={headerClass}>Objective</h3>
                    <p className={textClass}>To strategically improve public infrastructure, ensuring all common spaces are safe, visible, and well-illuminated. <br></br>Our Goal: Zero Dark Spots.</p>
                </div>
                
                <p className={`${textClass} mt-2`}>
                    We believe that light is the first layer of defense. Our initiative focuses on reducing environmental vulnerability through targeted, measurable actions:
                </p>

                <ul className={listClass}>
                    <li><span className="font-semibold text-[#8a4a3b]">Safety Audits:</span> Systematically identify high-risk areas, dark spots, and broken streetlights through community and volunteer audits.</li>
                    <li><span className="font-semibold text-[#8a4a3b]">Implementation & Repair:</span> Undertake projects to fix malfunctioning lighting and install new, high-efficiency streetlights in identified vulnerable areas.</li>
                    <li><span className="font-semibold text-[#8a4a3b]">Sustainable Funding:</span> Actively seek strategic collaborations and Corporate Social Responsibility (CSR) partnerships to ensure consistent resources for large-scale lighting projects and long-term maintenance.</li>
                </ul>

                <div className="mt-4">
                     <Link 
                        to="/events-media#safe-well-lit" 
                        className="inline-block w-fit bg-transparent text-[#2DD4BF] border border-[#2DD4BF] px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#2DD4BF] hover:text-black transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md text-center"
                     >
                        View Safe & Well-Lit Communities Initiative
                     </Link>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                    <p className={promptClass}>Want to make your street well light and safer?</p>
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdmdG5Kf2_tsrb8KyGlFHbdhJVnrwUzxzZZFCwq2zhd4nehBg/viewform?usp=preview" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group inline-flex items-center gap-2 text-[#2DD4BF] font-bold text-base hover:text-[#2DD4BF]/80 transition-colors"
                    >
                        <svg className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                        <span className="underline decoration-2 tracking-wider underline-offset-2">Audit your street now</span>
                    </a>
                </div>
            </CardLayout>
        ) },
        { 
            icon: icon5, 
            title: "Citizen Police Alliance Team", 
            summary: "Transforming passive reporting into active partnership between citizens and police.",
            hideHeader: true,
            description: (
            <CardLayout icon={icon5} number="5" title="Citizen Police Alliance Team" backgroundImage={citizenPoliceBg}>
                <div>
                    <h3 className={headerClass}>Your Police, Your Safety</h3>
                    <p className={textClass}>Our mission is to transform passive reporting into active partnership. The Citizen-Police Alliance Team initiative fosters collaborative engagement, training everyday citizens to become proactive advocates for community safety.</p>
                </div>
                
                <div>
                    <h3 className={headerClass}>See Modern Policing in Action</h3>
                    <p className={textClass}>To demystify the advanced security efforts adopted by our Police Department, we offer citizens an exclusive tour of the Command Centre. Learn how cutting-edge technology, like real-time surveillance and rapid response systems, is protecting our communities.</p>
                </div>

                <div className="pt-2">
                    <h3 className={headerClass}>Command Centre Tour Opportunity</h3>
                    <p className={`${textClass} mt-1`}>Would you like to gain firsthand insight into modern
policing? Schedule a tour for your group or community.</p>
                    <a 
                        href="https://forms.gle/ayvdScjcJLjTCAANA" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group inline-flex items-center gap-2 text-[#2DD4BF] font-bold text-base hover:text-[#2DD4BF]/80 transition-colors mt-2"
                    >
                        <svg className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                        <span className="underline decoration-2 tracking-wider underline-offset-2">Request a Bangalore Police Command Centre Tour</span>
                    </a>
                </div>

                <div className="pt-2">
                    <a 
                        href="https://chat.whatsapp.com/BVmXh5pO3DuD2LPCwxsncr" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block bg-transparent text-[#2DD4BF] border border-[#2DD4BF] px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#2DD4BF] hover:text-black transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md text-center"
                    >
                        Join WhatsApp Group
                    </a>
                </div>
            </CardLayout>
        ) },
        { 
            icon: icon3, 
            title: "Network of Street-wise Safety Squadrons", 
            summary: "Building a network of volunteers who act as the eyes, ears, and helping hands of the community.",
            hideHeader: true,
            description: (
            <CardLayout icon={icon3} number="6" title="Network of Street-wise Safety Squadrons" backgroundImage={networkBg}>
                <div>
                    <h3 className={headerClass}>Objective</h3>
                    <p className={textClass}>
                        <span className="font-semibold text-white">Become the Last-Mile Connectivity for Safety.</span> We are building a Network of Street-Wise Safety Squadrons—volunteers who act as the eyes, ears, and helping hands of the community.
                    </p>
                </div>
                
                <div>
                    <h3 className={headerClass}>Your Role</h3>
                    <ul className={listClass}>
                        <li>Assist your specific neighborhood.</li>
                        <li>Respond to local safety concerns.</li>
                        <li>Ensure no woman is left helpless.</li>
                    </ul>
                </div>

                <div className="pt-2">
                    <p className={promptClass}>Stand up for your street/community. Join us as a Safety Squadron Member</p>
                    <button 
                        disabled
                        className="inline-block bg-transparent text-gray-500 border border-gray-500 px-4 py-1.5 rounded-full text-sm font-semibold cursor-not-allowed text-center"
                    >
                        Enroll as a Safety Squadron Member (Not Active Yet)
                    </button>
                </div>
            </CardLayout>
        ) },
        { 
            icon: icon7, 
            title: "SAFETY EDUCATION INTO SCHOOL CURRICULUM", 
            summary: "Integrating safety, consent, and respect into curricula.",
            hideHeader: true,
            tag: "Future Roadmap",
            description: (
                <CardLayout icon={icon7} number="7" title="SAFETY EDUCATION INTO SCHOOL CURRICULUM" backgroundImage={educationBg} tag="Future Roadmap">
                    <div>
                        <h3 className={headerClass}>Objective</h3>
                        <p className={`${textClass} font-bold mb-2`}>Safety Integrated Curriculum</p>
                        <p className={textClass}>To move beyond one-time workshops and institutionalize safety, laws, respect, and consent as fundamental parts of student education.</p>
                        <p className={`${textClass} mt-2`}>We believe safety is a life skill, not an elective. By embedding these values early, we are shaping a generation that respects boundaries and understands their rights.</p>
                    </div>
                    
                    <div>
                        <h3 className={headerClass}>Key Strategic Actions</h3>
                        <p className={textClass}><span className="font-semibold text-[#8a4a3b]">Curriculum Development:</span> Collaborating with the Department of Education and child psychology experts to draft a dedicated, age-appropriate safety curriculum.</p>
                    </div>

                    <div className="pt-2">
                        <p className={`${textClass} italic text-[#2DD4BF]`}>We are actively seeking experts and institutional partners in education policy to help pilot this curriculum development project.</p>
                    </div>
                </CardLayout>
            )
        },
        { 
            icon: icon9, 
            title: "Women Empowerment & Livelihood", 
            summary: "Supporting skill training, employment, and entrepreneurship.",
            hideHeader: true,
            tag: "Future Roadmap",
            description: (
                <CardLayout icon={icon9} number="8" title="Women Empowerment & Livelihood" backgroundImage={womenBg} tag="Future Roadmap">
                    <div>
                        <h3 className={headerClass}>Objective</h3>
                        <p className={textClass}>To foster economic independence and resilience, recognizing that financial security is a critical shield against vulnerability and abuse.</p>
                    </div>
                    
                    <div>
                        <h3 className={headerClass}>Partner Opportunity: Help Us Launch Livelihood Programs</h3>
                        <p className={textClass}>We are expanding our mission to address the root cause of vulnerability: <span className="font-semibold text-white">Economic Dependence</span>.</p>
                        <p className="mt-2 text-[#8a4a3b] text-base leading-snug">We are looking for Corporate Partners, Vocational Training Institutes, and Mentors to help us kickstart our Women Empowerment & Livelihood Wing.</p>
                    </div>

                    <div>
                        <p className={textClass}><span className="font-semibold text-[#8a4a3b]">Goal:</span> To create a pilot program that offers skill training and financial literacy to survivors and at-risk women.</p>
                        <p className={`${textClass} italic mt-2 text-[#2DD4BF]`}>Join us in building this pillar from the ground up.</p>
                    </div>
                </CardLayout>
            )
        },
        { 
            icon: icon8, 
            title: "Annual Safety Recognition Awards", 
            summary: "Honoring contributions and best practices in women’s safety.",
            hideHeader: true,
            tag: "Future Roadmap",
            description: (
                <CardLayout icon={icon8} number="9" title="Annual Safety Recognition Awards" backgroundImage={awardsBg} tag="Future Roadmap">
                    <div>
                        <h3 className={headerClass}>Objective</h3>
                        <p className={textClass}>To incentivize high standards and celebrate dedication, we plan to establish Annual Safety Recognition Awards. This initiative is designed to create a positive feedback loop within the safety ecosystem.</p>
                        <p className={`${textClass} mt-2`}>Recognize and amplify the invaluable contributions made by individuals, services, and organizations that actively contribute to women's safety across India.</p>
                    </div>
                    
                    <div>
                        <h3 className={headerClass}>Key Strategic Actions</h3>
                        <ul className={listClass}>
                            <li><span className="font-semibold text-[#8a4a3b]">Establishing the Framework:</span> Developing clear criteria for nominations to identify genuine Safety Champions.</li>
                            <li><span className="font-semibold text-[#8a4a3b]">Celebrating Success:</span> Hosting an annual event to formally recognize awardees, thereby setting a benchmark for best practices and inspiring wider community involvement.</li>
                        </ul>
                    </div>

                    <div className="pt-2">
                        <p className={`${textClass} italic text-[#2DD4BF]`}>We are currently seeking sponsorship and patronage to launch this high-profile awards program.</p>
                    </div>
                </CardLayout>
            )
        }
    ];
    const heroRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [sectionTop, setSectionTop] = React.useState(0);
    const [scrollY, setScrollY] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    React.useEffect(() => {
        const updatePosition = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                setSectionTop(rect.top + window.scrollY);
            }
        }
        updatePosition();
        window.addEventListener('resize', updatePosition);
        return () => window.removeEventListener('resize', updatePosition);
    }, []);

    const getCardStyle = (index: number): React.CSSProperties => {
        const baseTop = isMobile ? 8 : 9; // rem
        const step = isMobile ? 0.8 : 1;
        const top = baseTop + index * step;

        if (!sectionTop) {
            return {
                transform: 'scale(0.95)',
                top: `${top}rem`,
                transformOrigin: 'top center',
                opacity: 0
            };
        }

        const animationDistance = window.innerHeight * 0.4;
        const animationStart = sectionTop - window.innerHeight / 2;

        const progress = Math.max(0, Math.min(1, (scrollY - animationStart) / animationDistance));
        let scale = 0.95 + progress * 0.05;
        let opacity = progress;
        let blur = 0;

        // Delay blur to ensure card stays clear while active
        const zoomOutStart = animationStart + animationDistance + window.innerHeight * 0.1;
        const zoomOutDistance = window.innerHeight * 0.5;
        // Stagger blur based on index so only back cards blur
        const cardZoomOutStart = zoomOutStart + index * (window.innerHeight * 0.5);

        if (scrollY > cardZoomOutStart) {
            const zoomOutProgress = Math.min(1, (scrollY - cardZoomOutStart) / zoomOutDistance);
            scale = 1 - zoomOutProgress * 0.1; // Increased scale down effect
            
            blur = zoomOutProgress * 10; // Stronger blur
            opacity = Math.max(0.3, 1 - zoomOutProgress * 0.8); // More transparency
        }

        const brightness = Math.max(0.5, 1 - (blur / 10) * 0.5); // Darker

        return {
            transform: `scale(${scale})`,
            top: `${top}rem`,
            transformOrigin: 'top center',
            opacity: opacity,
            filter: `blur(${blur}px) brightness(${brightness})`
        };
    };
    return (
        <div className="bg-brand-dark">
            <div id="home">
            <Hero
                title="One Voice, One Mission"
                subtitle={["A Safer India", "for Women"]}
                description={
                    <div className="flex flex-col gap-2 text-center max-w-4xl mx-auto">
                        
                        
                        <p className="text-xl md:text-2xl font-semibold text-brand-dull-white tracking-[0.1em] ">
                            Don’t just hope for change, <span className="text-brand-dull-white">be the change.</span>
                        </p>
                         <p className="text-base md:text-lg text-brand-dull-white/90 leading-tight font-light">
                            We are a pan-India collaborative movement with one mission: a nation where every woman is safe. <br></br>Together, we are building a strong, unified community so no woman is ever left without help. Join us to create real, practical solutions that turn distress into safety and ensure support is always within reach.
                        </p>
                        
                        
                       

                        

                        
                    </div>
                }
                videoSrc={video}
                scrollY={scrollY}
                isAnimated={true}
                slideImages={[slide1, slide2, slide3]}
            >
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/get-involved" className="w-3/4 sm:w-auto text-white px-6 py-2 md:px-8 md:py-3 rounded-3xl text-base md:text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg bg-gradient-to-r from-red-600 to-[#FF0440] hover:from-red-700 hover:to-[#d90338]">
                    Join the Movement
                </Link>
                <Link to="/impact" className="w-3/4 sm:w-auto bg-transparent text-[#FF0440] border border-[#FF0440] px-6 py-2 md:px-8 md:py-3 rounded-3xl text-base md:text-lg font-semibold hover:bg-[#FF0440] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg">
                    See Our Impact
                </Link>
            </div>
            </Hero>
            </div>
            
            {/* Our Mission Section */}
            <section id="initiatives" ref={sectionRef} className="relative pb-20 sm:pb-28 scroll-mt-24" style={{ backgroundColor: '#0a0a0a' }}>
                <div className="sticky top-16 z-10 w-full">
                    <div 
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to bottom, #000000 70%, rgba(0, 0, 0, 0) 100%)',
                            zIndex: -1,
                        }}
                    ></div>
                    <div className="container mx-auto px-4 md:px-8 pt-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-center">
                            <span style={{ color: '#e1d5d5' }}></span> <span style={{ color: '#ff0440' }}>Our Initiatives</span>
                        </h2>
                        <div className="pb-8">
                            <p className="mt-4 max-w-3xl mx-auto text-base md:text-xl text-brand-light-text text-center">
                                To empower communities, engage key stakeholders, and drive actionable change to create a safer environment for women across India.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 md:px-8">
                    <div className="h-10"></div>
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="sticky"
                            style={getCardStyle(index)}
                        >
                            <ExpandableCard
                                title={value.title}
                                summary={value.summary}
                                icon={value.icon}
                                index={index}
                                totalCards={values.length}
                                hideHeader={value.hideHeader}
                                tag={value.tag}
                            >
                                {value.description}
                            </ExpandableCard>
                        </div>
                    ))}
                </div>
            </section>

            <JoinSection />
            <UNSDGSection />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <LogoCloud />
            </div>
            <GoToTopButton />
        </div>
    );
};

export default HomePage;
