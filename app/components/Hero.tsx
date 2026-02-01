'use client';

import { motion, Variants} from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';


// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Section wrapper component with scroll animation

// 1. Define the interface for your props
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string; // Optional because some sections might not have a class
  id?: string;        // Optional because some sections might not have an id
}

// 2. Apply the interface to the component
function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      {children}
    </motion.section>
  );
}

export default function Hero() {
  return (
    <div className="text-gray-900 transition-colors duration-300 bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-0" id="hero">
        {/* Hero Gradient Image */}
<div className="absolute w-full h-[60vh] md:h-[80vh] lg:h-[100vh] left-0 top-[40%] sm:top-[50%] transform -translate-y-1/2 z-0 pointer-events-none overflow-hidden">
  <img 
    src="/hero_gradient.png" 
    alt="" 
    className="w-full h-full object-cover object-center opacity-90" 
  />
</div>

        <motion.div 
          className="max-w-3xl w-full text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p 
            className="font-[--font-playfair] italic text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 px-4"
            variants={fadeInUp}
          >
            Thoughtful Design. Intentional Digital Experiences.
          </motion.p>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1] mb-4 sm:mb-6 px-4"
            style={{ fontFamily: 'var(--font-coolvetica), sans-serif' }}
            variants={fadeInUp}
          >
            We Design & Build<br />Brands for the Modern Web
          </motion.h1>

          <motion.p 
            className="max-w-xl mx-auto text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 px-4"
            variants={fadeInUp}
          >
            From brand identity to high-performance websites, we help businesses create digital experiences that feel clear, confident, and beautifully crafted.
          </motion.p>

          <motion.div 
            className="flex justify-center px-4 mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <a href="#contact-form">
              <button className="bg-white border-2 border-gray-900 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-gray-900 hover:text-white transition-all">
                START A PROJECT
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </a>
          </motion.div>

          {/* Phone Image */}
<motion.div 
  className="relative w-full max-w-2xl mx-auto h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[750px] z-30"
  variants={fadeInUp}
>
            <div className="relative w-full h-full">
              <img 
                src="/phone-hand.png" 
                alt="Hand holding phone showcasing modern digital design"
                className="w-full h-full object-contain relative z-10"
              />

              {/* Gradient Fade */}
<div 
  className="absolute top-[55%] left-1/2 -translate-x-1/2 w-full max-w-md bottom-0 pointer-events-none z-20"
  style={{
    background:
      'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0.8) 70%, white 95%)'
  }}
/>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services / Features Section */}
<AnimatedSection 
  className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-16 sm:pt-20 sm:pb-24 relative bg-white z-20" 
  id="services"
