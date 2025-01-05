import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Established',
      description: 'Founded on June 5, 2024'
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Founded by Rohit Tiwari, with co-founders Shivanshu Mishra and Saurabh Yadav'
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Specialized in Zumba, Aerobics, Yoga, and Meditation'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-4 text-xl text-gray-600">Our Journey and Mission</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="bg-white rounded-lg shadow-md p-8">
                <div className="text-blue-600 mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 leading-relaxed mb-6">
            Prem Dance Studio provides a creative space for all dance enthusiasts to explore and express their passion. 
            Our dedicated trainers, Prem Chopra and Shivam Kumar, are committed to bringing out the best in every student.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're a beginner or an experienced dancer, you'll find a welcoming and energetic environment at 
            Prem Dance Studio. We offer comprehensive training in various dance forms and fitness programs to help you 
            achieve your goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;