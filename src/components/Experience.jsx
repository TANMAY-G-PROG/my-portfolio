// import React from 'react';
// import Icon from './Icon';

// const Experience = React.forwardRef((props, ref) => {
//     const experiences = [
//         {
//             role: 'Senior Software Engineer',
//             company: 'Tech Solutions Inc.',
//             period: 'Jan 2022 - Present',
//             description: 'Leading the development of a scalable microservices architecture. Mentoring junior developers and improving code quality across the team through CI/CD pipelines and automated testing.',
//         },
//         {
//             role: 'Full-Stack Developer',
//             company: 'Innovate Co.',
//             period: 'Jun 2019 - Dec 2021',
//             description: 'Developed and maintained client-facing web applications using the MERN stack. Collaborated with designers to implement responsive and pixel-perfect user interfaces.',
//         },
//         {
//             role: 'Software Engineer Intern',
//             company: 'Digital Creations',
//             period: 'May 2018 - Aug 2018',
//             description: 'Assisted the development team in building new features for their flagship product. Gained experience in an Agile environment and contributed to front-end and back-end tasks.',
//         },
//     ];
//     return (
//         <section ref={ref} id="experience" className="py-20 text-white">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work Experience</h2>
//                 <div className="relative">
//                     <div className="absolute left-1/2 -ml-0.5 w-1 bg-gray-700 h-full hidden md:block"></div>
//                     {experiences.map((exp, index) => (
//                         <div key={index} className="mb-12 flex justify-between items-center w-full"
//                              style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
//                             <div className="hidden md:block w-5/12"></div>
//                             <div className="z-10 hidden md:block">
//                                 <div className="bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center">
//                                     <Icon name="briefcase" className="w-5 h-5 text-white" />
//                                 </div>
//                             </div>
//                             <div className="bg-gray-900 rounded-lg shadow-xl w-full md:w-5/12 p-6">
//                                 <h3 className="text-xl font-bold text-indigo-400">{exp.role}</h3>
//                                 <p className="text-gray-400 mb-2">{exp.company} | {exp.period}</p>
//                                 <p className="text-gray-300">{exp.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// });

// export default Experience;

import React from 'react';
import Icon from './Icon';

const Experience = React.forwardRef((props, ref) => {
    const experience = {
        role: 'Generative AI Intern',
        company: 'HiDevs',
        // --- CHANGE 1: Timeline updated ---
        period: 'Feb 2025 - March 2025', 
        description: 'As a GenAI Intern, I developed and refined prompts for Large Language Models (LLMs), assisted in fine-tuning models for specific tasks, and integrated generative AI APIs into proof-of-concept applications to explore innovative use-cases.',
    };

    return (
        <section ref={ref} id="experience" className="px-4 text-white min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Work Experience</h2>

                {/* --- CHANGE 2: Width increased --- */}
                {/* The max-width is now larger, making the card wider on desktop. */}
                <div className="max-w-4xl mx-auto"> 
                    {/* --- CHANGE 3: Height increased via padding --- */}
                    {/* Padding is increased to make the card taller. */}
                    <div className="bg-[#111119] bg-opacity-50 border border-gray-800 rounded-xl p-8 md:p-10 hover:border-indigo-500/50 transition-colors duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-indigo-600/30 p-3 rounded-full"> {/* Increased padding here too */}
                                <Icon name="briefcase" className="w-7 h-7 text-indigo-300" /> {/* Slightly larger icon */}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">{experience.role}</h3> {/* Increased font size */}
                                <p className="text-gray-400">{experience.company} | {experience.period}</p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed"> {/* Increased font size */}
                            {experience.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Experience;