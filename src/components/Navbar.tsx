import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Classes', href: '/classes' },
    { title: 'Styles', href: '/styles' },
    { title: 'Events', href: '/events' },
    { title: 'Fitness', href: '/fitness' },
    { title: 'Shoots', href: '/shoots' },
    { title: 'Trainers', href: '/trainers' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/pre_mstudioo?igsh=MWUybzAyZnZsd3F6Nw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600"
            >
              <Instagram size={20} />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;