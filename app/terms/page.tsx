'use client';

import { motion } from 'framer-motion';

export default function TermsOfService() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="bg-white text-gray-900 min-h-screen pt-32 pb-24 px-4 sm:px-6">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
      >
        <h1 
          className="text-4xl sm:text-5xl font-bold mb-4 text-black"
          style={{ fontFamily: 'var(--font-coolvetica), sans-serif' }}
        >
          Terms of Service
        </h1>
        
        <p className="font-[--font-playfair] italic text-gray-400 mb-12">
          Effective Date: February 1, 2026
        </p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-black mb-4">1. Scope of Service</h2>
            <p>
              VERO Agency provides digital design, branding, and web development services[cite: 17, 37]. Any formal engagement or project will be governed by a separate, specific Client Agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">2. Intellectual Property</h2>
            <p>
              All content, code, and design assets showcased on this website are the intellectual property of VERO SOLUTIONS unless otherwise stated[cite: 150]. Unauthorized reproduction or distribution is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">3. No Professional Advice</h2>
            <p>
              The information on this website is for general informational purposes only. While we strive for accuracy, we are not liable for any decisions made based on the content of this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">4. Limitation of Liability</h2>
            <p>
              VERO Agency shall not be liable for any direct or indirect damages resulting from your use of this website or our contact form. We provide the site "as is" without warranties of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">5. Governing Law</h2>
            <p>
              These terms are governed by the laws of the jurisdiction in which VERO Agency operates. Any disputes shall be settled in the appropriate local courts.
            </p>
          </section>
        </div>
      </motion.div>
    </main>
  );
}