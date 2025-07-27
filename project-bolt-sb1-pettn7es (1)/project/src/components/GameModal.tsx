import React from 'react';
import { X, AlertCircle } from 'lucide-react';
import { Game } from './GameCard';

interface GameModalProps {
  game: Game | null;
  isOpen: boolean;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ game, isOpen, onClose }) => {
  if (!isOpen || !game) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">{game.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>
        
        <div className="p-4">
          {game.webglPath ? (
            <div className="w-full h-96 md:h-[500px] bg-black rounded-lg overflow-hidden">
              <iframe
                src={game.webglPath}
                className="w-full h-full border-0"
                title={game.title}
                allowFullScreen
              />
            </div>
          ) : (
            <div className="w-full h-96 md:h-[500px] bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <AlertCircle className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Game Not Available</h3>
                <p className="text-gray-400">
                  WebGL build not configured for this game yet.
                  <br />
                  Please check the README for setup instructions.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameModal;