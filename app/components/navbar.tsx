// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left - Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="/Vero_logo_black.png" 
              alt="Vero Logo" 
              className="h-12 sm:h-14 w-auto"
            />
          </a>

          {/* Center - Nav links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-gray-600 hover:text-black transition">Home</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition">Services</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition">Features</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition">Blog</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition">Pricing</a>
          </div>

          {/* Right - CTA button */}
          <button className="hidden md:block px-6 py-2 text-xs font-medium text-black bg-transparent border border-gray-300 rounded-full hover:bg-gray-50 transition">
            TRY IT FOR FREE →
          </button>

          {/* Right - Menu dots (mobile) */}
          <div className="md:hidden flex flex-col gap-1">
            <div className="w-1 h-1 rounded-full bg-gray-400" />
            <div className="w-1 h-1 rounded-full bg-gray-400" />
            <div className="w-1 h-1 rounded-full bg-gray-400" />
          </div>
        </div>
      </div>
    </nav>
  );
}