import React from 'react';

export const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-industrial-800">
          О компании
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-industrial-600 leading-relaxed">
                Наша компания специализируется на высокоточной ЧПУ обработке металлов и других материалов. С 2010 года мы предоставляем качественные услуги промышленным предприятиям России.
              </p>
              <p className="text-industrial-600 leading-relaxed">
                Мы оснащены современным оборудованием и имеем команду высококвалифицированных специалистов, что позволяет нам выполнять заказы любой сложности с максимальной точностью.
              </p>
            </div>
            <div className="bg-industrial-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-industrial-800">Наши преимущества:</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-industrial-600">
                  <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                  Современное оборудование
                </li>
                <li className="flex items-center text-industrial-600">
                  <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                  Опытные специалисты
                </li>
                <li className="flex items-center text-industrial-600">
                  <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                  Гарантия качества
                </li>
                <li className="flex items-center text-industrial-600">
                  <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                  Соблюдение сроков
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};