'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="bg-white text-gray-900 min-h-screen pt-32 pb-24 px-4 sm:px-6" >
      <motion.div 
        className="max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
      >
        <h1 
          className="text-4xl sm:text-5xl font-bold mb-4 text-black"
          style={{ fontFamily: 'var(--font-coolvetica), sans-serif' }}
        >
          Privacy Policy
        </h1>
        
        <p className="font-[--font-playfair] italic text-gray-400 mb-12">
          Last Updated: February 1, 2026
        </p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-black mb-4">1. Information We Collect</h2>
            <p>
              The only personal information we collect is what you voluntarily provide through our contact form (typically your name, email address, and message). This information is used solely to communicate with you regarding your inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">2. Zero-Storage Policy</h2>
            <p>
              VERO Agency does not maintain a database of your personal information. We do not store your contact details or messages on our website servers. Once you submit our form, the data is passed through our processing partner and delivered directly to our professional email inbox.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">3. Third-Party Processors</h2>
            <p>
              We use <strong>Web3Forms</strong> to facilitate our contact form submissions. Your data is encrypted during transmission to them and then forwarded to us. Web3Forms acts only as a processor and does not sell or distribute your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">4. Data Retention</h2>
            <p>
              Since we do not store your data in a database, we only "retain" your information within our email correspondence. You may request the deletion of our email threads at any time by contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy approach, please reach out to us at{' '}
              <a href="mailto:contact@verodigital.uk" className="text-orange-400 underline decoration-2 underline-offset-4">
                contact@verodigital.uk
              </a>.
            </p>
          </section>
        </div>
      </motion.div>
    </main>
  );
}