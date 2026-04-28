import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

export default function AppointmentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get in Touch
            </h1>
            <p className="text-white/50 text-sm mb-4">ಸಂಪರ್ಕಿಸಿ</p>
            <div className="w-16 h-1 bg-[#E8567A] mx-auto rounded-full mb-5"></div>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Call us directly to schedule a consultation or reach us for any emergency we're available 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-[#EFF6FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#DBEAFE] rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-[#1D4ED8]" />
              </div>
              <div>
                <p className="font-bold text-[#1A2332] text-lg mb-1">Phone</p>
                <a href="tel:+919036868303" className="text-[#1D4ED8] font-bold text-xl hover:underline">+91 90368 68303</a>
                <p className="text-[#6B7280] text-sm mt-1">Available 24/7 for emergencies and OPD booking</p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#FDE8EE] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-[#E8567A]" />
              </div>
              <div>
                <p className="font-bold text-[#1A2332] text-lg mb-1">Address</p>
                <p className="text-[#6B7280]">23/1, Dispensary Rd, Bengaluru,<br />Karnataka 560002</p>
                <a
                  href="https://maps.google.com/?q=23/1+Dispensary+Rd+Bengaluru+Karnataka+560002"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#E8567A] text-sm font-semibold mt-2 inline-block hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#DBEAFE] rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-[#1D4ED8]" />
              </div>
              <div>
                <p className="font-bold text-[#1A2332] text-lg mb-2">Working Hours</p>
                <div className="space-y-1 text-sm">
                  <p className="text-[#6B7280]">OPD: <strong className="text-[#1A2332]">8:00 AM to 10:00 PM</strong></p>
                  <p className="text-[#6B7280]">Emergency: <strong className="text-[#E8567A]">24 Hours, 7 Days</strong></p>
                </div>
              </div>
            </motion.div>

            {/* Emergency CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#0F172A] rounded-2xl p-8 text-center"
            >
              <div className="w-14 h-14 bg-[#E8567A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={26} className="text-white" />
              </div>
              <p className="text-white font-bold text-xl mb-2">Medical Emergency?</p>
              <p className="text-white/70 text-sm mb-5">Don't wait call us immediately</p>
              <a
                href="tel:+919036868303"
                className="inline-block bg-[#E8567A] text-white px-10 py-3.5 rounded-full font-bold text-lg hover:bg-[#d4415f] transition-colors"
              >
                Call Now: +91 90368 68303
              </a>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
