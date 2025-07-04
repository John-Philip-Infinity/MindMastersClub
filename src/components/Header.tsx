import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator, Home, ExternalLink } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About Pi', icon: '📐' },
    { id: 'simulation', label: 'Simulation', icon: '🎯' },
    { id: 'methods', label: 'Methods', icon: '🧮' },
    { id: 'history', label: 'History', icon: '📚' },
    { id: 'facts', label: 'Fun Facts', icon: '✨' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/10 backdrop-blur-xl shadow-2xl border-b border-white/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigateToPage('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <Calculator className="h-10 w-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg group-hover:bg-cyan-300/30 transition-all duration-200"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              π Explorer
            </span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToPage(item.id)}
                className={`group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
                {currentPage !== item.id && (
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            ))}
          </nav>

          {/* Quick Access Menu for Medium Screens */}
          <nav className="hidden md:flex lg:hidden space-x-2">
            {navigationItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToPage(item.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-white/20 text-white'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <span>⋯</span>
              <span className="text-sm font-medium">More</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-200 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile/Tablet Dropdown Menu */}
        {isMenuOpen && (
          <nav className="mt-4 py-4 border-t border-white/20 bg-black/20 backdrop-blur-xl rounded-xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToPage(item.id)}
                  className={`flex items-center space-x-3 p-4 text-left rounded-lg transition-all duration-200 group ${
                    currentPage === item.id
                      ? 'bg-white/20 text-white border border-white/30'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300">
                      {item.id === 'home' && 'Main dashboard'}
                      {item.id === 'about' && 'Learn about π'}
                      {item.id === 'simulation' && 'Interactive simulation'}
                      {item.id === 'methods' && 'Calculation techniques'}
                      {item.id === 'history' && 'Historical timeline'}
                      {item.id === 'facts' && 'Amazing trivia'}
                    </div>
                  </div>
                  {currentPage !== item.id && (
                    <ExternalLink className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;