import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";
import Card3D from "../components/Card3D";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  })
};

const allDoctors = [
  { name: "Dr. Mohammed Samdani Shaik", nameKn: "ಡಾ. ಮೊಹಮ್ಮದ್ ಸಮ್ದಾನಿ ಷೇಕ್", specialty: "General Medicine", dept: "General Medicine", avatar: "MS", color: "#1D4ED8" },
  { name: "Dr. Vinod Kumar", nameKn: "ಡಾ. ವಿನೋದ್ ಕುಮಾರ್", specialty: "General Medicine", dept: "General Medicine", avatar: "VK", color: "#1D4ED8" },
  { name: "Dr. Salman", nameKn: "ಡಾ. ಸಲ್ಮಾನ್", specialty: "General Medicine", dept: "General Medicine", avatar: "SA", color: "#1D4ED8" },
  { name: "Dr. Ayesha Gulzar", nameKn: "ಡಾ. ಆಯೆಶಾ ಗುಲ್ಜಾರ್", specialty: "Obstetrics & Gynaecology", dept: "OBG", avatar: "AG", color: "#E8567A" },
  { name: "Dr. Nagendra Prasad", nameKn: "ಡಾ. ನಾಗೇಂದ್ರ ಪ್ರಸಾದ್", specialty: "Obstetrics & Gynaecology", dept: "OBG", avatar: "NP", color: "#E8567A" },
  { name: "Dr. Ashok Kumar Devoor", nameKn: "ಡಾ. ಅಶೋಕ್ ಕುಮಾರ್ ದೇವೂರ್", specialty: "Obstetrics & Gynaecology", dept: "OBG", avatar: "AK", color: "#E8567A" },
  { name: "Dr. Rohit", nameKn: "ಡಾ. ರೋಹಿತ್", specialty: "Paediatrics", dept: "Paediatrics", avatar: "RO", color: "#6366F1" },
  { name: "Dr. Ranga Chetan", nameKn: "ಡಾ. ರಂಗಚೇತನ್", specialty: "Paediatrics", dept: "Paediatrics", avatar: "RC", color: "#6366F1" },
  { name: "Dr. Muzammil", nameKn: "ಡಾ. ಮುಜಮ್ಮಿಲ್", specialty: "General Surgery", dept: "Surgery", avatar: "MU", color: "#F59E0B" },
  { name: "Dr. Kudrathulla", nameKn: "ಡಾ. ಕುದ್ರತುಲ್ಲಾ", specialty: "General Surgery", dept: "Surgery", avatar: "KU", color: "#F59E0B" },
  { name: "Dr. Veeresh N", nameKn: "ಡಾ. ವೀರೇಶ್ ಎನ್", specialty: "Orthopaedics", dept: "Orthopaedics", avatar: "VN", color: "#10B981" },
  { name: "Dr. Farhan", nameKn: "ಡಾ. ಫರ್ಹಾನ್", specialty: "Orthopaedics", dept: "Orthopaedics", avatar: "FA", color: "#10B981" },
  { name: "Dr. Nivedita", nameKn: "ಡಾ. ನಿವೇದಿತಾ", specialty: "ENT", dept: "ENT", avatar: "NI", color: "#8B5CF6" },
  { name: "Dr. Rajeev G.N", nameKn: "ಡಾ. ರಾಜೀವ್ ಜಿ.ಎನ್", specialty: "Nephrology", dept: "Nephrology", avatar: "RG", color: "#0EA5E9" },
  { name: "Dr. Sunil R", nameKn: "ಡಾ. ಸುನಿಲ್ ಆರ್", specialty: "Nephrology", dept: "Nephrology", avatar: "SR", color: "#0EA5E9" },
  { name: "Dr. Somashekar", nameKn: "ಡಾ. ಸೋಮಶೇಖರ್", specialty: "Cardiology", dept: "Cardiology", avatar: "SO", color: "#EF4444" },
  { name: "Dr. Pavan Kumar", nameKn: "ಡಾ. ಪವನ್ ಕುಮಾರ್", specialty: "Cardiology", dept: "Cardiology", avatar: "PK", color: "#EF4444" },
  { name: "Dr. Manohar", nameKn: "ಡಾ. ಮನೋಹರ್", specialty: "Urology", dept: "Urology", avatar: "MA", color: "#14B8A6" },
  { name: "Dr. Murali Krishna", nameKn: "ಡಾ. ಮುರಳಿ ಕೃಷ್ಣ", specialty: "Vascular Surgery", dept: "Surgery", avatar: "MK", color: "#F59E0B" },
  { name: "Dr. Sanjeev Kulkarni", nameKn: "ಡಾ. ಸಂಜೀವ್ ಕುಲಕರ್ಣಿ", specialty: "Surgical Oncology", dept: "Oncology", avatar: "SK", color: "#7C3AED" },
  { name: "Dr. Poonam", nameKn: "ಡಾ. ಪೂನಂ", specialty: "Medical Oncology", dept: "Oncology", avatar: "PO", color: "#7C3AED" },
  { name: "Dr. Keshav Murthy", nameKn: "ಡಾ. ಕೇಶವ ಮೂರ್ತಿ", specialty: "Paediatric Surgery", dept: "Paediatrics", avatar: "KM", color: "#6366F1" },
  { name: "Dr. Shyam M Gupta", nameKn: "ಡಾ. ಶ್ಯಾಮ್ ಎಂ ಗುಪ್ತಾ", specialty: "IVF Specialist", dept: "IVF", avatar: "SG", color: "#EC4899" },
  { name: "Dr. Mekala Iyengar", nameKn: "ಡಾ. ಮೇಕಲ ಅಯ್ಯಂಗಾರ್", specialty: "IVF Specialist", dept: "IVF", avatar: "MI", color: "#EC4899" },
  { name: "Dr. Shashidhar Bilagi", nameKn: "ಡಾ. ಶಶಿಧರ್ ಬಿಲಗಿ", specialty: "Psychiatry", dept: "Psychiatry", avatar: "SB", color: "#64748B" },
  { name: "Dr. V. Taher", nameKn: "ಡಾ. ವಿ. ತಾಹೆರ್", specialty: "Anaesthesiology", dept: "Anaesthesiology", avatar: "VT", color: "#475569" },
  { name: "Dr. Swaroop", nameKn: "ಡಾ. ಸ್ವರೂಪ್", specialty: "Anaesthesiology", dept: "Anaesthesiology", avatar: "SW", color: "#475569" },
  { name: "Dr. Sagar G.C", nameKn: "ಡಾ. ಸಾಗರ್ ಜಿ.ಸಿ", specialty: "Anaesthesiology", dept: "Anaesthesiology", avatar: "SG2", color: "#475569" },
  { name: "Dr. Chinmaya C.N", nameKn: "ಡಾ. ಚಿನ್ಮಯ ಸಿ.ಎನ್", specialty: "Anaesthesiology", dept: "Anaesthesiology", avatar: "CC", color: "#475569" },
  { name: "Dr. Samskruthi", nameKn: "ಡಾ. ಸಂಸ್ಕೃತಿ", specialty: "Pulmonology", dept: "Pulmonology", avatar: "SAM", color: "#0891B2" },
];

const departments = [
  "All", "General Medicine", "OBG", "Paediatrics", "Surgery",
  "Orthopaedics", "ENT", "Nephrology", "Cardiology", "Urology",
  "Oncology", "IVF", "Psychiatry", "Anaesthesiology", "Pulmonology"
];

export default function DoctorsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? allDoctors
    : allDoctors.filter(d => d.dept === activeTab);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-20 relative overflow-hidden noise">
        <div className="orb absolute top-10 right-10 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #7ee8e8 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#E8567A] font-semibold text-sm uppercase tracking-widest">Our Team</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-1">Expert Doctors,<br />Exceptional Care</h1>
            <p className="text-white/40 text-sm mb-4">ತಜ್ಞ ವೈದ್ಯರು, ಅಸಾಧಾರಣ ಆರೈಕೆ</p>
            <div className="w-16 h-1 bg-[#E8567A] mx-auto rounded-full mb-5" />
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Over 30 specialist doctors across 15 departments dedicated, experienced, and compassionate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white/90 backdrop-blur-xl sticky top-[140px] z-30 shadow-md shadow-[#1D4ED8]/5 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {departments.map((dept) => (
              <motion.button
                key={dept}
                onClick={() => setActiveTab(dept)}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === dept
                    ? "bg-[#1D4ED8] text-white shadow-lg shadow-[#1D4ED8]/30"
                    : "bg-[#EFF6FF] text-[#6B7280] hover:bg-[#DBEAFE] hover:text-[#1D4ED8]"
                }`}
              >
                {dept}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-[#EFF6FF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #1D4ED8 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-center text-[#6B7280] text-sm mb-8">
            Showing <strong className="text-[#1A2332]">{filtered.length}</strong> doctor{filtered.length !== 1 ? "s" : ""}
            {activeTab !== "All" ? ` in ${activeTab}` : ""}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 perspective-wrapper">
            {filtered.map((doc, i) => (
              <motion.div
                key={doc.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card3D className="bg-white rounded-2xl p-5 text-center depth-shadow border border-gray-100">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                    style={{ background: `linear-gradient(135deg, ${doc.color}, #0F172A)` }}
                  >
                    {doc.avatar}
                  </div>
                  <h3 className="font-bold text-[#1A2332] text-sm leading-tight mb-0.5">{doc.name}</h3>
                  <p className="text-gray-400 text-[10px] leading-tight mb-1">{doc.nameKn}</p>
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full mt-1"
                    style={{ backgroundColor: `${doc.color}20`, color: doc.color }}
                  >
                    {doc.specialty}
                  </span>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Ready to Consult a Specialist?</h2>
            <p className="text-[#6B7280] mb-8">Book your appointment or call us directly.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/appointment"
                className="btn-glow inline-flex items-center gap-2 bg-[#E8567A] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#d4415f] transition-colors">
                Book Appointment <ArrowRight size={18} />
              </Link>
              <a href="tel:+919036868303"
                className="inline-flex items-center gap-2 bg-[#DBEAFE] text-[#1D4ED8] px-8 py-3.5 rounded-full font-bold hover:bg-[#c5e8e8] transition-colors">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
