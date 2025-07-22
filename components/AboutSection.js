import React from 'react';
import { Calendar, MapPin, Award, BookOpen, ExternalLink } from 'lucide-react';
import portfolioData from '../data/portfolio';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about leveraging cutting-edge technology to solve complex problems in deep learning and software development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Research Highlight */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <Award className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-2xl font-bold text-gray-900">Research Publication</h3>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-blue-800">
                    &ldquo;DR-CircuitGNN: Training Acceleration of Heterogeneous Circuit Graph Neural Network on GPUs&rdquo;
                  </h4>
                  <p className="text-gray-700">
                    Published in <strong>ICS 2025</strong> - Achieved 4.8× training speedup through custom CUDA kernel optimization
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["PyTorch", "CUDA", "GPU Optimization", "Graph Neural Networks"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://hpcrl.github.io/ICS2025-webpage/program/Proceedings_ICS25/ics25-76.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Read Full Paper
                  </a>
                </div>
              </div>

              {/* Skills Summary */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">PyTorch</div>
                  <div className="text-gray-700 font-medium">Deep Learning Framework</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">CUDA</div>
                  <div className="text-gray-700 font-medium">GPU Acceleration</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">JavaScript</div>
                  <div className="text-gray-700 font-medium">Web Development</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">TypeScript</div>
                  <div className="text-gray-700 font-medium">Modern Web Apps</div>
                </div>
              </div>
            </div>

            {/* Right Column - Education & Experience Timeline */}
            <div className="space-y-8">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="text-blue-600 mr-3" size={24} />
                  Education
                </h3>
                <div className="space-y-4">
                  {portfolioData.education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6">
                      <div className="bg-white rounded-lg p-4 shadow-sm border">
                        <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                        <p className="text-blue-600 font-medium">{edu.institution}</p>
                        <div className="flex items-center text-gray-600 text-sm mt-2">
                          <Calendar size={16} className="mr-2" />
                          <span>{edu.duration}</span>
                          <MapPin size={16} className="ml-4 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        {edu.gpa && (
                          <div className="mt-2">
                            <span className="text-sm font-medium text-green-600">GPA: {edu.gpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Experience Highlight */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Role</h3>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-2">Deep Learning Research Assistant</h4>
                  <p className="text-blue-100 mb-3">Stevens Institute of Technology</p>
                  <p className="text-sm leading-relaxed">
                    Leading GPU optimization research for Circuit Graph Neural Networks, 
                    developing custom CUDA kernels, and publishing cutting-edge research 
                    in top-tier conferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
