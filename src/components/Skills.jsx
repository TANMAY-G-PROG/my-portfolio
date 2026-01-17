import React, { useState, useEffect } from 'react';

const Skills = React.forwardRef((props, ref) => {
  const [skillsData, setSkillsData] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
  useEffect(() => {
    fetch(`${API_URL}/api/skills`)
      .then((res) => res.json())
      .then((data) => setSkillsData(data))
      .catch((err) => console.error("Error fetching skills:", err));
  }, []);

  return (
    <section ref={ref} id="skills" className="min-h-screen flex flex-col justify-center text-white px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Skills</h2>
        <p className="text-lg text-gray-400 text-center mb-16">My technical toolkit, constantly evolving and expanding.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div key={category.id || index} className="bg-[#111119]/50 border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="flex items-center gap-3 bg-gray-800/80 rounded-lg px-4 py-2">
                    <img src={skill.logo} alt={`${skill.name} logo`} className="w-6 h-6" />
                    <span className="font-medium text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;