import React from "react";

export default function Skills() {
  return (
    <div className="pt-24 pb-8 min-h-screen bg-white">
      <section id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm md:text-base">
            With over 1 years of experience in web development, I've mastered a wide range of technologies and frameworks.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Frontend Development",
                skills: ["React Js", "Bootstrap", "HTML", "CSS", "Framer-Motion", "Tailwind CSS"],
                description: "Building responsive and interactive user interfaces"
              },
              {
                title: "Backend Development",
                skills: ["Node Js", "Express Js", "MySQL", "MongoDB"],
                description: "Creating robust and scalable server solutions"
              },
              {
                title: "Programming Language",
                skills: ["Java", "Javascript", "C"],
                description: "Writing and solving complex problems in coding"
              },
              {
                title: "Development Tools",
                skills: ["VS code", "Vercel", "Github", "Git", "Netlify", "Render", "Postman", "Figma"],
                description: "Tools which helps to make it easier in development"
              }
            ].map((skill, index) => (      
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}