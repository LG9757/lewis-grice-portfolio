import React, { useState, useEffect } from 'react';
import { User, FolderOpen, Award, MessageSquare, ChevronDown } from 'lucide-react';

import portfolioImg from "./assets/portfolio.png";
import pythonLogo from "./assets/python logo.png";
import htmlLogo from "./assets/HTML5 logo.png";
import cssLogo from "./assets/CSS3 logo.png";
import javascriptLogo from "./assets/JavaScript logo.png";
import javaLogo from "./assets/Java logo.png";
import tensorflowLogo from "./assets/TensorFlow logo.png";
import typescriptLogo from "./assets/TypeScript.png";
import reactLogo from "./assets/React logo.png";
import nodejsLogo from "./assets/Nodejs logo.png";
import haskellLogo from "./assets/Haskell logo.png";
import linkedinLogo from "./assets/linkedin logo.png";
import githubLogo from "./assets/github logo.png";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const sections = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    const serviceID = 'service_8crgin3';
    const templateID = 'template_glhbr1h';
    const publicKey = 'ZNsqzrpzLvjkGnzYn';

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publicKey,
          template_params: {
            from_name: name,
            from_email: email,
            message: message,
          },
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const errorText = await response.text();
        alert('Failed to send message. ' + errorText);
        console.error('Error response:', errorText);
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 fixed top-0 z-50 shadow-sm" style={{left: 0, right: 0}}>
        <div className="nav-container">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold gradient-text">
              Lewis Grice
            </div>
            
            <div className="flex items-center space-x-2">
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
                  >
                    <IconComponent size={16} className="icon" />
                    {section.label}
                    {activeSection === section.id && (
                      <div className="pulse-overlay"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <main className="main-container main-content-padding py-8">
        <section id="overview" className="section-container">
          <div className="animate-fadeIn">
            <div className="hero-section">
              <div className="profile-container">
                <div className="profile-icon-wrapper">
                  <User size={120} className="profile-icon" />
                </div>
                <h1 className="hero-title">Hi, I'm Lewis</h1>
                <p className="hero-subtitle">Computer Science and AI Student | Aspiring Software Developer</p>
              </div>
            </div>
            <div className="content-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
              <p className="text-gray-600 text-lg mb-4">I’m a 3rd year Computer Science and AI student at the University of Bath, passionate about machine learning, problem solving, and building impactful software. Some of my highlights include a spam filter model with 94% accuracy and group projects such as a budgeting web app. Outside of academics, I enjoy fitness, travelling, and meeting new people. I’m seeking a summer internship to further develop my skills.</p>
            </div>
            <button onClick={() => scrollToSection('projects')} className="next-section-btn">
              <span>View Projects</span>
              <ChevronDown size={24} className="chevron-icon" />
            </button>
          </div>
        </section>

        <section id="projects" className="section-container">
          <div className="animate-fadeIn">
            <h1 className="section-title">Projects</h1>
            
            <div className="content-card">
              <div className="project-block">
                <div className="project-image-container">
                  <img
                    src={portfolioImg}
                    alt="Portfolio"
                    className="project-image"
                  />
                </div>
                
                <div className="project-content">
                  <h2 className="project-title">Lewis Grice Portfolio</h2>
                  
                  <div className="project-section">
                    <h3 className="project-subheading">Description</h3>
                    <p className="project-text">
                      This project is the one you're on right now! It's a personal portfolio website intended to showcase my projects, skills, contact information, and a bit about me.
                    </p>
                  </div>
                  
                  <div className="project-section">
                    <h3 className="project-subheading">Skills Used</h3>
                    <p className="project-text">
                      React, JavaScript, HTML, CSS, Git
                    </p>
                  </div>
                  
                  <div className="project-section">
                    <h3 className="project-subheading">Future Work</h3>
                    <p className="project-text">
                      I plan to continuously improve this website by adding new projects as I do them, refining the design, adding a new "About Me" section to show everything I do outside academics, and I plan to create a booking system for the tutoring I do.
                    </p>
                  </div>
                  
                  <a 
                    href="https://github.com/LG9757/lewis-grice-portfolio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <svg 
                      className="github-icon" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
            
            <button onClick={() => scrollToSection('skills')} className="next-section-btn">
              <span>My Skills</span>
              <ChevronDown size={24} className="chevron-icon" />
            </button>
          </div>
        </section>

        <section id="skills" className="section-container">
          <div className="animate-fadeIn">
            <h1 className="section-title">Skills</h1>
            
            <div className="skills-grid">
              <div className="skill-card">
                <img src={pythonLogo} alt="Python" className="skill-logo" />
                <p className="skill-name">Python</p>

                <div className="skill-tooltip">
                  <h4 className="tooltip-heading">Used In</h4>
                  <ul className="tooltip-list">
                    <li>Spam Filter</li>
                    <li>Mastermind Game</li>
                    <li>Rainfall Predictor (ML Model)</li>
                    <li>Lossy Encoding (ML Model)</li>
                    <li>Various Visual Computing Tasks</li>
                  </ul>
                </div>
              </div>
              
              <div className="skill-card">
                <img src={htmlLogo} alt="HTML" className="skill-logo" />
                <p className="skill-name">HTML</p>

                <div className="skill-tooltip">
                  <h4 className="tooltip-heading">Used In</h4>
                  <ul className="tooltip-list">
                    <li>Personal Portfolio Website</li>
                    <li>Budgeting Web App (Group)</li>
                    <li>Allergy Tracking App (Group)</li>
                  </ul>
                </div>
              </div>
              
              <div className="skill-card">
                <img src={cssLogo} alt="CSS" className="skill-logo" />
                <p className="skill-name">CSS</p>

                <div className="skill-tooltip">
                  <h4 className="tooltip-heading">Used In</h4>
                  <ul className="tooltip-list">
                    <li>Personal Portfolio Website</li>
                    <li>Budgeting Web App (Group)</li>
                    <li>Allergy Tracking App (Group)</li>
                  </ul>
                </div>
              </div>
              
              <div className="skill-card">
                <img src={javascriptLogo} alt="JavaScript" className="skill-logo" />
                <p className="skill-name">JavaScript</p>

                <div className="skill-tooltip">
                  <h4 className="tooltip-heading">Used In</h4>
                  <ul className="tooltip-list">
                    <li>Personal Portfolio Website</li>
                  </ul>
                </div>
              </div>
              
              <div className="skill-card">
                <img src={javaLogo} alt="Java" className="skill-logo" />
                <p className="skill-name">Java</p>

                <div className="skill-tooltip">
                  <h4 className="tooltip-heading">Used In</h4>
                  <ul className="tooltip-list">
                    <li>Various Object-Oriented Programming Tasks</li>
                  </ul>
                </div>
              </div>
              
              <div className="skill-card">
                <img src={tensorflowLogo} alt="TensorFlow" className="skill-logo" />
                <p className="skill-name">TensorFlow</p>

                <div className="skill-tooltip">
                  <h4 className="tooltip-heading">Used In</h4>
                  <ul className="tooltip-list">
                    <li>Rainfall Predictor (ML Model)</li>
                    <li>Lossy Encoding (ML Model)</li>
                  </ul>
                </div>
              </div>
              
              <div className="skill-card">
                <img src={typescriptLogo} alt="TypeScript" className="skill-logo" />
                <p className="skill-name">TypeScript</p>

                <div className="skill-tooltip">
                  <h4 className="tooltip-heading">Used In</h4>
                  <ul className="tooltip-list">
                    <li>Budgeting Web App (Group)</li>
                    <li>Allergy Tracking App (Group)</li>
                  </ul>
                </div>
              </div>
              
              <div className="skill-card">
                <img src={reactLogo} alt="React" className="skill-logo" />
                <p className="skill-name">React</p>

                <div className="skill-tooltip">
                  <h4 className="tooltip-heading">Used In</h4>
                  <ul className="tooltip-list">
                    <li>Personal Portfolio Website</li>
                    <li>Budgeting Web App (Group)</li>
                    <li>Allergy Tracking App (Group)</li>
                  </ul>
                </div>
              </div>
              
              <div className="skill-card">
                <img src={nodejsLogo} alt="Node.js" className="skill-logo" />
                <p className="skill-name">Node.js</p>

                <div className="skill-tooltip">
                  <h4 className="tooltip-heading">Used In</h4>
                  <ul className="tooltip-list">
                    <li>Budgeting Web App (Group)</li>
                    <li>Allergy Tracking App (Group)</li>
                  </ul>
                </div>
              </div>

              <div className="skill-card">
                <img src={haskellLogo} alt="Haskell" className="skill-logo" />
                <p className="skill-name">Haskell</p>

                <div className="skill-tooltip">
                  <h4 className="tooltip-heading">Used In</h4>
                  <ul className="tooltip-list">
                    <li>Role-Playing Game</li>
                  </ul>
                </div>
              </div>

            </div>
            
            <button onClick={() => scrollToSection('contact')} className="next-section-btn">
              <span>Get In Touch</span>
              <ChevronDown size={24} className="chevron-icon" />
            </button>
          </div>
        </section>
        <section id="contact" className="section-container">
          <div className="animate-fadeIn">
            <h1 className="section-title">Contact</h1>
            <div className="content-card">
              <div className="contact-form">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  maxLength={40}
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  maxLength={256}
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  maxLength={500}
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ height: '150px' }}
                />
                <div className="message-count">{message.length}/500</div>

                <button type="button" onClick={handleSubmit}>Send</button>
              </div>
            </div>
            <div className="social-links">
                <a 
                  href="https://github.com/LG9757" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img src={githubLogo} alt="GitHub" className="social-logo" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/lewis-grice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img src={linkedinLogo} alt="LinkedIn" className="linkedin-logo" />
                </a>
              </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="px-6 py-6">
          <div className="text-center text-gray-600 text-sm">
            © 2025 Lewis Grice
          </div>
        </div>
      </footer>

      <style jsx>{`
      /* Reset and base styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 5rem;
        }

        html, body {
          width: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        #root {
          width: 100%;
          margin: 0;
          padding: 0;
        }

        /* Navigation container */
        .nav-container {
          width: 100%;
          max-width: none;
          margin: 0 auto;
          padding-left: 3rem;
          padding-right: 3rem;
        }

        /* Section container */
        .section-container {
          min-height: 100vh;
          padding-top: 2rem;
          padding-bottom: 2rem;
        }

        /* Layout styles */
        .min-h-screen {
          min-height: 100vh;
        }

        .bg-gray-50 {
          background-color: #f9fafb;
        }

        .bg-white {
          background-color: #ffffff;
        }

        .bg-gray-100 {
          background-color: #f3f4f6;
        }

        .text-gray-900 {
          color: #111827;
        }

        .text-gray-600 {
          color: #4b5563;
        }

        .border-b {
          border-bottom-width: 1px;
        }

        .border-t {
          border-top-width: 1px;
        }

        .border-gray-200 {
          border-color: #e5e7eb;
        }

        .shadow-sm {
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        }

        .shadow-lg {
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.1);
        }

        .fixed {
          position: fixed;
        }

        .top-0 {
          top: 0;
        }

        .z-50 {
          z-index: 50;
        }

        .max-w-full {
          max-width: 100%;
        }

        .w-full {
          width: 100%;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .px-6 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        .px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .py-8 {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }

        .py-6 {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
        }

        .py-2 {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }

        .p-8 {
          padding: 2rem;
        }

        .mb-6 {
          margin-bottom: 1.5rem;
        }

        .mb-4 {
          margin-bottom: 1rem;
        }

        .mt-16 {
          margin-top: 4rem;
        }

        .flex {
          display: flex;
        }

        .items-center {
          align-items: center;
        }

        .justify-between {
          justify-content: space-between;
        }

        .space-x-2 > * + * {
          margin-left: 0.5rem;
        }

        .gap-2 {
          gap: 0.5rem;
        }

        .h-16 {
          height: 4rem;
        }

        .text-2xl {
          font-size: 1.5rem;
          line-height: 2rem;
        }

        .text-4xl {
          font-size: 2.25rem;
          line-height: 2.5rem;
        }

        .text-lg {
          font-size: 1.125rem;
          line-height: 1.75rem;
        }

        .text-sm {
          font-size: 0.875rem;
          line-height: 1.25rem;
        }

        .font-bold {
          font-weight: 700;
        }

        .font-medium {
          font-weight: 500;
        }

        .text-center {
          text-align: center;
        }

        .rounded-lg {
          border-radius: 0.5rem;
        }

        .relative {
          position: relative;
        }

        .absolute {
          position: absolute;
        }

        .inset-0 {
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }

        /* Custom gradient text */
        .gradient-text {
          background: linear-gradient(to right, #2563eb, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Navigation button styles */
        .nav-button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
          transform-origin: center;
          color: #4b5563;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }

        .nav-button:hover {
          color: #111827;
          background-color: #f3f4f6;
          transform: scale(1.05);
        }

        .nav-button.active {
          background: linear-gradient(to right, #3b82f6, #7c3aed);
          color: white;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.1);
        }

        .nav-button .icon {
          transition: transform 0.3s ease;
        }

        .nav-button:hover .icon {
          transform: rotate(12deg);
        }

        .nav-button.active .pulse-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to right, #3b82f6, #7c3aed);
          border-radius: 0.5rem;
          opacity: 0.2;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Main content container */
        .main-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding-left: 3rem;
          padding-right: 3rem;
        }

        /* Add padding to account for fixed header */
        .main-content-padding {
          padding-top: 5rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(to right, #2563eb, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 2rem;
          text-align: left;
          
          /* Prevent clipping */
          line-height: 1.2;
          padding-bottom: 0.5rem;
        }


        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
        }


        /* Content card styles */
        .content-card {
          background-color: #ffffff;
          border-radius: 0.5rem;
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          padding: 2rem;
          margin-bottom: 1.5rem;
          width: 100%;
          max-width: none;
        }

        /* Next section button */
        .next-section-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          margin: 3rem auto;
          padding: 1rem 2rem;
          background: linear-gradient(to right, #3b82f6, #7c3aed);
          color: white;
          border: none;
          border-radius: 9999px;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06);
        }

        .next-section-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.1);
        }

        .chevron-icon {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        /* Hero section styles */
        .hero-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 1rem;
          padding: 4rem 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04);
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: float 20s ease-in-out infinite;
        }

        .profile-container {
          position: relative;
          z-index: 1;
          text-align: center;
          animation: slideUp 0.8s ease-out;
        }

        .profile-icon-wrapper {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 3px solid rgba(255, 255, 255, 0.3);
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .profile-icon {
          color: white;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 500;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 0 30px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 0 50px rgba(255, 255, 255, 0.5);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.125rem;
          }

          .profile-icon-wrapper {
            padding: 1.5rem;
          }
        }

        /* Animation keyframes */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        /* Transition styles */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .duration-300 {
          transition-duration: 300ms;
        }

        .duration-500 {
          transition-duration: 500ms;
        }

        .ease-in-out {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      /* Project Block Styles */
      .project-block {
        display: flex;
        background: white;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06);
        margin-bottom: 2rem;
        min-height: 500px;
        position: relative;
      }

      .project-image-container {
        flex: 0 0 50%;
        position: relative;
        overflow: hidden;
      }

      .project-image-container::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        height: 100%;
        background: white;
        border-radius: 50% 0 0 50%;
        transform: translateX(50%);
        z-index: 1;
      }

      .project-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .project-content {
        flex: 1;
        padding: 3rem 3rem 2rem 4rem;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 2;
      }

      .project-title {
        font-size: 2rem;
        font-weight: 700;
        color: #111827;
        margin-bottom: 2rem;
        background: linear-gradient(to right, #2563eb, #7c3aed);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .project-section {
        margin-bottom: 1.5rem;
      }

      .project-subheading {
        font-size: 1.125rem;
        font-weight: 600;
        color: #374151;
        margin-bottom: 0.5rem;
      }

      .project-text {
        font-size: 1rem;
        color: #6b7280;
        line-height: 1.6;
      }

      .github-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: auto;
        padding: 0.75rem 1.5rem;
        background: linear-gradient(to right, #3b82f6, #7c3aed);
        color: white;
        text-decoration: none;
        border-radius: 0.5rem;
        font-weight: 600;
        transition: all 0.3s ease;
        align-self: flex-start;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
      }

      .github-link:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
      }

      .github-icon {
        width: 24px;
        height: 24px;
      }

      /* Responsive Design */
      @media (max-width: 968px) {
        .project-block {
          flex-direction: column;
          min-height: auto;
        }
        
        .project-image-container {
          flex: 0 0 300px;
        }
        
        .project-image-container::after {
          width: 100%;
          height: 80px;
          bottom: 0;
          right: auto;
          left: 0;
          top: auto;
          border-radius: 50% 50% 0 0;
          transform: translateY(50%);
        }
        
        .project-content {
          padding: 3rem 2rem 2rem 2rem;
        }
      }

      /* Skills Grid Styles */
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 2rem;
        max-width: 900px;
        margin: 0 auto 3rem;
        padding: 2rem 0;
      }

      .skill-card {
        background: transparent;
        border: 3px solid;
        border-image: linear-gradient(135deg, #3b82f6, #7c3aed) 1;
        border-radius: 1rem;
        padding: 2rem 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        min-height: 150px;
      }

      /* Skill Logo Styles */
      .skill-logo {
        width: 128px;
        height: 128px;
        object-fit: contain;
        transition: opacity 0.3s ease;
      }

      /* Skill Name Styles */
      .skill-name {
        font-size: 1.1rem;
        font-weight: 600;
        color: #60a5fa;
        text-align: center;
        transition: opacity 0.3s ease;
      }

      /* Skill Tooltip Styles */
      .skill-tooltip {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(124, 58, 237, 0.95));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        border-radius: 1rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 10;
      }

      .skill-card:hover .skill-tooltip {
        opacity: 1;
        visibility: visible;
      }

      .skill-card:hover .skill-logo,
      .skill-card:hover .skill-name {
        opacity: 0;
      }

      .tooltip-heading {
        font-size: 1.25rem;
        font-weight: 700;
        color: white;
        margin: 0 0 1rem 0;
        text-align: center;
      }

      .tooltip-list {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
      }

      .tooltip-list li {
        color: white;
        font-size: 0.5rem;
        padding: 0.5rem 0;
        position: relative;
        padding-left: 1.5rem;
        text-align: left;
      }

      .tooltip-list li::before {
        content: '•';
        position: absolute;
        left: 0;
        font-size: 1.2rem;
        line-height: 1;
      }

      /* Mobile tooltip adjustments */
      @media (max-width: 768px) {
        .skill-tooltip {
          padding: 1rem;
        }
        
        .tooltip-heading {
          font-size: 1rem;
          margin-bottom: 0.75rem;
        }
        
        .tooltip-list li {
          font-size: 0.85rem;
          padding: 0.4rem 0;
          padding-left: 1.2rem;
        }
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .skills-grid {
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1.5rem;
          padding: 1rem 0;
        }
        
        .skill-card {
          padding: 1.5rem 1rem;
          min-height: 130px;
        }
        
        .skill-logo {
          width: 48px;
          height: 48px;
        }
        
        .skill-name {
          font-size: 1rem;
        }
      }

      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 500px;
        margin: auto;
        background-color: #f4f4f4ff;
        padding: 2rem;
        border-radius: 0.5rem;
      }

      .contact-form label {
        font-weight: 600;
        color: #333;
        margin-bottom: 0.25rem;
      }

      .contact-form input[type="text"],
      .contact-form input[type="email"],
      .contact-form textarea {
        padding: 0.75rem 1rem;
        font-size: 1rem;
        border: 2px solid #ccc;
        border-radius: 0.5rem;
        resize: vertical;
        background-color: #e5e5e5;
        color: #000000;
      }

      .contact-form input[type="text"]::placeholder,
      .contact-form input[type="email"]::placeholder,
      .contact-form textarea::placeholder {
        color: #6c6c6cff;
      }

      .contact-form input[type="text"]:focus,
      .contact-form input[type="email"]:focus,
      .contact-form textarea:focus {
        outline: none;
        border-color: #7c3aed;
      }

      .contact-form textarea {
        height: 150px;
        min-height: 150px;
        max-height: 300px;
      }

      .message-count {
        font-size: 0.85rem;
        color: #666666ff;
        text-align: right;
        margin-top: -0.5rem;
      }

      .contact-form button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        background: linear-gradient(to right, #3b82f6, #7c3aed);
        border: none;
        border-radius: 0.5rem;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 600;
        margin-top: 0.5rem;
      }

      .contact-form button:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
      }


        @media (max-width: 968px) {
          .project-block {
            flex-direction: column;
            min-height: auto;
          }
          
          .project-image-container {
            flex: 0 0 300px;
          }
          
          .project-content {
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.125rem;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1.5rem;
          }
          
          .skill-card {
            padding: 1.5rem 1rem;
            min-height: 130px;
          }
        }

      /* Social Links Styles */
      .social-links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 2px solid #e5e7eb;
      }

      .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #3b82f6, #7c3aed);
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
      }

      .social-link:hover {
        transform: translateY(-4px) scale(1.1);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2);
      }

      .social-logo {
        width: 32px;
        height: 32px;
        object-fit: contain;
        filter: brightness(0) invert(1);
      }
      .linkedin-logo {
        width: 64px;
        height: 64px;
        object-fit: contain;
        filter: brightness(0) invert(1);
      }
      `}</style>
    </div>

    
  );
};

export default Portfolio;