import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';
import './App.css';

// Route-based code splitting — each page loads on demand (not all at once)
const HomePage           = lazy(() => import('./pages/HomePage'));
const ProductsPage       = lazy(() => import('./pages/ProductsPage'));
const ProductDetailPage  = lazy(() => import('./pages/ProductDetailPage'));
const AboutPage          = lazy(() => import('./pages/AboutPage'));
const ContactPage        = lazy(() => import('./pages/ContactPage'));
const ServicesPage       = lazy(() => import('./pages/ServicesPage'));
const CareersPage        = lazy(() => import('./pages/CareersPage'));
const IndustriesPage     = lazy(() => import('./pages/IndustriesPage'));
const SolutionDetailPage = lazy(() => import('./pages/SolutionDetailPage'));
const PrivacyPolicyPage  = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage          = lazy(() => import('./pages/TermsPage'));
const SecurityPage       = lazy(() => import('./pages/SecurityPage'));

// Minimal loading fallback — lightweight, no layout shift
function PageLoader() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#020617',
      color: '#3B82F6',
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: '1rem',
      letterSpacing: '0.1em',
    }}>
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"              element={<HomePage />} />
            <Route path="/products"      element={<ProductsPage />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} />
            <Route path="/about"         element={<AboutPage />} />
            <Route path="/careers"       element={<CareersPage />} />
            <Route path="/industries"    element={<IndustriesPage />} />
            <Route path="/services"      element={<ServicesPage />} />
            <Route path="/solution/:slug" element={<SolutionDetailPage />} />
            <Route path="/privacy"       element={<PrivacyPolicyPage />} />
            <Route path="/terms"         element={<TermsPage />} />
            <Route path="/security"      element={<SecurityPage />} />
            <Route path="/contact"       element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}


