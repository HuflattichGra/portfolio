import React from 'react';
import portfolioData from '../data/portfolio';

const SkillsSection = () => {
  const skillCategories = [
    { 
      title: "Programming Languages", 
      skills: portfolioData.skills.languages,
      color: "blue"
    },
    { 
      title: "AI/ML Technologies", 
      skills: portfolioData.skills.technologies,
      color: "purple"
    },
    { 
      title: "Backend & Cloud", 
      skills: portfolioData.skills.backend,
      color: "green"
    },
    { 
      title: "Tools & Optimization", 
      skills: portfolioData.skills.tools,
      color: "orange"
    }
  ];

  const getColorClasses = (color, type) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        title: 'text-blue-800',
        progress: 'bg-blue-500',
        progressBg: 'bg-blue-100'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        title: 'text-purple-800',
        progress: 'bg-purple-500',
        progressBg: 'bg-purple-100'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        title: 'text-green-800',
        progress: 'bg-green-500',
        progressBg: 'bg-green-100'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        title: 'text-orange-800',
        progress: 'bg-orange-500',
        progressBg: 'bg-orange-100'
      }
    };
    return colors[color][type];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across the full technology stack, from low-level GPU optimization to high-level application development
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className={`${getColorClasses(category.color, 'bg')} ${getColorClasses(category.color, 'border')} border rounded-2xl p-8`}
              >
                <h3 className={`text-2xl font-bold ${getColorClasses(category.color, 'title')} mb-6`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-gray-800">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                      </div>
                      <div className={`w-full ${getColorClasses(category.color, 'progressBg')} rounded-full h-2`}>
                        <div 
                          className={`${getColorClasses(category.color, 'progress')} h-2 rounded-full transition-all duration-700 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Expertise Overview</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-700">Years of Experience</div>
                <div className="text-sm text-gray-500 mt-1">Full-stack & Deep Learning</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-700">Technologies Mastered</div>
                <div className="text-sm text-gray-500 mt-1">From CUDA to React</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-700">Projects Completed</div>
                <div className="text-sm text-gray-500 mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
