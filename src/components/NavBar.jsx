import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const NavBar = () => {
  const [isActive, setIsActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItem = (sectionId) => {
    setIsActive(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "Skills", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "profile", label: "Coding Profile" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`${
        isScrolled ? "fixed w-full top-0 backdrop-blur-xl z-50" : ""
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center ml-[10%] mr-[10%]">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">Ankit Gupta</span>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((element) => (
            <li
              className={`hover:text-[#8245ec] ${
                isActive === element.id ? "text-[#8245ec]" : "text-white"
              }`}
              key={element.id}
            >
              <button
                className="font-semibold"
                onClick={(e) => handleMenuItem(element.id)}
              >
                {element.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/guptakumarankit"
            target="_blank"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/ankit-gupta-095036256"
            target="_blank"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <IoLogoLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Mobile menu icons */}
      <div className="md:hidden absolute top-4 right-3">
        {isOpen ? (
          <ImCross
            className="text-3xl text-[#8245ec] cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <TiThMenu
            className="text-3xl text-[#8245ec] cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 backdrop-blur-2xl transform -translate-x-1/2 w-4/5 p-2 bg-[#0d0b2c] z-50 rounded-lg  md:hidden">
          <ul className="flex flex-col space-y-4 text-gray-300 justify-center items-center">
            {menuItems.map((element) => (
              <li
                className={`text-white  hover:text-[#8245ec] text-center ${
                  isActive === element.id
                    ? "bg-green-600 w-full rounded text-[#8245ec]"
                    : ""
                }`}
                key={element.id}
              >
                <button onClick={(e) => handleMenuItem(element.id)}>
                  {element.label}
                </button>
              </li>
            ))}

            <div className="md:hidden flex space-x-4">
              <a
                href="https://github.com/guptakumarankit"
                target="_blank"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/ankit-gupta-095036256"
                target="_blank"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <IoLogoLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
