import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Baby, Heart, Stethoscope, Activity, Clock, Shield, Star,
  ChevronRight, Phone, MapPin, Users, Award, ArrowRight,
  CheckCircle, Plus, Minus, Search, Syringe, Brain, Bone,
  Eye, FlaskConical, Microscope
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  })
};

const specialties = [
  { icon: Baby, label: "Obstetrics & Delivery", labelKn: "ಪ್ರಸೂತಿ ಮತ್ತು ಹೆರಿಗೆ", color: "#E8567A", bg: "#FDE8EE" },
  { icon: Heart, label: "Gynaecology", labelKn: "ಸ್ತ್ರೀರೋಗ ಚಿಕಿತ್ಸೆ", color: "#1D4ED8", bg: "#DBEAFE" },
  { icon: Stethoscope, label: "General Medicine", labelKn: "ಸಾಮಾನ್ಯ ವೈದ್ಯಕೀಯ", color: "#6366F1", bg: "#EEF2FF" },
  { icon: Baby, label: "Paediatrics", labelKn: "ಮಕ್ಕಳ ತಜ್ಞ", color: "#F59E0B", bg: "#FEF3C7" },
  { icon: Activity, label: "Emergency & ICU", labelKn: "ತುರ್ತು ಮತ್ತು ಐಸಿಯು", color: "#EF4444", bg: "#FEE2E2" },
  { icon: Heart, label: "Cardiology", labelKn: "ಹೃದಯ ಚಿಕಿತ್ಸೆ", color: "#EC4899", bg: "#FCE7F3" },
  { icon: Bone, label: "Orthopaedics", labelKn: "ಮೂಳೆ ಚಿಕಿತ್ಸೆ", color: "#10B981", bg: "#D1FAE5" },
  { icon: Brain, label: "Neurology", labelKn: "ನರ ವಿಜ್ಞಾನ", color: "#8B5CF6", bg: "#EDE9FE" },
  { icon: Syringe, label: "IVF & Fertility", labelKn: "ಐವಿಎಫ್ ಮತ್ತು ಫಲವತ್ತತೆ", color: "#0EA5E9", bg: "#E0F2FE" },
  { icon: Microscope, label: "Oncology", labelKn: "ಕ್ಯಾನ್ಸರ್ ಚಿಕಿತ್ಸೆ", color: "#7C3AED", bg: "#EDE9FE" },
  { icon: Eye, label: "ENT", labelKn: "ಕಿವಿ-ಮೂಗು-ಗಂಟಲು", color: "#0891B2", bg: "#CFFAFE" },
  { icon: FlaskConical, label: "Nephrology", labelKn: "ಮೂತ್ರಪಿಂಡ ಚಿಕಿತ್ಸೆ", color: "#059669", bg: "#D1FAE5" },
];

const services = [
  { img: `${import.meta.env.BASE_URL}svc-obstetrics.png`, title: "Obstetrics & Delivery", titleKn: "ಪ್ರಸೂತಿ ಮತ್ತು ಹೆರಿಗೆ", desc: "Expert pregnancy care, safe labour room & delivery by experienced obstetricians.", accent: "#E8567A" },
  { img: `${import.meta.env.BASE_URL}svc-gynecology.png`, title: "Gynaecology", titleKn: "ಸ್ತ್ರೀರೋಗ ಚಿಕಿತ್ಸೆ", desc: "Comprehensive women's health hormonal, menstrual, fertility and preventive care.", accent: "#1D4ED8" },
  { img: `${import.meta.env.BASE_URL}svc-neonatal.png`, title: "Neonatal Care", titleKn: "ನವಜಾತ ಶಿಶು ಆರೈಕೆ", desc: "Dedicated newborn care with skilled paediatricians for the best start in life.", accent: "#6366F1" },
  { img: `${import.meta.env.BASE_URL}svc-opd.png`, title: "OPD Consultations", titleKn: "ಹೊರರೋಗಿ ಸಮಾಲೋಚನೆ", desc: "Multi-specialty outpatient consultations with minimal wait times.", accent: "#F59E0B" },
  { img: `${import.meta.env.BASE_URL}svc-emergency.png`, title: "Emergency & ICU", titleKn: "ತುರ್ತು ಮತ್ತು ಐಸಿಯು", desc: "Round-the-clock emergency care with basic ICU and rapid-response teams.", accent: "#EF4444" },
  { img: `${import.meta.env.BASE_URL}svc-wellness.png`, title: "Women's Wellness", titleKn: "ಮಹಿಳಾ ಆರೋಗ್ಯ", desc: "Preventive screenings and holistic care tailored for women.", accent: "#22C55E" },
];

