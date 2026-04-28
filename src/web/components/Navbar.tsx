import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-[#1D4ED8] text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/80">
              <MapPin size={12} /> 23/1, Dispensary Rd, Bengaluru 560002
            </span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Clock size={12} /> OPD: 8:00 AM to 10:00 PM &nbsp;<span className="text-white/50">| ಬೆಳಿಗ್ಗೆ 8 ರಿಂದ ರಾತ್ರಿ 10</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" /> Emergency 24/7
            </span>
            <a href="tel:+919036868303" className="flex items-center gap-1 font-bold hover:text-yellow-300 transition-colors">
              <Phone size={12} /> +91 90368 68303
            </a>
          </div>
        </div>
      </div>

      {/* Emergency mobile bar */}
      <div className="bg-[#E8567A] text-white text-xs py-2 px-4 flex md:hidden items-center justify-between">
        <span className="flex items-center gap-1.5 font-semibold">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> 24/7 Emergency
        </span>
        <a href="tel:+919036868303" className="font-bold flex items-center gap-1">
          <Phone size={12} /> +91 90368 68303
        </a>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-white border-b border-gray-100"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <img
                src="/logo.png"
                alt="A.M Nursing Home Logo"
                className="w-11 h-11 object-contain"
              />
              <div>
                <p className="font-bold text-[#1D4ED8] leading-tight text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                  A.M Nursing Home
                </p>
                <p className="text-gray-400 text-xs leading-tight">& Maternity Center</p>
                <p className="text-gray-300 text-[10px] leading-tight">ಎ.ಎಂ. ನರ್ಸಿಂಗ್ ಹೋಮ್</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    location === link.href
                      ? "text-[#1D4ED8]"
                      : "text-gray-600 hover:text-[#1D4ED8]"
                  }`}
                >
                  {link.label}
                  {location === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#1D4ED8] rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="tel:+919036868303"
                className="bg-[#E8567A] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#d4415f] transition-colors flex items-center gap-1.5"
              >
                <Phone size={15} /> Call Us
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-3 space-y-0.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                      location === link.href
                        ? "bg-[#DBEAFE] text-[#1D4ED8]"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:+919036868303"
                  className="flex items-center justify-center gap-2 mt-3 bg-[#E8567A] text-white px-5 py-3 rounded-lg text-sm font-bold hover:bg-[#d4415f] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <Phone size={15} /> Call Us: +91 90368 68303
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
