import React from 'react';
import './FloatingSocialIcons.css';

const FloatingSocialIcons: React.FC = () => {
    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
            <ul className="social-icons">
                <li><a href="#" data-label="Facebook"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#" data-label="Twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#" data-label="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#" data-label="YouTube"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#" data-label="Instagram"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#" data-label="WhatsApp"><i className="fa fa-whatsapp"></i></a></li>
                <li><a href="mailto:teamsafetyforwomen@gmail.com" data-label="Email"><i className="fa fa-envelope"></i></a></li>
            </ul>
        </div>
    );
};

export default FloatingSocialIcons;
