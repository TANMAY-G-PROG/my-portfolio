import React from 'react';
import BlurText from './BlurText';    
const Home = React.forwardRef(({ scrollToSection }, ref) => {
    return (
        <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center text-white px-4 overflow-hidden">
           
            {/* --- Animated Text Content --- */}
            <div className="relative z-10 text-center px-4 flex flex-col items-center">
                <BlurText
                    text="Hi, I'm Tanmay"
                    className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
                    delay={150}
                    animateBy="words"
                    direction="top"
                />

                <BlurText
                    text="A Passionate Full-Stack Developer & AI/ML Enthusiast"
                    className="text-lg md:text-2xl text-indigo-300 mb-8 font-light max-w-2xl"
                    delay={100}
                    animateBy="words"
                    direction="top"
                />

                <div className="space-x-4">
                    <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 text-lg">
                        View My Work
                    </a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300 text-lg">
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
});

export default Home;