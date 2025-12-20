import React from 'react';

const ShareStorySection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex-1 relative z-10 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-wide">
                Have a story, insight, or idea to share?
            </h3>
            <p className="text-brand-light-text/80 text-sm leading-relaxed max-w-xl">
                We invite writers and voices from the community to contribute to our blog on women’s safety, awareness, and empowerment. Together, let’s inform, inspire, and create safer spaces for women.
            </p>
        </div>

        <div className="relative z-10 shrink-0">
            <a 
                href="mailto:teamsafetyforwomen@gmail.com" 
                className="group inline-flex items-center px-8 py-4 bg-brand-red text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transform hover:-translate-y-1"
            >
               
                Write for Our Blog
            </a>
        </div>
      </div>
    </div>
  );
};

export default ShareStorySection;
