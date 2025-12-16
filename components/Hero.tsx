import React from 'react';
import './Hero.css';
import StaggeredText from './StaggeredText';
import FadeInUp from './FadeInUp';

interface HeroProps {
  title: string;
  subtitle: string | string[];
  description: string | React.ReactNode;
  videoSrc: string;
  scrollY: number;
  isAnimated?: boolean;
  imageSrc?: string;
  slideImages?: string[];
  children?: React.ReactNode;
  transparent?: boolean;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, description, videoSrc, scrollY, isAnimated, imageSrc, slideImages, children, transparent, className }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (slideImages && slideImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideImages.length);
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [slideImages]);

  if (isAnimated) {
    const scale = 1 + scrollY / 1000;
    const opacity = Math.max(0, 1 - (scrollY - 200) / 500);

    return (
      <section className="relative h-screen text-center">
        <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
          {slideImages && slideImages.length > 0 ? (
            slideImages.map((img, index) => (
              <div
                key={index}
                className="absolute top-0 left-0 w-full h-full z-20 hero-background-image transition-opacity duration-1000 ease-in-out"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundAttachment: 'fixed',
                  backgroundPosition: isMobile ? 'center 80px' : 'center top',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  opacity: index === currentSlide ? 0.7 : 0,
                }}
              ></div>
            ))
          ) : imageSrc && (
            <div
              className="absolute top-0 left-0 w-full h-full z-20 hero-background-image"
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: isMobile ? 'center 80px' : 'center top',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                opacity:0.6,
              }}
            ></div>
          )}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            style={{ opacity: 0.8 }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div style={{ transform: `scale(${scale})`, opacity }} className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-none">
              <StaggeredText text={title} className="block font-semibold text-xl md:text-2xl uppercase tracking-[0.1em] md:tracking-[0.5em] pt-52 md:pt-48" />
              {Array.isArray(subtitle) ? (
                subtitle.map((line, index) => (
                  <StaggeredText key={index} text={line} className="block text-brand-red" />
                ))
              ) : (
                <StaggeredText text={subtitle} className="block text-brand-red" />
              )}
            </h1>
            <FadeInUp className="mt-3 max-w-4xl mx-auto text-base md:text-xl text-brand-dull-white">
              {description}
            </FadeInUp>
            {children}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative ${transparent ? 'bg-transparent' : 'bg-brand-dark'} py-14 flex items-center justify-center text-center overflow-hidden ${className || ''}`}>
       {!transparent && slideImages && slideImages.length > 0 ? (
            slideImages.map((img, index) => (
              <div
                key={index}
                className="absolute top-0 left-0 w-full h-full z-20 hero-background-image transition-opacity duration-1000 ease-in-out"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundAttachment: 'fixed',
                  backgroundPosition: isMobile ? 'center 80px' : 'center top',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  opacity: index === currentSlide ? 0.60 : 0,
                }}
              ></div>
            ))
          ) : imageSrc && (
        <div
          className="absolute top-0 left-0 w-full h-full z-20 hero-background-image"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: isMobile ? 'center 80px' : 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        ></div>
      )}
      {!transparent && videoSrc && (
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        style={{ opacity: 0.8 }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      )}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          <StaggeredText text={title} className="block font-semibold text-sm md:text-xl uppercase tracking-[0.1em] md:tracking-[0.5em] " />
          {Array.isArray(subtitle) ? (
            subtitle.map((line, index) => (
              <StaggeredText key={index} text={line} className="block text-brand-red" />
            ))
          ) : (
            <StaggeredText text={subtitle} className="block text-brand-red" />
          )}
        </h1>
        <FadeInUp className="mt-6 max-w-2xl mx-auto text-base md:text-xl text-brand-dull-white">
          {description}
        </FadeInUp>
        {children}
      </div>
    </section>
  );
};

export default Hero;
