import React from 'react';
import { Clock, Users, Globe } from 'lucide-react';

const History = () => {
  const timeline = [
    {
      year: '2000 BCE',
      civilization: 'Ancient Babylonians',
      approximation: '3.125',
      description: 'Used 25/8 as an approximation for π'
    },
    {
      year: '1650 BCE',
      civilization: 'Ancient Egyptians',
      approximation: '3.16',
      description: 'Rhind Papyrus shows (16/9)² ≈ π'
    },
    {
      year: '250 BCE',
      civilization: 'Archimedes',
      approximation: '3.14',
      description: 'Used polygons to bound π between 3 10/71 and 3 1/7'
    },
    {
      year: '480 CE',
      civilization: 'Zu Chongzhi',
      approximation: '3.1415926',
      description: 'Chinese mathematician calculated π to 7 decimal places'
    },
    {
      year: '1596',
      civilization: 'Ludolph van Ceulen',
      approximation: '3.14159265358979',
      description: 'Calculated π to 15 decimal places using polygons'
    },
    {
      year: '1706',
      civilization: 'John Machin',
      approximation: '3.141592653589793',
      description: 'Used his formula to calculate π to 100 decimal places'
    },
    {
      year: '1949',
      civilization: 'ENIAC Computer',
      approximation: '70 hours for 2,037 digits',
      description: 'First computer calculation of π'
    },
    {
      year: '2019',
      civilization: 'Google Cloud',
      approximation: '31.4 trillion digits',
      description: 'Current world record for π calculation'
    }
  ];

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Clock className="h-16 w-16 text-amber-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-6">
            History of Pi
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            The quest to calculate π has spanned millennia, from ancient approximations to modern supercomputers
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full shadow-lg shadow-amber-400/50"></div>
          
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 shadow-2xl hover:shadow-amber-400/20 transition-all duration-300 border border-white/20">
                    <div className="text-amber-400 font-bold text-lg mb-2">{event.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{event.civilization}</h3>
                    <div className="text-2xl font-mono text-cyan-400 mb-3">{event.approximation}</div>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full shadow-2xl shadow-amber-400/50 z-10">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <Globe className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Modern Era</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Today, π has been calculated to over 31 trillion digits using advanced algorithms and supercomputers.
              The quest for more digits continues, driven by computational challenges and the search for patterns
              in this mysterious mathematical constant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;