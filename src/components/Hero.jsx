import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-pic.png";

function Hero() {
  return (
    <section className="w-full bg-[#fee9aa] text-black py-16 overflow-hidden pt-[100px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* LEFT CONTENT */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-bold leading-tight mb-4">
            Your <br /> Career, Our <br /> Priority{" "}
            <span className="text-[#03B5EC]"></span>
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            We don't just tell you what to do — We <br /> provide real
            opportunities!
          </p>

          <motion.button
            className="bg-[#eab308] hover:bg-[#d4a106] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 mt-10 md:mt-0 flex justify-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImg}
            alt="Musthard HR Illustration"
            className="w-full h-auto object-contain relative top-[20px]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
