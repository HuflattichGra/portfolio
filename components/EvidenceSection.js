'use client';

import { motion } from 'framer-motion';
import CaseStudyCard from './CaseStudyCard';
import caseStudies from '../data/caseStudies';

const EvidenceSection = () => {
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

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
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
    <section id="evidence" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-morandi-sage/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-morandi-dust-blue/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <div className="inline-block mb-4">
            <span className="px-5 py-2.5 bg-morandi-beige text-morandi-charcoal rounded-full text-sm font-semibold uppercase tracking-wider border border-morandi-sage/30">
              Projects
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-morandi-charcoal">
            Featured Projects
          </h2>
          
          <p className="text-xl text-morandi-grey max-w-3xl mx-auto leading-relaxed">
            Representative projects covering full-stack development, AI research, and system optimization.
          </p>
        </motion.div>

        {/* Projects Grid - 1x3 Responsive Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard 
              key={caseStudy.id} 
              caseStudy={caseStudy} 
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-morandi-sage to-transparent"></div>
    </section>
  );
};

export default EvidenceSection;
