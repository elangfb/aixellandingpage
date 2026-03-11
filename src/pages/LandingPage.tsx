import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Philosophy from '../components/Philosophy';
import Solutions from '../components/Solutions';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Philosophy />
      <Solutions />
      <HowItWorks />
      <Portfolio />
      <CTA />
      <Footer />
    </>
  );
};

export default LandingPage;
