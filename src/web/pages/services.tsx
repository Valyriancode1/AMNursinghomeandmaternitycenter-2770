import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Baby, Heart, Stethoscope, Activity, Clock, Shield, Syringe,
  UserCheck, Zap, ArrowRight
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" }
  })
};

const services = [
  {
    icon: Baby,
    title: "Obstetrics & Pregnancy Care",
    desc: "Comprehensive care throughout your pregnancy journey from prenatal consultations to safe, expert-assisted delivery. Our experienced obstetricians and skilled nursing staff ensure the safety of both mother and baby.",
    features: ["Prenatal consultations", "High-risk pregnancy management", "Safe delivery & labour room", "Postnatal care", "Caesarean & normal delivery"],
    color: "#FDE8EE", iconColor: "#E8567A",
  },
  {
    icon: Heart,
    title: "Gynaecology & Women's Health",
    desc: "Expert gynaecological care for women at every stage of life from adolescence to menopause with a focus on holistic wellbeing.",
    features: ["Menstrual health", "PCOS / PCOD management", "Hormonal disorders", "Gynaecological surgeries", "Cervical & breast screening"],
    color: "#DBEAFE", iconColor: "#1D4ED8",
  },
  {
    icon: Baby,
    title: "Newborn & Neonatal Care",
    desc: "Dedicated care for newborns by experienced paediatricians, ensuring your baby gets the healthiest start in life.",
    features: ["Newborn health assessments", "Neonatal monitoring", "Vaccination programs", "Growth & developmental check", "Neonatal jaundice management"],
    color: "#EEF2FF", iconColor: "#6366F1",
  },
  {
    icon: Stethoscope,
    title: "OPD / Outpatient Consultations",
    desc: "Multi-specialty outpatient consultations with minimal wait times. Our 15-department OPD ensures expert diagnosis and treatment planning.",
    features: ["General & specialist consultations", "Diagnostic ordering", "Prescription & follow-up", "Second opinions", "Multi-specialty referrals"],
    color: "#FFF7ED", iconColor: "#F59E0B",
  },
  {
    icon: UserCheck,
    title: "Inpatient / Ward Care",
    desc: "Comfortable, well-equipped inpatient wards with round-the-clock nursing care for patients requiring admission and monitoring.",
    features: ["Private & semi-private rooms", "24/7 nursing attention", "Daily doctor rounds", "Nutritional support", "Family visitor policies"],
    color: "#F0FDF4", iconColor: "#22C55E",
  },
  {
    icon: Zap,
    title: "Labour Room & Delivery",
    desc: "A fully equipped, hygienic labour suite staffed by skilled obstetricians and midwives for safe, dignified birth experiences.",
    features: ["Normal & assisted delivery", "Episiotomy & stitching", "Foetal monitoring", "Pain management support", "Immediate neonatal resuscitation"],
    color: "#FFF5F7", iconColor: "#E8567A",
  },
  {
    icon: Activity,
    title: "Emergency & 24/7 Care",
    desc: "Our emergency department is operational round the clock, equipped to handle trauma, obstetric emergencies, and acute medical conditions.",
    features: ["24/7 emergency response", "Ambulance coordination", "Trauma management", "Obstetric emergencies", "Rapid stabilisation"],
    color: "#FEF2F2", iconColor: "#EF4444",
  },
  {
    icon: Syringe,
    title: "Basic ICU / Critical Care",
    desc: "Basic intensive care facilities for critically ill patients, with continuous monitoring and specialist oversight.",
    features: ["Continuous vital monitoring", "Ventilator support (basic)", "Post-operative care", "Specialist supervision", "Family communication & updates"],
    color: "#FFFBEB", iconColor: "#D97706",
  },
  {
    icon: Shield,
    title: "Preventive & Women's Wellness",
    desc: "Proactive wellness services tailored for women screenings, lifestyle counselling, and preventive healthcare programs.",
    features: ["Annual wellness checkups", "Cancer screening", "Bone density evaluation", "Dietary & lifestyle counselling", "Menopause management"],
    color: "#F0FDF4", iconColor: "#22C55E",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider">Departments & Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Comprehensive Healthcare<br />Under One Roof
            </h1>
            <div className="w-16 h-1 bg-[#E8567A] mx-auto rounded-full mb-5"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              From maternity care to multi-specialty treatment expert care, advanced facilities, and compassionate service for every healthcare need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card-hover bg-white rounded-2xl p-7 shadow-md border border-gray-100"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: s.color }}>
                  <s.icon size={28} style={{ color: s.iconColor }} />
                </div>
                <h3 className="text-xl font-bold text-[#1A2332] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{s.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#1A2332]">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: s.iconColor }}></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Also available specialties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider">Additional Specialties</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              More Expert Specializations
            </h2>
            <div className="w-16 h-1 bg-[#1D4ED8] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "General Surgery", "Orthopaedics", "ENT", "Cardiology", "Nephrology",
              "Urology", "Oncology", "Paediatric Surgery", "IVF & Fertility",
              "Psychiatry", "Anaesthesiology", "Pulmonology", "Vascular Surgery",
              "Paediatrics", "General Medicine"
            ].map((spec, i) => (
              <motion.div
                key={spec}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card-hover bg-[#DBEAFE] rounded-xl px-4 py-3 text-center"
              >
                <span className="text-[#1D4ED8] font-semibold text-sm">{spec}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#E8567A] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Need a Consultation?
          </h2>
          <p className="text-white/85 mb-8">Book an appointment with our specialists. We're here for you, always.</p>
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 bg-white text-[#E8567A] px-8 py-3.5 rounded-full font-bold hover:bg-gray-50 transition-colors"
          >
            Book Appointment <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
