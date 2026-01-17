import React from 'react';
import './FloatingSocialIcons.css';
import ChatWidget from './ChatWidget';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaWhatsapp, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FloatingSocialIcons: React.FC = () => {
    return (
        <div className="hidden md:block fixed right-4 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-center">
             <a href="tel:112" className="mb-4 group relative inline-flex items-center justify-center w-16 h-16 p-[2px] overflow-hidden rounded-full font-bold text-black transition-all duration-300 ease-in-out hover:scale-110 star-border z-50">
                <span className="relative w-full h-full flex items-center justify-center transition-all ease-in duration-75 bg-gradient-to-br from-[#19e1b8] to-[#10b981] rounded-full group-hover:bg-opacity-90 shadow-[inset_0_-4px_6px_rgba(0,0,0,0.3),0_8px_16px_rgba(25,225,184,0.4)]">
                    <span className="text-black font-black text-base text-center leading-tight">Call<br/>112</span>
                </span>
                <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Emergency
                </span>
             </a>
            <ul className="social-icons">
                <li><a href="https://www.facebook.com/share/g/1D7AX3WHDm/" target="_blank" rel="noopener noreferrer" data-label="Facebook"><i><FaFacebookF /></i></a></li>
                <li><a href="https://x.com/safetyforwomenn" target="_blank" rel="noopener noreferrer" data-label="Twitter"><i><FaXTwitter /></i></a></li>
                <li><a href="https://www.linkedin.com/company/safetyforwomen/" target="_blank" rel="noopener noreferrer" data-label="LinkedIn"><i><FaLinkedinIn /></i></a></li>
                <li><a href="https://www.youtube.com/@SafetyForWomen" target="_blank" rel="noopener noreferrer" data-label="YouTube"><i><FaYoutube /></i></a></li>
                <li><a href="https://www.instagram.com/teamsafetyforwomen/?hl=en" target="_blank" rel="noopener noreferrer" data-label="Instagram"><i><FaInstagram /></i></a></li>
                <li><a href="https://chat.whatsapp.com/BVmXh5pO3DuD2LPCwxsncr" target="_blank" rel="noopener noreferrer" data-label="WhatsApp"><i><FaWhatsapp /></i></a></li>
                <li><a href="http://t.me/safetyforwomenIndia" target="_blank" rel="noopener noreferrer" data-label="Telegram"><i><FaTelegramPlane /></i></a></li>
                <li><a href="mailto:teamsafetyforwomen@gmail.com" data-label="Email"><i><FaEnvelope /></i></a></li>
            </ul>
            <ChatWidget isInline={true} />
        </div>
    );
};

export default FloatingSocialIcons;
