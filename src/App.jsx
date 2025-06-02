import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <ProductSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
