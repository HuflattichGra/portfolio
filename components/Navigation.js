'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin, FileDown } from 'lucide-react';
import portfolioData from '../data/portfolio';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToEvidence = () => {
    const element = document.getElementById('evidence');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-morandi-beige' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl md:text-2xl font-playfair font-bold text-morandi-charcoal hover:text-morandi-sage transition-colors">
              Junran Tao
            </span>
          </motion.button>

          {/* Desktop Navigation - Simplified */}
          <div className="hidden md:flex items-center gap-6">
            {/* Quick Links */}
            <button
              onClick={scrollToEvidence}
              className="text-morandi-charcoal hover:text-morandi-sage font-medium transition-colors px-3 py-2 rounded-lg hover:bg-morandi-beige/50"
            >
              Projects
            </button>

            <button
              onClick={scrollToContact}
              className="text-morandi-charcoal hover:text-morandi-sage font-medium transition-colors px-3 py-2 rounded-lg hover:bg-morandi-beige/50"
            >
              Contact
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-morandi-beige"></div>

            {/* Social Links */}
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-morandi-grey hover:text-morandi-sage transition-colors p-2 rounded-lg hover:bg-morandi-beige/50"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-morandi-grey hover:text-morandi-sage transition-colors p-2 rounded-lg hover:bg-morandi-beige/50"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* Resume Download */}
            <a
              href="/Junran_CV_sde_2026.docx.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-morandi-sage hover:bg-morandi-dust-blue text-white rounded-xl font-medium transition-all shadow-sm hover:shadow-md"
              title="Download Resume"
            >
              <FileDown className="w-4 h-4" />
              <span className="hidden lg:inline">Resume</span>
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-morandi-grey hover:text-morandi-sage transition-colors p-2"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-morandi-grey hover:text-morandi-sage transition-colors p-2"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="/Junran_CV_sde_2026.docx.pdf"
              download
              className="text-morandi-sage hover:text-morandi-dust-blue transition-colors p-2"
            >
              <FileDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
