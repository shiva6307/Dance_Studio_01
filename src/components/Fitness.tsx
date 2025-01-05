import React from 'react';
import { Dumbbell, Heart, Flower } from 'lucide-react';

const Fitness = () => {
  const fitnessClasses = [
    {
      name: 'Zumba',
      description: 'High-energy dance fitness program combining Latin and international music',
      schedule: 'Tue, Thu , Sat - 9:00 AM to 10:00 AM',
      price: 'Rs. 2000/month',
      benefits: ['Cardio workout', 'Weight loss', 'Stress relief'],
      icon: Heart
    },
    {
      name: 'Aerobics',
      description: 'Dynamic cardiovascular exercise combined with strength training',
      schedule: 'Mon, Wed, Fri - 9:00 AM to 10:00 AM',
      price: 'Rs. 2000/month',
      benefits: ['Improved stamina', 'Muscle toning', 'Better flexibility'],
      icon: Dumbbell
    },
    {
      name: 'Yoga',
      description: 'Traditional yoga practices for mind-body wellness',
      schedule: 'Daily - 8:00 AM to 9:00 AM',
      price: 'Rs 2000/month',
      benefits: ['Better posture', 'Mental clarity', 'Increased flexibility'],
      icon: Flower
    }
  ];

  return (
    <section id="fitness" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Fitness Classes</h2>
          <p className="mt-4 text-xl text-gray-600">Combine dance with fitness for a healthier lifestyle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fitnessClasses.map((cls) => {
            const Icon = cls.icon;
            return (
              <div key={cls.name} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cls.name}</h3>
                <p className="text-gray-600 mb-4">{cls.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <p>Schedule: {cls.schedule}</p>
                  <p className="font-semibold text-blue-600 mt-1">{cls.price}</p>
                </div>
                <ul className="space-y-2">
                  {cls.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fitness;