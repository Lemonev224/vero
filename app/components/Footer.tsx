'use client';

export default function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden border-t border-gray-100">
      {/* Subtle Background Gradient */}
      <div 
        className="absolute bottom-0 left-[5%] w-[400px] h-[400px] -z-10 blur-3xl opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255, 180, 120, 0.3) 0%, rgba(255, 255, 255, 0) 70%)' }}
      />
      <div 
        className="absolute bottom-0 right-[5%] w-[350px] h-[350px] -z-10 blur-3xl opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255, 182, 193, 0.3) 0%, rgba(255, 255, 255, 0) 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <img 
                src="/Vero_logo_black.png" 
                alt="VERO Agency" 
                className="h-10 sm:h-12 md:h-14 w-auto mb-4 sm:mb-6"
              />
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6 sm:mb-8 max-w-sm">
                Crafting intentional digital experiences that help modern brands grow, adapt, and lead in an ever-changing web landscape.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-400 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-400 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.249 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-400 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8 text-black">
                Services
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-orange-400 transition-colors">
                    Visual Identity
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-orange-400 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-orange-400 transition-colors">
                    App Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-orange-400 transition-colors">
                    Strategy & Growth
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8 text-black">
                Company
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-orange-400 transition-colors">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-orange-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-orange-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-orange-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* New Projects Column */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8 text-black">
                New Projects
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Let's build something remarkable together.
              </p>
              <a 
                href="mailto:hello@veroagency.com" 
                className="text-sm font-medium text-black border-b-2 border-orange-400 hover:text-orange-400 transition-colors inline-block"
              >
                hello@veroagency.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest">
            <p>
              © 2026 VERO SOLUTIONS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-6 sm:gap-8">
              <a href="#" className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}