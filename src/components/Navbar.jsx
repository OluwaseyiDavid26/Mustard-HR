import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/musthardhr-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "ABOUT US", to: "about" },
    { name: "SERVICES", to: "services" },
    { name: "CONTACT US", to: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 md:py-2">
        {/* Logo */}
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          offset={-70}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <a href="hero">
            <img src={logo} alt="Mustard HR Logo" className="h-[70px] w-auto" />
          </a>
        </ScrollLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => {
            const isContact = link.name === "CONTACT US";
            return (
              <ScrollLink
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className={`font-medium px-4 py-2 rounded-md transition-all duration-200 cursor-pointer flex items-center
                  ${
                    isContact
                      ? "bg-[#eab308] text-white hover:bg-[#d4a106]"
                      : "text-black hover:underline underline-offset-4"
                  }`}
              >
                {link.name}
              </ScrollLink>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-black focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link, index) => {
              const isContact = link.name === "CONTACT US";
              return (
                <ScrollLink
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`font-medium px-4 py-2 rounded-md transition-all cursor-pointer
                    ${
                      isContact
                        ? "bg-[#eab308] text-white hover:bg-[#d4a106]"
                        : "text-black hover:underline underline-offset-4"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
