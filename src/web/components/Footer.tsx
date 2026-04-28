import { Link } from "wouter";
import { Phone, MapPin, Clock, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={`${import.meta.env.BASE_URL}logo.png`}  alt="AM Nursing Home" className="w-12 h-12 object-contain bg-white rounded-xl p-1.5"/>
              <div>
                <p className="font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px" }}>
                  A.M Nursing Home
                </p>
                <p className="text-[#93C5FD] text-xs">& Maternity Center</p>
                <p className="text-[#93C5FD]/60 text-[10px]">ಎ.ಎಂ. ನರ್ಸಿಂಗ್ ಹೋಮ್</p>
              </div>
            </div>
            <p className="text-[#93C5FD] text-sm leading-relaxed mb-1">
              Providing compassionate, expert healthcare to families in Bengaluru since our founding. Your health is our highest priority.
            </p>
            <p className="text-[#93C5FD]/50 text-xs leading-relaxed mb-4">ಬೆಂಗಳೂರಿನ ಕುಟುಂಬಗಳಿಗೆ ಸಮರ್ಪಿತ ಆರೋಗ್ಯ ಸೇವೆ.</p>
            <div className="flex items-center gap-2 text-[#E8567A] font-semibold text-sm">
              <Heart size={16} fill="#E8567A" />
              <span>Caring for Every Life &nbsp;<span className="text-[#E8567A]/50 font-normal text-xs">| ಪ್ರತಿ ಜೀವಕ್ಕೂ ಆರೈಕೆ</span></span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Our Doctors", href: "/doctors" },
                { label: "Patient Testimonials", href: "/testimonials" },

                { label: "Health Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#93C5FD] text-sm hover:text-white transition-colors">
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Services</h3>
            <ul className="space-y-2">
              {[
                "Obstetrics & Delivery",
                "Gynaecology",
                "Neonatal Care",
                "OPD Consultations",
                "Emergency & ICU",
                "Labour Room",
                "IVF & Fertility",
                "General Surgery",
                "Cardiology",
                "Oncology",
              ].map((s) => (
                <li key={s} className="text-[#93C5FD] text-sm">• {s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#1D4ED8] flex-shrink-0 mt-0.5" />
                <span className="text-[#93C5FD] text-sm">
                  23/1, Dispensary Rd, Kalasipalya,<br />
                  Bengaluru, Karnataka 560002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#1D4ED8] flex-shrink-0" />
                <a href="tel:+919036868303" className="text-[#93C5FD] text-sm hover:text-white transition-colors">
                  +91 90368 68303
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-[#1D4ED8] flex-shrink-0" />
                <div className="text-[#93C5FD] text-sm">
                  <p>OPD: 8:00 AM to 10:00 PM</p>
                  <p>Emergency: 24 × 7</p>
                </div>
              </li>
            </ul>

            <a
              href="tel:+919036868303"
              className="inline-block mt-6 bg-[#E8567A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#d4415f] transition-colors"
            >
              📞 +91 90368 68303
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[#93C5FD]">
          <p>© {new Date().getFullYear()} A.M Nursing Home & Maternity Center. All rights reserved.</p>
          <p>Bengaluru, Karnataka</p>
        </div>
      </div>
    </footer>
  );
}
