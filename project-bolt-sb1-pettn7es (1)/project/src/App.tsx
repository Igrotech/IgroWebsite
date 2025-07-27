import React, { useState } from 'react';
import { ArrowRight, Star, Users, Trophy, Code } from 'lucide-react';
import Header from './components/Header';
import GameCard from './components/GameCard';
import GameModal from './components/GameModal';
import Contact from './components/Contact';
import { games } from './data/games';
import { Game } from './components/GameCard';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [gameModalOpen, setGameModalOpen] = useState(false);

  const handlePlayGame = (game: Game) => {
    setSelectedGame(game);
    setGameModalOpen(true);
  };

  const closeGameModal = () => {
    setGameModalOpen(false);
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Creating Amazing
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent"> Games</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              IGROTEK specializes in Unity game development, creating engaging experiences across all platforms. 
              From hypercasual mobile games to complex 3D adventures, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-gray-600 to-gray-400 text-black px-8 py-4 rounded-lg hover:from-gray-500 hover:to-gray-300 transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
              >
                <span>View Our Games</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-lg hover:bg-gray-400 hover:text-black transition-all duration-300 font-semibold"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-gray-300" />
              </div>
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-gray-400">Games Delivered</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gray-300" />
              </div>
              <h3 className="text-3xl font-bold text-white">100+</h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-gray-300" />
              </div>
              <h3 className="text-3xl font-bold text-white">4.9</h3>
              <p className="text-gray-400">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-gray-300" />
              </div>
              <h3 className="text-3xl font-bold text-white">5+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Game Portfolio</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse collection of games spanning multiple genres and platforms. 
              Click "Play Now" to experience them directly in your browser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <GameCard 
                key={game.id} 
                game={game} 
                onPlay={handlePlayGame}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About IGROTEK</h2>
              <p className="text-lg text-gray-300 mb-6">
                We are a passionate team of game developers specializing in Unity engine development. 
                With years of experience in the gaming industry, we create immersive and engaging 
                experiences across all platforms.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-gray-700 p-2 rounded-lg">
                    <Code className="h-5 w-5 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Unity Expertise</h3>
                    <p className="text-gray-400">Advanced Unity development with latest technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-gray-700 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Multiplayer Solutions</h3>
                    <p className="text-gray-400">Real-time multiplayer and networking implementations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-gray-700 p-2 rounded-lg">
                    <Trophy className="h-5 w-5 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Cross-Platform</h3>
                    <p className="text-gray-400">Deploy to mobile, web, PC, and console platforms</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Game Development" 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-600/30 to-gray-400/30 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img 
                src="/WhatsApp Image 2025-07-13 at 10.20.53 PM 1.png" 
                alt="IGROTEK Logo" 
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">IGROTEK</span>
            </div>
            <p className="text-gray-400 mb-4">Creating amazing games with Unity</p>
            <p className="text-gray-500 text-sm">
              © 2025 IGROTEK. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <GameModal 
        game={selectedGame}
        isOpen={gameModalOpen}
        onClose={closeGameModal}
      />
    </div>
  );
}

export default App;