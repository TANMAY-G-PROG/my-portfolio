// import React from 'react';

// const About = React.forwardRef((props, ref) => {
//     const skills = [
//         { name: "JavaScript", icon: "https://placehold.co/48x48/333333/FFFFFF?text=JS" },
//         { name: "React", icon: "https://placehold.co/48x48/333333/FFFFFF?text=R" },
//         { name: "Node.js", icon: "https://placehold.co/48x48/333333/FFFFFF?text=N" },
//         { name: "Python", icon: "https://placehold.co/48x48/333333/FFFFFF?text=P" },
//         { name: "SQL", icon: "https://placehold.co/48x48/333333/FFFFFF?text=S" },
//         { name: "Figma", icon: "https://placehold.co/48x48/333333/FFFFFF?text=F" }
//     ];

//     return (
//         <section ref={ref} id="about" className="py-20 text-white">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
//                 <div className="flex flex-col md:flex-row items-center gap-12">
//                     <div className="md:w-1/3 text-center md:text-left">
//                         <img src="https://placehold.co/300x300/6366f1/FFFFFF?text=Jane" alt="Jane Doe" className="rounded-full mx-auto md:mx-0 w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-indigo-500 shadow-lg"/>
//                     </div>
//                     <div className="md:w-2/3">
//                         <p className="text-lg text-gray-300 mb-6">
//                             I'm a full-stack developer based in San Francisco, with a deep passion for creating beautiful, functional, and user-centered digital experiences. With a background in computer science, I love tackling complex problems and turning them into elegant solutions.
//                         </p>
//                         <p className="text-lg text-gray-300">
//                             When I'm not coding, you can find me exploring the latest design trends, contributing to open-source projects, or hiking in the great outdoors. I'm always eager to learn and grow, both personally and professionally.
//                         </p>
//                     </div>
//                 </div>
//                  <div className="mt-16">
//                     <h3 className="text-2xl font-bold text-center mb-8">My Skills</h3>
//                     <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
//                         {skills.map(skill => (
//                             <div key={skill.name} className="flex flex-col items-center p-4 bg-gray-700 rounded-lg transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
//                                 <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2 rounded-full" />
//                                 <span className="text-gray-300 font-medium">{skill.name}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// });

// export default About;

import React from 'react';
import { ParticleCard } from './ParticleCard';

const About = React.forwardRef((props, ref) => {

    const resumeLink = "https://drive.google.com/file/d/1wyIq5Lb517rW-PmQmkJeM8KkN19c_knN/view?usp=drive_link";

    return (
        <section ref={ref} id="about" className="px-4 text-white min-h-screen flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>

                {/* --- CHANGE 1: WIDER BOX --- */}
                {/* The grid is now weighted to make the right column (description) wider than the left (image) */}
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">

                    {/* --- LEFT COLUMN: Image --- */}
                    <div className="flex justify-center">
                        <img 
                            src="/tanmay.jpg"
                            alt="Tanmay G Shetty"
                            className="w-full max-w-sm aspect-square rounded-full object-cover border-4 border-indigo-500/50 shadow-2xl shadow-indigo-500/40"
                        />
                    </div>

                    {/* --- RIGHT COLUMN: Description Card --- */}
                    {/* --- CHANGE 2: PURPLE HOVER BORDER --- */}
                    {/* Added 'transition-colors' and 'hover:border-indigo-500' for the border effect */}
                    <ParticleCard className="flex flex-col h-full transition-colors duration-300 hover:border-indigo-500">
                        <div className="flex flex-col gap-4 text-gray-300 h-full">
                            <h3 className="text-3xl font-bold text-white">
                                Hi, I'm Tanmay 
                                <span 
                                    className="inline-block" 
                                    style={{ animation: 'wave 2.5s infinite', transformOrigin: '70% 70%' }}
                                >
                                    👋
                                </span>
                            </h3>
                            
                            {/* --- CHANGE 3: LARGER TEXT --- */}
                            <ul className="list-disc list-inside space-y-2 text-base"> {/* Changed from text-sm */}
                                <li>3rd-year Information Technology student.</li>
                                <li>Skilled in backend with NodeJS/Express and frontend with React.</li>
                                <li>Experienced with databases like MySQL, PostgreSQL, and MongoDB.</li>
                                <li>Dedicated to building impactful projects as a versatile team player.</li>
                            </ul>

                            <div>
                                <h4 className="text-2xl font-semibold text-white mt-4 mb-3">Achievements</h4> {/* Changed from text-xl */}
                                <ul className="list-disc list-inside space-y-2 text-base"> {/* Changed from text-sm */}
                                    <li>Won a GenAI hackathon organised by the ACM Club in collaboration with HiDevs.</li>
                                    <li>GirlScript Summer of Code 2025 Contributor.</li>
                                    <li>Leetcode (max 1742 rating).</li>
                                </ul>
                            </div>

                            <p className="text-base mt-3"> {/* Changed from text-sm */}
                                With a deep passion for coding and development, I'm always exploring new technologies. I am actively seeking opportunities to contribute to innovative teams in Big Tech, startups, or finance.
                            </p>

                            <div className="flex-grow"></div>

                            <div className="text-center mt-6">
                                <a 
                                    href={resumeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg"
                                >
                                    My Resume
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </ParticleCard>
                </div>
            </div>
        </section>
    );
});

export default About;