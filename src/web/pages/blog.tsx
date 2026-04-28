import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, ArrowRight, User } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

const posts = [
  {
    id: 1,
    title: "10 Essential Tips for a Healthy Pregnancy",
    excerpt: "From prenatal vitamins to safe exercises, here's what every expecting mother should know about maintaining a healthy pregnancy and preparing for delivery.",
    author: "Dr. Ayesha Gulzar",
    authorKn: "ಡಾ. ಆಯೆಶಾ ಗುಲ್ಜಾರ್",
    role: "OBG Specialist",
    category: "Pregnancy",
    readTime: "5 min read",
    date: "April 2025",
    img: "/blog-pregnancy.jpg",
    color: "#E8567A",
  },
  {
    id: 2,
    title: "Newborn Care: The First 30 Days",
    excerpt: "Your newborn's first month is crucial. Learn about feeding schedules, sleep patterns, vaccinations, and warning signs to watch out for in the neonatal period.",
    author: "Dr. Rohit",
    authorKn: "ಡಾ. ರೋಹಿತ್",
    role: "Paediatrician",
    category: "Newborn",
    readTime: "6 min read",
    date: "March 2025",
    img: "/blog-newborn.jpg",
    color: "#F59E0B",
  },
  {
    id: 3,
    title: "PCOS and Fertility: What Every Woman Should Know",
    excerpt: "Polycystic Ovary Syndrome affects millions of women. Understand the symptoms, treatment options, and how PCOS impacts fertility and pregnancy outcomes.",
    author: "Dr. Nagendra Prasad",
    authorKn: "ಡಾ. ನಾಗೇಂದ್ರ ಪ್ರಸಾದ್",
    role: "OBG Specialist",
    category: "Women's Health",
    readTime: "7 min read",
    date: "March 2025",
    img: "/blog-pcos.jpg",
    color: "#1D4ED8",
  },
  {
    id: 4,
    title: "When to Visit the OPD: A Quick Guide",
    excerpt: "Not every symptom requires an emergency visit. Learn when to book an OPD appointment versus when to head straight to the emergency department.",
    author: "Dr. Vinod Kumar",
    authorKn: "ಡಾ. ವಿನೋದ್ ಕುಮಾರ್",
    role: "General Physician",
    category: "General Health",
    readTime: "4 min read",
    date: "February 2025",
    img: "/blog-opd.jpg",
    color: "#6366F1",
  },
  {
    id: 5,
    title: "Heart Health for Women: Myths and Facts",
    excerpt: "Cardiovascular disease is the leading cause of death in women, yet it's often misunderstood. Our cardiologist separates fact from fiction.",
    author: "Dr. Somashekar",
    authorKn: "ಡಾ. ಸೋಮಶೇಖರ್",
    role: "Cardiologist",
    category: "Cardiology",
    readTime: "5 min read",
    date: "January 2025",
    img: "/blog-cardio.jpg",
    color: "#EF4444",
  },
  {
    id: 6,
    title: "Preventive Health Screenings Every Woman Needs",
    excerpt: "Regular screenings can catch serious conditions early. Here's a complete guide to the screenings every woman should schedule, by age group.",
    author: "Dr. Mekala Iyengar",
    authorKn: "ಡಾ. ಮೇಕಲ ಅಯ್ಯಂಗಾರ್",
    role: "IVF & Women's Health",
    category: "Preventive Care",
    readTime: "6 min read",
    date: "December 2024",
    img: "/blog-screening.jpg",
    color: "#22C55E",
  },
];

const categories = ["All", "Pregnancy", "Newborn", "Women's Health", "General Health", "Cardiology", "Preventive Care"];

export default function BlogPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? posts : posts.filter(p => p.category === active);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#E8567A] font-semibold text-sm uppercase tracking-wider">Health Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Health Tips & Medical Insights
            </h1>
            <div className="w-16 h-1 bg-[#E8567A] mx-auto rounded-full mb-5"></div>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Expert advice from our doctors on pregnancy, women's health, newborn care, and more.
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

      {/* Posts Grid */}
      <section className="py-16 bg-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card-hover bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100"
              >
                {/* Card header */}
                <div className="h-44 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>

                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${post.color}20`, color: post.color }}
                    >
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-[#6B7280] text-xs">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-lg font-bold text-[#1A2332] mb-2 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {post.title}
                  </h2>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{post.excerpt}</p>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#E8567A] flex items-center justify-center text-white text-xs font-bold">
                        {post.author.split(" ")[1]?.[0] || post.author[0]}
                      </div>
                      <div>
                        <p className="text-[#1A2332] text-xs font-semibold">{post.author}</p>
                        <p className="text-gray-400 text-[10px] leading-tight">{post.authorKn}</p>
                        <p className="text-[#6B7280] text-xs mt-0.5">{post.date}</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-1 text-[#1D4ED8] text-xs font-semibold hover:text-[#1E3A8A]">
                      Read <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </motion.article>
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
            Have a Health Concern?
          </h2>
          <p className="text-[#6B7280] mb-8">Book a consultation with our specialists. Expert care, just a call away.</p>
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 bg-[#E8567A] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#d4415f] transition-colors"
          >
            Book Appointment <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
