import React from 'react';

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-industrial-800">
      {/* Logo */}
      <div className="absolute top-4 left-4 z-30">
        <h2 className="text-3xl font-bold text-white tracking-wider">
          Техноформ
        </h2>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-industrial-900/90 to-industrial-800/70 z-10" />
      <div className="absolute inset-0">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source 
            src="https://player.vimeo.com/external/496394201.sd.mp4?s=b87f4e7d3dcb0e8b89c74855ef0b2462e52b3522&profile_id=164&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Производство прессформ, штампов, фильер. Обработка с ЧПУ
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