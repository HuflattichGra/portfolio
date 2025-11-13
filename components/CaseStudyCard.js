'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, FileText } from 'lucide-react';
import Link from 'next/link';

const CaseStudyCard = ({ caseStudy, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-morandi-beige hover:border-morandi-sage hover:shadow-xl transition-all duration-300"
    >
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-morandi-sage/0 via-morandi-dust-blue/0 to-morandi-mauve/0 group-hover:from-morandi-sage/5 group-hover:via-morandi-dust-blue/5 group-hover:to-morandi-mauve/5 transition-all duration-500"></div>

      <div className="relative p-8">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1.5 bg-morandi-beige text-morandi-charcoal rounded-full text-sm font-medium">
            {caseStudy.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-playfair font-bold text-morandi-charcoal mb-3 group-hover:text-morandi-sage transition-colors">
          {caseStudy.title}
        </h3>

        {/* Company & Role */}
        <p className="text-morandi-grey text-sm mb-4">
          {caseStudy.company} • {caseStudy.role}
        </p>

        {/* Hook - The Main Value Proposition */}
        <div className="mb-6 p-4 bg-morandi-beige/50 rounded-xl border border-morandi-beige">
          <p className="text-base font-semibold text-morandi-charcoal">
            {caseStudy.hook}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-6">
          <p className="text-morandi-grey text-xs uppercase tracking-wider mb-3 font-medium">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {caseStudy.techStack.map((tech, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-white text-morandi-charcoal rounded-lg text-sm border border-morandi-beige group-hover:border-morandi-sage/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action Links */}
        <div className="flex gap-3 pt-4 border-t border-morandi-beige">
          {/* Detail Page Link */}
          <Link 
            href={`/case/${caseStudy.slug}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-morandi-sage hover:bg-morandi-dust-blue text-white rounded-xl font-medium transition-all shadow-sm hover:shadow-md group/btn"
          >
            <span>View Project</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          {/* GitHub or Paper Link (if available) */}
          {caseStudy.hasGithub && (
            <a
              href={caseStudy.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-morandi-beige hover:bg-morandi-clay text-morandi-charcoal rounded-xl font-medium transition-all"
              title={caseStudy.isPaper ? "View Paper" : "View Code"}
            >
              {caseStudy.isPaper ? (
                <FileText className="w-5 h-5" />
              ) : (
                <Github className="w-5 h-5" />
              )}
            </a>
          )}
        </div>
      </div>

      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-morandi-sage/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default CaseStudyCard;
