import Head from 'next/head';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ResumeSection from '../components/ResumeSection';
import ContactSection from '../components/ContactSection';
import portfolioData from '../data/portfolio';

export default function Home() {

  return (
    <>
      <Head>
        <title>Junran Tao - Software Engineer & Full-Stack Developer</title>
        <meta name="description" content="Passionate software engineer specializing in full-stack development with expertise in React, Node.js, and modern web technologies." />
        <meta name="keywords" content="software engineer, full-stack developer, React, Node.js, JavaScript, web development" />
        <meta name="author" content="Junran Tao" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://junrantao.dev/" />
        <meta property="og:title" content="Junran Tao - Software Engineer & Full-Stack Developer" />
        <meta property="og:description" content="Passionate software engineer specializing in full-stack development with expertise in React, Node.js, and modern web technologies." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Junran Tao - Software Engineer & Full-Stack Developer" />
        <meta property="twitter:description" content="Passionate software engineer specializing in full-stack development with expertise in React, Node.js, and modern web technologies." />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

      <div className="font-inter antialiased">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section id="home">
            <HeroSection data={portfolioData} />
          </section>

          {/* About Section */}
          <section id="about">
            <AboutSection data={portfolioData} />
          </section>

          {/* Projects Section */}
          <section id="projects">
            <ProjectsSection data={portfolioData} />
          </section>

          {/* Skills Section */}
          <section id="skills">
            <SkillsSection data={portfolioData} />
          </section>

          {/* Resume Section */}
          <section id="resume">
            <ResumeSection data={portfolioData} />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <ContactSection data={portfolioData} />
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">
                  © 2025 Junran Tao. Built with Next.js, Tailwind CSS, and Framer Motion.
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
