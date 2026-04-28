import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" }
  })
};

const testimonials = [
  { name: "Fatima Begum", rating: 5, text: "The maternity care at A.M Nursing Home was exceptional. The doctors and nurses were very attentive throughout my entire pregnancy and delivery. I was very anxious but the staff made me feel safe and comfortable. Highly recommended for all expecting mothers!", role: "New Mother" },
  { name: "Priya Nair", rating: 5, text: "Excellent service. Dr. Ayesha Gulzar is an amazing doctor very knowledgeable and compassionate. She took the time to explain everything clearly. The facilities are clean and the staff is cooperative. My whole family trusts this hospital.", role: "Patient" },
  { name: "Suresh Kumar", rating: 5, text: "My wife delivered our baby here and we are so grateful. The emergency support and 24/7 availability gave us immense peace of mind. Wonderful hospital and wonderful doctors. The entire team went above and beyond.", role: "Patient's Husband" },
  { name: "Anita Sharma", rating: 5, text: "I visited for a gynaecology consultation and was treated with such professionalism and warmth. No long waits, no rush. The doctor was patient and thorough. The best experience I've had at any hospital in Bengaluru.", role: "Patient" },
  { name: "Mohammad Rafi", rating: 5, text: "My mother was admitted for surgery and the care she received was outstanding. The nurses checked on her regularly, the doctors were always available to answer questions, and the discharge process was smooth. Truly a patient-first hospital.", role: "Patient's Son" },
  { name: "Lakshmi Devi", rating: 5, text: "I've been coming to A.M Nursing Home for three years now. The doctors are skilled and the staff is kind. The cardiology team here is excellent. I trust them completely with my health.", role: "Regular Patient" },
  { name: "Yasmin Banu", rating: 5, text: "Delivered my second child here and the experience was even better than the first time. Modern facilities, skilled staff, and very hygienic delivery room. Dr. Nagendra Prasad is an excellent obstetrician.", role: "New Mother" },
  { name: "Ravi Shankar", rating: 5, text: "Brought my son here for a pediatric emergency late at night and the response was immediate. The pediatrician was calm, skilled and efficient. I am so thankful for the 24/7 service. This hospital truly cares.", role: "Father" },
  { name: "Deepa Menon", rating: 4, text: "Very good facilities and helpful staff. The OPD is well-organized and I didn't have to wait long. The doctor was attentive and the treatment was effective. Overall a very positive experience.", role: "Patient" },
];

export default function TestimonialsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider">Patient Stories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our Patients Say
            </h1>
            <div className="w-16 h-1 bg-[#E8567A] mx-auto rounded-full mb-5"></div>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="#F59E0B" className="text-[#F59E0B]" />)}
            </div>
            <p className="text-white font-bold text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>4.9 / 5</p>
            <p className="text-white/70 text-base">Based on 152+ verified patient reviews</p>
          </motion.div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 text-center">
            {[
              { label: "5 Stars", count: "138", pct: 90 },
              { label: "4 Stars", count: "10", pct: 7 },
              { label: "3 Stars", count: "3", pct: 2 },
              { label: "2 Stars", count: "1", pct: 0.5 },
              { label: "1 Star", count: "0", pct: 0 },
            ].map((r) => (
              <div key={r.label} className="flex flex-col items-center gap-2">
                <span className="text-[#6B7280] text-xs">{r.label}</span>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#F59E0B] h-2 rounded-full" style={{ width: `${r.pct}%` }}></div>
                </div>
                <span className="text-[#1A2332] font-bold text-sm">{r.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card-hover bg-white rounded-2xl p-7 shadow-md border border-gray-100 relative"
              >
                <Quote size={28} className="text-[#DBEAFE] absolute top-5 right-5" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="#F59E0B" className="text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[#6B7280] text-sm leading-relaxed italic mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#E8567A] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A2332] text-sm">{t.name}</p>
                    <p className="text-[#6B7280] text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
