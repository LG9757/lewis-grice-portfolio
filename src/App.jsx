import React, { useState } from 'react';
import { User, Briefcase, FolderOpen, Award, MessageSquare } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return (
          <div className="animate-fadeIn">
            <div className="content-card">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Overview</h1>
              <p className="text-gray-600 text-lg">Welcome to my professional portfolio.</p>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="animate-fadeIn">
            <div className="content-card">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Experience</h1>
              <p className="text-gray-600 text-lg">This section will showcase my professional experience.</p>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="animate-fadeIn">
            <div className="content-card">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
              <p className="text-gray-600 text-lg">Here I will display my past and ongoing projects.</p>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="animate-fadeIn">
            <div className="content-card">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills</h1>
              <p className="text-gray-600 text-lg">This section will outline my key skills and competencies.</p>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="animate-fadeIn">
            <div className="content-card">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
              <p className="text-gray-600 text-lg">Contact information available here.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="text-2xl font-bold gradient-text">
              Lewis Grice
            </div>
            
            {/* Navigation - Always Visible */}
            <div className="flex items-center space-x-2">
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
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

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="transition-all duration-500 ease-in-out">
          {renderSection()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="px-6 py-6">
          <div className="text-center text-gray-600 text-sm">
            © 2025 Lewis Grice.
          </div>
        </div>
      </footer>

      {/* Custom CSS for styling and animations */}
      <style jsx>{`
        /* Reset and base styles */
        * {
          box-sizing: border-box;
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

        .sticky {
          position: sticky;
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
      `}</style>
    </div>
  );
};

export default Portfolio;