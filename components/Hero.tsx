import React from 'react';
import StaggeredText from './StaggeredText';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, description, videoSrc }) => {
  return (
    <section className="relative bg-brand-dark py-20 flex items-center justify-center text-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-7xl font-extrabold text-white tracking-tight">
          <span className="block font-semibold text-xl uppercase tracking-widest"><StaggeredText>{title}</StaggeredText></span>
          <span className="block text-brand-red"><StaggeredText>{subtitle}</StaggeredText></span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          <StaggeredText>{description}</StaggeredText>
        </p>
      </div>
    </section>
  );
};

export default Hero;
