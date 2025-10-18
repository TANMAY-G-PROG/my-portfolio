// import React from 'react';

// const Projects = React.forwardRef((props, ref) => {
//     const projects = [
//         {
//             title: 'E-commerce Platform',
//             description: 'A full-featured e-commerce site with product management, user authentication, and a Stripe-integrated checkout process.',
//             tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
//             imageUrl: 'https://placehold.co/600x400/312e81/ffffff?text=E-commerce',
//             liveUrl: '#',
//             repoUrl: '#',
//         },
//         {
//             title: 'Task Management App',
//             description: 'A Kanban-style task manager with drag-and-drop functionality, real-time updates, and collaborative features.',
//             tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
//             imageUrl: 'https://placehold.co/600x400/4338ca/ffffff?text=Task+App',
//             liveUrl: '#',
//             repoUrl: '#',
//         },
//         {
//             title: 'Data Visualization Dashboard',
//             description: 'An interactive dashboard for visualizing complex datasets using D3.js, featuring dynamic charts and filtering options.',
//             tags: ['D3.js', 'React', 'Python', 'Flask'],
//             imageUrl: 'https://placehold.co/600x400/5b21b6/ffffff?text=Dashboard',
//             liveUrl: '#',
//             repoUrl: '#',
//         },
//     ];

//     return (
//         <section ref={ref} id="projects" className="py-20 text-white">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {projects.map((project, index) => (
//                         <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
//                             <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
//                             <div className="p-6">
//                                 <h3 className="text-xl font-bold mb-2 text-indigo-400">{project.title}</h3>
//                                 <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
//                                 <div className="flex flex-wrap gap-2 mb-4">
//                                     {project.tags.map(tag => (
//                                         <span key={tag} className="bg-gray-700 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
//                                     ))}
//                                 </div>
//                                 <div className="flex justify-end space-x-4 mt-4">
//                                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">Live Demo</a>
//                                     <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">GitHub</a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// });

// export default Projects;

import React from 'react';
const projects = [
    {
        title: 'TravelersBay',
        subtitle: 'Full Stack Web App',
        description: [
            'Secure travel listing platform for users to explore, post, and manage property listings.',
            'Built with Node.js, Express, MongoDB, and EJS.',
            'Implemented authentication, protected routes, and server-side validation for data integrity.'
        ],
        skills: ['Node.js', 'Express', 'MongoDB', 'EJS', 'REST APIs'],
        githubUrl: 'https://github.com/TANMAY-G-PROG/Major-Project1', // Replace with your actual GitHub link
        demoUrl: 'https://major-project-7dyy.onrender.com/listings',   // Replace with your actual Demo link
    },
    {
        title: 'Event Volunteering & Management Platform (E-PASS)',
        subtitle: 'Full Stack Web App',
        description: [
            'A web platform for event management and volunteer coordination.',
            'Features a JavaScript frontend, a Node.js/Express backend, and a PostgreSQL database.',
            'Includes admin controls to manage events, monitor registrations, and oversee volunteers.'
        ],
        skills: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'HTML/CSS'],
        githubUrl: 'https://github.com/TANMAY-G-PROG/EPASS', // Replace with your actual GitHub link
        demoUrl: 'https://epass-rff5.onrender.com/',   // Replace with your actual Demo link
    },
    {
        title: 'FlowBoard',
        subtitle: 'Academic Task Manager',
        description: [
            'A task management web app designed specifically for students and academics.',
            'Features include course-based task organization, deadline tracking, and progress visualization.',
            'Built with React for a fast, responsive UI and uses Firebase for real-time data synchronization.'
        ],
        skills: ['React', 'PostGreSql','WebSockets' , 'Tailwind CSS', 'State Management'],
        githubUrl: 'https://github.com/TANMAY-G-PROG/TASK-PROJECT', 
        demoUrl: 'https://flow-board-tawny.vercel.app/',   
    },
    // {
    //     title: 'Portfolio Website',
    //     subtitle: 'Personal Portfolio',
    //     description: [
    //         'A dynamic, single-page personal portfolio to showcase projects and skills.',
    //         'Built with React and styled with Tailwind CSS for a fully responsive design.',
    //         'Features interactive elements and animations to create an engaging user experience.'
    //     ],
    //     skills: ['React', 'Tailwind CSS', 'GSAP', 'Three.js'],
    //     githubUrl: '#', // Replace with your actual GitHub link
    //     demoUrl: '#',
    // }
];

const Projects = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} id="projects" className="min-h-screen flex flex-col justify-center text-white px-4 py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Projects</h2>

                {/* --- New 2-Column Project Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-[#111119] bg-opacity-50 border border-gray-800 rounded-xl p-6 flex flex-col h-full hover:border-indigo-500/50 transition-colors duration-300">
                            
                            {/* --- Card Header --- */}
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

                            {/* --- Description --- */}
                            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm mb-4">
                                {project.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>

                            {/* This pushes the skills and demo button to the bottom */}
                            <div className="flex-grow"></div>

                            {/* --- Skills & Demo Link --- */}
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
            </div>
        </section>
    );
});

export default Projects;