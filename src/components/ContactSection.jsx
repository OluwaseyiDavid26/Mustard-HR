import React, { useRef } from "react";
import { motion } from "framer-motion";

function ContactSection() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    formData.append("access_key", "9d29657f-655c-4811-b7a3-509ac986f7e7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
      form.current.reset();
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="bg-white" id="contact">
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
