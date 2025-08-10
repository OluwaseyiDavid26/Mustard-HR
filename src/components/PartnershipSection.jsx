import React from "react";
import Rbd from "../assets/Rbd.jpeg";
import thehive from "../assets/thehive.png";
import Anmut from "../assets/anmut.png";
import property from "../assets/93-property.png";
import Alles from "../assets/alles-charis.jpeg";
import thrive from "../assets/thrive.png";
import gasify from "../assets/gasify-logo.svg";

function PartnershipSection() {
  const partners = [
    { image: Rbd },
    { image: thehive },
    { image: Anmut },
    { image: gasify },
    { image: property },
    { image: Alles },
    { image: thrive },
    { image: thehive },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Trusted by
        </h2>

        {/* Partner Logos */}
        <div className="grid grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={partner.image}
                alt={`Partner ${index + 1}`}
                className="h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnershipSection;
