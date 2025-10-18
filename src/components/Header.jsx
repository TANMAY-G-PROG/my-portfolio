import React from 'react';
import Icon from './Icon';

const Header = ({ navLinks, activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
    return (
        <header className="bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-3xl font-bold text-white transition-colors duration-300 hover:text-indigo-400">
                           Tanmay G Shetty
                        </a>
                    </div>
                    <nav className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {/* --- THIS LOGIC IS UPDATED TO HANDLE THE RESUME LINK --- */}
                            {navLinks.map((link) => (
                                link.external ? (
                                    // If it's an external link (like the resume), render this
                                    <a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-md text-base font-medium transition-all duration-300 text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        {link.title}
                                    </a>
                                ) : (
                                    // Otherwise, render the normal internal scrolling link
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                                        className={`px-4 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                                            activeSection === link.id
                                                ? 'bg-indigo-600 text-white'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }`}
                                    >
                                        {link.title}
                                    </a>
                                )
                            ))}
                        </div>
                    </nav>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <Icon name="x" className="block h-6 w-6" /> : <Icon name="menu" className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {/* --- SAME LOGIC UPDATED FOR THE MOBILE MENU --- */}
                        {navLinks.map((link) => (
                            link.external ? (
                                <a
                                    key={link.id}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    {link.title}
                                </a>
                            ) : (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                                        activeSection === link.id
                                            ? 'bg-indigo-600 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                                >
                                    {link.title}
                                </a>
                            )
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;