>
        <div className="relative z-10">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start mb-20 sm:mb-32"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight"
                style={{ fontFamily: 'var(--font-coolvetica), sans-serif' }}
              >
                Designed to Elevate Your Brand{' '}
                <span className="font-[--font-playfair] italic font-normal text-gray-400">
                  With Purpose
                </span>
              </h2>
            </motion.div>

            <motion.div className="pt-0 md:pt-4" variants={fadeInUp}>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-md">
                We partner with modern brands to create thoughtful identities and digital experiences that feel aligned, intentional, and built to last.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 pt-12 sm:pt-16"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-black">
                Brand Identity & Strategy
              </h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                We define your brand's voice, visuals, and positioning — creating a cohesive foundation that connects with the right audience.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-black">
                Digital Design
              </h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Clean, modern design focused on clarity and usability — crafted to guide users effortlessly and leave a lasting impression.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-black">
                Web Development
              </h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                High-performance websites built with modern technologies, optimized for speed, accessibility, and scalability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white" id="process">
        {/* Subtle Orange Accent Blurs */}
        <div 
          className="absolute top-[15%] left-[5%] w-[400px] h-[400px] -z-10 blur-3xl opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255, 180, 120, 0.4) 0%, rgba(255, 255, 255, 0) 70%)' }}
        />
        <div 
          className="absolute bottom-[20%] right-[8%] w-[350px] h-[350px] -z-10 blur-3xl opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255, 183, 147, 0.35) 0%, rgba(255, 255, 255, 0) 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20"
            variants={staggerContainer}
          >
            <motion.p 
              className="font-[--font-playfair] italic text-base sm:text-lg text-gray-400 mb-4"
              variants={fadeInUp}
            >
              Step-by-step collaboration
            </motion.p>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8"
              style={{ fontFamily: 'var(--font-coolvetica), sans-serif' }}
              variants={fadeInUp}
            >
              Our Creative <br />
              <span className="font-[--font-playfair] italic font-normal text-gray-400">Process</span>
            </motion.h2>
            <motion.p 
              className="text-gray-500 text-base sm:text-lg leading-relaxed px-4"
              variants={fadeInUp}
            >
              From initial discovery to final launch, we partner with you to create high-performance brands and digital experiences that feel clear, confident, and beautifully crafted.
            </motion.p>
          </motion.div>

          {/* Process Steps */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 xl:gap-24 relative"
            variants={staggerContainer}
          >
            {/* Step 1 */}
            <motion.div className="group relative" variants={fadeInUp}>
              <div className="mb-8 sm:mb-10 flex items-center gap-4">
                <span 
                  className="text-5xl sm:text-6xl font-bold text-orange-200/60 group-hover:text-orange-400 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-coolvetica), sans-serif' }}
                >
                  01
                </span>
                <div className="h-[2px] flex-grow bg-gradient-to-r from-orange-200/40 to-transparent"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:translate-x-1 transition-transform text-black">
                Discovery & Strategy
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm sm:text-base">
                We begin by diving deep into your brand values, target audience, and business goals. This phase defines our roadmap and ensures every design decision is backed by purpose.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span> Brand Workshops
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span> Market Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span> Strategic Positioning
                </li>
              </ul>
            </motion.div>

            {/* Step 2 */}
            <motion.div className="group relative" variants={fadeInUp}>
              <div className="mb-8 sm:mb-10 flex items-center gap-4">
                <span 
                  className="text-5xl sm:text-6xl font-bold text-orange-200/60 group-hover:text-orange-400 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-coolvetica), sans-serif' }}
                >
                  02
                </span>
                <div className="h-[2px] flex-grow bg-gradient-to-r from-orange-200/40 to-transparent"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:translate-x-1 transition-transform text-black">
                Design & Direction
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm sm:text-base">
                Bringing your vision to life with intentional aesthetics. We explore typography, color palettes, and interactive prototypes to create a cohesive digital identity that resonates.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span> Visual Identity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span> UI/UX Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span> Interactive Prototyping
                </li>
              </ul>
            </motion.div>

            {/* Step 3 */}
            <motion.div className="group relative" variants={fadeInUp}>
              <div className="mb-8 sm:mb-10 flex items-center gap-4">
                <span 
                  className="text-5xl sm:text-6xl font-bold text-orange-200/60 group-hover:text-orange-400 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-coolvetica), sans-serif' }}
                >
                  03
                </span>
                <div className="h-[2px] flex-grow bg-gradient-to-r from-orange-200/40 to-transparent"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:translate-x-1 transition-transform text-black">
                Development & Scale
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm sm:text-base">
                Our developers build high-performance, accessible websites that are optimized for speed and scalability. We ensure your digital product is built to last and ready for growth.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span> Modern Tech Stack
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span> SEO Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span> CMS Integration
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="mt-20 sm:mt-28 lg:mt-32 text-center"
            variants={fadeInUp}
          >
            <a href="#contact-form">
              <button className="px-8 sm:px-10 py-3 sm:py-4 bg-black text-white rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-gray-800 transition-all mx-auto group">
                Start a project
                <span className="material-symbols-outlined text-base sm:text-lg group-hover:translate-x-0.5 transition-transform">arrow_outward</span>
              </button>
            </a>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Portfolio / Selected Works Section */}
      <AnimatedSection className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white" id="portfolio">
        {/* Background Blurs */}
        <div 
          className="absolute top-0 left-[-10%] w-[500px] h-[500px] -z-10 blur-3xl opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(255, 182, 193, 0.3) 0%, rgba(255, 255, 255, 0) 70%)' }}
        />
        <div 
          className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] -z-10 blur-3xl opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(255, 218, 185, 0.3) 0%, rgba(255, 255, 255, 0) 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Header */}
          <motion.header 
            className="max-w-3xl mb-12 sm:mb-16 lg:mb-20"
            variants={staggerContainer}
          >
            <motion.p 
              className="text-xs sm:text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4"
              variants={fadeInUp}
            >
              Portfolio
            </motion.p>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: 'var(--font-coolvetica), sans-serif' }}
              variants={fadeInUp}
            >
              Selected Works
            </motion.h2>
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl font-[--font-playfair] italic text-gray-500"
              variants={fadeInUp}
            >
              Designing the future of digital experiences with purpose and precision.
            </motion.p>
          </motion.header>

          {/* Portfolio Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-20 lg:gap-x-12 lg:gap-y-20"
            variants={staggerContainer}
          >
            {/* Project 1 */}
            <motion.div className="group cursor-pointer" variants={fadeInUp}>
              <div className="relative aspect-[16/10] bg-gray-50 rounded-3xl overflow-hidden mb-6 sm:mb-8 ring-1 ring-gray-200/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-pink-500/10">
                <img 
                  src="/zenith_project.png" 
                  alt="Zenith Jujitsu Brand Identity - Logo variations and design system"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  Zenith Jujitsu Brand Identity
                </h3>
                <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-widest">
                  Branding • Logo Design
                </p>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div className="group cursor-pointer md:mt-16 lg:mt-24" variants={fadeInUp}>
              <div className="relative aspect-[16/10] bg-gray-50 rounded-3xl overflow-hidden mb-6 sm:mb-8 ring-1 ring-gray-200/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/10">
                <img 
                  src="/cwl_project.png" 
                  alt="Create Without Limits - Southbank Centre vibrant design showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  Create Without Limits
                </h3>
                <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-widest">
                  Graphic Design • Campaign
                </p>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div className="group cursor-pointer" variants={fadeInUp}>
              <div className="relative aspect-[16/10] bg-yellow-50 rounded-3xl overflow-hidden mb-6 sm:mb-8 ring-1 ring-gray-200/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-yellow-500/10">
                <img 
                  src="/cf_project.png" 
                  alt="Cystic Fibrosis Trust - Cycle4CF charity campaign design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  Cystic Fibrosis Trust
                </h3>
                <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-widest">
                  Social Media • Campaign Design
                </p>
              </div>
            </motion.div>

            {/* Project 4 */}
            <motion.div className="group cursor-pointer md:mt-16 lg:mt-24" variants={fadeInUp}>
              <div className="relative aspect-[16/10] bg-gray-50 rounded-3xl overflow-hidden mb-6 sm:mb-8 ring-1 ring-gray-200/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-green-500/10">
                <img 
                  src="/websites_project.png" 
                  alt="Web Development - StudyAI and Mend SaaS platforms showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  SaaS Platform Development
                </h3>
                <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-widest">
                  Web Development • UI/UX
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24"
            variants={staggerContainer}
          >
            {/* Left Column - Header */}
            <motion.div className="lg:col-span-5 flex flex-col justify-start" variants={fadeInUp}>
              <div className="mb-6">
                <span className="font-[--font-playfair] italic text-black/50 text-lg sm:text-xl">
                  Thoughtful Design. Intentional Answers.
                </span>
              </div>
              <h2 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 sm:mb-10"
                style={{ fontFamily: 'var(--font-coolvetica), sans-serif' }}
              >
                Frequently<br/>Asked Questions
              </h2>
              <p className="text-lg sm:text-xl text-black/60 leading-relaxed max-w-md font-light">
                We partner with modern brands to create thoughtful identities and digital experiences that feel aligned, intentional, and built to last.
              </p>
              
              {/* Contact CTA */}
              <a href="#contact-form">
                <div className="mt-12 sm:mt-16 flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-500">
                    <span className="material-symbols-outlined text-black group-hover:text-white transition-colors">mail</span>
                  </div>
                  <span className="font-medium text-sm sm:text-base">
                    Have a specific question? <span className="text-black underline underline-offset-4">Get in touch</span>
                  </span>
                </div>
              </a>
            </motion.div>

            {/* Right Column - FAQ Accordion */}
            <motion.div className="lg:col-span-7 flex flex-col" variants={fadeInUp}>
              <div className="divide-y divide-black/10">
                {/* FAQ Item 1 */}
                <details className="group py-6 sm:py-8" open>
                  <summary className="flex cursor-pointer items-center justify-between list-none">
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight pr-6 sm:pr-8">
                      How long does a typical branding project take?
                    </h3>
                    <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <div className="absolute w-full h-[1px] bg-black"></div>
                      <div className="absolute h-full w-[1px] bg-black transition-transform duration-300 group-open:rotate-90"></div>
                    </div>
                  </summary>
                  <div className="mt-4 sm:mt-6 pr-8 sm:pr-12">
                    <p className="text-base sm:text-lg text-black/60 leading-relaxed font-light">
                      A typical branding project usually takes between 4 to 8 weeks. This timeline ensures we have enough space for deep research, strategic positioning, and meticulous design execution that resonates with your audience.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 2 */}
                <details className="group py-6 sm:py-8">
                  <summary className="flex cursor-pointer items-center justify-between list-none">
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight pr-6 sm:pr-8">
                      Do you offer post-launch support and maintenance?
                    </h3>
                    <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <div className="absolute w-full h-[1px] bg-black"></div>
                      <div className="absolute h-full w-[1px] bg-black transition-transform duration-300 group-open:rotate-90"></div>
                    </div>
                  </summary>
                  <div className="mt-4 sm:mt-6 pr-8 sm:pr-12">
                    <p className="text-base sm:text-lg text-black/60 leading-relaxed font-light">
                      Absolutely. We view our clients as long-term partners. After launch, we provide ongoing support to ensure your brand and digital platform continue to perform at the highest level as your business scales.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group py-6 sm:py-8">
                  <summary className="flex cursor-pointer items-center justify-between list-none">
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight pr-6 sm:pr-8">
                      What is included in the web development package?
                    </h3>
                    <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <div className="absolute w-full h-[1px] bg-black"></div>
                      <div className="absolute h-full w-[1px] bg-black transition-transform duration-300 group-open:rotate-90"></div>
                    </div>
                  </summary>
                  <div className="mt-4 sm:mt-6 pr-8 sm:pr-12">
                    <p className="text-base sm:text-lg text-black/60 leading-relaxed font-light">
                      Our web packages are comprehensive: from initial UI/UX architecture to custom frontend development, CMS integration, and SEO optimization. We build high-performance sites that are as functional as they are beautiful.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group py-6 sm:py-8">
                  <summary className="flex cursor-pointer items-center justify-between list-none">
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight pr-6 sm:pr-8">
                      How do you handle revisions and feedback?
                    </h3>
                    <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <div className="absolute w-full h-[1px] bg-black"></div>
                      <div className="absolute h-full w-[1px] bg-black transition-transform duration-300 group-open:rotate-90"></div>
                    </div>
                  </summary>
                  <div className="mt-4 sm:mt-6 pr-8 sm:pr-12">
                    <p className="text-base sm:text-lg text-black/60 leading-relaxed font-light">
                      Collaboration is key to our process. We use iterative feedback loops where your input is integrated at critical milestones. This ensures the final product is perfectly aligned with your vision and business objectives.
                    </p>
                  </div>
                </details>

                {/* Decorative Border */}
                <div className="pt-2 border-t border-black/30 w-12"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Contact Form Section */}
      <AnimatedSection className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white" id="contact-form">
        {/* Background Gradient Blurs */}
        <div 
          className="absolute top-0 left-0 w-[500px] h-[500px] -z-10 blur-3xl opacity-40 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255, 182, 193, 0.4) 0%, rgba(255, 255, 255, 0) 70%)' }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] -z-10 blur-3xl opacity-40 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255, 222, 173, 0.4) 0%, rgba(255, 255, 255, 0) 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-32 items-center"
            variants={staggerContainer}
          >
            {/* Left Column - Content */}
            <motion.div className="flex flex-col justify-center space-y-6 sm:space-y-8" variants={fadeInUp}>
              <div>
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-gray-400 mb-4 block">
                  Get in Touch
                </span>
                <h2 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1] mb-4"
                  style={{ fontFamily: 'var(--font-coolvetica), sans-serif' }}
                >
                  Let's Build<br />
                  <span className="font-[--font-playfair] italic font-normal text-gray-400">
                    Something Great
                  </span>
                </h2>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-md leading-relaxed">
                Ready to elevate your digital presence? Tell us about your vision and let's create something extraordinary together.
              </p>

              <div className="flex items-center gap-4 pt-2 sm:pt-4">
                <div className="h-[2px] w-12 bg-gradient-to-r from-orange-200 to-transparent"></div>
                <span className="text-xs sm:text-sm text-gray-400">
                  Thoughtful Design. Intentional Results.
                </span>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div 
              className="bg-white/40 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl border border-gray-100 shadow-xl"
              variants={fadeInUp}
            >
              <form 
                action="https://api.web3forms.com/submit" 
                method="POST"
                className="space-y-8 sm:space-y-10"
              >
                {/* Hidden fields for Web3Forms */}
                <input type="hidden" name="access_key" value="39a36fde-f8b2-4fee-ad2f-65f49584edc5" />
                <input type="hidden" name="subject" value="New Contact Form Submission from Vero Website" />
                <input type="hidden" name="from_name" value="Vero Website" />

                {/* Name Field */}
                <div className="group relative">
                  <label 
                    className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 transition-all group-focus-within:text-orange-400" 
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input 
                    className="w-full bg-transparent border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-orange-400 px-0 py-3 text-base sm:text-lg placeholder-gray-300 transition-all" 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    type="text"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="group relative">
                  <label 
                    className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 transition-all group-focus-within:text-orange-400" 
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input 
                    className="w-full bg-transparent border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-orange-400 px-0 py-3 text-base sm:text-lg placeholder-gray-300 transition-all" 
                    id="email" 
                    name="email" 
                    placeholder="hello@company.com" 
                    type="email"
                    required
                  />
                </div>

                {/* Project Brief Field */}
                <div className="group relative">
                  <label 
                    className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 transition-all group-focus-within:text-orange-400" 
                    htmlFor="brief"
                  >
                    Project Brief
                  </label>
                  <textarea 
                    className="w-full bg-transparent border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-orange-400 px-0 py-3 text-base sm:text-lg placeholder-gray-300 transition-all resize-none" 
                    id="brief" 
                    name="message" 
                    placeholder="Tell us about your goals..." 
                    rows={4}
                    required
                  ></textarea>
                </div>

                {/* Honeypot for spam protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

                {/* Submit Button */}
                <div className="pt-4 sm:pt-6">
                  <button 
                    className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 font-bold text-white text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 bg-black rounded-full hover:bg-gray-800 hover:scale-105 active:scale-95" 
                    type="submit"
                  >
                    <span>Send Inquiry</span>
                    <span className="material-symbols-outlined ml-2 text-base sm:text-lg transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}