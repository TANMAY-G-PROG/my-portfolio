// import React from 'react';
// import Icon from './Icon';

// const BottomNav = ({ navLinks, activeSection, scrollToSection }) => {
//     return (
//         <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
//             <div className="flex items-center gap-4 bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-full px-6 py-2">
//                 {navLinks.map((link) => (
//                     <a
//                         key={link.id}
//                         href={link.external ? link.url : `#${link.id}`}
//                         target={link.external ? '_blank' : '_self'}
//                         rel={link.external ? 'noopener noreferrer' : ''}
//                         onClick={(e) => {
//                             if (!link.external) {
//                                 e.preventDefault();
//                                 scrollToSection(link.id);
//                             }
//                         }}
//                         className={`relative p-4 rounded-full transition-all duration-300 group ${
//                             activeSection === link.id
//                                 ? 'bg-indigo-600 text-white'
//                                 : 'text-gray-400 hover:text-white'
//                         }`}
//                         title={link.title} 
//                     >
//                         <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
//                              <Icon name={link.icon} className="w-6 h-6" />
//                         </div>
//                     </a>
//                 ))}
//             </div>
//         </nav>
//     );
// };

// export default BottomNav;

import React from 'react';
import Icon from './Icon';

const BottomNav = ({ navLinks, activeSection, scrollToSection }) => {
    return (
        <nav className="fixed bottom-4 left-0 right-0 px-4 z-50">
            
            <div className="max-w-md mx-auto flex items-center justify-around 
                            bg-gray-900/60 backdrop-blur-md border border-gray-700 
                            rounded-full py-2">

                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(link.id);
                        }}
                        className={`p-3 rounded-full transition-all duration-300 ${
                            activeSection === link.id
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        <Icon name={link.icon} className="w-5 h-5" />
                    </a>
                ))}

            </div>

        </nav>
    );
};

export default BottomNav;
