import React from 'react';

const Events = () => {
  const eventTypes = [
    {
      title: 'Wedding Choreography',
      description: 'Make your special day memorable with our customized wedding dance packages',
      packages: [
        { name: 'Couple Dance', price: 'Rs. 5000', sessions: '5 sessions' },
        { name: 'Family Performance', price: 'Rs. 15000', sessions: '15 sessions' },
        { name: 'Sangeet Night', price: 'Rs. 30000', sessions: 'Full event coordination' }
      ],
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'School Events',
      description: 'Professional choreography for school performances and annual functions',
      packages: [
        { name: 'Single Performance', price: 'Rs. 2500', sessions: '5 sessions' },
        { name: 'Group Dance', price: 'Rs. 5000', sessions: '8 sessions' },
        { name: 'Annual Day', price: 'Rs. 30000', sessions: 'Full event planning' }
      ],
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Special Events</h2>
          <p className="mt-4 text-xl text-gray-600">Customized choreography for your special occasions</p>
        </div>

        <div className="space-y-16">
          {eventTypes.map((event) => (
            <div key={event.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <div className="space-y-4">
                    {event.packages.map((pkg) => (
                      <div key={pkg.name} className="flex justify-between items-center border-b pb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{pkg.name}</h4>
                          <p className="text-sm text-gray-500">{pkg.sessions}</p>
                        </div>
                        <span className="text-blue-600 font-bold">{pkg.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;