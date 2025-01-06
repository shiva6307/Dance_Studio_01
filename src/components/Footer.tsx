import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Classes', path: '/classes' },
    { name: 'Styles', path: '/styles' },
    { name: 'Events', path: '/events' },
    { name: 'Trainers', path: '/trainers' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+91 9369548617', href: 'tel:+919369548617' },
    { icon: Mail, text: 'hoplockprem@gmail.com', href: 'mailto:hoplockprem@gmail.com' },
    { icon: MapPin, text: '1/78 Vijyant Khand, GomtiNagar, Lucknow' },
    { icon: Clock, text: 'Mon-Fri: 7:00 AM - 9:00 PM' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Prem Dance Studio</h3>
            <p className="text-gray-400 mb-4">
              Discover the joy of dance with our expert instructors and diverse range of classes.
            </p>
            <a
              href="https://www.instagram.com/pre_mstudioo?igsh=MWUybzAyZnZsd3F6Nw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow us on Instagram
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-start">
                    <Icon className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-400">{item.text}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Prem Dance Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;