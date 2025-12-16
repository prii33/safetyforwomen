import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark text-white py-12 border-t-[4px] border-dotted border-[#2a1212]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <ul className="social-icons-horizontal lg:!hidden">
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
                        <li><a href="#" data-label="WhatsApp"><i className="fa fa-whatsapp"></i></a></li>
                        <li><a href="mailto:teamsafetyforwomen@gmail.com" data-label="Email"><i className="fa fa-envelope"></i></a></li>
                    </ul>
                    
                    <div className="w-full flex flex-col md:flex-row items-center justify-between text-sm text-[#9d8c81]">
                        <p className="order-2 md:order-1 mt-2 md:mt-0">
                            &copy; 2025 Safety for Women Movement. All rights reserved.
                        </p>
                        <div className="flex space-x-6 order-1 md:order-2">
                            <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-brand-red transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
