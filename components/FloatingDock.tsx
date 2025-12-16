import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

interface LinkData {
    title: string;
    href: string;
}

const links: LinkData[] = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Our Impact", href: "/impact" },
    { title: "Resources", href: "/resources" },
    { title: "Events & Media", href: "/events-media" },
    { title: "Get Involved", href: "/get-involved" },
    { title: "Blog", href: "/blog" },
    { title: "FAQ", href: "/faq" },
];

export const FloatingDock = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div 
            className="flex items-center h-16"
            onMouseLeave={() => setHoveredIndex(null)}
        >
            {links.map((link, idx) => (
                <motion.div
                    key={link.title}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative mx-0.5"
                >
                    <NavLink
                        to={link.href}
                        className="relative block px-3 py-1.5 rounded-3xl text-sm font-medium uppercase transition-colors duration-200"
                    >
                        {({ isActive }) => (
                            <>
                                <span className={`relative z-20 ${isActive ? 'text-white' : 'text-brand-light hover:text-white'}`}>
                                    {link.title}
                                </span>
                                
                                {/* Static Active Background */}
                                {isActive && (
                                    <span className="absolute inset-0 bg-brand-red rounded-3xl z-10" />
                                )}

                                {/* Moving Hover Background */}
                                {hoveredIndex === idx && !isActive && (
                                    <motion.span
                                        className="absolute inset-0 bg-[#8a4a3b] rounded-3xl z-10"
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                        exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                                    />
                                )}
                            </>
                        )}
                    </NavLink>
                </motion.div>
            ))}
        </div>
    );
};
