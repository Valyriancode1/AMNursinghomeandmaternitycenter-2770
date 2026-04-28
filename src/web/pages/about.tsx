import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, Shield, Award, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

const values = [
  { icon: Heart, title: "Compassion", desc: "We treat every patient with genuine care, empathy, and respect because you're more than a case number." },
  { icon: Shield, title: "Trust & Safety", desc: "Clinical protocols, qualified specialists, and safe facilities ensure you receive care you can trust." },
  { icon: Award, title: "Excellence", desc: "Our specialists are committed to the highest standards of medical practice and patient outcomes." },
  { icon: Users, title: "Community", desc: "Rooted in Bengaluru, we serve our community with affordable, accessible quality healthcare." },
];

const milestones = [
  { year: "Founding", event: "A.M Nursing Home & Maternity Center established in Bengaluru" },
  { year: "Growth", event: "Expanded to include multi-specialty departments Surgery, Cardiology, Oncology, IVF and more" },
  { year: "Recognition", event: "Achieved 4.9★ rating with 150+ patient reviews on Justdial a testament to our care" },
  { year: "Today", event: "30+ specialist doctors, 15 departments, serving thousands of families across Bengaluru" },
];

const facilities = [
  "Modern Labour Room & Delivery Suite",
  "Basic ICU / Critical Care Unit",
  "Fully Equipped Operation Theatre",
  "Neonatal Care Unit",
  "24/7 Emergency Department",
  "Inpatient Ward with Comfortable Beds",
  "Diagnostic & Pathology Lab",
  "OPD Consultation Rooms",
  "Pharmacy On-Site",
  "Dedicated Women's Wellness Clinic",
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              A Legacy of Caring,<br />Built on Trust
            </h1>
            <p className="text-white/40 text-sm mb-4">ವಿಶ್ವಾಸದ ಮೇಲೆ ನಿರ್ಮಿತ ಆರೈಕೆಯ ಪರಂಪರೆ</p>
            <div className="w-16 h-1 bg-[#E8567A] mx-auto rounded-full mb-5"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Serving families in Bengaluru, A.M Nursing Home & Maternity Center<br />
              <span className="text-white/40 text-sm">ಎ.ಎಂ. ನರ್ಸಿಂಗ್ ಹೋಮ್ ಮತ್ತು ಮಾತೃತ್ವ ಕೇಂದ್ರ</span><br />
              has been a pillar of quality healthcare dedicated, compassionate, and always available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mt-2 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Where Every Patient Feels at Home
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                A.M Nursing Home & Maternity Center was founded with a simple but powerful mission: to provide expert, compassionate healthcare that is accessible to every family. Located in the heart of Bengaluru, we have grown from a nursing home focused on maternity care into a comprehensive multi-specialty hospital.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Our team of over 30 specialist doctors across 15 departments from OBG and Paediatrics to Cardiology, Oncology, IVF, and Orthopaedics ensures that patients receive world-class care without having to travel far.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                With a 4.9-star rating from 152+ reviews, we are proud that our patients trust us at life's most important moments the birth of a child, a critical emergency, or a health concern that needs expert attention.
              </p>
              <Link
                href="/doctors"
                className="inline-flex items-center gap-2 bg-[#1D4ED8] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#1E3A8A] transition-colors"
              >
                Meet Our Doctors <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "10,000+", label: "Patients Served", color: "#DBEAFE", text: "#1D4ED8" },
                { value: "4.9★", label: "Patient Rating", color: "#FDE8EE", text: "#E8567A" },
                { value: "30+", label: "Specialist Doctors", color: "#EEF2FF", text: "#6366F1" },
                { value: "15", label: "Departments", color: "#F0FDF4", text: "#22C55E" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="rounded-2xl p-6 text-center"
                  style={{ backgroundColor: stat.color }}
                >
                  <div className="text-3xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: stat.text }}>{stat.value}</div>
                  <div className="text-[#6B7280] text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              What We Stand For
            </h2>
            <div className="w-16 h-1 bg-[#1D4ED8] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card-hover bg-white rounded-2xl p-7 text-center shadow-md border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#DBEAFE] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <v.icon size={28} className="text-[#1D4ED8]" />
                </div>
                <h3 className="font-bold text-[#1A2332] text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{v.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Milestones & Growth
            </h2>
            <div className="w-16 h-1 bg-[#1D4ED8] mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-28 pt-1">
                  <span className="bg-[#1D4ED8] text-white text-xs font-bold px-3 py-1.5 rounded-full">{m.year}</span>
                </div>
                <div className="flex-1 bg-[#EFF6FF] rounded-2xl p-5 border border-gray-100">
                  <p className="text-[#1A2332] font-medium leading-relaxed">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider">Infrastructure</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Facilities
            </h2>
            <div className="w-16 h-1 bg-[#E8567A] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {facilities.map((f, i) => (
              <motion.div
                key={f}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <CheckCircle size={18} className="text-[#E8567A] flex-shrink-0" />
                <span className="text-white text-sm font-medium">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold text-[#1A2332] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Experience Our Care?
          </h2>
          <p className="text-[#6B7280] mb-8">Book an appointment with any of our specialists today.</p>
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 bg-[#E8567A] text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-[#d4415f] transition-colors"
          >
            Book Appointment <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
