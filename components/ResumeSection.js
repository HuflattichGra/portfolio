'use client';

import { motion } from 'framer-motion';
import { Download, Eye, FileText, Award, Calendar, MapPin } from 'lucide-react';

const ResumeSection = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleDownload = () => {
    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = '/Junran_CV_sde_8.pdf';
    link.download = 'Junran_CV_sde_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    // Try to open PDF in new tab for preview
    try {
      const newWindow = window.open('/Junran_CV_sde_8.pdf', '_blank');
      // If popup was blocked, fallback to download
      if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
        handleDownload();
      }
    } catch {
      // Fallback to download if preview fails
      handleDownload();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-4">
              Resume
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My Professional Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download my complete resume or preview it online to learn more about 
              my experience, skills, and achievements.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Resume Preview Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Resume Preview</h3>
              <p className="text-gray-400">View my complete professional background</p>
            </div>

            {/* Mock preview */}
            <div className="bg-white/10 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div className="text-center border-b border-white/20 pb-4">
                  <h4 className="text-lg font-bold text-white">{data.personal.name}</h4>
                  <p className="text-cyan-400">{data.personal.title}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-2">
                    <MapPin size={14} />
                    {data.personal.location}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Award size={16} className="text-cyan-400" />
                      Experience
                    </h5>
                    <div className="space-y-2">
                      {data.experience.slice(0, 2).map((exp, index) => (
                        <div key={index} className="text-sm">
                          <p className="text-gray-300 font-medium">{exp.position}</p>
                          <p className="text-gray-400">{exp.company}</p>
                          <p className="text-gray-500 text-xs flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.duration}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-white font-semibold mb-2">Education</h5>
                    <div className="space-y-2">
                      {data.education.slice(0, 1).map((edu, index) => (
                        <div key={index} className="text-sm">
                          <p className="text-gray-300 font-medium">{edu.degree}</p>
                          <p className="text-gray-400">{edu.institution}</p>
                          <p className="text-gray-500 text-xs">{edu.duration}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              onClick={handlePreview}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye size={20} />
              Preview Full Resume
            </motion.button>
          </motion.div>

          {/* Download & Quick Info */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Download Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Download Resume</h3>
              <p className="text-gray-300 mb-6">
                Get the complete PDF version of my resume with detailed information 
                about my experience, projects, and technical skills.
              </p>
              
              <motion.button
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} />
                Download PDF Resume
              </motion.button>
              
              <p className="text-gray-400 text-sm text-center mt-4">
                Last updated: August 2025 • PDF Format • 1 page
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Quick Overview</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    5+
                  </div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    15+
                  </div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    20+
                  </div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    3
                  </div>
                  <div className="text-gray-400 text-sm">Companies</div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">Interested in Working Together?</h4>
              <p className="text-gray-300 mb-4 text-sm">
                Let&apos;s discuss how my skills and experience can contribute to your team.
              </p>
              <motion.button
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-semibold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
