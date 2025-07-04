import React, { useState, useEffect, useRef } from 'react';
import { Target, Play, Pause, RotateCcw } from 'lucide-react';

interface Point {
  x: number;
  y: number;
  inside: boolean;
}

const MonteCarloSimulation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [points, setPoints] = useState<Point[]>([]);
  const [piEstimate, setPiEstimate] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [insideCircle, setInsideCircle] = useState(0);

  const canvasSize = 300;
  const centerX = canvasSize / 2;
  const centerY = canvasSize / 2;
  const radius = canvasSize / 2 - 10;

  const generateRandomPoint = (): Point => {
    const x = Math.random() * 2 - 1; // -1 to 1
    const y = Math.random() * 2 - 1; // -1 to 1
    const distance = Math.sqrt(x * x + y * y);
    return {
      x: x,
      y: y,
      inside: distance <= 1
    };
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with dark background
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    // Draw square
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, canvasSize - 20, canvasSize - 20);

    // Draw circle with glow effect
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Draw points
    points.forEach(point => {
      const canvasX = (point.x + 1) * (canvasSize - 20) / 2 + 10;
      const canvasY = (point.y + 1) * (canvasSize - 20) / 2 + 10;
      
      ctx.fillStyle = point.inside ? '#ef4444' : '#10b981';
      ctx.shadowColor = point.inside ? '#ef4444' : '#10b981';
      ctx.shadowBlur = 3;
      ctx.beginPath();
      ctx.arc(canvasX, canvasY, 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  };

  const addMultiplePoints = (count: number) => {
    const newPoints: Point[] = [];
    let newInsideCount = 0;
    
    for (let i = 0; i < count; i++) {
      const newPoint = generateRandomPoint();
      newPoints.push(newPoint);
      if (newPoint.inside) {
        newInsideCount++;
      }
    }
    
    setPoints(prev => [...prev.slice(-(1000 - count)), ...newPoints]); // Keep last 1000 points for performance
    setTotalPoints(prev => prev + count);
    setInsideCircle(prev => prev + newInsideCount);
  };

  const startSimulation = () => {
    setIsRunning(true);
  };

  const stopSimulation = () => {
    setIsRunning(false);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setPoints([]);
    setTotalPoints(0);
    setInsideCircle(0);
    setPiEstimate(0);
  };

  useEffect(() => {
    if (totalPoints > 0) {
      const estimate = 4 * (insideCircle / totalPoints);
      setPiEstimate(estimate);
    }
  }, [insideCircle, totalPoints]);

  useEffect(() => {
    drawCanvas();
  }, [points]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        addMultiplePoints(100); // Add 100 points at once for ultra-fast simulation
      }, 1); // Update every 1ms with 100 points = 100,000 points per second
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Target className="h-16 w-16 text-red-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Monte Carlo Simulation
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Watch how random points can be used to estimate π by calculating the ratio of points inside a circle to total points
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Simulation</h3>
            <div className="flex justify-center mb-6">
              <canvas
                ref={canvasRef}
                width={canvasSize}
                height={canvasSize}
                className="border border-cyan-400/50 rounded-lg shadow-lg shadow-cyan-400/20"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={startSimulation}
                disabled={isRunning}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 disabled:opacity-50 shadow-lg"
              >
                <Play className="h-5 w-5" />
                <span>Start</span>
              </button>
              <button
                onClick={stopSimulation}
                disabled={!isRunning}
                className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200 disabled:opacity-50 shadow-lg"
              >
                <Pause className="h-5 w-5" />
                <span>Stop</span>
              </button>
              <button
                onClick={resetSimulation}
                className="flex items-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg"
              >
                <RotateCcw className="h-5 w-5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Results</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30">
                <div className="text-center">
                  <div className="text-3xl font-mono text-cyan-400 mb-2">
                    {piEstimate.toFixed(6)}
                  </div>
                  <div className="text-sm text-gray-300">π Estimate</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-white">{totalPoints.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Total Points</div>
                </div>
                <div className="bg-red-500/20 backdrop-blur-sm rounded-lg p-4 text-center border border-red-400/30">
                  <div className="text-2xl font-bold text-red-400">{insideCircle.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Inside Circle</div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-4 border border-green-400/30">
                <div className="text-center">
                  <div className="text-lg font-semibold text-white mb-2">
                    π ≈ 4 × (Points in Circle / Total Points)
                  </div>
                  <div className="text-sm text-gray-300">
                    π ≈ 4 × ({insideCircle.toLocaleString()} / {totalPoints.toLocaleString()}) = {piEstimate.toFixed(6)}
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-4 border border-yellow-400/30">
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">Accuracy</div>
                  <div className="text-sm text-gray-300">
                    Error: {Math.abs(piEstimate - Math.PI).toFixed(6)}
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30">
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">Speed</div>
                  <div className="text-sm text-gray-300">
                    ~100,000 points/second
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonteCarloSimulation;