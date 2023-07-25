

const Skills = () => {
  const skills = [
    {
      name: "Frontend",
      color: "secondary-500",
      text: "white",
      skills: ["JavaScript", "CSS", "HTML", "Vue.js", "React", "TypeScript"]
    },
    {
      name: "Backend",
      color: "primary-500",
      text: "white",
      skills: ["Node.js", "MongoDB", "MySQL", "GraphQL"]
    },
    {
      name: "CSS Frameworks",
      color: "twilight-500",
      text: "gray-500",
      skills: ["Bootstrap", "Vuetify", "Chakra", "Tailwind", "Material UI"]
    },
    {
      name: "Testing",
      color: "secondary-500",
      text: "white",
      skills: ["Jest"]
    },
    {
      name: "Cloud Services",
      color: "primary-500",
      text: "white",
      skills: ["AWS"]
    },
    {
      name: "Version Control",
      color: "twilight-500",
      text: "gray-500",
      skills: ["Git"]
    }
  ];

  return (
    <section id="skills" className="bg-supernova-500 pt-10 pb-20 px-10 relative">
      <div className="shape-divider-other"></div>
      <div className="container mx-auto flex flex-row items-center lg:flex-row justify-center">
        <div className="flex items-center mt-10 lg:mt-0">
          <img src="./assets/profile-pic.jpeg" alt="My face" className="w-48 h-48 rounded-full hidden lg:block" />
        </div>
        <div className="flex flex-col gap-20 max-w-sm text-center lg:ml-20 ">
          <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-5 gap-5">
            {skills.map(({ name, color, skills, text }) => (
              <div key={name} className="flex flex-col gap-2">
                <span className={`text-black text-sm capitalize font-bold`}>
                  {name}:
                </span>
                {skills.map((skill, index) => (
                  <span key={index} className={`bg-${color} text-${text} py-1 px-3 rounded-full text-sm`}>
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
