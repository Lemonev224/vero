'use client';

export default function ServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
      {/* Section Intro */}
      <div className="grid md:grid-cols-2 gap-10 sm:gap-14 md:gap-16 items-start mb-20 sm:mb-28">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            What We Create
            <span className="block font-[--font-playfair] italic font-normal">
              For Modern Brands
            </span>
          </h2>
        </div>

        <div className="pt-0 md:pt-4">
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-md">
            We help brands clarify their vision, elevate their identity, and build digital experiences that feel as good as they perform.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16">
        <div>
          <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-black">
            Brand Identity & Strategy
          </h3>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            We craft thoughtful brand systems — from logos to tone of voice — that communicate who you are and why you matter.
          </p>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-black">
            Digital Design
          </h3>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Clean, modern interfaces designed to guide users effortlessly and turn attention into meaningful engagement.
          </p>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-black">
            Web Development
          </h3>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            High-performance websites built with modern technologies, optimized for speed, accessibility, and scalability.
          </p>
        </div>
      </div>
    </section>
  );
}
