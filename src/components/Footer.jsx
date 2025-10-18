// import React from 'react';
// import Icon from './Icon';

// const Footer = () => {
//     return (
//         <footer className="bg-gray-800">
//             <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
//                  <div className="flex justify-center space-x-6 mb-4">
//                     <a href="#" className="text-gray-400 hover:text-white transition-colors"><Icon name="github" className="w-6 h-6"/></a>
//                     <a href="#" className="text-gray-400 hover:text-white transition-colors"><Icon name="linkedin" className="w-6 h-6"/></a>
//                     <a href="#" className="text-gray-400 hover:text-white transition-colors"><Icon name="twitter" className="w-6 h-6"/></a>
//                     <a href="#" className="text-gray-400 hover:text-white transition-colors"><Icon name="mail" className="w-6 h-6"/></a>
//                 </div>
//                 <p>&copy; {new Date().getFullYear()} Jane Doe. All Rights Reserved.</p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from 'react';
import Icon from './Icon';

const Footer = () => {
    // --- Add Your Social Links Here ---
    const socialLinks = {
        email: 'tanmay.121cr7@gmail.com',
        linkedin: 'https://www.linkedin.com/in/tanmaya-g-shetty/',
        github: 'https://github.com/TANMAY-G-PROG',
    };

    return (
        <footer className="py-20 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                
                {/* --- Title and Subtitle --- */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-lg text-gray-400">
                        Feel free to reach out anytime—for projects, ideas, or a simple hello!
                    </p>
                </div>

                {/* --- Icon Links Container --- */}
                <div className="bg-[#111119]/50 border border-gray-800 rounded-2xl p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        {/* Email Link */}
                        <a href={socialLinks.email} className="group flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                            <Icon name="mail" className="w-8 h-8 text-gray-400 transition-colors group-hover:text-indigo-400" />
                            <span className="font-semibold text-lg">Email</span>
                        </a>

                        {/* LinkedIn Link */}
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                             <Icon name="linkedin" className="w-8 h-8 text-gray-400 transition-colors group-hover:text-indigo-400" />
                            <span className="font-semibold text-lg">LinkedIn</span>
                        </a>

                        {/* GitHub Link */}
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                            <Icon name="github" className="w-8 h-8 text-gray-400 transition-colors group-hover:text-indigo-400" />
                            <span className="font-semibold text-lg">GitHub</span>
                        </a>

                    </div>
                </div>
                 <div className="text-center text-gray-500 mt-12">
                    <p>&copy; {new Date().getFullYear()} Tanmay G Shetty. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;