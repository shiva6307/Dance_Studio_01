import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['1/78 Vijyant Khand, GomtiNagar ', 'Lucknow, U.P. 226010']
    },
    {
      icon: Phone,
      title: 'Contact',
      details: ['+91 9369548617', '+91 9264917285']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hoplockprem@gmail.com']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 7:00 AM - 9:00 PM', 'Sat-Sun: 8:00 AM - 6:00 PM']
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_q9js2x6', // Replace with your EmailJS service ID
        'template_6f0kmbe', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'hoplockprem@gmail.com'
        },
        'O-gvCWKGXEVh-2u-t' // Replace with your EmailJS public key
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600">Get in touch with us for any inquiries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-blue-600 mb-4">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                  {info.details.map((detail, index) => (
                    <p key={index} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;