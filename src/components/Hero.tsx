import React from 'react';
import { Play } from 'lucide-react';
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Welcome to Prem Dance Studio
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
          Discover the joy of dance with our expert instructors and diverse range of classes
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/classes"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2"
          >
            <Play size={20} />
            Explore Classes
          </Link>
          <Link
            to="/contact"
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
