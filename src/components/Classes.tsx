import React from 'react';

const Classes = () => {
  const regularClasses = [
    {
      name: 'Beginner Dance',
      schedule: 'Mon to Fri - 10:00am-12:00pm and 06:00pm-09:00pm',
      price: '1500 Rs/month',
      description: 'Perfect for those just starting their dance journey',
    },
    {
      name: 'Intermediate',
      schedule: 'Mon to Fri - 12:00pm-02:00pm',
      price: '2000 Rs/month',
      description: 'For dancers with basic knowledge seeking to advance',
    },
    {
      name: 'Advanced',
      schedule: 'Mon, Wed, Fri - 02:00pm-04:00pm',
      price: '2000 Rs/month',
      description: 'Intensive training for experienced dancers',
    },
  ];

  const personalClasses = [
    {
      name: 'One-on-One Training',
      duration: '2 hour',
      price: '500 Rs/session',
      location: 'Studio/Home',
    },
    {
      name: 'Duo Training',
      duration: '2 hours',
      price: '1000 Rs/session',
      location: 'Studio/Home',
    },
  ];

  return (
    <section id="classes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Classes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect class that matches your skill level
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Regular Classes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regularClasses.map((cls) => (
              <div
                key={cls.name}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {cls.name}
                </h4>
                <p className="text-gray-600 mb-4">{cls.description}</p>
                <div className="text-sm text-gray-500">
                  <p className="mb-1">Schedule: {cls.schedule}</p>
                  <p className="font-semibold text-blue-600">{cls.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Personal Classes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalClasses.map((cls) => (
              <div
                key={cls.name}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {cls.name}
                </h4>
                <div className="text-sm text-gray-500">
                  <p className="mb-1">Duration: {cls.duration}</p>
                  <p className="mb-1">Location: {cls.location}</p>
                  <p className="font-semibold text-blue-600">{cls.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
