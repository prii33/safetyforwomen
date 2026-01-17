import React from 'react';
import './FloatingSocialIcons.css';
import ChatWidget from './ChatWidget';

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
                <li><a href="https://www.facebook.com/share/g/1D7AX3WHDm/" target="_blank" rel="noopener noreferrer" data-label="Facebook"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://x.com/safetyforwomenn" target="_blank" rel="noopener noreferrer" data-label="Twitter">
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                    </i>
                </a></li>
                <li><a href="https://www.linkedin.com/company/safetyforwomen/" target="_blank" rel="noopener noreferrer" data-label="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://www.youtube.com/@SafetyForWomen" target="_blank" rel="noopener noreferrer" data-label="YouTube"><i className="fa fa-youtube-play"></i></a></li>
                <li><a href="https://www.instagram.com/teamsafetyforwomen/?hl=en" target="_blank" rel="noopener noreferrer" data-label="Instagram"><i className="fa fa-instagram"></i></a></li>
                <li><a href="https://chat.whatsapp.com/BVmXh5pO3DuD2LPCwxsncr" target="_blank" rel="noopener noreferrer" data-label="WhatsApp"><i className="fa fa-whatsapp"></i></a></li>
                <li><a href="http://t.me/safetyforwomenIndia" target="_blank" rel="noopener noreferrer" data-label="Telegram">
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                            <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"/>
                        </svg>
                    </i>
                </a></li>
                <li><a href="mailto:teamsafetyforwomen@gmail.com" data-label="Email"><i className="fa fa-envelope"></i></a></li>
            </ul>
            <ChatWidget isInline={true} />
        </div>
    );
};

export default FloatingSocialIcons;
