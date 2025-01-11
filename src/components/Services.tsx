import React from 'react';
import { Cog, Ruler, Shield, Clock } from 'lucide-react';

const services = [
  {
    icon: Cog,
    title: "Точная механическая обработка",
    description: "Высокоточная обработка деталей с допусками до 0.01 мм"
  },
  {
    icon: Ruler,
    title: "Проектирование",
    description: "Разработка и оптимизация конструкторской документации"
  },
  {
    icon: Shield,
    title: "Контроль качества",
    description: "Современное измерительное оборудование и строгий контроль"
  },
  {
    icon: Clock,
    title: "Быстрое производство",
    description: "Оперативное выполнение заказов любой сложности"
  }
];

export const Services = () => {
  return (
    <div className="bg-industrial-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-industrial-800 mb-12">
          Наши услуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-accent-blue mb-4" />
              <h3 className="text-xl font-semibold text-industrial-800 mb-3">
                {service.title}
              </h3>
              <p className="text-industrial-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};