import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingSocialIcons from './components/FloatingSocialIcons';

const FluidCursor = lazy(() => import('./components/FluidCursor'));
import ScrollToTop from './components/ScrollToTop';
import GoToTopButton from './components/GoToTopButton';
import LoadingSpinner from './components/LoadingSpinner';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ImpactPage = lazy(() => import('./pages/ImpactPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const EventsMediaPage = lazy(() => import('./pages/EventsMediaPage'));
const GetInvolvedPage = lazy(() => import('./pages/GetInvolvedPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Suspense fallback={null}>
          <FluidCursor />
        </Suspense>
        <FloatingSocialIcons />
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/impact" element={<ImpactPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/events-media" element={<EventsMediaPage />} />
              <Route path="/get-involved" element={<GetInvolvedPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/terms-conditions" element={<TermsConditionsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <GoToTopButton />
      </div>
    </HashRouter>
  );
};

export default App;
