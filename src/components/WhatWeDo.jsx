import React from "react";
import { motion } from "framer-motion";

// Images
import advisory from "../assets/advisory-img.png";
import carreer from "../assets/career-img.png";
import job from "../assets/job-img.png";

function WhatWeDo() {
  const items = [
    {
      image: job,
      title: "Talent Acquisition",
      description:
        "We connect the right people to the right opportunities. From interns and recent graduates to experienced professionals, we match talent with organizations where they can thrive.",
    },
    {
      image: carreer,
      title: "Career Development",
      description:
        "We work directly with individuals to sharpen their personal brands, strengthen their CVs and LinkedIn profiles, and develop strong interview techniques that build real confidence.",
    },
    {
      image: advisory,
      title: "HR Advisory",
      description:
        "We help organizations build robust HR infrastructures, improve leadership capability, design performance management frameworks, and cultivate workplace cultures that attract and retain top talent.",
    },
  ];

  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl font-semibold text-yellow-500 mb-12">
          What we do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#FBF3E4] p-8 text-center rounded-sm shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Stagger cards
              }}
            >
              <div className="flex justify-center items-center mb-6">
                <div className="bg-[#fdd765] rounded-full p-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg text-black font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button with delay */}
        <div className="text-center">
          <motion.button
            className="bg-[#eab308] hover:bg-[#d4a306] text-white mt-8 px-6 py-3 rounded-lg font-medium transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3 + items.length * 0.2, // Delay until after all cards
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
