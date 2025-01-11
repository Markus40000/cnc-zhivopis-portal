import React from 'react';

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-industrial-800">
      <div className="absolute inset-0 bg-gradient-to-r from-industrial-900/90 to-industrial-800/70 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000)' }}
      />
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Высокоточная ЧПУ Обработка
          </h1>
          <p className="text-xl md:text-2xl text-industrial-100 mb-8">
            Современные технологии и передовое оборудование для вашего производства
          </p>
          <button className="bg-accent-blue hover:bg-blue-600 text-white px-8 py-3 rounded-md text-lg transition-colors">
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
  );
};