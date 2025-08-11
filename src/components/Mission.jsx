import React from "react";
import { motion } from "framer-motion";
import missionImg from "../assets/about-us.jpg";
import visionImg from "../assets/interns.jpg";

const extraImg = "https://mustardhr.ng/images/ddd-min.png";

const Card = ({ img, title, text, delay }) => (
  <motion.div
    className="flex flex-col items-center text-center max-w-sm mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* Image wrapper */}
    <div className="relative w-44 h-44 flex items-center justify-center">
      {/* Extra background image fixed behind */}
      <motion.img
        src={extraImg}
        alt="Background shape"
        className="absolute inset-0 w-full h-full object-contain opacity-30 -z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
        viewport={{ once: true }}
      />

      {/* Main circular image */}
      <motion.img
        src={img}
        alt={title}
        className="w-44 h-44 rounded-full object-cover z-10 shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
        viewport={{ once: true }}
      />
    </div>

    {/* Title */}
    <motion.h3
      className="mt-6 text-2xl font-bold text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + 0.6 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h3>

    {/* Description */}
    <motion.p
      className="mt-2 text-gray-600 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + 0.8 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.p>
  </motion.div>
);

const Mission = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
      <Card
        img={missionImg}
        title="Our Mission"
        text="To empower individuals and businesses with tailored HR solutions that foster career growth, workplace excellence, and long-term success."
        delay={0}
      />
      <Card
        img={visionImg}
        title="Our Vision"
        text="To be the go-to HR partner for professionals and businesses, nurturing careers, strengthening organizations, and shaping a future where talent thrives."
        delay={0.3}
      />
    </div>
  </section>
);

export default Mission;
