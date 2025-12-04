import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface AccordionHeaderProps {
  number: string;
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ number, title, isOpen, onClick }) => {
  return (
    <div className={`border border-[#5a2301] rounded-xl overflow-hidden backdrop-blur-sm transition-colors duration-300 h-full ${
        isOpen ? 'bg-[#271111]' : 'bg-[#0d0202] hover:bg-[#271111]'
    }`}>
      <button
        className={`w-full flex justify-between items-center py-6 px-6 text-left focus:outline-none group h-full gap-4`}
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold border-2 transition-colors duration-300 ${
            isOpen 
              ? 'bg-brand-red border-brand-red text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]' 
              : 'bg-transparent border-[#5a2301] text-[#8a4a3b] group-hover:border-brand-red group-hover:text-brand-red'
          }`}>
            {number}
          </div>
          <span className={`text-lg sm:text-xl font-bold transition-colors duration-300 leading-tight ${
            isOpen ? 'text-white' : 'text-[#e1d5d5] group-hover:text-white'
          }`}>
            {title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`text-xl flex-shrink-0 ${isOpen ? 'text-brand-red' : 'text-[#8a4a3b] group-hover:text-brand-red'}`}
        >
          <FaChevronDown />
        </motion.div>
      </button>
    </div>
  );
};

interface AccordionProps {
  items: {
    number: string;
    title: string;
    content: React.ReactNode;
  }[];
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto">
        {/* Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {items.map((item, index) => (
            <AccordionHeader
              key={index}
              number={item.number}
              title={item.title}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

        {/* Full Width Content Panel */}
        <AnimatePresence mode="wait">
            {openIndex !== null && (
                <motion.div
                    key={openIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full bg-[#0d0202] backdrop-blur-sm border border-[#5a2301] rounded-xl overflow-hidden"
                >
                    <div className="p-6 sm:p-10">
                        {items[openIndex].content}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
};

export default Accordion;
