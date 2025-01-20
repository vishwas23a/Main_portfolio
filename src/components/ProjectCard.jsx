import React from 'react'
import { NavLink } from 'react-router-dom';

function ProjectCard(props) {

    const {description,projectName,projectImg,projectLink}=props;
  return (
    <div>
       
<div
  class="relative flex w-80 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
>
  <div
    class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border shadow-lg group"
  >
    <div
      class="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-600 to-indigo-600 opacity-90"
    ></div>
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse"
    ></div>
    <div class="absolute inset-2  flex items-center justify-center">
      <img src={projectImg} alt="" className='rounded-xl'  />
    </div>
  </div>
  <div class="p-6">
    <h5
      class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-blue-600 transition-colors duration-300"
    >
      {projectName}
    </h5>
    <p
      class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased"
    >
      {description}
    </p>
  </div>
  <div class="p-6 pt-0">
    <NavLink to={projectLink} target='_blank'><button 
      class="group relative w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-blue-950  to-blue-700 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
    >
      <span class="relative flex items-center gap-2">
        Visit
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          class="w-5 h-5 transform transition-transform group-hover:translate-x-1"
        >
          <path
            d="M17 8l4 4m0 0l-4 4m4-4H3"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </span>
    </button></NavLink>
  </div>
</div>

      
    </div>
  )
}

export default ProjectCard
