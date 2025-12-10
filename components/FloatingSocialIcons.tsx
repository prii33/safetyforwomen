import React from 'react';
import './FloatingSocialIcons.css';

const FloatingSocialIcons: React.FC = () => {
    return (
        <div className="hidden lg:block fixed right-4 top-1/2 -translate-y-1/2 z-50">
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
                <li><a href="https://www.youtube.com/@SafetyForWomen" target="_blank" rel="noopener noreferrer" data-label="YouTube"><i className="fa fa-youtube"></i></a></li>
                <li><a href="https://www.instagram.com/teamsafetyforwomen/?hl=en" target="_blank" rel="noopener noreferrer" data-label="Instagram"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#" data-label="WhatsApp"><i className="fa fa-whatsapp"></i></a></li>
                <li><a href="mailto:teamsafetyforwomen@gmail.com" data-label="Email"><i className="fa fa-envelope"></i></a></li>
            </ul>
        </div>
    );
};

export default FloatingSocialIcons;
