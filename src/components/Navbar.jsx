import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const git = () => {
    window.open("https://github.com/vishwas23a");
  };
  const LinkedIn = () => {
    window.open("https://linkedin.com/in/vishwas-verma23a");
  };
  const Insta = () => {
    window.open("https://www.instagram.com/vishwas_23a/");
  };
  const Twitter = () => {
    window.open("https://twitter.com/Vishwas2313");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative z-20">
     
        <div className="bg-blue-950 w-full h-16 flex justify-between md:justify-evenly fixed z-20 px-4 md:px-0">
       <div className="flex h-16 items-center">
            <h1 className="text-2xl md:text-4xl text-white">
              <span className="text-orange-500">V</span>ishwas{" "}
              <span className="text-orange-500">V</span>erma
            </h1>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <ul className="flex gap-10">
              <NavLink to="/" className={({isActive}) => isActive ? "text-orange-500" : "text-gray-400"}>
                <li className="hover:text-orange-500">Home</li>
              </NavLink>
              <NavLink to="Projects" className={({isActive}) => isActive ? "text-orange-500" : "text-gray-400"}>
                <li className="hover:text-orange-500">Projects</li>
              </NavLink>
              <NavLink to="Skills" className={({isActive}) => isActive ? "text-orange-500" : "text-gray-400"}>
                <li className="hover:text-orange-500">Skills</li>
              </NavLink>
              <NavLink to="Experience" className={({isActive}) => isActive ? "text-orange-500" : "text-gray-400"}>
                <li className="hover:text-orange-500">Certification</li>
              </NavLink>
              <NavLink to="Achivements" className={({isActive}) => isActive ? "text-orange-500" : "text-gray-400"}>
                <li className="hover:text-orange-500">Contact</li>
              </NavLink>
            </ul>
          </div>

          <div className="hidden md:flex gap-5 items-center">
            <ul className="flex gap-3 items-center text-gray-100 text-2xl">
              <li>|</li>
              <li onClick={git} className="hover:text-orange-500 cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
                <FaGithub size={24} />
              </li>
              <li onClick={LinkedIn} className="hover:text-orange-500 cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
                <FaLinkedin size={24} />
              </li>
              <li onClick={Insta} className="hover:text-orange-500 cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
                <FaInstagram size={24} />
              </li>
              <li onClick={Twitter} className="hover:text-orange-500 cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
                <FaXTwitter size={24} />
              </li>
            </ul>
          </div>

          <button 
            onClick={toggleMenu}
            className="md:hidden flex items-center text-gray-100 focus:outline-none"
          >
            {isMenuOpen ? <RxCross1 size={24} /> : <IoMenu size={24} />}
          </button>
        </div>

        <div className={`fixed inset-x-0 top-16 bg-blue-950 z-10 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
          <div className="px-4 py-6 space-y-4">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({isActive}) => `${isActive ? 'text-orange-500' : 'text-gray-400'} text-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="Projects" 
                className={({isActive}) => `${isActive ? 'text-orange-500' : 'text-gray-400'} text-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink 
                to="Skills" 
                className={({isActive}) => `${isActive ? 'text-orange-500' : 'text-gray-400'} text-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </NavLink>
              <NavLink 
                to="Experience" 
                className={({isActive}) => `${isActive ? 'text-orange-500' : 'text-gray-400'} text-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                Certification
              </NavLink>
              <NavLink 
                to="Achivements" 
                className={({isActive}) => `${isActive ? 'text-orange-500' : 'text-gray-400'} text-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </nav>

            <div className="pt-4 border-t border-gray-700">
              <ul className="flex justify-center space-x-6 text-gray-100">
                <li onClick={git} className="hover:text-orange-500 cursor-pointer">
                  <FaGithub size={24} />
                </li>
                <li onClick={LinkedIn} className="hover:text-orange-500 cursor-pointer">
                  <FaLinkedin size={24} />
                </li>
                <li onClick={Insta} className="hover:text-orange-500 cursor-pointer">
                  <FaInstagram size={24} />
                </li>
                <li onClick={Twitter} className="hover:text-orange-500 cursor-pointer">
                  <FaXTwitter size={24} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;