import { Game } from '../components/GameCard';

export const games: Game[] = [
  {
    id: 'racing-fury',
    title: 'Racing Fury',
    description: 'High-speed racing game with realistic physics and multiple tracks. Experience the thrill of competitive racing.',
    thumbnail: 'https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Unity 3D',
    type: 'Racing',
    webglPath: '/games/racing-fury/index.html'
  },
  {
    id: 'puzzle-master',
    title: 'Puzzle Master',
    description: 'Challenging puzzle game that tests your logic and problem-solving skills with beautiful 2D graphics.',
    thumbnail: 'https://images.pexels.com/photos/1314410/pexels-photo-1314410.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Unity 2D',
    type: '2D',
    webglPath: '/games/puzzle-master/index.html'
  },
  {
    id: 'space-adventure',
    title: 'Space Adventure',
    description: 'Epic single-player space exploration game with stunning 3D graphics and immersive gameplay.',
    thumbnail: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Unity 3D',
    type: 'Single Player',
    webglPath: '/games/space-adventure/index.html'
  },
  {
    id: 'battle-arena',
    title: 'Battle Arena',
    description: 'Intense multiplayer battle game where players compete in real-time combat scenarios.',
    thumbnail: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Unity 3D',
    type: 'Multiplayer',
    webglPath: '/games/battle-arena/index.html'
  },
  {
    id: 'quick-tap',
    title: 'Quick Tap',
    description: 'Addictive hypercasual game with simple controls and endless fun. Perfect for quick gaming sessions.',
    thumbnail: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Unity 2D',
    type: 'Hypercasual',
    webglPath: '/games/quick-tap/index.html'
  },
  {
    id: 'math-quest',
    title: 'Math Quest',
    description: 'Educational game that makes learning mathematics fun and engaging for students of all ages.',
    thumbnail: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Unity 2D',
    type: 'Educational',
    webglPath: '/games/math-quest/index.html'
  }
];