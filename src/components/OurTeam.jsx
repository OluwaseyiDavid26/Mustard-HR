import React from "react";
import { motion } from "framer-motion";

import folajomi from "../assets/steve.jpg";
import tarekayi from "../assets/tare.jpg";
import chiamaka from "../assets/chiamaka.jpg";
import balikis from "../assets/balikis.jpg";

const teamMembers = [
  { name: "Tarekayi O", role: "HRBP", image: tarekayi },
  { name: "Chiamaka V", role: "HR Manager", image: chiamaka },
  { name: "Balikis L", role: "HR Manager", image: balikis },
  { name: "Stephen Danjuma", role: "Team Lead", image: folajomi },
];

function OurTeam() {
  return (
    <section className="bg-[#F8F1E0] py-16 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          className="order-1 lg:order-2"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h2 className="text-4xl text-black font-bold">Our Team</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our team comprises highly skilled professionals with extensive
            experience in the real estate and facility management sectors.
          </p>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          className="order-2 lg:order-1 lg:col-span-2 grid grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-sm text-center p-6 w-full max-w-[280px] mx-auto"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto object-cover rounded-full"
              />
              <h3 className="mt-4 text-lg text-black font-semibold">
                {member.name}
              </h3>
              {member.role && (
                <p className="text-yellow-600 font-bold">{member.role}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default OurTeam;
