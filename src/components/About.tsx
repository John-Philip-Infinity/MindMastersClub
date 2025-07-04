import React from 'react';
import { Circle, Ruler, Infinity } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            What is Pi?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Pi (π) is the ratio of a circle's circumference to its diameter, 
            approximately equal to 3.14159. It's one of the most important constants in mathematics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-xl rounded-xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-white/20">
            <Circle className="h-12 w-12 text-cyan-400 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Circular Ratio</h3>
            <p className="text-gray-300 leading-relaxed">
              Pi represents the constant ratio between a circle's circumference and diameter, 
              making it fundamental to geometry and trigonometry.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-white/20">
            <Infinity className="h-12 w-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Irrational Number</h3>
            <p className="text-gray-300 leading-relaxed">
              Pi is irrational, meaning its decimal representation never terminates or repeats, 
              containing infinite non-repeating digits.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-xl p-8 shadow-2xl hover:shadow-green-500/20 transition-all duration-300 border border-white/20">
            <Ruler className="h-12 w-12 text-green-400 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Universal Constant</h3>
            <p className="text-gray-300 leading-relaxed">
              Pi appears in countless mathematical formulas across physics, engineering, 
              and statistics, making it one of the most important constants.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">The Circle Formula</h3>
            <div className="text-2xl md:text-3xl font-mono text-cyan-400 mb-4">
              C = π × d
            </div>
            <div className="text-lg text-gray-300">
              Where C is circumference and d is diameter
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 border-4 border-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/30">
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">Diameter</div>
                  <div className="w-32 h-0.5 bg-cyan-400 my-2 shadow-lg shadow-cyan-400/50"></div>
                  <div className="text-sm text-gray-300">d</div>
                </div>
              </div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-sm text-cyan-400 font-semibold">
                Circumference = π × d
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;