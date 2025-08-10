// import React from "react";

// import musthardfooter from "../assets/musthardFooter.png";
// import mailImage from "../assets/mail-img.png";
// import phoneImage from "../assets/phone-img.png";
// import musthardLogo from "../assets/MustardHRwhite-09.png";

// // Social media icons
// import facebookIcon from "../assets/icons8-facebook-logo-50.png";
// import instagramIcon from "../assets/icons8-instagram-logo-50.png";
// import linkedinIcon from "../assets/icons8-linkedin-50.png";
// import twitterIcon from "../assets/icons8-twitter-bird-50.png";

// const footerData = [
//   {
//     image: musthardfooter,
//     caption: "Shoprite Mall Cnr, <br/> Igbatoro Road, Akure 340001",
//   },
//   {
//     image: mailImage,
//     caption: "hello@mustardhr.ng",
//   },
//   {
//     image: phoneImage,
//     caption: "+234 816 7875 474",
//   },
// ];

// const socialLinks = [
//   {
//     icon: facebookIcon,
//     alt: "Facebook",
//     link: "https://www.facebook.com/profile.php?id=61571368155565",
//   },
//   {
//     icon: twitterIcon,
//     alt: "Twitter",
//     link: "https://x.com/mustard_HR",
//   },
//   {
//     icon: linkedinIcon,
//     alt: "LinkedIn",
//     link: "https://www.linkedin.com/company/themustard-hr/",
//   },
//   {
//     icon: instagramIcon,
//     alt: "Instagram",
//     link: "https://www.instagram.com/mustard.hr?igsh=MXMyODM0NXdqd3Vreg==",
//   },
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white w-screen">
//       {/* Top Row */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-6 text-center">
//         {footerData.map((item, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <img
//               src={item.image}
//               alt={`Footer icon ${index + 1}`}
//               className="w-12 h-12 object-contain "
//             />
//             <p
//               className="mt-3 text-gray-300 text-center"
//               dangerouslySetInnerHTML={{ __html: item.caption }}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Divider */}
//       <div className="border-t border-gray-800 w-full"></div>

//       {/* Bottom Row */}
//       <div className="flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-36">
//         {/* Left: Logo */}
//         <div className="flex items-center space-x-3">
//           <img
//             src={musthardLogo}
//             alt="Musthard HR Logo"
//             className="h-[85px] w-[220px] object-contain"
//           />
//         </div>

//         {/* Social Icons */}
//         <div className="flex space-x-4 mt-4 md:mt-0">
//           {socialLinks.map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex justify-center items-center w-10 h-10 rounded-full"
//               style={{ backgroundColor: "#eab308" }}
//             >
//               <img src={item.icon} alt={item.alt} className="w-7 h-7" />
//             </a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

import musthardLogo from "../assets/MustardHRwhite-09.png";
import facebookIcon from "../assets/icons8-facebook-logo-50.png";
import instagramIcon from "../assets/icons8-instagram-logo-50.png";
import linkedinIcon from "../assets/icons8-linkedin-50.png";
import twitterIcon from "../assets/icons8-twitter-bird-50.png";

// New icons for contact info
import musthardFooter from "../assets/musthardFooter.png"; // for address
import mailImage from "../assets/mail-img.png"; // for email
import phoneImage from "../assets/phone-img.png"; // for phone

const services = ["Talent Acquisition", "Career Development", "HR Advisory"];

const contactInfo = [
  {
    icon: musthardFooter,
    text: "Shoprite Mall Cnr, Igbatoro Road, Akure 340001",
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
      {/* Top Grid */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-12 px-6 md:px-20">
        {/* About Section */}
        <div>
          <img
            src={musthardLogo}
            alt="Mustard HR Logo"
            className="h-[150px] mb-4 relative left-[-72px]"
          />
          <p className="text-gray-300">
            Welcome to Mustard HR. We are more than just a service provider —
            we’re your partner in building people and growing businesses.
          </p>
        </div>

        {/* Services Section */}
        {/* Services Section */}
        <div className="relative left-[90px] top-[20px]">
          <h3 className="font-bold text-2xl mb-4">Services</h3>
          <ul className="space-y-4 text-gray-300">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        {/* <div>
          <h3 className="font-bold text-2xl mb-4">Services</h3>
          <ul className="space-y-4 text-gray-300">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div> */}

        {/* Contact Us Section */}
        <div className="relative left-[100px]">
          <h3 className="font-bold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-300">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <img src={item.icon} alt="" className="w-6 h-6" />
                {item.link ? (
                  <a href={item.link} className="hover:underline">
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>

          {/* Social Icons Beneath Contact Info */}
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-10 h-10 rounded-full"
                style={{ backgroundColor: "#eab308" }}
              >
                <img src={item.icon} alt={item.alt} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Copyright */}
      <div className="py-6 text-center text-gray-400 text-sm">
        Copyright © {new Date().getFullYear()} Mustard HR.
      </div>
    </footer>
  );
};

export default Footer;
