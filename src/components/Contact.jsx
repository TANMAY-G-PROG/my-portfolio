// import React, { useState } from 'react';
// import Icon from './Icon';

// const Contact = React.forwardRef((props, ref) => {
//     const socialLinks = {
//         linkedin: 'https://www.linkedin.com/in/tanmaya-g-shetty/',
//         github: 'https://github.com/TANMAY-G-PROG',
//     };

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });
//     const [status, setStatus] = useState('');

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setStatus('Sending...');

//         const data = new FormData();
        
//         data.append('access_key', '2a755152-d332-43e7-813b-5955c5802829'); 
        
//         data.append('name', formData.name);
//         data.append('email', formData.email);
//         data.append('message', formData.message);
//         data.append('subject', `New Message from ${formData.name}`);

//         try {
//             const res = await fetch('https://api.web3forms.com/submit', {
//                 method: 'POST',
//                 body: data,
//             });

//             const result = await res.json();

//             if (result.success) {
//                 setStatus('Message sent successfully!');
//                 setFormData({ name: '', email: '', message: '' }); 
//             } else {
//                 setStatus('Error: Something went wrong.');
//             }
//         } catch (error) {
//             setStatus('Error: Could not send message.');
//         }

//         setTimeout(() => setStatus(''), 5000); 
//     };

//     return (
//         <section ref={ref} id="contact" className="min-h-screen flex flex-col justify-center text-white px-4 py-20">
//             <div className="container mx-auto max-w-2xl">
//                 <div className="text-center">
//                     <h2 className="text-3xl md:text-4xl font-bold mb-12">Get In Touch</h2>
//                 </div>

//                 <div className="bg-[#111119]/50 border border-gray-800 rounded-xl p-6 md:p-8 mb-12">
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         <div>
//                             <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
//                             <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
//                             <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
//                         </div>
//                         <div>
//                             <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
//                             <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange} className="block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
//                         </div>
//                         <div>
//                             <button type="submit" className="w-full flex justify-center py-.5 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-colors duration-300">
//                                 Send Message
//                             </button>
//                         </div>
//                     </form>
//                     {status && <p className="text-center mt-4 text-gray-300">{status}</p>}
//                 </div>

//                 <div className="text-center">
//                     <p className="text-lg text-gray-400 mb-6">Or connect with me here</p>
//                     <div className="grid grid-cols-2 gap-8">
//                         <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/50">
//                             <Icon name="github" className="w-8 h-8 text-gray-400 group-hover:text-indigo-400" />
//                             <span className="font-semibold text-lg">GitHub</span>
//                         </a>
//                         <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/50">
//                             <Icon name="linkedin" className="w-8 h-8 text-gray-400 group-hover:text-indigo-400" />
//                             <span className="font-semibold text-lg">LinkedIn</span>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// });

// export default Contact;

import React, { useState } from 'react';
import Icon from './Icon';

const Contact = React.forwardRef((props, ref) => {
    const socialLinks = {
        linkedin: 'https://www.linkedin.com/in/tanmaya-g-shetty/',
        github: 'https://github.com/TANMAY-G-PROG',
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const data = new FormData();
        data.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY); 
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('message', formData.message);
        data.append('subject', `New Message from ${formData.name}`);

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: data,
            });

            const result = await res.json();

            if (result.success) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Error: Something went wrong.');
            }
        } catch (error) {
            setStatus('Error: Could not send message.');
        }

        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section ref={ref} id="contact" className="min-h-screen flex flex-col justify-center text-white px-4 py-20 pb-28">
            <div className="container mx-auto max-w-6xl">
                
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
                </div>

                {/* --- NEW 2-COLUMN GRID LAYOUT --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* --- LEFT COLUMN: Contact Form --- */}
                    <div className="bg-[#111119]/50 border border-gray-800 rounded-xl p-6 md:p-8">
                        <h3 className="text-2xl font-bold mb-6">Leave a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                                <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange} className="block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-colors duration-300">
                                    Send Message
                                </button>
                            </div>
                        </form>
                        {status && <p className="text-center mt-4 text-gray-300">{status}</p>}
                    </div>

                    {/* --- RIGHT COLUMN: Social Links --- */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">Connect With Me</h3>
                        
                        {/* GitHub Link Card */}
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-6 rounded-lg transition-all duration-300 bg-[#111119]/50 border border-gray-800 hover:bg-gray-800/50 hover:border-indigo-500/50">
                            <Icon name="github" className="w-10 h-10 text-gray-400 transition-colors group-hover:text-indigo-400" />
                            <div>
                                <h4 className="font-semibold text-lg text-white">GitHub</h4>
                                <p className="text-sm text-gray-400">View my projects and contributions</p>
                            </div>
                        </a>

                        {/* LinkedIn Link Card */}
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-6 rounded-lg transition-all duration-300 bg-[#111119]/50 border border-gray-800 hover:bg-gray-800/50 hover:border-indigo-500/50">
                            <Icon name="linkedin" className="w-10 h-10 text-gray-400 transition-colors group-hover:text-indigo-400" />
                            <div>
                                <h4 className="font-semibold text-lg text-white">LinkedIn</h4>
                                <p className="text-sm text-gray-400">Connect with me professionally</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Contact;