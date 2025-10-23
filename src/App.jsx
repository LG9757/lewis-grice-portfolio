import React, { useState, useEffect } from 'react';
import { User, FolderOpen, Award, MessageSquare, ChevronDown } from 'lucide-react';
import './App.css';

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
import f1strategyImg from "./assets/f1 strategy.png";

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
                <p className="hero-subtitle">Computer Science and AI Student | Aspiring Computer Scientist</p>
              </div>
            </div>
            <div className="content-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
              <p className="text-gray-600 text-lg mb-4">I’m a 3rd year Computer Science and AI student at the University of Bath. I am passionate about machine learning, problem solving, and building impactful software. Some of my highlights include a spam filter model with 94% accuracy and group projects such as a budgeting web app. Outside of academics, I enjoy fitness, travelling, and meeting new people. I’m seeking an industrial placement year to further develop my skills.</p>
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
                  <h2 className="project-title">Personal Portfolio Website</h2>
                  
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
                    <img src={githubLogo} alt="GitHub" className="github-icon" />
                    View on GitHub
                  </a>

                </div>
              </div>
            </div>

            <div className="content-card">
              <div className="project-block reverse">
                <div className="project-image-container">
                  <img
                    src={f1strategyImg}
                    alt="F1 Strategy"
                    className="project-image"
                  />
                </div>
                
                <div className="project-content">
                  <h2 className="project-title">F1 Strategy model</h2>
                  
                  <div className="project-section">
                    <h3 className="project-subheading">Description</h3>
                    <p className="project-text">
                      This project is a machine learning model that predicts the optimal strategy for Formula 1 races. I did it to enhance my skills in data analysis and machine learning, and use xgboost for the first time as well as experiment with techniques for hyperparameter tuning.
                    </p>
                  </div>
                  
                  <div className="project-section">
                    <h3 className="project-subheading">Skills Used</h3>
                    <p className="project-text">
                      Python, Pandas, XGBoost, Matplotlib, SKLearn
                    </p>
                  </div>
                  
                  <div className="project-section">
                    <h3 className="project-subheading">Future Work</h3>
                    <p className="project-text">
                      I plan to further improve this model by experimenting with different algorithms, to improve accuracy and eventually add handling for wet weather tyres.
                    </p>
                  </div>
                  
                  <a 
                    href="https://github.com/LG9757/f1-strategy-model" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="github-link"
                  >
                    <img src={githubLogo} alt="GitHub" className="github-icon" />
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
                    <li>F1 Strategy Model</li>
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
                    <li>Personal Portfolio Website</li>
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

    </div>

    
  );
};

export default Portfolio;