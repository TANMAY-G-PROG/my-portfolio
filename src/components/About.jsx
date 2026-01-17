import React from 'react';
import { ParticleCard } from './ParticleCard';

const About = React.forwardRef((props, ref) => {

    const resumeLink = "https://drive.google.com/file/d/1wyIq5Lb517rW-PmQmkJeM8KkN19c_knN/view?usp=drive_link";

    return (
        <section ref={ref} id="about" className="px-4 text-white min-h-screen flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>

               
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">

                    <div className="flex justify-center">
                        <img 
                            src="/tanmay.jpg"
                            alt="Tanmay G Shetty"
                            className="w-full max-w-sm aspect-square rounded-full object-cover border-4 border-indigo-500/50 shadow-2xl shadow-indigo-500/40"
                        />
                    </div>

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
                            
                            <ul className="list-disc list-inside space-y-2 text-base"> 
                                <li>3rd-year Information Technology student.</li>
                                <li>Skilled in backend with NodeJS/Express and frontend with React.</li>
                                <li>Experienced with databases like MySQL, PostgreSQL, and MongoDB.</li>
                                <li>Dedicated to building impactful projects as a versatile team player.</li>
                            </ul>

                            <div>
                                <h4 className="text-2xl font-semibold text-white mt-4 mb-3">Achievements</h4> {/* Changed from text-xl */}
                                <ul className="list-disc list-inside space-y-2 text-base"> 
                                    <li>Won a GenAI hackathon organised by the ACM Club in collaboration with HiDevs.</li>
                                    <li>GirlScript Summer of Code 2025 Contributor.</li>
                                    <li>Leetcode (max 1742 rating).</li>
                                </ul>
                            </div>

                            <p className="text-base mt-3">
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