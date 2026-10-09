import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import SelectedWork from './components/SelectedWork';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';

export default function App() {
  const [developerName] = useState('RAMA MAZEN');
  const [theme, setTheme] = useState('new-colors');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="page-wrapper" data-theme={theme}>
      <Navbar />
      <main>
        <Hero name={developerName} />
        <WhatIDo />
        <SelectedWork />
        <ContactSection />
      </main>
      <Footer />
      <ThemeSwitcher currentTheme={theme} setTheme={setTheme} />
    </div>
  );
}
