import React from "react";

const Resume = () => {
  const skills = [
    "JavaScript", "CSS", "HTML",
    "Vue.js", "React", "Node.js", "Jest", "MongoDB", "MySQL", "GraphQL", "AWS", "Git", "npm", "REST APIs",
    "VSCode", "GitHub", "Jira", "BitBucket", "Figma",
    "Bootstrap", "Vuetify", "Chakra", "Tailwind", "Material UI"
  ];

  return (
    <section id="resume" className="bg-supernova-500 pt-10 pb-20 px-10 relative">
      <div className="shape-divider"></div>
      <div className="container mx-auto flex flex-col items-center lg:flex-row justify-center">
        <div className="flex flex-col gap-30 max-w-xl text-center lg:mr-20 lg:text-left">
          <p className="text-xl mb-5">I am a frontend web developer utilising a background in graphic design to bring creative approaches to problem solving and UX/UI design.</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="bg-secondary-500 text-white py-1 px-3 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center mt-10 lg:mt-0">
          <img src="./assets/profile-pic.jpeg" alt="My face" className="w-48 h-48 rounded-full hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Resume;
