import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, ChevronRight, FileText } from 'lucide-react';
import caseStudies from '../../data/caseStudies';

export default function CaseStudyDetail() {
  const router = useRouter();
  const { slug } = router.query;

  // Find the current case study
  const caseStudy = caseStudies.find(cs => cs.slug === slug);
  
  // Find next case study for pagination
  const currentIndex = caseStudies.findIndex(cs => cs.slug === slug);
  const nextCaseStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-morandi-soft-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-playfair font-bold text-morandi-charcoal mb-4">Project Not Found</h1>
          <Link href="/" className="text-morandi-sage hover:text-morandi-dust-blue transition-colors">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Head>
        <title>{caseStudy.title} - Junran Tao Portfolio</title>
        <meta name="description" content={
          caseStudy.challengeAndApproach 
            ? caseStudy.challengeAndApproach.challenge 
            : caseStudy.challenge?.description || caseStudy.hook
        } />
      </Head>

      <div className="min-h-screen bg-morandi-soft-white">
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-morandi-beige">
          <div className="container mx-auto px-6 py-4">
            <Link 
              href="/#evidence"
              className="inline-flex items-center gap-2 text-morandi-charcoal hover:text-morandi-sage transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Projects</span>
            </Link>
          </div>
        </nav>

        <motion.div 
          className="container mx-auto px-6 py-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-morandi-beige text-morandi-charcoal rounded-full text-sm font-semibold">
                {caseStudy.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-morandi-charcoal">
              {caseStudy.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-morandi-charcoal mb-6">
              <div className="flex items-center gap-2">
                <span className="text-morandi-grey">Company: </span>
                {caseStudy.companyUrl ? (
                  <a 
                    href={caseStudy.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-morandi-sage hover:text-morandi-dust-blue inline-flex items-center gap-1 group"
                  >
                    {caseStudy.company}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="font-semibold">{caseStudy.company}</span>
                )}
              </div>
              <div>
                <span className="text-morandi-grey">Role: </span>
                <span className="font-semibold">{caseStudy.role}</span>
              </div>
              <div>
                <span className="text-morandi-grey">Duration: </span>
                <span className="font-semibold">{caseStudy.duration}</span>
              </div>
            </div>

            {/* Links */}
            {caseStudy.hasGithub && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-morandi-charcoal hover:bg-morandi-sage text-white rounded-xl font-medium transition-all shadow-md hover:shadow-lg"
              >
                {caseStudy.isPaper ? (
                  <>
                    <FileText className="w-5 h-5" />
                    <span>View Published Paper</span>
                  </>
                ) : (
                  <>
                    <Github className="w-5 h-5" />
                    <span>View Code on GitHub</span>
                  </>
                )}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </motion.div>

          {/* Main Content - Full Width Layout */}
          <div className="space-y-12 mb-16">
            
            {/* Project Screenshots/Images Section - Horizontal Grid */}
            {caseStudy.images && caseStudy.images.length > 0 && (
              <motion.section variants={itemVariants}>
                <div className="bg-white rounded-2xl p-8 border border-morandi-beige shadow-sm">
                  <h2 className="text-3xl font-playfair font-bold text-morandi-charcoal mb-8">Project Visuals</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {caseStudy.images.map((image, index) => (
                      <div key={index} className="space-y-4">
                        <div className="relative w-full overflow-hidden rounded-xl border-2 border-morandi-beige hover:border-morandi-sage transition-colors group">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="bg-morandi-beige/50 rounded-lg p-4 border border-morandi-beige">
                          <p className="text-morandi-charcoal text-base font-semibold leading-relaxed">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}

            {/* Two Column Layout: Challenge & Solution + Results */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left: Challenge & Solution - Compact */}
              {caseStudy.challengeAndApproach ? (
                <motion.section variants={itemVariants}>
                  <div className="bg-white rounded-2xl p-6 border border-morandi-beige shadow-sm h-full">
                    <h2 className="text-2xl font-playfair font-bold text-morandi-charcoal mb-4">{caseStudy.challengeAndApproach.title}</h2>
                    
                    <div className="space-y-4">
                      <p className="text-morandi-charcoal text-sm leading-relaxed">
                        <span className="text-morandi-sage font-semibold">Challenge: </span>
                        {caseStudy.challengeAndApproach.challenge}
                      </p>

                      <p className="text-morandi-charcoal text-sm leading-relaxed">
                        <span className="text-morandi-mauve font-semibold">Role: </span>
                        {caseStudy.challengeAndApproach.role}
                      </p>

                      <div className="grid grid-cols-1 gap-3 mt-4">
                        {caseStudy.challengeAndApproach.solutions.map((solution, index) => (
                          <div key={index} className="bg-morandi-beige/50 rounded-lg p-4 border border-morandi-beige">
                            <h3 className="text-sm font-semibold text-morandi-sage mb-1">
                              {solution.title}
                            </h3>
                            <p className="text-morandi-charcoal text-xs leading-relaxed">
                              {solution.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.section>
              ) : (
                <>
                  {/* Fallback: Original Challenge Section */}
                  {caseStudy.challenge && (
                    <motion.section variants={itemVariants}>
                      <div className="bg-white rounded-2xl p-8 border border-morandi-beige shadow-sm">
                        <h2 className="text-3xl font-playfair font-bold text-morandi-charcoal mb-6">{caseStudy.challenge.title}</h2>
                        
                        <p className="text-morandi-charcoal text-lg mb-6 leading-relaxed">
                          {caseStudy.challenge.description}
                        </p>

                        <div className="space-y-3">
                          <p className="text-morandi-sage font-semibold mb-3">Core Issues:</p>
                          {caseStudy.challenge.keyIssues.map((issue, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-morandi-sage rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-morandi-charcoal">{issue}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.section>
                  )}

                  {/* Fallback: Original Approach Section */}
                  {caseStudy.approach && (
                    <motion.section variants={itemVariants}>
                      <div className="bg-white rounded-2xl p-8 border border-morandi-beige shadow-sm">
                        <h2 className="text-3xl font-playfair font-bold text-morandi-charcoal mb-6">{caseStudy.approach.title}</h2>
                        
                        <p className="text-morandi-charcoal text-lg mb-8 leading-relaxed">
                          {caseStudy.approach.description}
                        </p>

                        <div className="space-y-6">
                          {caseStudy.approach.steps.map((step, index) => (
                            <div key={index} className="border-l-4 border-morandi-sage pl-6 py-2">
                              <h3 className="text-xl font-semibold text-morandi-sage mb-3">
                                {index + 1}. {step.phase}
                              </h3>
                              <ul className="space-y-2">
                                {step.actions.map((action, actionIndex) => (
                                  <li key={actionIndex} className="flex items-start gap-3 text-morandi-charcoal">
                                    <ChevronRight className="w-5 h-5 text-morandi-mauve flex-shrink-0 mt-0.5" />
                                    <span>{action}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.section>
                  )}
                </>
              )}

              {/* Right: Results Section - Compact */}
              <motion.section variants={itemVariants}>
                <div className="bg-white rounded-2xl p-6 border border-morandi-beige shadow-sm h-full">
                  <h2 className="text-2xl font-playfair font-bold text-morandi-charcoal mb-4">{caseStudy.results.title}</h2>

                  {/* Metrics Cards */}
                  <div className="grid grid-cols-1 gap-3">
                    {caseStudy.results.metrics.map((metric, index) => (
                      <div 
                        key={index}
                        className="bg-morandi-beige/50 rounded-lg p-4 border border-morandi-beige"
                      >
                        <p className="text-morandi-grey text-xs mb-1">{metric.metric}</p>
                        <p className="text-xl font-bold text-morandi-sage mb-1">
                          {metric.improvement}
                        </p>
                        <p className="text-morandi-charcoal text-xs">{metric.impact}</p>
                      </div>
                    ))}
                  </div>

                  {/* Achievements - only show if exists */}
                  {caseStudy.results.achievements && caseStudy.results.achievements.length > 0 && (
                    <div className="mt-4">
                      <p className="text-morandi-dust-blue font-semibold text-sm mb-3">Key Achievements:</p>
                      <div className="space-y-2">
                        {caseStudy.results.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-morandi-sage rounded-full mt-1.5 flex-shrink-0"></div>
                            <p className="text-morandi-charcoal text-xs">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.section>
            </div>

            {/* Tech Stack Section - Full Width Below */}
            <motion.section variants={itemVariants}>
              <div className="bg-white rounded-2xl p-6 border border-morandi-beige shadow-sm">
                <h2 className="text-2xl font-playfair font-bold text-morandi-charcoal mb-6">Technical Stack</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {caseStudy.technicalDeepDive.sections.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-base font-semibold text-morandi-sage mb-3">
                        {section.category}
                      </h3>
                      <div className="space-y-3">
                        {section.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="bg-morandi-beige/30 rounded-lg p-3 border border-morandi-beige">
                            <p className="text-morandi-charcoal font-medium text-sm mb-1">
                              {tech.name}
                            </p>
                            <p className="text-morandi-grey text-xs leading-relaxed">
                              {tech.usage}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          {/* Pagination - Next Project */}
          <motion.section 
            variants={itemVariants}
            className="border-t border-morandi-beige pt-12"
          >
            <Link href={`/case/${nextCaseStudy.slug}`}>
              <div className="group bg-white rounded-2xl p-8 border border-morandi-beige hover:border-morandi-sage hover:shadow-lg transition-all cursor-pointer">
                <p className="text-morandi-grey text-sm mb-2">Next Project</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-morandi-charcoal group-hover:text-morandi-sage transition-colors mb-2">
                      {nextCaseStudy.title}
                    </h3>
                    <p className="text-morandi-grey">{nextCaseStudy.hook}</p>
                  </div>
                  <ChevronRight className="w-8 h-8 text-morandi-sage group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.section>
        </motion.div>
      </div>
    </>
  );
}
