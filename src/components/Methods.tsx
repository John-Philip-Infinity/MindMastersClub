import React from 'react';
import { BookOpen, FormInput as Formula, Zap } from 'lucide-react';

const Methods = () => {
  const methods = [
    {
      name: 'Leibniz Series',
      formula: 'π/4 = 1 - 1/3 + 1/5 - 1/7 + 1/9 - ...',
      description: 'One of the most famous infinite series for π, discovered by Gottfried Leibniz.',
      convergence: 'Slow',
      icon: <BookOpen className="h-8 w-8 text-blue-400" />
    },
    {
      name: 'Wallis Product',
      formula: 'π/2 = (2/1) × (2/3) × (4/3) × (4/5) × (6/5) × (6/7) × ...',
      description: 'An infinite product formula discovered by John Wallis in 1656.',
      convergence: 'Slow',
      icon: <Formula className="h-8 w-8 text-green-400" />
    },
    {
      name: 'Nilakantha Series',
      formula: 'π = 3 + 4/(2×3×4) - 4/(4×5×6) + 4/(6×7×8) - ...',
      description: 'A series that converges faster than the Leibniz series.',
      convergence: 'Moderate',
      icon: <Zap className="h-8 w-8 text-purple-400" />
    }
  ];

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Calculation Methods
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Throughout history, mathematicians have developed various methods to calculate π with increasing accuracy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {methods.map((method, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center justify-center mb-6">
                {method.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">{method.name}</h3>
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/10">
                <div className="text-sm font-mono text-cyan-400 text-center break-all">
                  {method.formula}
                </div>
              </div>
              <p className="text-gray-300 text-center mb-4">{method.description}</p>
              <div className="text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  method.convergence === 'Slow' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                  method.convergence === 'Moderate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                  'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {method.convergence} Convergence
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Modern Computational Methods</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-cyan-400 mb-3">Chudnovsky Algorithm</h4>
                <p className="text-gray-300">
                  Currently the fastest known algorithm for computing π, used to calculate trillions of digits.
                  Each iteration produces approximately 14 correct digits.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-purple-400 mb-3">Machin-type Formulas</h4>
                <p className="text-gray-300">
                  Use inverse tangent functions to rapidly converge to π. John Machin's formula was used
                  to calculate π to hundreds of digits by hand.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-green-400 mb-3">Gauss-Legendre Algorithm</h4>
                <p className="text-gray-300">
                  A quadratically convergent algorithm that doubles the number of correct digits with each iteration.
                  Very efficient for high-precision calculations.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-pink-400 mb-3">Spigot Algorithms</h4>
                <p className="text-gray-300">
                  Algorithms that can calculate individual digits of π without computing the preceding digits,
                  useful for specific applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methods;