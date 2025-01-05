import React from 'react';

const DanceStyles = () => {
  const styles = [
    {
      name: 'Hip Hop',
      description: 'Urban dance style emphasizing rhythm and self-expression',
      benefits: ['Improves coordination', 'Builds confidence', 'Enhances rhythm'],
      image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Contemporary',
      description: 'Modern interpretive dance combining ballet and jazz elements',
      benefits: ['Increases flexibility', 'Develops creativity', 'Emotional expression'],
      image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'House',
      description: 'High-energy dance style born from house music culture',
      benefits: ['Cardio workout', 'Footwork mastery', 'Rhythmic awareness'],
      image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <section id="styles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Dance Styles</h2>
          <p className="mt-4 text-xl text-gray-600">Express yourself through various dance forms</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {styles.map((style) => (
            <div key={style.name} className="group relative overflow-hidden rounded-lg">
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{style.name}</h3>
                <p className="text-sm mb-4">{style.description}</p>
                <ul className="space-y-1">
                  {style.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DanceStyles;