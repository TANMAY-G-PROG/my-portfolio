import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Home from './components/Home';
import About from './components/About';
import Terminal from './components/Terminal';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import LiquidEther from './components/LiquidEther';
import AdminDashboard from './components/AdminDashboard';

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');
  
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    contact: useRef(null),
  };

  const navLinks = [
    { id: 'home', title: 'Home', icon: 'home' },
    { id: 'about', title: 'About', icon: 'user' },
    { id: 'skills', title: 'Skills', icon: 'code' },
    { id: 'projects', title: 'Projects', icon: 'layers' },
    { id: 'experience', title: 'Experience', icon: 'briefcase' },
    { id: 'contact', title: 'Contact', icon: 'mail' },
  ];

  const scrollToSection = (id) => {
    sectionRefs[id].current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' } 
    );

    const refs = Object.values(sectionRefs);
    refs.forEach((ref) => {
      if (ref.current) { observer.observe(ref.current); }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) { observer.unobserve(ref.current); }
      });
    };
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="fixed inset-0 z-0">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={15}
          cursorSize={80}
          resolution={0.25}
          iterationsViscous={12}
          iterationsPoisson={12}
          autoDemo={true}
          autoSpeed={0.4}
        />
      </div>

      <div className="relative z-10">
        <main>
          <Home ref={sectionRefs.home} scrollToSection={scrollToSection}/>
          <Terminal sections={sectionRefs} />
          <About ref={sectionRefs.about} />
          <Skills ref={sectionRefs.skills} />
          <Projects ref={sectionRefs.projects} />
          <Experience ref={sectionRefs.experience} />
          <Contact ref={sectionRefs.contact} />
        </main>
      </div>
      
      <BottomNav 
        navLinks={navLinks}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
    </div>
  );
}

function App() {
  const isAuthenticated = !!localStorage.getItem("admin_token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />

        <Route 
          path="/admin" 
          element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/" />} 
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;