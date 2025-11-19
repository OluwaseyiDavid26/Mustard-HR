// import React from "react";
// import { motion } from "framer-motion";

// // import folajomi from "../assets/steve.jpg";
// import tarekayi from "../assets/tare.jpg";
// import chiamaka from "../assets/chiamaka.jpg";
// import balikis from "../assets/balikis.jpg";

// const teamMembers = [
//   {
//     name: "Tarekayi O",
//     role: "Talent and business strategy partner",
//     image: tarekayi,
//   },
//   { name: "Chiamaka V", role: "HR Manager", image: chiamaka },
//   { name: "Balikis L", role: "HR Manager", image: balikis },
//   // { name: "Stephen Danjuma", role: "Team Lead", image: folajomi },
// ];

// function OurTeam() {
//   return (
//     <section className="bg-[#F8F1E0] py-16 px-6 lg:px-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center">
//         {/* Text Section */}
//         <motion.div
//           className="order-1 lg:order-2"
//           initial={{ x: 0, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//         >
//           <h2 className="text-4xl text-black font-bold">Our Team</h2>
//           <p className="mt-4 text-gray-700 leading-relaxed">
//             Our team comprises highly skilled professionals with extensive
//             experience in the real estate and facility management sectors.
//           </p>
//         </motion.div>

//         {/* Team Cards */}
//         <motion.div
//           className="order-2 lg:order-1 lg:col-span-2 grid grid-cols-2 gap-8"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: {
//               transition: { staggerChildren: 0.2 },
//             },
//           }}
//         >
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-3xl shadow-sm text-center p-6 w-full max-w-[280px] mx-auto"
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6 }}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-28 h-28 mx-auto object-cover rounded-full"
//               />
//               <h3 className="mt-4 text-lg text-black font-semibold">
//                 {member.name}
//               </h3>
//               {member.role && (
//                 <p className="text-yellow-600 font-bold">{member.role}</p>
//               )}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default OurTeam;
import React from "react";
import { motion } from "framer-motion";

import tarekayi from "../assets/tare.jpg";
import chiamaka from "../assets/chiamaka.jpg";
import balikis from "../assets/balikis.jpg";

const teamMembers = [
  {
    name: "Tarekayi O",
    role: "Talent and Business Strategy Partner",
    image: tarekayi,
  },
  {
    name: "Chiamaka V",
    role: "HR Manager",
    image: chiamaka,
  },
  {
    name: "Balikis L",
    role: "HR Manager",
    image: balikis,
  },
];

function OurTeam() {
  return (
    <section className="bg-[#F8F1E0] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-black font-bold mb-4">
            Our Team
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Our team comprises highly skilled professionals with extensive
            experience in the real estate and facility management sectors.
          </p>
        </motion.div>

        {/* Team Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
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
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                         transition-all duration-300 transform hover:-translate-y-2 
                         overflow-hidden group"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-50 p-8">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 mx-auto object-cover rounded-full border-4 border-white shadow-xl
                             transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-semibold text-sm">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default OurTeam;
