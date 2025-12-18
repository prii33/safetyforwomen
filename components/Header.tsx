import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '/assets/sfwlogo.png';
import IFFLogo from '/assets/IFF.png';
import { FloatingDock } from './FloatingDock';
import './Header.css';

const MobileNavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
    const linkClass = ({ isActive }: { isActive: boolean }) => 
        `px-4 py-2 rounded-3xl text-sm font-medium uppercase transition-all duration-300 ${
            isActive 
                ? 'bg-brand-red text-white' 
                : 'text-brand-light hover:bg-brand-red/10'
        }`;

    return (
        <>
            <NavLink to="/" className={linkClass} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" className={linkClass} onClick={closeMenu}>About Us</NavLink>
            <NavLink to="/#initiatives" className={linkClass} onClick={closeMenu}>Our Initiatives</NavLink>
            <NavLink to="/impact" className={linkClass} onClick={closeMenu}>Our Impact</NavLink>
            <NavLink to="/resources" className={linkClass} onClick={closeMenu}>Resources</NavLink>
            <NavLink to="/events-media" className={linkClass} onClick={closeMenu}>Events & Media</NavLink>
            <NavLink to="/get-involved" className={linkClass} onClick={closeMenu}>Get Involved</NavLink>
            <NavLink to="/blog" className={linkClass} onClick={closeMenu}>Blog</NavLink>
            <NavLink to="/faq" className={linkClass} onClick={closeMenu}>FAQ</NavLink>
        </>
    );
};

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${isHomePage ? 'fixed w-full' : 'sticky'} top-0 z-40 transition-colors duration-300 ${isHomePage && !isScrolled ? 'bg-transparent' : 'bg-black/90 backdrop-blur-md'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex flex-col items-center self-start">
                        <Link to="/" className="flex-shrink-0">
                            <img className="h-32 md:h-[150px]" src={logo} alt="Safety For Women" />
                        </Link>
                        <div className="mt-1" title="Internet Freedom Foundation">
                            <img src={IFFLogo} alt="IFF Partner" className="h-10 md:h-12 w-auto object-contain" />
                        </div>
                    </div>
                    <div className="hidden xl:block">
                        <div className="ml-10">
                            <FloatingDock />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="-mr-2 flex xl:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-brand-light-text hover:text-white hover:bg-brand-maroon focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg className="block h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                ) : (
                                    <svg className="block h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="xl:hidden bg-black/40 backdrop-blur-xl absolute top-20 left-0 w-full h-screen border-t border-white/10" id="mobile-menu">
                    <div className="px-8 py-8 space-y-6 flex flex-col items-start">
                        <MobileNavLinks closeMenu={() => setIsOpen(false)} />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
