import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-pic.png";

function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full bg-[#fee9aa] text-black py-16 overflow-hidden pt-[100px]"
      id="hero"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-8 md:gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-2xl">
            Where Great Careers Flourish <br className="hidden md:block" />
            and Strong Teams Thrive
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6 opacity-90 max-w-xl mx-auto md:mx-0">
            We connect employers with the right talent, job seekers with the
            right opportunities. <br />
            Faster , smarter and more human
          </p>

          {/* IMAGE - Mobile only (below text, above buttons) */}
          <motion.div
            className="md:hidden mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={heroImg}
              alt="Musthard HR Illustration"
              className="w-full max-w-sm h-auto object-contain"
            />
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {/* Primary CTA */}
            <button
              onClick={scrollToContact}
              className="bg-[#eab308] hover:bg-[#d4a106] text-white px-6 py-3.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-95"
            >
              Build Your Dream Team
            </button>

            {/* Secondary CTA */}
            <a
              href="https://forms.gle/3yjCgrd9DfefR1Zw8"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="w-full border-2 border-[#eab308] text-[#eab308] hover:bg-[#eab308] hover:text-white px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 cursor-pointer active:scale-95">
                Grow Your Career
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE - Desktop only */}
        <motion.div
          className="hidden md:flex flex-1 justify-center items-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImg}
            alt="Musthard HR Illustration"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
