import React from "react";
import { motion } from "framer-motion";
// import folajomi from "../assets/folajomi.jpg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

function Testimonial() {
  const testimonials = [
    {
      name: "Aisha Bello",
      image: img1,
      text: "Serene made it so easy to get spa services at home. I love the convenience and professional quality!",
    },
    {
      name: "David Eze",
      image: img2,
      text: "Fast booking, great professionals, and amazing results. Highly recommended for anyone needing wellness care!",
    },
    {
      name: "Mary Johnson",
      image: img3,
      text: "I booked a massage for my mum and she loved it! The app made it super simple and efficient.",
    },
  ];

  return (
    <section className="bg-[#fee9aa] py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Testimonial
        </motion.h2>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg text-gray-800">{t.name}</h3>
              <p className="text-gray-600 mt-2">{t.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonial;
