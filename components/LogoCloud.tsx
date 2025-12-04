import React from 'react';
import './LogoCloud.css';

const LogoCloud: React.FC = () => {
  const logos = ['Google', 'Amazon', 'Microsoft', 'Netflix', 'Spotify', 'Slack', 'Stripe', 'Figma'];
  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="absolute inset-y-0 left-0 w-24"></div>
      <div className="absolute inset-y-0 right-0 w-24"></div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-brand-red uppercase tracking-wide mb-2">Our Partners & Collaborators</h2>
        <p className="text-lg text-brand-dull-white">We are grateful for the support of organizations who share our vision for a safer India.</p>
      </div>
      <div className="flex animate-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-48 h-16 flex items-center justify-center mx-4">
            <p className="text-brand-dull-white text-2xl font-medium">{logo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCloud;
