import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import Experience from './components/Experience';
import SelectedWork from './components/SelectedWork';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [developerName] = useState('RAMA MAZEN');

  return (
    <div className="page-wrapper">
      <Navbar />
      <main>
        <Hero name={developerName} />
        <WhatIDo />
        <Experience />
        <SelectedWork />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

