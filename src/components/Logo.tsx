import React from 'react';
import img from '../assets/logo_main.png';


const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={img} className="h-12 w-auto"/>
      <span className="text-2xl font-bold">
        <span className="text-blue-600">Prem</span>
        <span className="text-gray-800"> Dance</span>
        <span className="text-blue-600"> Studio</span>
        
      </span>
    </div>
     
  );
};

export default Logo;