import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-industrial-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Свяжитесь с нами
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Phone className="w-8 h-8 mb-4 text-accent-blue" />
            <h3 className="text-xl font-semibold mb-2">Телефон</h3>
            <p>+7 (999) 123-45-67</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Mail className="w-8 h-8 mb-4 text-accent-blue" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>info@cnc-russia.ru</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MapPin className="w-8 h-8 mb-4 text-accent-blue" />
            <h3 className="text-xl font-semibold mb-2">Адрес</h3>
            <p>г. Москва, ул. Промышленная, 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};