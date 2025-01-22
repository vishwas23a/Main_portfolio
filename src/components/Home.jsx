import React from 'react';
import img1 from '../components/vishwas.png';
import resumePdf from '../components/resume.pdf';

export default function Home() {
  const Resume = () => {
    window.open(resumePdf);
  };

  return (
    <div>
      <div className="min-h-screen  w-full bg-gradient-to-r from-blue-950 overflow-hidden bg-orange-100">
        {/* Main container - stack vertically on mobile, side by side on larger screens */}
        <div className="flex flex-col  lg:flex-row min-h-screen">
          {/* Text content section */}
          <div className="w-full lg:w-1/2 mt-10 px-6 lg:px-20 py-10 lg:py-14">
            <div className="flex flex-col gap-4 lg:gap-6">
              <h2 className="text-orange-500 text-2xl lg:text-3xl">——Hello</h2>
              <h1 className="text-white text-3xl lg:text-4xl">I'm Vishwas Verma</h1>
              <p className="text-xl lg:text-2xl text-orange-500">Full Stack Developer</p>
              <p className="text-base lg:text-lg text-gray-300">
                Passionate full stack developer with expertise in front-end and back-end technologies. 
                Dedicated to crafting efficient, user-friendly web applications. 
                Proficient in HTML/CSS, JavaScript, React, Node.js, and database management. 
                Eager to explore...
              </p>
              <button
                onClick={Resume}
                className="relative w-32 p-2 h-12 bg-gray-800 text-white border rounded-md text-xl font-bold cursor-pointer z-10 group overflow-hidden"
              >
                Resume
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                  Open
                </span>
              </button>
            </div>
          </div>

          {/* Image section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-0">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="border rounded-full h-full w-full">
                <img 
                  src={img1} 
                  alt="Profile" 
                  className="h-full w-full rounded-full shadow-lg shadow-blue-950 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}