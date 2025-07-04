import React from 'react';
import { Calculator, Github, Heart, ExternalLink, Home } from 'lucide-react';

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, setCurrentPage }) => {
  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About Pi', icon: '📐' },
    { id: 'simulation', label: 'Simulation', icon: '🎯' },
    { id: 'methods', label: 'Methods', icon: '🧮' },
    { id: 'history', label: 'History', icon: '📚' }
  ];

  const learningLinks = [
    { id: 'facts', label: 'Fun Facts', icon: '✨' },
    { label: 'Mathematical Properties', icon: '🔢', external: true },
    { label: 'Applications', icon: '⚙️', external: true },
    { label: 'Resources', icon: '📖', external: true }
  ];

  return (
    <footer className="bg-black/30 backdrop-blur-xl border-t border-white/20 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <button 
              onClick={() => navigateToPage('home')}
              className="flex items-center space-x-2 mb-4 group"
            >
              <div className="relative">
                <Calculator className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg group-hover:bg-cyan-300/30 transition-all duration-200"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                π Explorer
              </span>
            </button>
            <p className="text-gray-300 leading-relaxed mb-4">
              Exploring the fascinating world of pi (π) through interactive calculations, 
              historical insights, and mathematical beauty.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <span>🔗</span>
              <span>Quick Access</span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => navigateToPage(link.id)}
                    className={`flex items-center space-x-2 transition-colors duration-200 group ${
                      currentPage === link.id
                        ? 'text-cyan-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                    {currentPage !== link.id && (
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <span>📚</span>
              <span>Learn More</span>
            </h3>
            <ul className="space-y-2">
              {learningLinks.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a 
                      href="#" 
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                    >
                      <span>{link.icon}</span>
                      <span>{link.label}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <button 
                      onClick={() => navigateToPage(link.id!)}
                      className={`flex items-center space-x-2 transition-colors duration-200 group ${
                        currentPage === link.id
                          ? 'text-cyan-400'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <span>{link.icon}</span>
                      <span>{link.label}</span>
                      {currentPage !== link.id && (
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 flex items-center space-x-2">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>Mindmasters Club of St'Peters</span>
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-gray-500 text-sm">
                π ≈ 3.14159265358979323846...
              </p>
              <div className="flex space-x-2">
                {quickLinks.slice(0, 4).map((link) => (
                  <button
                    key={link.id}
                    onClick={() => navigateToPage(link.id)}
                    className={`text-xs px-2 py-1 rounded transition-colors duration-200 ${
                      currentPage === link.id
                        ? 'bg-cyan-600 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-gray-300'
                    }`}
                  >
                    {link.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;