const stats = [
  { value: "10,000+", label: "Patients Served" },
  { value: "4.9★", label: "Patient Rating" },
  { value: "30+", label: "Specialist Doctors" },
  { value: "24/7", label: "Emergency Care" },
  { value: "15+", label: "Years of Care" },
];

const doctors = [
  { name: "Dr. Ayesha Gulzar", nameKn: "ಡಾ. ಆಯೆಶಾ ಗುಲ್ಜಾರ್", specialty: "Obstetrics & Gynaecology", avatar: "AG", color: "#E8567A", bg: "#FDE8EE" },
  { name: "Dr. Nagendra Prasad", nameKn: "ಡಾ. ನಾಗೇಂದ್ರ ಪ್ರಸಾದ್", specialty: "Obstetrics & Gynaecology", avatar: "NP", color: "#E8567A", bg: "#FDE8EE" },
  { name: "Dr. Mohammed Samdani Shaik", nameKn: "ಡಾ. ಮೊಹಮ್ಮದ್ ಸಮ್ದಾನಿ ಷೇಕ್", specialty: "General Medicine", avatar: "MS", color: "#1D4ED8", bg: "#DBEAFE" },
  { name: "Dr. Vinod Kumar", nameKn: "ಡಾ. ವಿನೋದ್ ಕುಮಾರ್", specialty: "General Medicine", avatar: "VK", color: "#1D4ED8", bg: "#DBEAFE" },
  { name: "Dr. Rohit", nameKn: "ಡಾ. ರೋಹಿತ್", specialty: "Paediatrics", avatar: "RO", color: "#6366F1", bg: "#EEF2FF" },
  { name: "Dr. Somashekar", nameKn: "ಡಾ. ಸೋಮಶೇಖರ್", specialty: "Cardiology", avatar: "SS", color: "#EF4444", bg: "#FEE2E2" },
];

const testimonials = [
  { name: "Fatima Begum", location: "Bengaluru", text: "The maternity care was exceptional. Doctors and nurses were very attentive throughout my delivery. Highly recommended for all expecting mothers!", rating: 5 },
  { name: "Priya Nair", location: "Bengaluru", text: "Excellent service. Dr. Ayesha Gulzar is an amazing, compassionate doctor. Facilities are clean and staff is very cooperative throughout my treatment.", rating: 5 },
  { name: "Suresh Kumar", location: "Bengaluru", text: "My wife delivered our baby here. The emergency support and 24/7 availability gave us immense peace of mind. Truly wonderful care!", rating: 5 },
];

