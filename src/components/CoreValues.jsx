import React from "react";
import { motion } from "framer-motion";
import communityImg from "../assets/community.png";
import excellenceImg from "../assets/excellence.png";
import growthImg from "../assets/growthmindset.png";
import integrityImg from "../assets/integrity.png";
import peopleFirstImg from "../assets/peoplefirst.png";

const CoreValues = () => {
  const values = [
    {
      title: "Excellence",
      text: "We push for the highest standards because people and organizations deserve nothing less.",
      img: excellenceImg,
    },
    {
      title: "Integrity",
      text: "We do what is right, even when no one is watching, because trust is the foundation of everything we build.",
      img: integrityImg,
    },
    {
      title: "People First",
      text: "We put people at the centre of every decision, because real impact starts with human dignity.",
      img: peopleFirstImg,
    },
    {
      title: "Commitment",
      text: "We believe in building strong, meaningful networks where ideas, support, and opportunities can thrive.",
      img: communityImg,
    },
    {
      title: "Growth Mindset",
      text: "We believe everyone has the capacity to learn, evolve, and lead — and we are here to support that journey.",
      img: growthImg,
    },
    {
      title: "Values",
      text: "Our core values guide our mission, culture, and long-term success.",
      img: communityImg, // Change if you have a specific image
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "#fee9aa" }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl text-black md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>

        <motion.p
          className="text-gray-700 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          These principles shape our culture and guide every decision we make.
        </motion.p>

        {/* Values Grid */}
        <div className="grid md:grid-cols-6 sm:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-[#f9f3e2] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.img
                src={value.img}
                alt={value.title}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              />
              <h3 className="text-xl text-black font-semibold mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
