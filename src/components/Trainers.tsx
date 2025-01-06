import React from 'react';
import img1 from '../assets/trainer-atul-tiwari.jpg';
import img2 from '../assets/trainer-prem-chopra.jpg';
import img3 from '../assets/trainer-riddhima-tiwari.jpg';
import img4 from '../assets/trainer-sonu-j-hop.jpg';
const Trainers = () => {
  const trainers = [
    {
      name: 'Prem Chopra',
      specialties: ['House', 'Locking', 'Hip- hop'],
      experience: '7 years',
      description: 'Former principal dancer with extensive teaching experience',
      image:
        img2,
    },
    {
      name: 'Riddhima Tiwari',
      specialties: ['Hip Hop', 'Bollywood'],
      experience: '5 years',
      description:
        'National dance champion with expertise in urban dance styles',
      image:
        img3,
    },
    {
      name: 'Atul Tiwari',
      specialties: ['Hip - Hop', 'Breaking'],
      experience: '5 years',
      description:
        'Professional choreographer with background in competitive dancing',
      image:
        img1,
    },
    {
      name: 'Sonu J Hop',
      specialties: ['Contemporary', 'Wacking'],
      experience: '15 years',
      description: 'Professional Dancer with background in competitive dancing',
      image:
        img4,
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Trainers
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Learn from the best in the industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-sm">{trainer.description}</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {trainer.name}
              </h3>
              <p className="text-gray-600 mb-2">
                {trainer.experience} of experience
              </p>
              <div className="flex flex-wrap gap-2">
                {trainer.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
