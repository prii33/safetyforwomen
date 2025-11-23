import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors">
        {children}
    </a>
);

const FacebookIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>;
const InstagramIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.06-1.004.048-1.625.211-2.126.41-1.054.423-1.791 1.159-2.215 2.215-.199.502-.362 1.122-.41 2.126-.048 1.023-.06 1.351-.06 3.807s.011 2.784.06 3.807c.048 1.004.211 1.625.41 2.126.423 1.054 1.159 1.791 2.215 2.215.502.199 1.122.362 2.126.41 1.023.048 1.351.06 3.807.06h.468c2.456 0 2.784-.011 3.807-.06 1.004-.048 1.625-.211 2.126-.41 1.054-.423 1.791-1.159 2.215-2.215.199-.502.362-1.122.41-2.126.048-1.023.06-1.351.06-3.807s-.011-2.784-.06-3.807c-.048-1.004-.211-1.625-.41-2.126-.423-1.054-1.159-1.791-2.215-2.215-.502-.199-1.122-.362-2.126-.41-1.023-.048-1.351-.06-3.807-.06zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zm5.338-3.205a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" /></svg>;
const TwitterIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>;

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark text-white py-16 border-t border-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Brand Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            Safety for Women <span className="text-brand-red">Movement</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Dedicated to transforming distress into meaningful action. Join our diverse, pan-India collective to build a nation where every woman feels secure.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
                            <li><Link to="/impact" className="hover:text-brand-red transition-colors">Our Impact</Link></li>
                            <li><Link to="/get-involved" className="hover:text-brand-red transition-colors">Get Involved</Link></li>
                            <li><Link to="/resources" className="hover:text-brand-red transition-colors">Resources</Link></li>
                            <li><a href="#" className="hover:text-brand-red transition-colors">Request a Program</a></li>
                            <li><a href="#" className="hover:text-brand-red transition-colors">Join as Volunteer</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Connect */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
                        <p className="text-gray-400 text-sm">
                            Email: <a href="mailto:teamsafetyforwomen@gmail.com" className="hover:text-brand-red transition-colors">teamsafetyforwomen@gmail.com</a>
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <SocialIcon href="#"><FacebookIcon /></SocialIcon>
                            <SocialIcon href="#"><InstagramIcon /></SocialIcon>
                            <SocialIcon href="#"><TwitterIcon /></SocialIcon>
                        </div>
                        <div className="pt-4">
                            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 mr-4">Privacy Policy</a>
                            <a href="#" className="text-xs text-gray-500 hover:text-gray-300">Terms of Service</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Safety for Women Movement. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
