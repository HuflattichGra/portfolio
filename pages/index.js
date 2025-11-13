import Head from 'next/head';
import Navigation from '../components/Navigation';
import ThesisSection from '../components/ThesisSection';
import EvidenceSection from '../components/EvidenceSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Junran Tao - Full Stack Engineer & AI Researcher | Evidence-Based Portfolio</title>
        <meta name="description" content="Junran Tao - Full Stack Engineer specializing in backend development and AI research. View quantified case studies showcasing 46.8% training speedup, 40% API optimization, and production-grade systems." />
        <meta name="keywords" content="full stack engineer, backend developer, AI researcher, GPU optimization, PyTorch, CUDA, React, Node.js, C#, .NET" />
        <meta name="author" content="Junran Tao" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://junrantao.dev/" />
        <meta property="og:title" content="Junran Tao - Full Stack Engineer & AI Researcher" />
        <meta property="og:description" content="Evidence-based portfolio showcasing quantified results: 46.8% training speedup, 40% API optimization, and end-to-end system development." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Junran Tao - Full Stack Engineer & AI Researcher" />
        <meta property="twitter:description" content="Evidence-based portfolio showcasing quantified results in full stack development and AI research." />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

      <div className="font-inter antialiased bg-slate-900">
        {/* Simplified Navigation */}
        <Navigation />

        {/* Main Content - Three-Part Architecture */}
        <main>
          {/* L1 Module 1: The Thesis (Hero/Value Proposition) */}
          <ThesisSection />

          {/* L1 Module 2: The Evidence (Case Studies Center) */}
          <EvidenceSection />

          {/* L1 Module 3: The Call-to-Action (Contact) */}
          <CTASection />
        </main>
      </div>
    </>
  );
}
