import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

interface ExpandableCardProps {
  title: string;
  summary?: string; // Short text for collapsed view
  children: React.ReactNode; // Full content for expanded view
  icon: string;
  index: number;
  totalCards: number;
  hideHeader?: boolean;
  tag?: string;
  isVisible?: boolean;
}

export const ExpandableCard = ({ title, summary, children, icon, index, totalCards, hideHeader = false, tag, isVisible = true }: ExpandableCardProps) => {
  const [active, setActive] = useState<boolean>(false);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const collapsedRef = useRef<HTMLDivElement>(null);
  const id = useId();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!collapsedRef.current) return;
    const rect = collapsedRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    collapsedRef.current.style.setProperty("--x", `${x}px`);
    collapsedRef.current.style.setProperty("--y", `${y}px`);
  };

  useEffect(() => {
    if (isVisible) {
      setHasLoaded(true);
    }
  }, [isVisible]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  // Safety cleanup: ensure scroll is restored if component unmounts (e.g. navigation)
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useOutsideClick(ref, () => setActive(false));

  return (
    <>
      {createPortal(
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 h-full w-full z-50 backdrop-blur-sm"
            />
          )}
        </AnimatePresence>,
        document.body
      )}
      
      {createPortal(
        <AnimatePresence onExitComplete={() => { document.body.style.overflow = "auto"; }}>
          {active ? (
            <div className="fixed inset-0 grid place-items-center z-[100] p-4 pointer-events-none">
              <div className="pointer-events-auto relative w-full h-full flex items-center justify-center">
                  <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  ref={ref}
                  className="w-full max-w-[1000px] h-fit max-h-[90vh] flex flex-col bg-[#0a0a0a] border border-[#ff0440]/30 rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-[0_0_30px_rgba(255,4,64,0.2)] relative"
                  >
                      <motion.button
                      key={`button-${title}-${id}`}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.05 } }}
                      className="flex absolute top-4 right-4 items-center justify-center bg-[#8a4a3b] hover:bg-[#8a4a3b]/80 text-white rounded-full h-8 w-8 z-[102] transition-colors"
                      onClick={() => setActive(false)}
                      >
                      <CloseIcon />
                      </motion.button>
                      <div className={`overflow-y-auto ${hideHeader ? 'p-4 md:p-6' : 'p-6 md:p-10'} scrollbar-hide`}>
                          {!hideHeader && (
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-6">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#ff0440] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,4,64,0.4)] shrink-0">
                                    <span className="text-white font-black text-2xl md:text-4xl">{index + 1}</span>
                                </div>
                                <motion.div 
                                    layoutId={`image-${title}-${id}`} 
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 bg-neutral-900/50"
                                >
                                    <img src={icon} alt={title} className="w-16 h-16 md:w-20 md:h-20 text-white" />
                                </motion.div>
                                <div className="flex-1">
                                    {tag && (
                                      <motion.span 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="inline-block mb-2 px-3 py-1 rounded-full bg-[#8a4a3b]/20 text-[#8a4a3b] text-xs font-bold uppercase tracking-wider border border-[#8a4a3b]/30"
                                      >
                                        {tag}
                                      </motion.span>
                                    )}
                                    <motion.h3
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10, transition: { duration: 0.05 } }}
                                        transition={{ duration: 0.25, delay: 0.1, ease: "easeOut" }}
                                        className="font-semibold text-2xl md:text-3xl tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-brand-dull-white mb-2"
                                    >
                                        {title}
                                    </motion.h3>
                                    {summary && (
                                        <motion.p
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10, transition: { duration: 0.05 } }}
                                            transition={{ duration: 0.25, delay: 0.15, ease: "easeOut" }}
                                            className="text-brand-dull-white/60 text-base"
                                        >
                                            {summary}
                                        </motion.p>
                                    )}
                                </div>
                            </div>
                          )}
                          
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="text-[#e1d5d5] text-base md:text-lg w-full leading-relaxed"
                        >
                            {children}
                        </motion.div>
                      </div>
                  </motion.div>
              </div>
            </div>
          ) : null}
        </AnimatePresence>,
        document.body
      )}
      
      {/* Collapsed Card */}
      <motion.div
        ref={collapsedRef}
        onClick={() => setActive(true)}
        onMouseMove={handleMouseMove}
        className="group relative w-full cursor-pointer rounded-[40px] md:rounded-[80px] bg-[#724b4b54] p-[2px] transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,4,64,0.5)]"
      >
        {/* Glowing Border Gradient */}
        <div
          className="absolute inset-0 rounded-[40px] md:rounded-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(800px circle at var(--x) var(--y), rgba(255, 4, 64, 0.8), transparent 40%)`,
          }}
        />

        {/* Content Container */}
        <div className={`relative h-full w-full rounded-[38px] md:rounded-[78px] bg-[#000000] p-5 md:p-10 flex flex-col md:flex-row ${index >= totalCards - 3 ? 'md:items-center' : 'items-center'} gap-5 md:gap-10 overflow-hidden`}>
            
            {/* Inner Spotlight */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                    background: `radial-gradient(600px circle at var(--x) var(--y), rgba(255, 4, 64, 0.1), transparent 40%)`,
                }}
            />

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 w-full">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 bg-transparent border-[#5a2301] text-[#8a4a3b] group-hover:bg-[#ff0440] group-hover:border-[#ff0440] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,4,64,0.4)] transition-all duration-300 shrink-0">
                    <span className="font-black text-xl md:text-3xl">{index + 1}</span>
                </div>
                <motion.div 
                    layoutId={`image-${title}-${id}`} 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                >
                    {(isVisible || hasLoaded) && (
                        <img src={icon} alt={title} className="w-12 h-12 md:w-14 md:h-14 text-white group-hover:scale-110 transition-transform duration-300" />
                    )}
                </motion.div>
                
                <div className="flex flex-col items-center md:items-start flex-1">
                    {tag && (
                        <span className="mb-2 px-3 py-1 rounded-full bg-[#8a4a3b]/20 text-[#8a4a3b] text-xs font-bold uppercase tracking-wider border border-[#8a4a3b]/30">
                            {tag}
                        </span>
                    )}
                    <motion.h3 
                        className="font-semibold text-xl md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-brand-dull-white text-center uppercase md:text-left"
                    >
                        {title}
                    </motion.h3>
                    {summary && (
                        <motion.p
                            className="text-brand-dull-white/60 text-sm md:text-base mt-2 line-clamp-2 text-center md:text-left hidden md:block"
                        >
                            {summary}
                        </motion.p>
                    )}
                </div>

                <div className="shrink-0">
                    <button className="px-6 py-2 rounded-full bg-white/5 text-white text-sm font-medium border border-white/10 group-hover:bg-[#ff0440] group-hover:border-[#ff0440] transition-colors duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
      </motion.div>
    </>
  );
};

export const CloseIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
