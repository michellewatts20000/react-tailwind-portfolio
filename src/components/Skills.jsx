

const Skills = () => {
  const skills = [
    {
      name: "Frontend",
      skills: ["JavaScript", "HTML/CSS", "Vue.js", "React/Next.js", "TypeScript"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "MongoDB", "MySQL", "GraphQL", "Express"]
    },
    {
      name: "CSS Frameworks",
      skills: ["Tailwind", "Vuetify", "Chakra", "Material UI", "Bootstrap"]
    },
    {
      name: "Testing",
      skills: ["Jest"]
    },
    {
      name: "Cloud Services",
      skills: ["AWS"]
    },
    {
      name: "Version Control",
      skills: ["Git"]
    }
  ];

  return (
    <section id="skills" className="bg-supernova-500 py-20 px-6 tb:px-10 relative">
      <div className="shape-divider-other"></div>
      <h2 className="text-4xl text-center text-gray-900 font-semibold mb-12">
        Skills
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20">
        <div className="flex items-center">
          <picture>
            <source type="image/avif" srcSet="/assets/profile-pic-384.avif" />
            <source type="image/webp" srcSet="/assets/profile-pic-384.webp" />
            <img src="/assets/profile-pic.jpeg" alt="Michelle Watts" width="192" height="192" loading="lazy" className="w-40 h-40 tb:w-48 tb:h-48 rounded-full" />
          </picture>
        </div>
        <div className="flex flex-col gap-20 max-w-sm text-center">
          <div className="grid tb:grid-cols-3 grid-cols-2 lg:gap-5 gap-5">
            {skills.map(({ name, skills }) => (
              <div key={name} className="flex flex-col gap-2">
                <span className="text-gray-900 text-sm font-semibold">
                  {name}:
                </span>
                {skills.map((skill, index) => (
                  <span key={index} className="bg-white text-gray-700 ring-1 ring-gray-200 py-1 px-3 rounded-full text-clampChips">
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
