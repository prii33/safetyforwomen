import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark text-white py-12 border-t-[4px] border-dotted border-[#2a1212]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-6">
                     
                    
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
