import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

const Card = ({ Icon, title, text, delay }) => (
  <motion.div
    className="flex flex-col items-center text-center max-w-sm mx-auto
               bg-gradient-to-tr from-white/20 to-white/5 
               backdrop-blur-xl border border-white/30 
               p-8 rounded-2xl shadow-lg 
               transition-all duration-500 ease-out
               hover:shadow-2xl hover:scale-105 hover:border-[#eab308]/50 relative z-10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div
      className="w-20 h-20 flex items-center justify-center 
                 rounded-full bg-gradient-to-r from-[#eab308] to-[#d4a106] 
                 shadow-md mb-6 transition-transform duration-500 hover:scale-110"
    >
      <Icon className="text-white text-3xl" />
    </div>

    <motion.h3
      className="text-2xl font-bold text-gray-800 mb-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + 0.2 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h3>

    <motion.p
      className="text-gray-600 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + 0.4 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.p>
  </motion.div>
);

const Mission = () => (
  <section className="relative py-20 overflow-hidden">
    {/* Star background */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#fef9e7] via-[#fff] to-[#fef9e7]">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
    </div>

    {/* Content */}
    <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
      <Card
        Icon={FaBullseye}
        title="Our Mission"
        text="To empower individuals and businesses with tailored HR solutions that foster career growth, workplace excellence, and long-term success."
        delay={0}
      />
      <Card
        Icon={FaEye}
        title="Our Vision"
        text="To be the go-to HR partner for professionals and businesses, nurturing careers, strengthening organizations, and shaping a future where talent thrives."
        delay={0.3}
      />
    </div>
  </section>
);

export default Mission;
