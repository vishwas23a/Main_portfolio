import React, { useEffect, useState } from "react";
import roadmapImg from './images/roadmap.png'
import codecomImg from './images/codecom.png'
import carbonImg from './images/carbon.png'
import studentImg from './images/student.png'
import funapiImg from './images/funapi.png'
import calculatorImg from './images/calculator.png'
import oldPortfolioImg from './images/oldportfolio.png'
import ProjectCard from "./ProjectCard";

export default function Projects() {
 

  return (
    <div>
      <div className=" h-screen w-full bg-gradient-to-r from-blue-950 flex  overflow-auto bg-orange-100">
       
        
       <div className=" flex flex-wrap w-full justify-evenly gap-20 mt-32 ">

        <ProjectCard 
        projectName="CodeCom"
        description="You can create your own community and do Chating, Daily task and Coding"
        projectLink="https://codecom01.netlify.app"
        projectImg={codecomImg}
        />

        <ProjectCard 
        projectName="The Roadmap"
        description="You can download any roadmap of progamming language"
        projectLink="https://theroadmap01.netlify.app"
        projectImg={roadmapImg}
        />

        <ProjectCard 
        projectName="Carbon Footprint"
        description="You can calculate your carbon emission based on you daily activity"
        projectLink="https://carbon-footprint-calculator01.netlify.app"
        projectImg={carbonImg}
        />

        <ProjectCard 
        projectName="Student Details"
        description="You can student data by filling form and display them and also search individually"
        projectLink="https://studentdetails01.netlify.app"
        projectImg={studentImg}
        />

        <ProjectCard 
        projectName="Fun Api"
        description="multiple API cards weather API,Gender Predict,Meme,Quote Generator"
        projectLink="https://some-fun-api.netlify.app"
        projectImg={funapiImg}
        />

        <ProjectCard 
        projectName="Calculator"
        description="Created an interactive and desiged calculator using Javascript"
        projectLink="https://vishwas23a.github.io/Calculator/"
        projectImg={calculatorImg}
        />

        <ProjectCard 
        projectName="Old Portfolio"
        description="Old Portfoio design which i used before and developed on html css and Javasript"
        projectLink="https://vishwas23a.github.io/porfolio/"
        projectImg={oldPortfolioImg}
        />
       
   
        
       </div>
      </div>
    </div>
  );
}
