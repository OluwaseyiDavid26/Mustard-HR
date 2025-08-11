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
          <p className="text-gray-800 text-xl leading-relaxed mb-8">
            At Mustard HR, we believe in growth—for individuals, businesses, and
            careers. Just like a mustard seed, we nurture potential—helping
            talents grow into thriving professionals and organizations build
            strong, high-performing teams. With the right support, small
            beginnings transform into lasting success. We are not just another
            HR firm—we are your trusted partners, guiding professionals to the
            right opportunities and helping businesses find the perfect fit.
            Whether you are starting out, transitioning, or scaling up, we are
            here to make the journey smoother. Because when the right people
            connect, amazing things happen.
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
