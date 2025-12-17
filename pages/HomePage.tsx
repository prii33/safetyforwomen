import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import video from '@/assets/smoke2.mp4';
import Hero from '../components/Hero';
import image3 from '@/assets/image3.png';
import slide1 from '@/assets/slide1.webp';
import slide2 from '@/assets/slide2.webp';
import slide3 from '@/assets/slide3.webp';
import pledge from '@/assets/pledge.png';
import AnimatedSection from '../components/AnimatedSection';
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
import JoinSection from '../components/JoinSection';
import '../components/JoinSection.css';
import UNSDGSection from '../components/UNSDGSection';
import GoToTopButton from '../components/GoToTopButton';
import { ExpandableCard } from '../components/ExpandableCard';


const HomePage: React.FC = () => {
    const values = [
        { 
            icon: icon1, 
            title: "Awareness Programs", 
            summary: "Educating and empowering communities through actionable knowledge and safety workshops.",
            description: (
            <div className="space-y-2 mt-2 text-sm md:text-base leading-snug">
                <div>
                    <span className="text-[#8a4a3b] font-semibold uppercase">Objective: </span>
                    <span className="text-[#e1d5d5]">To educate and empower communities through actionable knowledge. We conduct comprehensive safety workshops in schools, colleges, workplaces, and residential communities, often in collaboration with the Police Department.</span>
                </div>
                
                <div>
                    <span className="text-[#8a4a3b] font-semibold uppercase">Key Topics Covered:</span>
                    <ul className="list-disc pl-4 space-y-1 text-[#e1d5d5] marker:text-[#8a4a3b]">
                        <li>Self-defense demonstrations and techniques.</li>
                        <li>Legal rights and women's safety laws.</li>
                        <li>Essential safety protocols and emergency response.</li>
                    </ul>
                </div>

                <div className="flex flex-row gap-2 pt-2">
                    <a 
                        href="https://bit.ly/SFW-AwarenessProgramQuestionaire" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block bg-transparent text-[#8a4a3b] border border-[#8a4a3b] px-3 py-1 rounded-full text-sm font-semibold hover:bg-[#8a4a3b] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md text-center"
                    >
                        Request a Session
                    </a>
                    <Link 
                        to="/events-media" 
                        className="inline-block bg-transparent text-[#8a4a3b] border border-[#8a4a3b] px-3 py-1 rounded-full text-sm font-semibold hover:bg-[#8a4a3b] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md text-center"
                    >
                        See Us in Action
                    </Link>
                </div>
            </div>
        ) },
        { 
            icon: icon2, 
            title: "Tech Solutions for Safety", 
            summary: "Leveraging technology for safety, including community maps, hackathons, and safety products.",
            description: (
            <div className="space-y-2 mt-2 text-sm md:text-base leading-snug">
                <div>
                    <span className="text-[#8a4a3b] font-semibold uppercase">Objective: </span>
                    <span className="text-[#e1d5d5]">Leverage technology for safety and prevention.</span>
                </div>
                
                <div>
                    <span className="text-[#8a4a3b] font-semibold uppercase">Key Initiatives:</span>
                    <ul className="list-disc pl-4 space-y-1 text-[#e1d5d5] marker:text-[#8a4a3b]">
                        <li>Develop Community safety map for public spaces, services & organizations.</li>
                        <li>Host hackathons to generate innovative ideas for safety technologies & solutions.</li>
                        <li>Collaborate with tech companies to develop safety-focused products.</li>
                    </ul>
                </div>

                <div className="flex flex-row gap-2 pt-2">
                    <a 
                        href="https://forms.gle/zgPLDgGwxYYPYavo9" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block bg-transparent text-[#8a4a3b] border border-[#8a4a3b] px-3 py-1 rounded-full text-sm font-semibold hover:bg-[#8a4a3b] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md text-center"
                    >
                        Street Safety Audit
                    </a>
                </div>
            </div>
        ) },
        { 
            icon: icon3, 
            title: "Network of Street-wise Safety Squadrons", 
            summary: "Building a network of volunteers who act as the eyes, ears, and helping hands of the community.",
            description: (
            <div className="space-y-2 mt-2 text-sm md:text-base leading-snug">
                <div>
                    <span className="text-[#8a4a3b] font-semibold uppercase">Become the Last-Mile Connectivity for Safety</span>
                    <p className="text-[#e1d5d5] mt-1">
                        We are building a Network of Street-Wise Safety Squadrons—volunteers who act as the eyes, ears, and helping hands of the community.
                    </p>
                </div>
                
                <div>
                    <span className="text-[#8a4a3b] font-semibold uppercase">Your Role:</span>
                    <ul className="list-disc pl-4 space-y-1 text-[#e1d5d5] marker:text-[#8a4a3b]">
                        <li>Assist your specific neighborhood.</li>
                        <li>Respond to local safety concerns.</li>
                        <li>Ensure no woman is left helpless.</li>
                    </ul>
                </div>

                <div className="pt-2">
                    <p className="text-[#e1d5d5] font-medium mb-2">Stand up for your street.</p>
                    <button 
                        disabled
                        className="inline-block bg-transparent text-gray-500 border border-gray-500 px-3 py-1 rounded-full text-sm font-semibold cursor-not-allowed text-center"
                    >
                        Enroll as a Safety Squadron Member (Not Active Yet)
                    </button>
                </div>
            </div>
        ) },
        { 
            icon: icon4, 
            title: "Safe & Well-Lit Communities", 
            summary: "Improving public infrastructure to ensure all common spaces are safe, visible, and well-illuminated.",
            description: (
            <div className="space-y-2 mt-2 text-sm md:text-base leading-snug">
                <div>
                    <span className="text-[#8a4a3b] font-semibold uppercase">Objective: </span>
                    <span className="text-[#e1d5d5]">To strategically improve public infrastructure, ensuring all common spaces are safe, visible, and well-illuminated. Our Goal: Zero Dark Spots.</span>
                </div>
                
                <p className="text-[#e1d5d5] mt-2">
                    We believe that light is the first layer of defense. Our initiative focuses on reducing environmental vulnerability through targeted, measurable actions:
                </p>

                <ul className="list-disc pl-4 space-y-1 text-[#e1d5d5] marker:text-[#8a4a3b]">
                    <li><span className="font-semibold text-[#8a4a3b]">Safety Audits:</span> Systematically identify high-risk areas, dark spots, and broken streetlights through community and volunteer audits.</li>
                    <li><span className="font-semibold text-[#8a4a3b]">Implementation & Repair:</span> Undertake projects to fix malfunctioning lighting and install new, high-efficiency streetlights in identified vulnerable areas.</li>
                    <li><span className="font-semibold text-[#8a4a3b]">Sustainable Funding:</span> Actively seek strategic collaborations and Corporate Social Responsibility (CSR) partnerships to ensure consistent resources for large-scale lighting projects and long-term maintenance.</li>
                </ul>

                <div className="mt-4">
                     <a 
                        href="#" 
                        className="inline-block w-fit bg-transparent text-[#8a4a3b] border border-[#8a4a3b] px-3 py-1 rounded-full text-sm font-semibold hover:bg-[#8a4a3b] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md text-center"
                     >
                        View Be The Light Gallery
                     </a>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                    <p className="text-[#e1d5d5] italic">Want to make your street well light and safer?</p>
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdmdG5Kf2_tsrb8KyGlFHbdhJVnrwUzxzZZFCwq2zhd4nehBg/viewform?usp=preview" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block w-fit bg-transparent text-[#8a4a3b] border border-[#8a4a3b] px-3 py-1 rounded-full text-sm font-semibold hover:bg-[#8a4a3b] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md text-center"
                    >
                        Audit your street now
                    </a>
                </div>
            </div>
        ) },
        { 
            icon: icon5, 
            title: "Citizen Police Alliance Team", 
            summary: "Transforming passive reporting into active partnership between citizens and police.",
            description: (
            <div className="space-y-2 mt-2 text-sm md:text-base leading-snug">
                <div>https://chat.whatsapp.com/BVmXh5pO3DuD2LPCwxsncr
                    <span className="text-[#8a4a3b] font-semibold uppercase">Your Police, Your Safety: </span>
                    <span className="text-[#e1d5d5]">Our mission is to transform passive reporting into active partnership. The Citizen-Police Alliance Team initiative fosters collaborative engagement, training everyday citizens to become proactive advocates for community safety.</span>
                </div>
                
                <div>
                    <span className="text-[#8a4a3b] font-semibold uppercase">See Modern Policing in Action: </span>
                    <span className="text-[#e1d5d5]">To demystify the advanced security efforts adopted by our Police Department, we offer citizens an exclusive tour of the Command Centre. Learn how cutting-edge technology, like real-time surveillance and rapid response systems, is protecting our communities.</span>
                </div>

                <div className="pt-2">
                    <span className="text-[#8a4a3b] font-semibold uppercase">Command Centre Tour Opportunity: </span>
                    <p className="text-[#e1d5d5] mt-1">Would you like to gain firsthand insight into modern policing? Email us to schedule a tour for your group or community:</p>
                    <a 
                        href="mailto:reach@safetyforwomen.org" 
                        className="inline-block mt-2 bg-transparent text-[#8a4a3b] border border-[#8a4a3b] px-3 py-1 rounded-full text-sm font-semibold hover:bg-[#8a4a3b] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md text-center"
                    >
                        reach@safetyforwomen.org
                    </a>
                </div>
            </div>
        ) },
        { 
            icon: icon6, 
            title: "Survivor Support System (SSS) – India", 
            summary: "Providing comprehensive, coordinated support to survivors of crime and violence.",
            description: (
            <div className="space-y-2 mt-2 text-sm md:text-base leading-snug">
                <div>
                    <span className="text-[#8a4a3b] font-semibold uppercase">Objective: </span>
                    <span className="text-[#e1d5d5]">To provide comprehensive, coordinated support to survivors of crime, violence, abuse, and exploitation.</span>
                </div>
                
                <div className="mt-2">
                    <span className="text-[#8a4a3b] font-semibold uppercase">The Challenge: Disconnected Efforts</span>
                    <p className="text-[#e1d5d5] mt-1">
                        Across India, countless individuals and organizations are working tirelessly to support survivors. Yet, too often, these efforts exist in isolation—disconnected, unknown to each other, and inaccessible to the very people who need them most.
                    </p>
                </div>

                <div className="mt-2">
                    <span className="text-[#8a4a3b] font-semibold uppercase">The Solution: A Unified Network</span>
                    <p className="text-[#e1d5d5] mt-1">
                        The Survivor Support System (SSS) is our nationwide initiative designed to change that. We are building a unified, verified, and collaborative network of resources to guarantee that help is always available, immediate, and high-quality.
                    </p>
                </div>

                <div className="mt-2">
                    <span className="text-[#8a4a3b] font-semibold uppercase">We are building a collaborative network of:</span>
                    <div className="text-[#e1d5d5] mt-1 flex flex-wrap items-center">
                        <span className="mr-2 text-[#8a4a3b] text-2xl">•</span>
                        <span>NGOs & Support Groups</span>
                        <span className="mx-2 text-[#8a4a3b] text-2xl">•</span>
                        <span>Legal Experts & Counsellors</span>
                        <span className="mx-2 text-[#8a4a3b] text-2xl">•</span>
                        <span>Shelters & Crisis Responders</span>
                        <span className="mx-2 text-[#8a4a3b] text-2xl">•</span>
                        <span>Trained Volunteers & Health Professionals</span>
                    </div>
                </div>

                <div className="mt-2">
                    <p className="text-[#e1d5d5] italic">Our goal is simple: To be the reliable safety net for survivors across India.</p>
                </div>

                <div className="pt-2">
                    <span className="text-[#8a4a3b] font-semibold uppercase">Become a vital part of India's safety net.</span>
                    <p className="text-[#e1d5d5] mt-1">Whether you are an NGO, an organization, or a dedicated volunteer, your service is needed. Join the pan-India SSS Network and ensure no survivor is left behind.</p>
                    <a 
                        href="https://bit.ly/SFW-PanIndia-SurvivorSupportSystem" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block mt-2 bg-transparent text-[#8a4a3b] border border-[#8a4a3b] px-3 py-1 rounded-full text-sm font-semibold hover:bg-[#8a4a3b] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md text-center"
                    >
                        Enroll/Partner Here
                    </a>
                </div>
            </div>
        ) },
        { 
            icon: icon7, 
            title: "Safety Education in Schools", 
            summary: "Integrating safety, consent, and respect into curricula.",
            description: "Integrating safety, consent, and respect into curricula and equipping teachers to promote safe practices." 
        },
        { 
            icon: icon8, 
            title: "Annual Safety Recognition Awards", 
            summary: "Honoring contributions and best practices in women’s safety.",
            description: "National awards to honor contributions and best practices in women’s safety, spotlighting changemakers." 
        },
        { 
            icon: icon9, 
            title: "Women Empowerment & Livelihood", 
            summary: "Supporting skill training, employment, and entrepreneurship.",
            description: "Supporting skill training, employment, and entrepreneurship to empower women with independence." 
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
        const baseTop = isMobile ? 3 : 4; // rem
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
            
            {/* Our Mission Section */}
            <section ref={sectionRef} className="relative pb-20 sm:pb-28" style={{ backgroundColor: '#0a0a0a' }}>
                <div className="sticky top-0 z-10 w-full">
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
