'use client';
import { useEffect } from 'react';

import useFluidCursor from '../hooks/use-fluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    // Only initialize the fluid cursor on desktop devices to save resources on mobile
    if (window.innerWidth >= 768) {
      useFluidCursor();
    }
  }, []);

  return (
    <div className='hidden md:block fixed top-0 left-0 z-50 pointer-events-none'>
      <canvas id='fluid' className='w-screen h-screen' />
    </div>
  );
};
export default FluidCursor;
