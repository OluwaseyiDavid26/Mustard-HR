import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/about-us.jpg";

function AboutUS() {
  return (
    <section className="bg-[#f8f2e0] py-16 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image Animation */}
        <motion.div
          className="md:w-[40%] flex justify-center"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={aboutImg}
            alt="About Us"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Animation */}
        <motion.div
          className="md:w-[60%]"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-black mb-4 relative inline-block">
            About Us
            <span className="block w-24 h-1 bg-yellow-500 mt-2"></span>
          </h2>
          <h3 className="text-gray-800 text-3xl leading-relaxed mb-8">
            We’ve seen the challenges from both sides:
          </h3>
          <p className=" text-gray-800 text-xl leading-relaxed mb-8 ">
            Businesses do not just need policies. They need people who thrive.
            Professionals do not just need jobs. They need guidance, direction,
            and opportunity. That is where we come in. Whether you are a founder
            hiring your first team member, a growing company rethinking your
            structure, or a professional preparing for your next step, we work
            with you to ensure your people strategy supports your vision. Our
            approach is simple and intentional. We bring structure where it is
            needed and provide support that feels clear, practical, and lasting.
          </p>

          {/* Button Animation */}
          <motion.button
            className="bg-[#eab308] hover:bg-[#cf9705] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUS;
