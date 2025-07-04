import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [piDigits, setPiDigits] = useState('');
  const fullPi = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullPi.length) {
        setPiDigits(fullPi.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4 drop-shadow-2xl">
            π
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            The Most Famous Mathematical Constant
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Discover the fascinating world of pi - from ancient approximations to modern computational methods
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 mb-12">
          <div className="text-2xl md:text-3xl font-mono text-cyan-400 break-all leading-relaxed">
            {piDigits}
            <span className="animate-pulse text-white">|</span>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            {piDigits.length > 0 ? `${piDigits.length} digits of π` : 'Loading...'}
          </p>
        </div>

        <button
          onClick={scrollToNext}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-cyan-700 hover:to-purple-700 transition-all duration-200 shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
        >
          <span>Explore Pi</span>
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;