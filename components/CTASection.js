'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowRight, Sparkles } from 'lucide-react';
import portfolioData from '../data/portfolio';

const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
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
    <section id="contact" className="py-24 bg-morandi-soft-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-morandi-sage rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-morandi-dust-blue rounded-full filter blur-3xl"></div>
      </div>

      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-morandi-sage to-transparent"></div>

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-morandi-beige rounded-full border border-morandi-beige">
              <Sparkles className="w-4 h-4 text-morandi-sage" />
              <span className="text-morandi-charcoal text-sm font-semibold uppercase tracking-wider">
                The Call-to-Action
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-morandi-charcoal"
          >
            Let's Build Robust Systems Together
          </motion.h2>

          {/* Filtered CTA Message */}
          <motion.div variants={itemVariants} className="mb-12">
            {/* <div className="bg-gradient-to-r from-slate-800/80 to-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-slate-700 shadow-2xl">
              <p className="text-xl md:text-2xl leading-relaxed text-slate-200 mb-6">
                I'm currently seeking{' '}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  full-time opportunities for 2026
                </span>
                .
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                If you also value{' '}
                <span className="font-semibold text-blue-400">clear mechanisms</span>,{' '}
                <span className="font-semibold text-purple-400">robust systems</span>, and{' '}
                <span className="font-semibold text-blue-400">quantifiable results</span>
                , I'd love to connect with you.
              </p>
            </div> */}
          </motion.div>

          {/* Contact Methods */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            {/* Email */}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="group flex items-center gap-4 px-8 py-5 bg-morandi-sage hover:bg-morandi-dust-blue rounded-xl font-semibold text-white transition-all shadow-md hover:shadow-lg hover:scale-105 transform w-full sm:w-auto justify-center"
            >
              <Mail className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-white/80 uppercase tracking-wider mb-1">Email</div>
                <div className="text-base font-bold">{portfolioData.personal.email}</div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
            </a>

            {/* LinkedIn */}
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-5 bg-morandi-charcoal hover:bg-morandi-mauve rounded-xl font-semibold text-white transition-all shadow-md hover:shadow-lg hover:scale-105 transform w-full sm:w-auto justify-center"
            >
              <Linkedin className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-white/80 uppercase tracking-wider mb-1">LinkedIn</div>
                <div className="text-base font-bold">Connect with me</div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-morandi-beige rounded-full border border-morandi-beige">
              <span className="text-morandi-charcoal text-sm">
                {portfolioData.personal.location}
              </span>
            </div>
            
            <p className="text-morandi-grey text-sm">
              Usually responds within 24 hours
            </p>
          </motion.div>

          {/* Bottom Signature */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-morandi-beige"
          >
            <p className="text-morandi-grey text-sm mb-2">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
            <p className="text-morandi-grey/70 text-xs">
              © 2025 Junran Tao. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </section>
  );
};

export default CTASection;
