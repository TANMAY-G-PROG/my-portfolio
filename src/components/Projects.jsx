import React, { useState, useEffect } from 'react';

const Projects = React.forwardRef((props, ref) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
    useEffect(() => {
        fetch(`${API_URL}/api/projects`)
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching projects:", err);
                setLoading(false);
            });
    }, []);

    return (
        <section ref={ref} id="projects" className="min-h-screen flex flex-col justify-center text-white px-4 py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Projects</h2>

                {loading ? (
                    <div className="text-center text-indigo-400">Loading dynamic projects...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={project.id || index} className="bg-[#111119] bg-opacity-50 border border-gray-800 rounded-xl p-6 flex flex-col h-full hover:border-indigo-500/50 transition-colors duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                        <p className="text-sm text-gray-400">{project.subtitle}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub Repository" className="text-gray-400 hover:text-white transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                    </div>
                                </div>

                                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm mb-4">
                                    {project.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>

                                <div className="flex-grow"></div>

                                <div className="mt-auto pt-4">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.skills.map(skill => (
                                            <span key={skill} className="bg-gray-800 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full">{skill}</span>
                                        ))}
                                    </div>
                                    <a href={project.demoUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-gray-800 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                                        View Demo
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
});

export default Projects;