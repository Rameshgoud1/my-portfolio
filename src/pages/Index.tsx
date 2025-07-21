
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen animated-bg">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
