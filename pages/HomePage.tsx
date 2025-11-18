
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import video from '@/assets/smoke2.mp4';
import Hero from '../components/Hero';
import image3 from '@/assets/image3.png';
import pledge from '@/assets/pledge.png';
import AnimatedSection from '../components/AnimatedSection';
import FloatingSocialIcons from '../components/FloatingSocialIcons';
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


const HomePage: React.FC = () => {
    const values = [
        { icon: icon1, title: "Awareness Programs", description: "Workshops and training in schools, colleges, workplaces, and communities on self-defense, legal rights, and safety protocols." },
        { icon: icon2, title: "Tech Solutions for Safety", description: "Developing safety rating apps, running hackathons, and partnering with tech companies to innovate on women’s safety." },
        { icon: icon3, title: "Volunteer Networks", description: "Training street-wise safety squadrons to assist communities and serve as last-mile safety responders." },
        { icon: icon4, title: "Safe & Well-Lit Communities", description: "Addressing dark spots through lighting, CCTV, and public space improvements via CSR and local partnerships." },
        { icon: icon5, title: "Citizen-Police Alliances", description: "Fostering collaborative teams for community-police engagement and training citizens to be proactive about safety." },
        { icon: icon6, title: "Victim Support Systems", description: "Connecting victims to NGOs, legal, medical, and counseling support for immediate and accessible help." },
        { icon: icon7, title: "Safety Education in Schools", description: "Integrating safety, consent, and respect into curricula and equipping teachers to promote safe practices." },
        { icon: icon8, title: "Annual Safety Recognition Awards", description: "National awards to honor contributions and best practices in women’s safety, spotlighting changemakers." },
        { icon: icon9, title: "Women Empowerment & Livelihood", description: "Supporting skill training, employment, and entrepreneurship to empower women with independence." }
    ];
    const heroRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [sectionTop, setSectionTop] = React.useState(0);
    const [scrollY, setScrollY] = React.useState(0);

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
        const baseTop = 10; // rem
        const top = baseTop + index * 2;

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
        const opacity = progress;

        const zoomOutStart = animationStart + animationDistance;
        const zoomOutDistance = window.innerHeight * 0.5;
        if (scrollY > zoomOutStart) {
            const zoomOutProgress = Math.min(1, (scrollY - zoomOutStart) / zoomOutDistance);
            scale = 1 - zoomOutProgress * 0.05;
        }

        return {
            transform: `scale(${scale})`,
            top: `${top}rem`,
            transformOrigin: 'top center',
            opacity: opacity
        };
    };
    return (
        <div className="bg-brand-dark">
            <FloatingSocialIcons />
            <Hero
                title="One Voice, One Mission"
                subtitle="A Safer India for Women"
                description="Join our diverse, pan-India collective dedicated to transforming distress into meaningful action and building a nation where every woman feels secure."
                videoSrc={video}
                scrollY={scrollY}
                isAnimated={true}
                imageSrc={image3}
            >
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/get-involved" className="w-full sm:w-auto text-white px-8 py-3 rounded-3xl text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg bg-gradient-to-r from-red-600 to-[#FF0440] hover:from-red-700 hover:to-[#d90338]">
                        Join the Movement
                    </Link>
                    <Link to="/impact" className="w-full sm:w-auto bg-transparent text-[#FF0440] border border-[#FF0440] px-8 py-3 rounded-3xl text-lg font-semibold hover:bg-[#FF0440] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg">
                        See Our Impact
                    </Link>
                </div>
            </Hero>
            
            {/* Our Mission Section */}
            <section ref={sectionRef} className="relative py-20 sm:py-28 px-4 md:px-8" style={{ backgroundColor: '#0a0a0a' }}>
                <div className="container mx-auto">
                    <div className="sticky top-20 z-10">
                        <div 
                            className="absolute inset-0"
                            style={{
                                backgroundColor: 'rgba(10, 10, 10, 0.8)',
                                zIndex: -1,
                            }}
                        ></div>
                        <h2 className="text-5xl font-bold text-center">
                            <span style={{ color: '#e1d5d5' }}>Our 9</span> <span style={{ color: '#ff0440' }}>Core Objectives</span>
                        </h2>
                        <div className="pb-8">
                            <p className="mt-4 max-w-3xl mx-auto text-xl text-brand-light-text text-center">
                                To empower communities, engage key stakeholders, and drive actionable change to create a safer environment for women across India.
                            </p>
                        </div>
                    </div>
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="sticky"
                            style={getCardStyle(index)}
                        >
                            <div className="bg-[#000000] p-8 sm:p-12 s:p-20 rounded-[80px] border-2 border-[#724b4b54] flex flex-col md:flex-row items-center gap-8">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <img src={value.icon} alt={value.title} className="w-16 h-16 text-white" />
                                </div>
                                <div className="md:ml-8 w-full">
                                    <div className="flex items-baseline gap-x-4">
                                      <h3 className="font-semibold text-2xl md:text-4xl tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">{value.title}</h3>
                                      <p className="text-[#6f6f6f] text-base md:text-lg max-w-l">{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <JoinSection />
            <LogoCloud />
        </div>
    );
};

export default HomePage;
