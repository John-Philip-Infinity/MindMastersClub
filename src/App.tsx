import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import History from './components/History';
import Methods from './components/Methods';
import MonteCarloSimulation from './components/MonteCarloSimulation';
import FunFacts from './components/FunFacts';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <About />
            <MonteCarloSimulation />
            <Methods />
            <History />
            <FunFacts />
          </>
        );
      case 'about':
        return <About />;
      case 'simulation':
        return <MonteCarloSimulation />;
      case 'methods':
        return <Methods />;
      case 'history':
        return <History />;
      case 'facts':
        return <FunFacts />;
      default:
        return (
          <>
            <Hero />
            <About />
            <MonteCarloSimulation />
            <Methods />
            <History />
            <FunFacts />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/10 via-transparent to-transparent"></div>
      <div className="relative z-10">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}

export default App;