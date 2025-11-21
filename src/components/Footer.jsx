// ...existing code...
import React from "react";
import musthardLogo from "../assets/MustardHRwhite-09.png";
import facebookIcon from "../assets/icons8-facebook-logo-50.png";
import instagramIcon from "../assets/icons8-instagram-logo-50.png";
import linkedinIcon from "../assets/icons8-linkedin-50.png";
import twitterIcon from "../assets/icons8-twitter-bird-50.png";
import musthardFooter from "../assets/musthardFooter.png";
import mailImage from "../assets/mail-img.png";
import phoneImage from "../assets/phone-img.png";

const services = ["Talent Acquisition", "Career Development", "HR Advisory"];

const contactInfo = [
  {
    icon: musthardFooter,
    text: "The Redeemed Business District (RBD) Igbatoro Road, Akure 340283, Ondo state.",
  },
  {
    icon: mailImage,
    text: "hello@mustardhr.ng",
    link: "mailto:hello@mustardhr.ng",
  },
  {
    icon: phoneImage,
    text: "+234 816 7875 474",
    link: "tel:+2348167875474",
  },
];

const socialLinks = [
  {
    icon: facebookIcon,
    alt: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61571368155565",
  },
  {
    icon: twitterIcon,
    alt: "Twitter",
    link: "https://x.com/mustard_HR",
  },
  {
    icon: linkedinIcon,
    alt: "LinkedIn",
    link: "https://www.linkedin.com/company/themustard-hr/",
  },
  {
    icon: instagramIcon,
    alt: "Instagram",
    link: "https://www.instagram.com/mustard.hr?igsh=MXMyODM0NXdqd3Vreg==",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16">
          <div className="lg:col-span-5">
            <img
              src={musthardLogo}
              alt="Mustard HR Logo"
              className="h-24 md:h-28 mb-8"
            />
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-sm">
              Welcome to Mustard HR. We are more than just a service provider —
              we're your partner in building people and growing businesses.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-bold text-xl md:text-2xl mb-6 text-yellow-500">
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-300 text-base md:text-lg hover:text-yellow-500 transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-bold text-xl md:text-2xl mb-6 text-yellow-500">
              Contact Us
            </h3>
            <ul className="space-y-5">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-6 h-6 mt-1 flex-shrink-0"
                  />
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-300 text-base md:text-lg hover:text-yellow-500 transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex gap-4 mt-8">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 hover:scale-110"
                  aria-label={item.alt}
                >
                  <img src={item.icon} alt={item.alt} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <p className="text-center text-gray-400 text-sm md:text-base">
            Copyright © {new Date().getFullYear()} Mustard HR. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// ...existing code...
