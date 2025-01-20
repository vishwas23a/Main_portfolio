import React, { useState } from "react";
import SkillCard from "./SkillCard";

export default function Skills() {
  const [visible, setVisible] = useState({
    Languages: false,
    FrontendTools: false,
    BackendTools: false,
    ExtraTools: false,
  });

  const toggleVisibility = (key) => {
    setVisible((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <div className="min-h-screen   flex w-full bg-gradient-to-r from-blue-950 bg-orange-100">
        <div className="flex w-full mt-32 flex-wrap gap-10 justify-evenly">
          <div  className="flex flex-col items-center">
            <SkillCard
              visibility={() => toggleVisibility("Languages")}
              languageName="Languages"
            />
            <div
              className={`bg-white rounded-b-xl   px-10 py-4 w-48 border-2 transition-opacity duration-300 ${
                visible.Languages
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>C</li>
              </ul>
            </div>
          </div>
          <div  className="flex flex-col items-center">
            <SkillCard
              visibility={() => toggleVisibility("FrontendTools")}
              languageName="Frontend Tools"
            />
            <div
              className={`bg-white px-10 py-4  rounded-b-xl  w-48 transition-opacity duration-300 ${
                visible.FrontendTools
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <ul>
                <li>React Js</li>
                <li>Tailwind</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Framer Motion</li>
              </ul>
            </div>
          </div>
          <div  className="flex flex-col items-center">
            <SkillCard
              visibility={() => toggleVisibility("BackendTools")}
              languageName="Backend Tools"
            />
            <div
              className={`bg-white px-10  rounded-b-xl py-4 w-48 border-2 transition-opacity duration-300 ${
                visible.BackendTools
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <ul>
                <li>Node Js</li>
                <li>Express Js</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div  className="flex flex-col items-center">
            <SkillCard
              visibility={() => toggleVisibility("ExtraTools")}
              languageName="Extra Tools"
            />
           
              <div
                className={`bg-white px-10  rounded-b-xl py-4  w-48 border-2 transition-opacity duration-300 ${
                  visible.ExtraTools
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <ul>
                  <li>Visual Studio</li>
                  <li>Postman</li>
                  <li>Figma</li>
                  <li>GitHub</li>
                  <li>Vercel</li>
                  <li>Netlify</li>
                  <li>Render</li>
                </ul>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
