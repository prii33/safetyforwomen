import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark text-white py-12 border-t-[4px] border-dotted border-[#2a1212]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <ul className="social-icons-horizontal lg:!hidden !grid grid-cols-5 gap-4 justify-items-center">
                        <li><a href="https://www.facebook.com/share/g/1D7AX3WHDm/" target="_blank" rel="noopener noreferrer" data-label="Facebook"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://x.com/safetyforwomenn" target="_blank" rel="noopener noreferrer" data-label="Twitter">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                            </i>
                        </a></li>
                        <li><a href="https://www.linkedin.com/company/safetyforwomen/" target="_blank" rel="noopener noreferrer" data-label="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.youtube.com/@SafetyForWomen" target="_blank" rel="noopener noreferrer" data-label="YouTube"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="https://www.instagram.com/teamsafetyforwomen/?hl=en" target="_blank" rel="noopener noreferrer" data-label="Instagram"><i className="fa fa-instagram"></i></a></li>
                        <li className="col-start-2"><a href="#" data-label="WhatsApp"><i className="fa fa-whatsapp"></i></a></li>
                        <li><a href="http://t.me/safetyforwomenIndia" target="_blank" rel="noopener noreferrer" data-label="Telegram">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                                    <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"/>
                                </svg>
                            </i>
                        </a></li>
                        <li><a href="mailto:teamsafetyforwomen@gmail.com" data-label="Email"><i className="fa fa-envelope"></i></a></li>
                    </ul>
                    
                    <div className="w-full flex flex-col md:flex-row items-center justify-between text-sm text-[#9d8c81]">
                        <p className="order-2 md:order-1 mt-2 md:mt-0">
                            &copy; 2025 IRON feather Foundation. All rights reserved. <span className="mx-2">|</span> Design <a href="http://www.mesmerizers.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">Mesmerizers</a>
                        </p>
                        <div className="flex space-x-6 order-1 md:order-2">
                            <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
                            <Link to="/terms-conditions" className="hover:text-brand-red transition-colors">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
