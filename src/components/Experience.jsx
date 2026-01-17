import React, { useState, useEffect } from 'react';
import Icon from './Icon';

const Experience = React.forwardRef((props, ref) => {
    const [experienceData, setExperienceData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/experience")
            .then((res) => res.json())
            .then((data) => setExperienceData(data))
            .catch((err) => console.error("Error fetching experience:", err));
    }, []);

    return (
        <section ref={ref} id="experience" className="px-4 text-white min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Work Experience</h2>

                <div className="max-w-4xl mx-auto space-y-8"> 
                    {experienceData.map((exp, index) => (
                        <div key={exp.id || index} className="bg-[#111119] bg-opacity-50 border border-gray-800 rounded-xl p-8 md:p-10 hover:border-indigo-500/50 transition-colors duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-indigo-600/30 p-3 rounded-full">
                                    <Icon name="briefcase" className="w-7 h-7 text-indigo-300" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                    <p className="text-gray-400">{exp.company} | {exp.period}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Experience;