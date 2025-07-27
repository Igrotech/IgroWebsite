import React from 'react';
import { Play, Users, User, Gamepad2 } from 'lucide-react';

export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  type: 'Single Player' | 'Multiplayer' | '2D' | '3D' | 'Hypercasual' | 'Racing' | 'Educational';
  webglPath?: string;
}

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Single Player':
        return <User className="h-4 w-4" />;
      case 'Multiplayer':
        return <Users className="h-4 w-4" />;
      default:
        return <Gamepad2 className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Single Player':
        return 'bg-blue-100 text-blue-800';
      case 'Multiplayer':
        return 'bg-green-100 text-green-800';
      case '2D':
        return 'bg-purple-100 text-purple-800';
      case '3D':
        return 'bg-red-100 text-red-800';
      case 'Hypercasual':
        return 'bg-yellow-100 text-yellow-800';
      case 'Racing':
        return 'bg-orange-100 text-orange-800';
      case 'Educational':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={() => onPlay(game)}
            className="bg-gray-200 text-black p-3 rounded-full opacity-0 hover:opacity-100 transition-all duration-300 transform scale-90 hover:scale-100 shadow-lg"
          >
            <Play className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{game.title}</h3>
          <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(game.type)}`}>
            {getTypeIcon(game.type)}
            <span>{game.type}</span>
          </span>
        </div>
        
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{game.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded-full">
            {game.category}
          </span>
          <button
            onClick={() => onPlay(game)}
            className="bg-gradient-to-r from-gray-600 to-gray-400 text-black px-6 py-2 rounded-lg hover:from-gray-500 hover:to-gray-300 transition-all duration-300 font-medium text-sm flex items-center space-x-2"
          >
            <Play className="h-4 w-4" />
            <span>Play Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;