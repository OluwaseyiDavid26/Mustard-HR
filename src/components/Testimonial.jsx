import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/duro.jpg";
import img2 from "../assets/2.svg";
import img3 from "../assets/duro.jpg";

function Testimonial() {
  const testimonials = [
    {
      name: "Osayande Osarumen",
      title: "Business Manager, Gasify",
      image: img1,
      text: "Mustard HR helped us scale our operation with the right people. Their understanding of our industry and the quality of candidates they brought in saved us weeks of recruitment time and ensured we could focus on growing Gasify.",
    },
    {
      name: "Oyindamola Fasuyi",
      title: "Administrative Manager, The Hive Incubator",
      image: img2,
      text: "Working with Mustard HR has been a game changer for our startups. They do more than just find candidates, they help us build teams that can actually execute and grow.",
    },
    {
      name: "Durotimi Fayemiwo",
      title: "Programs Lead, Thrive Foundation",
      image: img3,
      text: "Mustard HR understands the kind of people we need to drive impact. Their recruitment process is thorough, intentional and aligned with our mission of inclusive economic growth.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#fff8e1] to-[#fee9aa] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h2>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col items-center text-center 
                         transition-transform transform hover:scale-105 hover:shadow-2xl"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              {/* Image */}
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[#d4a106]"
              />

              {/* Name */}
              <h3 className="font-semibold text-lg text-gray-900">{t.name}</h3>
              {/* Title */}
              <p className="text-sm text-gray-500 mb-4">{t.title}</p>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed italic">“{t.text}”</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonial;
