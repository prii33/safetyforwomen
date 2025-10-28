
import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink transition-colors">
        {children}
    </a>
);

// Fix: Extracted inline SVGs into their own components to simplify JSX and resolve potential parsing errors.
const FacebookIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>;
const InstagramIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.06-1.004.048-1.625.211-2.126.41-1.054.423-1.791 1.159-2.215 2.215-.199.502-.362 1.122-.41 2.126-.048 1.023-.06 1.351-.06 3.807s.011 2.784.06 3.807c.048 1.004.211 1.625.41 2.126.423 1.054 1.159 1.791 2.215 2.215.502.199 1.122.362 2.126.41 1.023.048 1.351.06 3.807.06h.468c2.456 0 2.784-.011 3.807-.06 1.004-.048 1.625-.211 2.126-.41 1.054-.423 1.791-1.159 2.215-2.215.199-.502.362-1.122.41-2.126.048-1.023.06-1.351.06-3.807s-.011-2.784-.06-3.807c-.048-1.004-.211-1.625-.41-2.126-.423-1.054-1.159-1.791-2.215-2.215-.502-.199-1.122-.362-2.126-.41-1.023-.048-1.351-.06-3.807-.06zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zm5.338-3.205a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" /></svg>;
const TwitterIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>;

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-purple text-white">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold">Safety for Women</h3>
                        <p className="mt-2 text-sm text-gray-300">One Voice, One Mission. Creating a safer nation for women across India.</p>
                        <p className="mt-4 text-sm text-gray-300">Email: <a href="mailto:teamsafetyforwomen@gmail.com" className="hover:text-brand-yellow">teamsafetyforwomen@gmail.com</a></p>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase">Quick Links</h4>
                        <ul className="mt-4 space-y-2">
                            <li><Link to="/about" className="hover:text-brand-yellow text-sm">About Us</Link></li>
                            <li><Link to="/impact" className="hover:text-brand-yellow text-sm">Our Impact</Link></li>
                            <li><Link to="/get-involved" className="hover:text-brand-yellow text-sm">Get Involved</Link></li>
                            <li><Link to="/resources" className="hover:text-brand-yellow text-sm">Resources</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase">Connect</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-brand-yellow text-sm">Request a Program</a></li>
                            <li><a href="#" className="hover:text-brand-yellow text-sm">Join as Volunteer</a></li>
                            <li><a href="#" className="hover:text-brand-yellow text-sm">Partner with Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase">Follow Us</h4>
                        <div className="mt-4 flex space-x-6">
                            <SocialIcon href="#">
                                <FacebookIcon />
                            </SocialIcon>
                            <SocialIcon href="#">
                                <InstagramIcon />
                            </SocialIcon>
                            <SocialIcon href="#">
                                <TwitterIcon />
                            </SocialIcon>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Safety for Women Movement. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;