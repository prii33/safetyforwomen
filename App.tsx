import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ImpactPage from './pages/ImpactPage';
import ResourcesPage from './pages/ResourcesPage';
import EventsMediaPage from './pages/EventsMediaPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import FluidCursor from './components/FluidCursor';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans">
        <FluidCursor />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/events-media" element={<EventsMediaPage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
          </Routes>
        </main>
        <Footer />
        <a 
          href="tel:112" 
          className="fixed bottom-4 right-4 bg-brand-red text-white p-4 rounded-full shadow-lg hover:bg-brand-red-dark transition-colors z-50 flex items-center justify-center lg:hidden"
          aria-label="Call National Emergency Helpline 112"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </HashRouter>
  );
};

export default App;
