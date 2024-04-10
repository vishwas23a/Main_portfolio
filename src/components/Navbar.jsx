import React from "react";
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
function Navbar() {
  const git=()=>{
    window.open("https://github.com/vishwas23a")
  }
  const LinkedIn=()=>{
    window.open("https://linkedin.com/in/vishwas-verma23a")
  }
  const Insta=()=>{
    window.open("https://www.instagram.com/vishwas_23a/")
  }
  const Twitter=()=>{
    window.open("https://twitter.com/Vishwas2313")
  }

  return (
    <>
   
    <div >
      <div className=" bg-blue-950 w-full h-16 flex justify-evenly fixed  z-20">
        <div className="  flex h-16 items-center">
          <h1 className="text-4xl text-white">
            <span className="text-orange-500 ">V</span>ishwas{" "}
            <span className=" text-orange-500 ">V</span>erma
          </h1>
        </div>
        <div className=" flex justify-center  items-center ml-24  ">
          <ul className="flex gap-10 flex-wrap  ">
            <NavLink to="/" className={({isActive})=>isActive?"text-orange-500":"text-gray-400"}>
              {" "}
              <li className=" hover:text-orange-500">
                Home
              </li>
            </NavLink>
            <NavLink to="Projects" className={({isActive})=>isActive?"text-orange-500":"text-gray-400"}>
              {" "}
              <li className=" hover:text-orange-500">
                Projects
              </li>
            </NavLink>
            <NavLink to="Skills" className={({isActive})=>isActive?"text-orange-500":"text-gray-400"}>
              <li className=" hover:text-orange-500">
              Skills
            </li></NavLink>
            <NavLink to="Experience" className={({isActive})=>isActive?"text-orange-500":"text-gray-400"}>
              <li className=" hover:text-orange-500">
              Experience
            </li></NavLink>
    
           <NavLink to="Achivements" className={({isActive})=>isActive?"text-orange-500":"text-gray-400"}>
            <li className=" hover:text-orange-500" >
              Achivements
            </li></NavLink> 
          </ul>
        </div>
        
        <div className=" flex gap-5 items-center  ">
          <ul className="flex gap-3 items-center text-gray-100 text-2xl ">
            <li>|</li>
            <li onClick={git} className=" hover:text-orange-500 cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
              <FaGithub />
            </li>
            <li onClick={LinkedIn} className=" hover:text-orange-500 cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
              <FaLinkedin />
            </li>
            <li onClick={Insta} className=" hover:text-orange-500 cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
              <FaInstagram />
            </li>
            <li onClick={Twitter} className=" hover:text-orange-500 cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
              <FaXTwitter />
            </li>
          </ul>
       
        </div>
      </div>
      

    </div>
    <Outlet/>
   
    </>
  );
}

export default Navbar;
