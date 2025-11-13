'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileDown, Sparkles } from 'lucide-react';
import portfolioData from '../data/portfolio';

const ThesisSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-morandi-soft-white relative overflow-hidden pt-24 pb-12">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-morandi-sage/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-morandi-dust-blue/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(183, 196, 177, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(183, 196, 177, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          {/* Identity Section - Left Aligned */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 border border-morandi-sage/30 shadow-sm">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-morandi-sage" />
              <span className="text-morandi-charcoal text-xs md:text-sm font-medium">Available for 2026 Full-Time Opportunities</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold mb-3 text-morandi-charcoal">
              Junran Tao
            </h1>
            
            <div className="text-xl md:text-2xl mb-3">
              <span className="font-semibold text-morandi-sage">Full Stack Engineer</span>
              <span className="text-morandi-grey mx-2">·</span>
              <span className="font-semibold text-morandi-dust-blue">AI Researcher</span>
            </div>

            <p className="text-xs md:text-sm text-morandi-grey flex items-center gap-3">
              <span>{portfolioData.personal.email}</span>
              <span>·</span>
              <span>{portfolioData.personal.location}</span>
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* Left Column: Value Proposition */}
            <motion.div variants={itemVariants}>
              <div className="bg-white backdrop-blur-md rounded-xl p-6 border border-morandi-beige shadow-lg h-full">
                <p className="text-base md:text-lg leading-relaxed text-morandi-charcoal">
                  I&apos;m passionate about{' '}
                  <span className="font-bold text-morandi-sage">
                    building end-to-end systems
                  </span>
                  . Whether it&apos;s{' '}
                  <span className="font-semibold text-morandi-dust-blue">
                    reducing Circuit GNN training time by 46.8%
                  </span>
                  , optimizing{' '}
                  <span className="font-semibold text-morandi-clay">
                    GIS platform from 24h to &lt;5s
                  </span>
                  , or{' '}
                  <span className="font-semibold text-morandi-mauve">
                    cutting API response by 40%
                  </span>
                  , I deliver{' '}
                  <span className="font-bold text-morandi-charcoal">
                    quantifiable results through robust architecture
                  </span>
                  .
                </p>
              </div>
            </motion.div>

            {/* Right Column: Core Competencies + CTAs */}
            <div className="space-y-5">
              {/* Core Competencies */}
              <motion.div variants={itemVariants}>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-white backdrop-blur-sm rounded-lg p-4 border border-morandi-beige hover:border-morandi-sage hover:shadow-md transition-all">
                    <h3 className="text-sm font-playfair font-semibold text-morandi-charcoal mb-1">Full Stack Development</h3>
                    <p className="text-xs text-morandi-grey">React frontend to C#/.NET backend</p>
                  </div>
                  
                  <div className="bg-white backdrop-blur-sm rounded-lg p-4 border border-morandi-beige hover:border-morandi-dust-blue hover:shadow-md transition-all">
                    <h3 className="text-sm font-playfair font-semibold text-morandi-charcoal mb-1">Deep Learning</h3>
                    <p className="text-xs text-morandi-grey">PyTorch + CUDA optimization</p>
                  </div>
                  
                  <div className="bg-white backdrop-blur-sm rounded-lg p-4 border border-morandi-beige hover:border-morandi-mauve hover:shadow-md transition-all">
                    <h3 className="text-sm font-playfair font-semibold text-morandi-charcoal mb-1">Performance Optimization</h3>
                    <p className="text-xs text-morandi-grey">GPU acceleration & system architecture</p>
                  </div>
                </div>
              </motion.div>

              {/* Primary CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-5 py-3 bg-morandi-sage hover:bg-morandi-dust-blue text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105 transform text-sm flex-1"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-5 py-3 bg-morandi-charcoal hover:bg-morandi-grey text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105 transform text-sm flex-1"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="/Junran_CV_sde_2026.docx.pdf"
                  download
                  className="group flex items-center justify-center gap-2 px-5 py-3 bg-morandi-mauve hover:bg-morandi-clay text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105 transform text-sm flex-1"
                >
                  <FileDown className="w-4 h-4 group-hover:animate-bounce" />
                  <span>Resume</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ThesisSection;
