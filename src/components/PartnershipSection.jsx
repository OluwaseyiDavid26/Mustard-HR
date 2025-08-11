import React from "react";
import Rbd from "../assets/Rbd.jpeg";
import thehive from "../assets/thehive.png";
import Anmut from "../assets/Anmut-removebg.png";
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

  // List of logos we want to enlarge
  const enlargeImages = [Anmut, property, Alles, thrive];

  return (
    <section className="py-16 bg-white">
      <div className="w-full mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Trusted by Employers Across Industries
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          From agile startups to established organizations, we’ve been
          privileged to help our partners hire better, lead better, and grow
          stronger.
        </p>

        {/* Partner Logos */}
        <div className="grid grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={partner.image}
                alt={`Partner ${index + 1}`}
                className={`object-contain ${
                  enlargeImages.includes(partner.image) ? "h-24" : "h-20"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnershipSection;
