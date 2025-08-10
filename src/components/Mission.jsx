import React from "react";
import missionImg from "../assets/about-us.jpg";
import visionImg from "../assets/interns.jpg";

const extraImg = "https://mustardhr.ng/images/ddd-min.png";

const Card = ({ img, title, text }) => (
  <div className="flex flex-col items-center text-center max-w-sm mx-auto relative">
    {/* Background Shape */}
    <img
      src={extraImg}
      alt="Background shape"
      className="absolute w-[500px] h-[500px] object-contain opacity-30 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />

    {/* Circle Image */}
    <img
      src={img}
      alt={title}
      className="w-44 h-44 rounded-full object-cover relative z-10"
    />

    {/* Title & Text */}
    <h3 className="mt-6 text-2xl font-bold text-gray-800">{title}</h3>
    <p className="mt-2 text-gray-600 leading-relaxed">{text}</p>
  </div>
);

const Mission = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
      <Card
        img={missionImg}
        title="Our Mission"
        text="To empower individuals and businesses with tailored HR solutions that foster career growth, workplace excellence, and long-term success."
      />
      <Card
        img={visionImg}
        title="Our Vision"
        text="To be the go-to HR partner for professionals and businesses, nurturing careers, strengthening organizations, and shaping a future where talent thrives."
      />
    </div>
  </section>
);

export default Mission;
