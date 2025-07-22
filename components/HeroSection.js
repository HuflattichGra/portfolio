import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import portfolioData from '../data/portfolio';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full Stack Developer", 
    "Deep Learning Engineer", 
    "GPU Optimization Specialist",
    "Computer Vision Expert"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {portfolioData.personal.name}
          </h1>
          
          <div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center">
            <span className="text-blue-300">
              {roles[currentRole]}
            </span>
          </div>

          {/* Bio */}
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {portfolioData.personal.bio}
          </p>

          {/* Tagline */}
          <p className="text-lg text-blue-400 mb-12 font-medium">
            {portfolioData.personal.tagline}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-blue-400" />
              <span>{portfolioData.personal.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-blue-400" />
              <span>{portfolioData.personal.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-blue-400" />
              <span>{portfolioData.personal.phone}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
