import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-brand-dark py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-brand-brown">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wider uppercase">
            Stay Updated on <span className="text-brand-red">Our Mission</span>
          </h2>
          <p className="text-brand-dull-white text-lg max-w-2xl mx-auto">
            Subscribe to our newsletter to get updates on our achievements and opportunities to get involved.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-16">
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-4 rounded-full bg-brand-brown border border-brand-brown-light text-white placeholder-brand-dull-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-brand-red text-white font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-900/20"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Email Us Card */}
          <div className="bg-brand-brown/50 border border-brand-maroon rounded-3xl p-8 hover:border-brand-red/30 transition-all duration-300 group">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-brand-maroon flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-brand-dull-white group-hover:text-brand-red transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <a href="mailto:teamsafetyforwomen@gmail.com" className="text-brand-dull-white hover:text-brand-red transition-colors break-all">
                  teamsafetyforwomen@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Follow Us Card */}
          <div className="bg-brand-brown/50 border border-brand-maroon rounded-3xl p-8 hover:border-brand-red/30 transition-all duration-300 group">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-brand-maroon flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-brand-dull-white group-hover:text-brand-red transition-colors" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Follow Us</h3>
                <a href="#" className="text-brand-dull-white hover:text-brand-red transition-colors block">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
