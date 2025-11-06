import React, { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { RiMenuFold2Fill } from "react-icons/ri";
import { FiX } from "react-icons/fi";
const Navbar = () => {
  const [activesection, setactivesection] = useState("");

  const [isopen, setisopen] = useState(false);
  const [isscrolled, setisscroled] = useState(false);

  //scroll event
  useEffect(() => {
    const handlescroll = () => {
      setisscroled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handlescroll);
  }, []);

  //srollsection
  const handleMenuItemclick = (sectionId) => {
    console.log('handleMenuItemclick called with sectionId:', sectionId);
    const section = document.getElementById(sectionId);
    console.log('Element found:', section);
    if(section) {
      section.scrollIntoView({behavior: 'smooth' });
    } else {
    }
    setactivesection(sectionId);
    setisopen(false);
  };

  const menuitems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 widh-full z-50 transitionduration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isscrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md "
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center ">
        <div className="text-5xl font-semibold cursor-pointer mr-8">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Harsh</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Pandey</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
        <ul className=" hidden md:flex space-x-8 text-gray-300 mr-8">
          {menuitems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activesection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemclick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4 mr-8">
          <a
            href="https://github.com/Linuxharsh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#8245ec]"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/harshpandey-mern/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className="mr-8 bg-white ">
          <div className="md:hidden "></div>
          {isopen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer "
              onClick={() => setisopen(false)}
            />
          ) : (
            <RiMenuFold2Fill
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setisopen(true)}
            />
          )}
        </div>
      </div>

      {isopen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuitems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white
            ${activesection === item.id ? "text-[#8245ec]" : ""}`}
              >
                <button onClick={() => handleMenuItemclick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Linuxharsh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FiGithub size={24} />
              </a>
               <a
            href="https://www.linkedin.com/in/harshpandey-mern/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
