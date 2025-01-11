import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { AboutUs } from '../components/AboutUs';
import { Vacancies } from '../components/Vacancies';
import { Contact } from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <AboutUs />
      <Vacancies />
      <Contact />
    </div>
  );
};

export default Index;