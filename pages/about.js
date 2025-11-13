import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

export default function About() {
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
    <>
      <Head>
        <title>About - Junran Tao</title>
        <meta name="description" content="Full-stack engineer and CS grad student passionate about building robust systems and supporting women in tech." />
      </Head>

      <div className="min-h-screen bg-morandi-soft-white">
        {/* Navigation Bar */}
        <Navigation />

        {/* Content */}
        <motion.div 
          className="container mx-auto px-6 py-16 md:py-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-morandi-beige text-morandi-charcoal rounded-full text-sm font-semibold">
                  About Me
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-morandi-charcoal mb-6">
                Junran Tao
              </h1>
            </motion.div>

            {/* Content Sections */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Single Paragraph Bio */}
              <div>
                <p className="text-lg md:text-xl leading-relaxed text-morandi-charcoal">
                  Junran Tao is a full-stack engineer and CS grad student. She&apos;s worked on SaaS platforms, GPU-accelerated GNNs, ecommerce backends, and moderation tools. She cares about women in tech and has joined WISE 2024 and Grace Hopper 2025. She likes photography—mostly landscapes from every place she enjoyed. She also cosplays anime and game characters at cons and on Halloween. Lately, she&apos;s also building a startup with a friend, learning everything as she goes.
                </p>
              </div>

              {/* Back Link */}
              <motion.div variants={itemVariants} className="pt-8">
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-morandi-sage hover:bg-morandi-dust-blue text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105 transform"
                >
                  <span>View Projects</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
