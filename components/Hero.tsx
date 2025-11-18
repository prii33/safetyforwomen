import React from 'react';
import './Hero.css';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  scrollY: number;
  isAnimated?: boolean;
  imageSrc?: string;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, description, videoSrc, scrollY, isAnimated, imageSrc, children }) => {
  if (isAnimated) {
    const scale = 1 + scrollY / 1000;
    const opacity = Math.max(0, 1 - (scrollY - 200) / 500);

    return (
      <section className="relative h-[150vh] text-center">
        <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
          {imageSrc && (
            <div
              className="absolute top-0 left-0 w-full h-full z-0 hero-background-image"
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
              }}
            ></div>
          )}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            style={{ opacity: 0.5 }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div style={{ transform: `scale(${scale})`, opacity }} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-7xl font-extrabold text-white tracking-tight">
              <span className="block font-semibold text-2xl uppercase tracking-[0.5em]">{title}</span>
              <span className="block text-brand-red">{subtitle}</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
              {description}
            </p>
            {children}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-brand-dark py-20 flex items-center justify-center text-center overflow-hidden">
      {imageSrc && (
        <div
          className="absolute top-0 left-0 w-full h-full z-0 hero-background-image"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        ></div>
      )}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        style={{ opacity: 0.5 }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-7xl font-extrabold text-white tracking-tight">
          <span className="block font-semibold text-xl uppercase tracking-widest">{title}</span>
          <span className="block text-brand-red">{subtitle}</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
};

export default Hero;
