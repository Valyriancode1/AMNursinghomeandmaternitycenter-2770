import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello, I am ${form.name}. My phone number is ${form.phone}. ${form.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919036868303?text=${encoded}`, "_blank");
  };

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
            <p className="text-white/40 text-sm mb-4">ಸಂಪರ್ಕಿಸಿ</p>
            <div className="w-16 h-1 bg-[#E8567A] mx-auto rounded-full mb-5"></div>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              We're here to help. Reach out for appointments, enquiries, or emergency assistance. We're always available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              {
                icon: Phone, title: "Phone", titleKn: "ಫೋನ್", color: "#DBEAFE", iconColor: "#1D4ED8",
                content: "+91 90368 68303",
                sub: "24/7 Emergency and OPD",
                action: () => window.open("tel:+919036868303"),
                actionLabel: "Call Now",
              },
              {
                icon: MapPin, title: "Address", titleKn: "ವಿಳಾಸ", color: "#FDE8EE", iconColor: "#E8567A",
                content: "23/1, Dispensary Rd, Kalasipalya",
                sub: "Bengaluru, Karnataka 560002",
                action: () => window.open("https://maps.google.com/?q=A.M+Nursing+Home+Kalasipalya+Bengaluru"),
                actionLabel: "Get Directions",
              },
              {
                icon: Clock, title: "Working Hours", titleKn: "ಕೆಲಸದ ಸಮಯ", color: "#EDE9FE", iconColor: "#7C3AED",
                content: "OPD: 8:00 AM to 10:00 PM",
                sub: "Emergency: 24 Hours / 7 Days",
                action: null, actionLabel: null,
              },
              {
                icon: MessageCircle, title: "WhatsApp", titleKn: "ವಾಟ್ಸಾಪ್", color: "#DCFCE7", iconColor: "#16A34A",
                content: "+91 90368 68303",
                sub: "Message us anytime",
                action: () => window.open("https://wa.me/919036868303"),
                actionLabel: "Chat Now",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: card.color }}>
                  <card.icon size={26} style={{ color: card.iconColor }} />
                </div>
                <h3 className="font-bold text-[#1A2332] text-base mb-0.5">{card.title}</h3>
                <p className="text-gray-400 text-[10px] mb-1">{card.titleKn}</p>
                <p className="text-[#1A2332] text-sm font-semibold">{card.content}</p>
                <p className="text-gray-500 text-xs mt-1 mb-4">{card.sub}</p>
                {card.action && (
                  <button
                    onClick={card.action}
                    className="text-xs font-bold px-5 py-2 rounded-full transition-colors"
                    style={{ backgroundColor: card.color, color: card.iconColor }}
                  >
                    {card.actionLabel}
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Map + Form */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl h-96 lg:h-full min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0766799!2d77.5763!3d12.9579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b2b2b2b2b3%3A0x0!2sA.M+Nursing+Home+%26+Maternity+Center%2C+Kalasipalya%2C+Bengaluru!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="A.M Nursing Home Location Map"
              ></iframe>
            </motion.div>

            {/* WhatsApp Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100 h-full">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <MessageCircle size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1A2332]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Send a Message
                    </h2>
                    <p className="text-gray-400 text-xs">ಸಂದೇಶ ಕಳುಹಿಸಿ</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-7 mt-1">
                  Fill in your details and tap Send. It will open WhatsApp with your message ready to send directly to us.
                </p>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A2332] mb-2">Your Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Full name"
                      className="w-full px-4 py-3 border border-blue-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-[#F8FBFF]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A2332] mb-2">Phone Number <span className="text-red-400">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 border border-blue-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-[#F8FBFF]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A2332] mb-2">Message <span className="text-red-400">*</span></label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 border border-blue-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none bg-[#F8FBFF]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-base transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Send via WhatsApp
                  </button>
                  <p className="text-center text-gray-400 text-xs">
                    Tapping the button will open WhatsApp with your message pre-filled.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-12 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="animate-pulse w-3 h-3 bg-[#E8567A] rounded-full"></span>
              <span className="text-[#E8567A] font-bold text-lg">EMERGENCY LINE 24/7</span>
              <span className="animate-pulse w-3 h-3 bg-[#E8567A] rounded-full"></span>
            </div>
            <a href="tel:+919036868303" className="text-4xl md:text-5xl font-bold text-white hover:text-[#E8567A] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
              +91 90368 68303
            </a>
            <p className="text-white/60 mt-3">A.M Nursing Home and Maternity Center. Always here for you.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
