import React from 'react';
import ungoalslogo from '../assets/ungoalslogo.png';
import goal3logo from '../assets/3logo.png';
import goal4logo from '../assets/4logo.png';
import goal5logo from '../assets/5logo.png';
import goal11logo from '../assets/11logo.png';
import goal16logo from '../assets/16logo.png';
import goal17logo from '../assets/17logo.png';

const UNSDGSection: React.FC = () => {
    return (
        <div className="relative py-4 lg:py-6 overflow-hidden">
            {/* Background with gradient and subtle texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] via-[#2a1212] to-black z-0"></div>
            <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-5 z-0"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center justify-center gap-2">
                    
                    {/* Title & Main Logo */}
                    <div className="flex flex-col items-center gap-0">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-center">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">ALIGNED WITH </span>
                            <span className="text-white">UN SDGs</span>
                        </h2>
                        
                        <img 
                            src={ungoalslogo} 
                            alt="UN Sustainable Development Goals" 
                            className="w-56 sm:w-72 h-auto filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300" 
                        />
                    </div>

                    {/* Brown Dotted Line */}
                    <div className="w-full max-w-3xl border-t-2 border-dotted border-[#8B4513]/40 my-1"></div>

                    {/* Goal Cards */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                        {[
                            { 
                                img: goal3logo, 
                                color: "shadow-[#4C9F38]/40", 
                                delay: "0",
                                link: "https://www.un.org/en/exhibits/page/sdgs-17-goals-transform-world#sdg3"
                            },
                            { 
                                img: goal4logo, 
                                color: "shadow-[#C5192D]/40", 
                                delay: "100",
                                link: "https://www.un.org/en/exhibits/page/sdgs-17-goals-transform-world#sdg4"
                            },
                            { 
                                img: goal5logo, 
                                color: "shadow-[#e5243b]/40", 
                                delay: "200",
                                link: "https://www.un.org/en/exhibits/page/sdgs-17-goals-transform-world#sdg5"
                            },
                            { 
                                img: goal11logo, 
                                color: "shadow-[#f99d26]/40", 
                                delay: "300",
                                link: "https://www.un.org/en/exhibits/page/sdgs-17-goals-transform-world#sdg11"
                            },
                            { 
                                img: goal16logo, 
                                color: "shadow-[#26bde2]/40", 
                                delay: "400",
                                link: "https://www.un.org/en/exhibits/page/sdgs-17-goals-transform-world#sdg16"
                            },
                            { 
                                img: goal17logo, 
                                color: "shadow-[#19486A]/40", 
                                delay: "500",
                                link: "https://www.un.org/en/exhibits/page/sdgs-17-goals-transform-world#sdg17"
                            }
                        ].map((goal, index) => (
                            <a 
                                key={index}
                                href={goal.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`relative group w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl overflow-hidden shadow-lg ${goal.color} hover:shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer bg-black/20 block`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                <img 
                                    src={goal.img} 
                                    alt={`Goal ${index + 1}`} 
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:rotate-3 group-hover:scale-110" 
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UNSDGSection;
