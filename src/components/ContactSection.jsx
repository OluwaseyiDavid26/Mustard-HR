import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t9kofxa", // from EmailJS
        "template_s44q82g", // from EmailJS
        form.current,
        "4Fn-5kF6fUm0txNmA" // from EmailJS
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="bg-white" id="ContactPage">
      <div className="w-full h-5 bg-[#FAF3E4]" />
      <div className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold text-[#EAB308] leading-tight font-montserrat">
              Let Us Help <br />
              You achieve <br />
              Your Goals
            </h2>
            <p className="mt-4 text-gray-800">
              We don't just tell you what to do — We provide real opportunities!
            </p>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="bg-white rounded-[2rem] shadow-lg p-8 max-w-lg w-full mx-auto"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block font-medium text-gray-800">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  required
                  className="w-full mt-2 p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none text-black placeholder-gray-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block font-medium text-gray-800">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full mt-2 p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none text-black placeholder-gray-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block font-medium text-gray-800">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="4"
                  required
                  className="w-full mt-2 p-3 bg-gray-100 border text-black placeholder-gray-500 border-gray-300 rounded-md focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#EAB308] text-white px-8 py-2 hover:bg-yellow-500 transition"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