const faqs = [
  { q: "What are the OPD timings at A.M Nursing Home?", a: "Our OPD is open from 8:00 AM to 10:00 PM, seven days a week. Emergency services are available round the clock, 24/7." },
  { q: "Do I need a referral to see a specialist?", a: "No referral is needed. You can directly walk in or call us to schedule a consultation with any of our specialists." },
  { q: "Does A.M Nursing Home handle high-risk pregnancies?", a: "Yes. Our experienced OBG team, led by senior obstetricians, is fully equipped to manage high-risk pregnancies with continuous monitoring and ICU support if needed." },
  { q: "Is emergency care available at night?", a: "Absolutely. Our emergency department operates 24 hours a day, 7 days a week with a dedicated on-call team always ready to respond." },
  { q: "What specialties are available at the hospital?", a: "We have 16+ specialties including Obstetrics, Gynaecology, Paediatrics, General Medicine, Cardiology, Orthopaedics, ENT, Nephrology, Urology, IVF & Fertility, Oncology, and more." },
  { q: "How do I reach A.M Nursing Home?", a: "We are located at 23/1, Dispensary Rd, Bengaluru, Karnataka 560002. You can call us at +91 90368 68303 for directions or to schedule a visit." },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">

      {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
      <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={`${import.meta.env.BASE_URL}hero-doctor.png`} alt="AM Nursing Home" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,43,69,0.55) 0%, rgba(13,43,69,0.3) 40%, rgba(13,43,69,0.75) 100%)" }} />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0 pt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mb-10">
            <span className="inline-block bg-[#E8567A] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Bengaluru's Trusted Maternity & Medical Center
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Caring for You &<br />Your Family's Health
            </h1>
            <p className="text-white/50 text-base mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              ನಿಮ್ಮ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬದ ಆರೋಗ್ಯ ರಕ್ಷಣೆ
            </p>
            <p className="text-white/85 text-lg md:text-xl max-w-xl">
              Expert maternity care, 16+ specialties, and 24/7 emergency services all under one roof in the heart of Bengaluru.
            </p>
          </motion.div>

          {/* Search bar Apollo style */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-0">
            <div className="flex items-center bg-white rounded-t-2xl shadow-2xl overflow-hidden max-w-3xl">
              <Search size={20} className="ml-5 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search for doctors, specialities, treatments..."
                className="flex-1 px-4 py-4 text-[#1A2332] placeholder-gray-400 outline-none text-sm"
              />
              <button className="bg-[#1D4ED8] text-white px-6 py-4 font-bold text-sm hover:bg-[#1E3A8A] transition-colors flex-shrink-0">
                Search
              </button>
            </div>
          </motion.div>
        </div>

        {/* Quick action tiles Apollo style */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} className="relative z-10 bg-white shadow-xl">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
              {[
                { icon: Phone, label: "Call Us", sub: "+91 90368 68303", href: "tel:+919036868303", color: "#E8567A" },
                { icon: Stethoscope, label: "Find a Doctor", sub: "30+ Specialists", href: "/doctors", color: "#1D4ED8" },
                { icon: Activity, label: "Emergency", sub: "24/7 Available", href: "tel:+919036868303", color: "#EF4444" },
                { icon: MapPin, label: "Find Us", sub: "Dispensary Rd, Bengaluru", href: "/contact", color: "#6366F1" },
              ].map(({ icon: Icon, label, sub, href, color }) => (
                <a key={label} href={href} className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" style={{ backgroundColor: `${color}18` }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A2332] text-sm leading-tight">{label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{sub}</p>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════ STATS BAR ═══════════════════════════════════════ */}
      <section className="bg-[#1D4ED8] py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 md:divide-x divide-white/20">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center py-2"
              >
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="text-white/70 text-xs mt-0.5 uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ SPECIALTIES ═══════════════════════════════════════ */}
      <section className="py-16 bg-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
            <p className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider mb-2">What We Offer</p>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332]">Our Specialities</h2>
                <p className="text-gray-400 text-sm mt-1">ನಮ್ಮ ವಿಶೇಷ ಚಿಕಿತ್ಸಾ ವಿಭಾಗಗಳು</p>
              </div>
              <Link href="/services" className="flex items-center gap-1.5 text-[#1D4ED8] font-semibold text-sm hover:underline">
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
            {specialties.map((sp, i) => {
              const Icon = sp.icon;
              return (
                <motion.div
                  key={sp.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group flex flex-col items-center gap-2.5 p-4 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-lg cursor-pointer transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: sp.bg }}>
                    <Icon size={22} style={{ color: sp.color }} />
                  </div>
                  <p className="text-[#1A2332] text-xs font-semibold text-center leading-tight">{sp.label}</p>
                  <p className="text-gray-400 text-[9px] text-center leading-tight mt-0.5">{sp.labelKn}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ WHY US ═══════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={`${import.meta.env.BASE_URL}hero-nurse.png`} alt="Our medical team" className="w-full h-[480px] object-cover" />
              </div>

            </motion.div>

            {/* Text side */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-1 leading-tight">
                Bengaluru's Trusted Name in<br />Women & Family Healthcare
              </h2>
              <p className="text-gray-400 text-sm mb-5">ಬೆಂಗಳೂರಿನ ವಿಶ್ವಾಸಾರ್ಹ ಮಹಿಳಾ ಮತ್ತು ಕುಟುಂಬ ಆರೋಗ್ಯ ಕೇಂದ್ರ</p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                For over 15 years, A.M Nursing Home has been the go-to healthcare destination for families in Bengaluru delivering compassionate, expert care for mothers, newborns, and all age groups.
              </p>

              <div className="space-y-4">
                {[
                  { icon: CheckCircle, title: "Expert OBG Team", desc: "Senior obstetricians managing normal and high-risk pregnancies with advanced monitoring." },
                  { icon: Clock, title: "24/7 Emergency & ICU", desc: "Round-the-clock emergency response with ICU and rapid-intervention capability." },
                  { icon: Users, title: "16+ Medical Specialties", desc: "Comprehensive care under one roof from general medicine to cardiology and oncology." },
                  { icon: Heart, title: "Patient-First Approach", desc: "4.9★ rated by thousands of patients who trust us with their most critical healthcare needs." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#DBEAFE] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={18} className="text-[#1D4ED8]" />
                      </div>
                      <div>
                        <p className="font-bold text-[#1A2332] text-sm">{item.title}</p>
                        <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <a href="tel:+919036868303" className="inline-flex items-center gap-2 mt-8 bg-[#E8567A] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#d4415f] transition-colors">
                <Phone size={18} /> Call Us Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ SERVICES ═══════════════════════════════════════ */}
      <section className="py-16 bg-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-1">Comprehensive Healthcare Services</h2>
            <p className="text-gray-400 text-sm mb-2">ಸಮಗ್ರ ಆರೋಗ್ಯ ಸೇವೆಗಳು</p>
            <p className="text-gray-500 max-w-xl mx-auto">From maternity to emergency expert care for every stage of life</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="w-1 h-5 rounded-full mb-3 inline-block" style={{ backgroundColor: s.accent }} />
                  <h3 className="font-bold text-[#1A2332] text-lg mb-0.5">{s.title}</h3>
                  <p className="text-gray-400 text-xs mb-1.5">{s.titleKn}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-1 mt-4 text-sm font-semibold hover:gap-2 transition-all" style={{ color: s.accent }}>
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 border-2 border-[#1D4ED8] text-[#1D4ED8] px-7 py-3 rounded-full font-bold hover:bg-[#1D4ED8] hover:text-white transition-all">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ DOCTORS ═══════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
            <p className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider mb-2">Our Team</p>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332]">Meet Our Expert Doctors</h2>
                <p className="text-gray-400 text-sm mt-1">ನಮ್ಮ ತಜ್ಞ ವೈದ್ಯರನ್ನು ಭೇಟಿಯಾಗಿ</p>
              </div>
              <Link href="/doctors" className="flex items-center gap-1.5 text-[#1D4ED8] font-semibold text-sm hover:underline">
                View All 30+ Doctors <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group text-center p-5 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold transition-transform group-hover:scale-105" style={{ backgroundColor: doc.bg, color: doc.color }}>
                  {doc.avatar}
                </div>
                <p className="font-bold text-[#1A2332] text-sm leading-tight">{doc.name}</p>
                <p className="text-gray-400 text-[10px] leading-tight mt-0.5">{doc.nameKn}</p>
                <p className="text-xs mt-1" style={{ color: doc.color }}>{doc.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ PATIENTS SPEAK ═══════════════════════════════════════ */}
      <section className="py-16 bg-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-1">Patients Speak</h2>
            <p className="text-gray-400 text-sm">ರೋಗಿಗಳ ಅನುಭವಗಳು</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#DBEAFE] flex items-center justify-center text-[#1D4ED8] font-bold text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-[#1A2332] text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ FAQ ═══════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <p className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-1">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-sm">ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#1D4ED8] flex items-center justify-center text-[#1D4ED8]">
                    {openFaq === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ CTA BANNER ═══════════════════════════════════════ */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider mb-3">We're Here for You</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-1">Need Medical Assistance?</h2>
            <p className="text-white/40 text-base mb-4">ವೈದ್ಯಕೀಯ ಸಹಾಯ ಬೇಕೇ?</p>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">We're available 24/7 call us anytime for OPD consultations or emergency care.</p>
            <a
              href="tel:+919036868303"
              className="inline-flex items-center gap-3 bg-[#E8567A] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#d4415f] transition-colors"
            >
              <Phone size={22} /> +91 90368 68303
            </a>
            <div className="mt-6 flex items-center justify-center gap-6 text-white/50 text-sm">
              <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#1D4ED8]" /> OPD: 8AM to 10PM</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#E8567A]" /> Emergency: 24/7</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} /> Dispensary Rd, Bengaluru</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
// update
