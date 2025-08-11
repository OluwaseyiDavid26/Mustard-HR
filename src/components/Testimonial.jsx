import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

function Testimonial() {
  const testimonials = [
    {
      name: "Business Manager <br/> Gasify",
      image: img1,
      text: "Mustard HR helped us scale our operation with the right people. Their understanding of our industry and the quality of candidates they brought in saved us weeks of recruitment time and ensured we could focus on growing Gasify",
    },
    {
      name: "Program Manager <br/> The Hive Incubator",
      image: img2,
      text: "Working with Mustard HR has been a game changer for our startups. They do more than just find candidates, they help us build teams that can actually execute and grow",
    },
    {
      name: "Program Lead <br/> Thrive Foundation",
      image: img3,
      text: "Mustard HR understands the kind of people we need to drive impact. Their recruitment process is thorough, intentional and aligned with our mission of inclusive economic growth.",
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
              <h3
                className="font-semibold text-lg text-gray-800"
                dangerouslySetInnerHTML={{ __html: t.name }}
              />
              <p className="text-gray-600 mt-2">{t.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonial;
