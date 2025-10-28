
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavLinks = () => (
    <>
        <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-pink text-white' : 'text-gray-700 hover:bg-brand-pink/10'}`}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => `px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-pink text-white' : 'text-gray-700 hover:bg-brand-pink/10'}`}>About Us</NavLink>
        <NavLink to="/impact" className={({ isActive }) => `px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-pink text-white' : 'text-gray-700 hover:bg-brand-pink/10'}`}>Our Impact</NavLink>
        <NavLink to="/resources" className={({ isActive }) => `px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-pink text-white' : 'text-gray-700 hover:bg-brand-pink/10'}`}>Resources</NavLink>
        <NavLink to="/events-media" className={({ isActive }) => `px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-pink text-white' : 'text-gray-700 hover:bg-brand-pink/10'}`}>Events & Media</NavLink>
        <NavLink to="/get-involved" className={({ isActive }) => `px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-pink text-white' : 'text-gray-700 hover:bg-brand-pink/10'}`}>Get Involved</NavLink>
    </>
);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <h1 className="text-xl font-bold text-brand-purple">Safety For Women</h1>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLinks />
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="tel:112" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg border-b-4 border-blue-800 hover:border-blue-700">
                            Call 112
                        </a>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        <NavLinks />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
