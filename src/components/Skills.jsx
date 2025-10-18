import React from 'react';

const skillsData = [
  {
    category: 'Tools & Design',
    icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6', // A simple plus icon as a placeholder
    skills: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Google Colab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    ]
  },
  {
    category: 'AI / ML',
    icon: 'M12 8v4m0 4v.01M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h4m12 0h4M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41',
    skills: [
      { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
      { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    ]
  },
  {
    category: 'Databases',
    icon: 'M3 12h18M3 6h18M3 18h18',
    skills: [
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ]
  },
  {
    category: 'Languages & Frameworks',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    skills: [
      { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'NodeJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'StreamLit', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg' },
    ]
  }
];

const Skills = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="skills" className="min-h-screen flex flex-col justify-center text-white px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Skills</h2>
        <p className="text-lg text-gray-400 text-center mb-16">My technical toolkit, constantly evolving and expanding.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-[#111119]/50 border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-colors duration-300">
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