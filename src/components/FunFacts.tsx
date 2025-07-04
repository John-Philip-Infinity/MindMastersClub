import React from 'react';
import { Sparkles, Brain, Star, Zap } from 'lucide-react';

const FunFacts = () => {
  const facts = [
    {
      icon: <Brain className="h-12 w-12 text-purple-400" />,
      title: 'Pi Day',
      description: 'March 14th (3/14) is celebrated as Pi Day worldwide, honoring this mathematical constant.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Star className="h-12 w-12 text-blue-400" />,
      title: 'Infinite & Non-Repeating',
      description: 'π is irrational, meaning its decimal representation goes on forever without repeating.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-400" />,
      title: 'Appears Everywhere',
      description: 'π appears in probability, statistics, physics, and even the structure of DNA.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Sparkles className="h-12 w-12 text-green-400" />,
      title: 'Memory Champions',
      description: 'The world record for memorizing π is over 70,000 digits, held by Rajveer Meena.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const piDigits = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632788659361533818279682303019520353018529689957736225994138912497217752834791315155748572424541506959508295331168617278558890750983817546374649393192550604009277016711390098488240128583616035637076601047101819429555961989467678374494482553797747268471040475346462080466842590694912933136770289891521047521620569660240580381501935112533824300355876402474964732639141992726042699227967823547816360093417216412199245863150302861829745557067498385054945885869269956909272107975093029553211653449872027559602364806654991198818347977535663698074265425278625518184175746728909777727938000816470600161452491921732172147723501414419735685481613611573525521334757418494684385233239073941433345477624168625189835694855620992192221842725502542568876717904946016746097659798123321047611951126';

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Sparkles className="h-16 w-16 text-purple-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Fun Facts About Pi
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover fascinating trivia and amazing properties of the world's most famous mathematical constant
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {facts.map((fact, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group border border-white/20">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${fact.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <div className="text-white">
                  {fact.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{fact.title}</h3>
              <p className="text-gray-300 leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">First 250 Digits of π</h3>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/10">
            <div className="text-lg md:text-xl font-mono text-cyan-400 leading-relaxed break-all text-center">
              {piDigits}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-blue-500/20 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-lg font-semibold text-white">Infinite Digits</div>
              <div className="text-sm text-gray-300">Never ending, never repeating</div>
            </div>
            
            <div className="text-center bg-purple-500/20 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">31.4T</div>
              <div className="text-lg font-semibold text-white">Known Digits</div>
              <div className="text-sm text-gray-300">Trillion digits calculated</div>
            </div>
            
            <div className="text-center bg-green-500/20 backdrop-blur-sm rounded-lg p-6 border border-green-400/30">
              <div className="text-3xl font-bold text-green-400 mb-2">4000+</div>
              <div className="text-lg font-semibold text-white">Years of Study</div>
              <div className="text-sm text-gray-300">Since ancient times</div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Pi in Popular Culture</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Literature & Film</h4>
                <p className="text-gray-300 text-sm">
                  π has appeared in numerous books, movies, and TV shows, often symbolizing the infinite or mysterious.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Art & Music</h4>
                <p className="text-gray-300 text-sm">
                  Artists have created works based on π's digits, and musicians have composed pieces using π's sequence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;