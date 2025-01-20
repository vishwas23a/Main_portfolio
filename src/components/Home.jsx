import React from 'react'
import img1 from '../components/vishwas.png'
import resumePdf  from '../components/resume.pdf'
export default function Home() {
  const Resume=()=>{
    window.open(resumePdf)
      
  }
  return (    

 

    <div >
  
     <div className="flex min-h-screen w-full bg-gradient-to-r from-blue-950 overflow-hidden  bg-orange-100 ">
        <div className=" h-dvh w-1/2  ">
            <div className=' flex justify-center items-start gap-6 h-dvh flex-col ml-20 mt-14'>
            <h2 className='text-orange-500 text-3xl'>——Hello</h2>
            <h1 className='text-white text-4xl '>I'm Vishwas Verma</h1>
            <p className='text-2xl text-orange-500'> Full Stack Developer</p>
            <p className=' text-lg text-gray-300'>
Passionate full stack developer with expertise in front-end and back-end technologies. Dedicated to crafting efficient, user-friendly web applications. Proficient in HTML/CSS, JavaScript, React, Node.js, and database management. Eager to explore...  </p>
            <button onClick={Resume}
  className="overflow-hidden relative w-32 p-2 h-12 bg-gray-800 text-white borde rounded-md text-xl font-bold cursor-pointer z-10 group"
>
  Resume
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
  ></span>
  <span
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >Open</span
  >
</button>
</div>

        </div>
        <div className="h-dvh w-1/2 flex justify-center items-center   ">

            <div>
                <div className='border rounded-full h-96 w-96  mt-20'>
                    <img src={img1} alt="" className=' h-full w-full rounded-full shadow-lg shadow-blue-950' />

                </div>
            </div>


        </div>
     </div>
     </div>
  );
  
}
