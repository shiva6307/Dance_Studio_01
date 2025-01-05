import React from 'react';
import { Camera, Video, Users } from 'lucide-react';

const Shoots = () => {
  const shootServices = [
    {
      title: 'Dance Reels',
      description: 'Professional shooting for social media content and portfolios',
      pricing: [
        { duration: '30 minutes', price: 'Rs. 100' },
        { duration: '1 hour', price: 'Rs. 200' },
        { duration: '2 hours', price: 'Rs. 300' }
      ],
      icon: Video
    },
    {
      title: 'Practice Sessions',
      description: 'Record and analyze your dance moves for improvement',
      pricing: [
        { duration: 'Single session', price: 'Rs. 100' },
        { duration: '5 sessions', price: 'Rs. 400' },
        { duration: '10 sessions', price: 'Rs. 850'}
      ],
      icon: Camera
    },
    {
      title: 'Group Performances',
      description: 'Professional video production for group choreographies',
      pricing: [
        { duration: 'Basic (2 hours)', price: 'Rs. 500' },
        { duration: 'Standard (4 hours)', price: 'Rs. 800' },
        { duration: 'Premium (Full day)', price: 'Rs. 1200' }
      ],
      icon: Users
    }
  ];

  return (
    <section id="shoots" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Shoot Services</h2>
          <p className="mt-4 text-xl text-gray-600">Capture your dance journey professionally</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shootServices.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="bg-white rounded-lg shadow-md p-8">
                <div className="text-blue-600 mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.pricing.map((price, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">{price.duration}</span>
                      <span className="font-semibold text-blue-600">{price.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Shoots;