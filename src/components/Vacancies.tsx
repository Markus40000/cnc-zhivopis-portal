import React from 'react';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';

export const Vacancies = () => {
  return (
    <section className="py-20 bg-industrial-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-industrial-800">
          Вакансии
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-industrial-800">Оператор станка ЧПУ</h3>
            <div className="space-y-4">
              <p className="text-industrial-600">
                Требуется опытный оператор станка ЧПУ для работы на современном оборудовании.
              </p>
              <div className="space-y-2">
                <p className="font-medium text-industrial-700">Требования:</p>
                <ul className="list-disc list-inside text-industrial-600 space-y-1">
                  <li>Опыт работы от 3 лет</li>
                  <li>Знание программирования G-code</li>
                  <li>Умение читать чертежи</li>
                </ul>
              </div>
              <Button className="mt-4" onClick={() => window.location.href = 'mailto:hr@cnc-russia.ru'}>
                <Mail className="mr-2" />
                Отправить резюме
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-industrial-800">Технолог-программист ЧПУ</h3>
            <div className="space-y-4">
              <p className="text-industrial-600">
                Ищем технолога-программиста ЧПУ для разработки управляющих программ.
              </p>
              <div className="space-y-2">
                <p className="font-medium text-industrial-700">Требования:</p>
                <ul className="list-disc list-inside text-industrial-600 space-y-1">
                  <li>Высшее техническое образование</li>
                  <li>Опыт работы от 5 лет</li>
                  <li>Знание CAM-систем</li>
                </ul>
              </div>
              <Button className="mt-4" onClick={() => window.location.href = 'mailto:hr@cnc-russia.ru'}>
                <Mail className="mr-2" />
                Отправить резюме
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};