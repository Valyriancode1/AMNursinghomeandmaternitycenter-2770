import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const categories = ["All", "Maternity", "Facility", "Team", "Events"];

const galleryItems = [
  { id: 1, category: "Maternity", title: "Labour & Delivery Suite", bg: "from-pink-100 to-rose-100", icon: "🤰" },
  { id: 2, category: "Facility", title: "Modern OPD Waiting Area", bg: "from-teal-50 to-cyan-100", icon: "🏥" },
  { id: 3, category: "Team", title: "Our Medical Team", bg: "from-blue-50 to-indigo-100", icon: "👨‍⚕️" },
  { id: 4, category: "Maternity", title: "Newborn Care Unit", bg: "from-yellow-50 to-amber-100", icon: "👶" },
  { id: 5, category: "Facility", title: "ICU / Critical Care", bg: "from-red-50 to-pink-100", icon: "🏨" },
  { id: 6, category: "Events", title: "Hospital Inauguration", bg: "from-purple-50 to-violet-100", icon: "🎉" },
  { id: 7, category: "Facility", title: "Operation Theatre", bg: "from-green-50 to-emerald-100", icon: "🩺" },
  { id: 8, category: "Team", title: "Nursing Staff", bg: "from-sky-50 to-blue-100", icon: "👩‍⚕️" },
  { id: 9, category: "Maternity", title: "Post-Natal Ward", bg: "from-rose-50 to-pink-100", icon: "❤️" },
  { id: 10, category: "Events", title: "Health Awareness Camp", bg: "from-orange-50 to-amber-100", icon: "📋" },
  { id: 11, category: "Facility", title: "Pharmacy & Lab", bg: "from-teal-50 to-green-100", icon: "💊" },
  { id: 12, category: "Team", title: "Specialist Doctors", bg: "from-indigo-50 to-purple-100", icon: "🔬" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter(g => g.category === active);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider">Gallery</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              A Glimpse of Our Hospital
            </h1>
            <div className="w-16 h-1 bg-[#E8567A] mx-auto rounded-full mb-5"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Our facilities, our team, and the moments that matter a look inside A.M Nursing Home & Maternity Center.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-[140px] z-30">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-[#1D4ED8] text-white shadow"
                  : "bg-[#EFF6FF] text-[#6B7280] hover:bg-[#DBEAFE] hover:text-[#1D4ED8]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="card-hover cursor-pointer rounded-2xl overflow-hidden shadow-md"
                onClick={() => setSelected(item)}
              >
                <div className={`h-44 sm:h-52 bg-gradient-to-br ${item.bg} flex flex-col items-center justify-center`}>
                  <span className="text-5xl mb-3">{item.icon}</span>
                  <span className="text-xs font-semibold text-gray-500 px-2 py-1 bg-white/60 rounded-full">{item.category}</span>
                </div>
                <div className="bg-white p-3">
                  <p className="text-[#1A2332] font-semibold text-sm">{item.title}</p>
                  <p className="text-[#1D4ED8] text-xs mt-0.5">A.M Nursing Home</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-3xl overflow-hidden max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-64 bg-gradient-to-br ${selected.bg} flex items-center justify-center relative`}>
                <span className="text-8xl">{selected.icon}</span>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[#1D4ED8] bg-[#DBEAFE] px-3 py-1 rounded-full">{selected.category}</span>
                <h3 className="text-xl font-bold text-[#1A2332] mt-3 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{selected.title}</h3>
                <p className="text-[#6B7280] text-sm">A.M Nursing Home & Maternity Center, Bengaluru</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
