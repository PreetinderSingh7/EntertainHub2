import { useState, useEffect, useRef } from 'react';
import MemoryGame from '../Games/MemoryGames';
import SnakeGame from '../Games/SnakeGames';
import Hangman from '../Games/Hangman';
import Quiz from '../Games/Quiz';
import ColorMatch from '../Games/ColorMatch';
import WordScramble from '../Games/WordScramble';
import MathPuzzle from '../Games/MathPuzzle';
import WhackAMole from '../Games/WhackAMole';
import RockPaperScissors from '../Games/RockPaperScissors';
// Import new games - you'll need to create these components
// Add these components in the '../Games/' directory
import TicTacToe from '../Games/TicTacToe';
// import SimonSays from '../Games/SimonSays';
// import SpeedTyping from '../Games/SpeedTyping';
// import NumberGuess from '../Games/NumberGuess';
// import FlappyBird from '../Games/FlappyBird';

// Import the Game Hub CSS
// import './GG.css';

// Game icons - using Lucide React
// Modified to remove problematic icons
import { 
  Grid, Trophy, X, BarChart, Home, Settings, 
  Moon, Sun, User, Search, ChevronDown, 
  Gamepad2, Brain, AlignCenter, TextCursor, Zap, History,
  ChevronLeft, ChevronRight, Sparkles, Star, ArrowRight,
  Clock, Hash, Keyboard, Gift, Dices
} from 'lucide-react';

// Create icon components for the missing icons using SVG
const FireIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`lucide lucide-flame ${className}`}
  >
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);

const FlagIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`lucide lucide-flag ${className}`}
  >
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
    <line x1="4" x2="4" y1="22" y2="15"/>
  </svg>
);

const TargetIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`lucide lucide-target ${className}`}
  >
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const Games = () => {
  const [activeGame, setActiveGame] = useState(null);
  const [scores, setScores] = useState({});
  const [showScoreboard, setShowScoreboard] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [username, setUsername] = useState('Player');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortMethod, setSortMethod] = useState('default'); // default, alphabetical, highScore
  const [currentCategory, setCurrentCategory] = useState('all');
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Load scores from local storage on component mount
  useEffect(() => {
    const savedScores = localStorage.getItem('gameHubScores');
    const savedSettings = localStorage.getItem('gameHubSettings');
    
    if (savedScores) {
      setScores(JSON.parse(savedScores));
    } else {
      // Initialize with default scores of 0
      const defaultScores = gamesList.reduce((acc, game) => {
        acc[game.id] = 0;
        return acc;
      }, {});
      setScores(defaultScores);
    }
    
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setIsDarkMode(settings.darkMode ?? true);
      setUsername(settings.username || 'Player');
    }
  }, []);

  // Save scores to local storage whenever they change
  useEffect(() => {
    if (Object.keys(scores).length > 0) {
      localStorage.setItem('gameHubScores', JSON.stringify(scores));
    }
  }, [scores]);
  
  // Save settings whenever they change
  useEffect(() => {
    localStorage.setItem('gameHubSettings', JSON.stringify({
      darkMode: isDarkMode,
      username: username
    }));
    
    // Apply theme to body
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
  }, [isDarkMode, username]);

  // Carousel autoplay
  useEffect(() => {
    autoPlayRef.current = () => {
      setCurrentSlide((prevSlide) => 
        prevSlide === carouselSlides.length - 1 ? 0 : prevSlide + 1
      );
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      autoPlayRef.current();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowDropdown(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const categoryIcons = {
    all: <Gamepad2 size={18} />,
    brain: <Brain size={18} />,
    arcade: <Gamepad2 size={18} />,
    word: <TextCursor size={18} />,
    reflex: <Zap size={18} />,
    classic: <History size={18} />,
    strategy: <TargetIcon size={18} />,
    casual: <Dices size={18} />
  };

  const gamesList = [
    { 
      id: 'MemoryGame', 
      name: 'Memory Game', 
      component: MemoryGame, 
      description: 'Test your memory by matching pairs of cards.',
      color: '#8b5cf6',
      category: 'brain',
      icon: '🧠',
      featured: true,
      popular: true
    },
    { 
      id: 'SnakeGame', 
      name: 'Snake', 
      component: SnakeGame, 
      description: 'Control the snake to eat food and grow without hitting walls or yourself.',
      color: '#10b981',
      category: 'arcade',
      icon: '🐍',
      featured: true,
      popular: true
    },
    { 
      id: 'Hangman', 
      name: 'Hangman', 
      component: Hangman, 
      description: 'Guess the hidden word before the hangman is complete.',
      color: '#f59e0b',
      category: 'word',
      icon: '📝',
      featured: false,
      popular: false
    },
    { 
      id: 'Quiz', 
      name: 'Quiz Challenge', 
      component: Quiz, 
      description: 'Test your knowledge with various quiz questions.',
      color: '#3b82f6',
      category: 'brain',
      icon: '❓',
      featured: false,
      popular: false
    },
    { 
      id: 'ColorMatch', 
      name: 'Color Match', 
      component: ColorMatch, 
      description: 'Match colors quickly in this reflex-testing game.',
      color: '#ec4899',
      category: 'reflex',
      icon: '🎨',
      featured: false,
      popular: true
    },
    { 
      id: 'WordScramble', 
      name: 'Word Scramble', 
      component: WordScramble, 
      description: 'Unscramble letters to form meaningful words.',
      color: '#6366f1',
      category: 'word',
      icon: '🔤',
      featured: false,
      popular: false
    },
    { 
      id: 'MathPuzzle', 
      name: 'Math Puzzle', 
      component: MathPuzzle, 
      description: 'Solve math problems against the clock.',
      color: '#ef4444',
      category: 'brain',
      icon: '🔢',
      featured: false,
      popular: false
    },
    { 
      id: 'WhackAMole', 
      name: 'Whack-A-Mole', 
      component: WhackAMole, 
      description: 'Whack the moles as they appear to score points.',
      color: '#f97316',
      category: 'reflex',
      icon: '🔨',
      featured: true,
      popular: true
    },
    { 
      id: 'RockPaperScissors', 
      name: 'Rock Paper Scissors', 
      component: RockPaperScissors, 
      description: 'The classic game of chance against the computer.',
      color: '#059669',
      category: 'classic',
      icon: '✂️',
      featured: false,
      popular: false
    },
    { 
      id: 'TicTacToe', 
      name: 'Tic Tac Toe', 
      component: TicTacToe, 
      description: 'Classic game of X and O on a 3x3 grid.',
      color: '#6b7280',
      category: 'classic',
      icon: '⭕',
      featured: false,
      popular: true
    },
    { 
      id: 'SimonSays', 
      name: 'Simon Says', 
      component: () => <div>Coming Soon</div>, 
      description: 'Follow the pattern of lights and sounds.',
      color: '#0ea5e9',
      category: 'brain',
      icon: '🎵',
      featured: false,
      popular: false
    },
    { 
      id: 'SpeedTyping', 
      name: 'Speed Typing', 
      component: () => <div>Coming Soon</div>, 
      description: 'Test your typing speed and accuracy.',
      color: '#0d9488',
      category: 'reflex',
      icon: '⌨️',
      featured: true,
      popular: false
    },
    { 
      id: 'NumberGuess', 
      name: 'Number Guess', 
      component: () => <div>Coming Soon</div>, 
      description: 'Guess the number with hints in this simple game.',
      color: '#9333ea',
      category: 'casual',
      icon: '🔢',
      featured: false,
      popular: false
    },
    { 
      id: 'FlappyBird', 
      name: 'Flappy Bird', 
      component: () => <div>Coming Soon</div>, 
      description: 'Navigate the bird through obstacles by tapping.',
      color: '#f59e0b',
      category: 'arcade',
      icon: '🐦',
      featured: true,
      popular: true
    }
  ];

  // Define carousel slides - featuring the most visually appealing games
  const carouselSlides = [
    {
      title: "Welcome to Game Hub",
      subtitle: "Your one-stop destination for online gaming fun",
      description: "Discover a variety of games to challenge your mind, test your reflexes, and have fun!",
      buttonText: "Explore Games",
      action: () => document.getElementById('games-section').scrollIntoView({ behavior: 'smooth' }),
      image: "🎮",
      color: "#4f46e5"
    },
    {
      title: "Featured Game: Snake",
      subtitle: "A classic arcade favorite",
      description: "Control the snake, eat the food, and see how long you can grow!",
      buttonText: "Play Now",
      action: () => setActiveGame('SnakeGame'),
      image: "🐍",
      color: "#10b981"
    },
    {
      title: "Featured Game: Memory Match",
      subtitle: "Test your memory skills",
      description: "Find matching pairs of cards before time runs out!",
      buttonText: "Play Now",
      action: () => setActiveGame('MemoryGame'),
      image: "🧠",
      color: "#8b5cf6"
    },
    {
      title: "Featured Game: Flappy Bird",
      subtitle: "The addictive hit returns",
      description: "Navigate through pipes by tapping. Simple but challenging!",
      buttonText: "Play Now",
      action: () => setActiveGame('FlappyBird'),
      image: "🐦",
      color: "#f59e0b"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Games', icon: categoryIcons.all },
    { id: 'brain', name: 'Brain Games', icon: categoryIcons.brain },
    { id: 'arcade', name: 'Arcade', icon: categoryIcons.arcade },
    { id: 'word', name: 'Word Games', icon: categoryIcons.word },
    { id: 'reflex', name: 'Reflex Games', icon: categoryIcons.reflex },
    { id: 'classic', name: 'Classic Games', icon: categoryIcons.classic },
    { id: 'strategy', name: 'Strategy Games', icon: categoryIcons.strategy },
    { id: 'casual', name: 'Casual Games', icon: categoryIcons.casual }
  ];

  const updateScore = (gameId, newScore) => {
    setScores(prevScores => {
      // Initialize the score if it doesn't exist
      const currentScore = prevScores[gameId] || 0;
      
      // Only update if new score is higher
      if (newScore > currentScore) {
        return {
          ...prevScores,
          [gameId]: newScore
        };
      }
      return prevScores;
    });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const saveSettings = (e) => {
    e.preventDefault();
    setShowSettings(false);
  };

  const resetScores = () => {
    if (window.confirm('Are you sure you want to reset all scores? This cannot be undone.')) {
      const resetScores = gamesList.reduce((acc, game) => {
        acc[game.id] = 0;
        return acc;
      }, {});
      setScores(resetScores);
    }
  };

  const handlePrevSlide = () => {
    setCurrentSlide(prevSlide => 
      prevSlide === 0 ? carouselSlides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide(prevSlide => 
      prevSlide === carouselSlides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Filter and sort games
  const filteredGames = gamesList
    .filter(game => {
      // Filter by category
      const categoryMatch = currentCategory === 'all' || game.category === currentCategory;
      
      // Filter by search term
      const searchMatch = game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return categoryMatch && searchMatch;
    })
    .sort((a, b) => {
      // Sort based on selected method
      switch(sortMethod) {
        case 'alphabetical':
          return a.name.localeCompare(b.name);
        case 'highScore':
          return (scores[b.id] || 0) - (scores[a.id] || 0);
        default:
          return 0; // Keep original order
      }
    });

  // Get popular games
  const popularGames = gamesList.filter(game => game.popular);

  // Group games by category
  const gamesByCategory = categories.reduce((acc, category) => {
    if (category.id !== 'all') {
      const categoryGames = gamesList.filter(game => game.category === category.id);
      if (categoryGames.length > 0) {
        acc[category.id] = {
          name: category.name,
          icon: category.icon,
          games: categoryGames
        };
      }
    }
    return acc;
  }, {});

  const renderActiveGame = () => {
    if (!activeGame) return null;
    
    const game = gamesList.find(g => g.id === activeGame);
    const GameComponent = game.component;
    
    return (
      <div className="active-game-container">
        <div className="active-game-header" style={{ backgroundColor: game.color }}>
          <div className="game-header-content">
            <div className="game-icon-title">
              <span className="game-icon">{game.icon}</span>
              <h2>{game.name}</h2>
            </div>
            <button 
              onClick={() => setActiveGame(null)} 
              className="close-button"
              aria-label="Close game"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        <div className="active-game-content">
          <GameComponent 
            onScoreUpdate={(score) => updateScore(game.id, score)} 
            highScore={scores[game.id] || 0}
          />
        </div>
      </div>
    );
  };

  const renderScoreboard = () => {
    const sortedGames = [...gamesList].sort((a, b) => 
      (scores[b.id] || 0) - (scores[a.id] || 0)
    );
    
    return (
      <div className="modal-overlay">
        <div className="modal scoreboard-modal">
          <div className="modal-header">
            <div className="modal-header-content">
              <Trophy className="icon-trophy" size={24} />
              <h2 className="modal-title">Scoreboard</h2>
            </div>
            <button 
              onClick={() => setShowScoreboard(false)} 
              className="close-button"
              aria-label="Close scoreboard"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="scoreboard-content">
            <div className="user-score-summary">
              <div className="user-avatar">
                <User size={32} />
              </div>
              <div className="user-stats">
                <h3>{username}</h3>
                <p>Total Games Played: {gamesList.filter(game => (scores[game.id] || 0) > 0).length} / {gamesList.length}</p>
              </div>
            </div>

            <table className="scores-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Game</th>
                  <th>High Score</th>
                </tr>
              </thead>
              <tbody>
                {sortedGames.map((game, index) => (
                  <tr key={game.id} className={(scores[game.id] || 0) > 0 ? '' : 'no-score'}>
                    <td className="rank-cell">
                      {index === 0 && (scores[game.id] || 0) > 0 ? 
                        <span className="top-rank">#{index + 1}</span> : 
                        `#${index + 1}`}
                    </td>
                    <td>
                      <div className="game-name-with-color">
                        <span className="game-icon-small">{game.icon}</span>
                        <span className="game-color-indicator" style={{ backgroundColor: game.color }}></span>
                        {game.name}
                      </div>
                    </td>
                    <td className="score-cell">{scores[game.id] || 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="scoreboard-actions">
              <button className="secondary-button" onClick={resetScores}>Reset All Scores</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSettings = () => {
    return (
      <div className="modal-overlay">
        <div className="modal settings-modal">
          <div className="modal-header">
            <div className="modal-header-content">
              <Settings className="icon-settings" size={24} />
              <h2 className="modal-title">Settings</h2>
            </div>
            <button 
              onClick={() => setShowSettings(false)} 
              className="close-button"
              aria-label="Close settings"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="settings-content">
            <form onSubmit={saveSettings}>
              <div className="settings-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="settings-input"
                  maxLength={15}
                  placeholder="Enter your username"
                />
              </div>
              
              <div className="settings-group toggle-group">
                <label>Theme</label>
                <button 
                  type="button"
                  className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
                  onClick={toggleTheme}
                  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  <div className="toggle-track">
                    <div className="toggle-thumb"></div>
                    <div className="toggle-icons">
                      <span className="toggle-icon-dark"><Moon size={14} /></span>
                      <span className="toggle-icon-light"><Sun size={14} /></span>
                    </div>
                  </div>
                </button>
              </div>
              
              <div className="settings-actions">
                <button type="submit" className="primary-button">Save Settings</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const handleCategoryDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const renderGameCard = (game) => (
    <div 
      key={game.id}
      className="game-card"
      onClick={() => setActiveGame(game.id)}
      style={{ '--game-color': game.color }}
    >
      <div className="game-card-header" style={{ backgroundColor: game.color }}>
        <span className="game-icon">{game.icon}</span>
      </div>
      <div className="game-card-content">
        <h3 className="game-title">{game.name}</h3>
        <p className="game-description">{game.description}</p>
      </div>
      <div className="game-card-footer">
        <div className="high-score">
          <Trophy size={14} />
          <span>{scores[game.id] || 0}</span>
        </div>
        <button className="play-button">
          Play Now
        </button>
      </div>
    </div>
  );

  return (
    <div className={`game-hub ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <header className="main-header">
        <div className="header-content">
          <div className="logo-container">
            <Gamepad2 size={28} className="logo-icon" />
            <h1 className="site-title">Game Hub</h1>
          </div>
          <div className="header-actions">
            <div className="welcome-user">
              <span className="user-welcome">Welcome, {username}!</span>
            </div>
            <button 
              onClick={() => setShowScoreboard(true)}
              className="header-button scoreboard-button"
              aria-label="Show scoreboard"
            >
              <Trophy size={20} />
              <span>Scoreboard</span>
            </button>
            <button 
              onClick={() => setShowSettings(true)}
              className="header-button settings-button"
              aria-label="Show settings"
            >
              <Settings size={20} />
              <span>Settings</span>
            </button>
            <button 
              onClick={toggleTheme}
              className="theme-button"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        {activeGame ? (
          renderActiveGame()
        ) : (
          <>
            {/* Carousel Section */}
            <section className="carousel-section">
              <div className="carousel-container" ref={carouselRef}>
                <div 
                  className="carousel-track" 
                  style={{ 
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: 'transform 0.5s ease-in-out'
                  }}
                >
                  {carouselSlides.map((slide, index) => (
                    <div 
                      key={index} 
                      className="carousel-slide"
                      style={{ backgroundColor: slide.color }}
                    >
                      <div className="carousel-content">
                        <div className="carousel-text">
                          <h2 className="carousel-title">{slide.title}</h2>
                          <h3 className="carousel-subtitle">{slide.subtitle}</h3>
                          <p className="carousel-description">{slide.description}</p>
                          <button 
                            className="carousel-button"
                            onClick={slide.action}
                          >
                            {slide.buttonText}
                            <ArrowRight size={16} className="button-icon" />
                          </button>
                        </div>
                        <div className="carousel-image">
                          <span className="carousel-emoji">{slide.image}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="carousel-control prev" 
                  onClick={handlePrevSlide}
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  className="carousel-control next" 
                  onClick={handleNextSlide}
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>
                
                <div className="carousel-indicators">
                  {carouselSlides.map((_, index) => (
                    <button 
                      key={index} 
                      className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Popular Games Section */}
            <section className="popular-games-section" id="games-section">
              <div className="section-header">
                <div className="section-title">
                  <FireIcon size={24} className="section-icon" />
                  <h2>Popular Games</h2>
                </div>
                <button 
                  className="view-all-button"
                  onClick={() => setCurrentCategory('all')}
                >
                  View All Games
                  <ArrowRight size={16} />
                </button>
              </div>
              
              <div className="popular-games-grid">
                {popularGames.map(game => renderGameCard(game))}
              </div>
            </section>

            {/* Search and Filter Controls */}
            <div className="games-controls">
              <div className="search-and-filter">
                <div className="search-container">
                  <Search size={18} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search games..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                  {searchTerm && (
                    <button 
                      className="clear-search"
                     onClick={() => setSearchTerm('')}
                      aria-label="Clear search"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
                
                <div className="filter-container">
                  <div className="category-dropdown" onClick={handleCategoryDropdown}>
                    <div className="selected-category">
                      {categoryIcons[currentCategory]}
                      <span>{categories.find(cat => cat.id === currentCategory)?.name || 'All Games'}</span>
                      <ChevronDown size={16} />
                    </div>
                    
                    {showDropdown && (
                      <div className="dropdown-menu">
                        {categories.map(category => (
                          <div 
                            key={category.id}
                            className={`dropdown-item ${currentCategory === category.id ? 'active' : ''}`}
                            onClick={() => {
                              setCurrentCategory(category.id);
                              setShowDropdown(false);
                            }}
                          >
                            {category.icon}
                            <span>{category.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="sort-container">
                    <select
                      value={sortMethod}
                      onChange={(e) => setSortMethod(e.target.value)}
                      className="sort-select"
                    >
                      <option value="default">Default Order</option>
                      <option value="alphabetical">Alphabetical</option>
                      <option value="highScore">Highest Score</option>
                    </select>
                    <AlignCenter size={16} className="sort-icon" />
                  </div>
                </div>
              </div>
            </div>

            {/* All Games Section */}
            <section className="all-games-section">
              <div className="section-header">
                <div className="section-title">
                  <Gamepad2 size={24} className="section-icon" />
                  <h2>
                    {currentCategory === 'all' 
                      ? 'All Games' 
                      : categories.find(cat => cat.id === currentCategory)?.name}
                  </h2>
                </div>
                <div className="games-count">
                  <span>{filteredGames.length} games</span>
                </div>
              </div>
              
              {filteredGames.length > 0 ? (
                <div className="games-grid">
                  {filteredGames.map(game => renderGameCard(game))}
                </div>
              ) : (
                <div className="no-games-found">
                  <div className="no-games-icon">🔍</div>
                  <h3>No Games Found</h3>
                  <p>Try adjusting your search or filters to find games.</p>
                  <button 
                    className="reset-search-button"
                    onClick={() => {
                      setSearchTerm('');
                      setCurrentCategory('all');
                    }}
                  >
                    Reset Search
                  </button>
                </div>
              )}
            </section>

            {/* Categories Section */}
            {currentCategory === 'all' && searchTerm === '' && (
              <section className="categories-section">
                <div className="section-header">
                  <div className="section-title">
                    <Grid size={24} className="section-icon" />
                    <h2>Game Categories</h2>
                  </div>
                </div>
                
                {Object.entries(gamesByCategory).map(([catId, category]) => (
                  <div className="category-section" key={catId}>
                    <div className="category-header">
                      <div className="category-title">
                        {category.icon}
                        <h3>{category.name}</h3>
                      </div>
                      <button 
                        className="view-category-button"
                        onClick={() => setCurrentCategory(catId)}
                      >
                        View Category
                        <ArrowRight size={16} />
                      </button>
                    </div>
                    
                    <div className="category-games">
                      {category.games.slice(0, 4).map(game => renderGameCard(game))}
                    </div>
                  </div>
                ))}
              </section>
            )}
            
            {/* Coming Soon Section */}
            <section className="coming-soon-section">
              <div className="section-header">
                <div className="section-title">
                  <Sparkles size={24} className="section-icon" />
                  <h2>Coming Soon</h2>
                </div>
              </div>
              
              <div className="coming-soon-content">
                <div className="coming-soon-image">
                  <div className="coming-soon-emoji">🚀</div>
                </div>
                <div className="coming-soon-text">
                  <h3>More Games on the Way!</h3>
                  <p>We're working on exciting new games to add to our collection. Check back soon for:</p>
                  <ul className="coming-soon-list">
                    <li><span className="list-icon"><Clock size={16} /></span> Speed Typing Challenge</li>
                    <li><span className="list-icon"><Hash size={16} /></span> Sudoku Puzzles</li>
                    <li><span className="list-icon"><Keyboard size={16} /></span> Piano Tiles</li>
                    <li><span className="list-icon"><FlagIcon size={16} /></span> Minesweeper</li>
                  </ul>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <Gamepad2 size={20} className="logo-icon" />
            <span className="footer-title">Game Hub</span>
          </div>
          <div className="footer-links">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              setShowScoreboard(true);
            }}>Scoreboard</a>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              setShowSettings(true);
            }}>Settings</a>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              document.getElementById('games-section').scrollIntoView({ behavior: 'smooth' });
            }}>Games</a>
          </div>
          <div className="footer-copyright">
            <span>© {new Date().getFullYear()} Game Hub • All games saved locally in your browser</span>
          </div>
        </div>
      </footer>

      {showScoreboard && renderScoreboard()}
      {showSettings && renderSettings()}

      <style jsx>{`
        

/* Main theme variables */
:root {
  --primary-color: #4f46e5;
  --primary-dark: #4338ca;
  --secondary-color: #10b981;
  --text-light: #f9fafb;
  --text-dark: #1f2937;
  --bg-light: #f9fafb;
  --bg-dark: #111827;
  --card-light: #ffffff;
  --card-dark: #1f2937;
  --border-light: #e5e7eb;
  --border-dark: #374151;
  --header-light: #f3f4f6;
  --header-dark: #1f2937;
  --shadow-light: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-dark: 0 4px 6px rgba(0, 0, 0, 0.3);
  --radius: 8px;
  --transition: all 0.3s ease;
}

/* Light and Dark theme classes */
.light-theme {
  --text: var(--text-dark);
  --bg: var(--bg-light);
  --card-bg: var(--card-light);
  --border: var(--border-light);
  --header-bg: var(--header-light);
  --shadow: var(--shadow-light);
}

.dark-theme {
  --text: var(--text-light);
  --bg: var(--bg-dark);
  --card-bg: var(--card-dark);
  --border: var(--border-dark);
  --header-bg: var(--header-dark);
  --shadow: var(--shadow-dark);
}

/* Global styles */
/* body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--bg);
  color: var(--text);
  transition: var(--transition);
} */

/* * {
  box-sizing: border-box;
} */

/* .game-hub {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
} */

/* Header styles */
.main-header {
  background-color: var(--header-bg);
  border-bottom: 1px solid var(--border);
  padding: 0.75rem 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  color: var(--primary-color);
}

.site-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-button, .theme-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius);
  font-weight: 500;
  font-size: 0.875rem;
  transition: var(--transition);
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
  cursor: pointer;
}

.header-button:hover, .theme-button:hover {
  background-color: rgba(79, 70, 229, 0.1);
}

.theme-button {
  padding: 0.5rem;
}

.welcome-user {
  font-size: 0.875rem;
  margin-right: 0.5rem;
}

/* Main content */
.main-content {
  flex: 1;
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* Carousel Section */
.carousel-section {
  margin-bottom: 2rem;
}

.carousel-container {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.carousel-track {
  display: flex;
  width: 100%;
}

.carousel-slide {
  flex: 0 0 100%;
  min-width: 100%;
  height: 320px;
  position: relative;
}

.carousel-content {
  display: flex;
  height: 100%;
  padding: 2rem;
  color: white;
}

.carousel-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.carousel-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.carousel-subtitle {
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0 0 1rem 0;
  opacity: 0.9;
}

.carousel-description {
  font-size: 1rem;
  margin: 0 0 1.5rem 0;
  max-width: 500px;
  opacity: 0.9;
}

.carousel-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
  color: var(--primary-color);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  font-size: 1rem;
}

.carousel-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.carousel-image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-emoji {
  font-size: 6rem;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  opacity: 0.8;
  transition: var(--transition);
}

.carousel-control:hover {
  opacity: 1;
}

.carousel-control.prev {
  left: 1rem;
}

.carousel-control.next {
  right: 1rem;
}

.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.carousel-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: var(--transition);
}

.carousel-indicator.active {
  background-color: white;
  transform: scale(1.25);
}

/* Section Headers */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.section-icon {
  color: var(--primary-color);
}

.section-title h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.section-header .view-all-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  background: transparent;
  border: none;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: var(--transition);
}

.section-header .view-all-button:hover {
  text-decoration: underline;
}

/* Games Grid */
.popular-games-grid, .games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

/* Game Card */
.game-card {
  background-color: var(--card-bg);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
}

.game-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-color: var(--game-color, var(--primary-color));
}

.game-card-header {
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.game-icon {
  font-size: 3rem;
}

.game-icon-small {
  font-size: 1.25rem;
  margin-right: 0.5rem;
}

.game-card-content {
  padding: 1.25rem;
  flex: 1;
}

.game-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.game-description {
  font-size: 0.875rem;
  margin: 0;
  color: var(--text);
  opacity: 0.8;
}

.game-card-footer {
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.high-score {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.play-button {
  background-color: var(--game-color, var(--primary-color));
  color: white;
  border: none;
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 0.75rem;
  cursor: pointer;
  transition: var(--transition);
}

.play-button:hover {
  filter: brightness(1.1);
}

/* Games Controls */
.games-controls {
  margin-bottom: 1.5rem;
}

.search-and-filter {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.search-container {
  position: relative;
  flex: 1;
  min-width: 200px;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text);
  opacity: 0.5;
}

.search-input {
  width: 100%;
  padding: 0.75rem 2.25rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background-color: var(--card-bg);
  color: var(--text);
  font-size: 0.875rem;
  transition: var(--transition);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
}

.clear-search {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: var(--text);
  opacity: 0.5;
  cursor: pointer;
  padding: 0.25rem;
}

.clear-search:hover {
  opacity: 1;
}

.filter-container {
  display: flex;
  gap: 1rem;
}

.category-dropdown {
  position: relative;
}

.selected-category {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background-color: var(--card-bg);
  font-size: 0.875rem;
  cursor: pointer;
  width: 180px;
  transition: var(--transition);
}

.selected-category:hover {
  border-color: var(--primary-color);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  background-color: var(--card-bg);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  z-index: 10;
  max-height: 250px;
  overflow-y: auto;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: var(--transition);
}

.dropdown-item:hover {
  background-color: rgba(79, 70, 229, 0.1);
}

.dropdown-item.active {
  background-color: rgba(79, 70, 229, 0.2);
  font-weight: 600;
}

.sort-container {
  position: relative;
}

.sort-select {
  width: 150px;
  padding: 0.75rem 2rem 0.75rem 1rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background-color: var(--card-bg);
  color: var(--text);
  font-size: 0.875rem;
  appearance: none;
  cursor: pointer;
  transition: var(--transition);
}

.sort-select:focus {
  outline: none;
  border-color: var(--primary-color);
}

.sort-icon {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--text);
  opacity: 0.5;
}

/* No Games Found State */
.no-games-found {
  text-align: center;
  padding: 3rem 1rem;
  margin: 2rem 0;
  border: 1px dashed var(--border);
  border-radius: var(--radius);
}

.no-games-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.no-games-found h3 {
  font-size: 1.25rem;
  margin: 0 0 0.5rem 0;
}

.no-games-found p {
  margin: 0 0 1.5rem 0;
  color: var(--text);
  opacity: 0.7;
}

.reset-search-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.reset-search-button:hover {
  background-color: var(--primary-dark);
}

/* Category Section */
.category-section {
  margin-bottom: 2.5rem;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.category-title h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.view-category-button {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: var(--primary-color);
  background: transparent;
  border: none;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: var(--transition);
}

.view-category-button:hover {
  text-decoration: underline;
}

.category-games {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* Coming Soon Section */
.coming-soon-section {
  margin-bottom: 2.5rem;
}

.coming-soon-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: var(--card-bg);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
}

.coming-soon-image {
  flex: 0 0 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #4f46e5, #10b981);
  height: 200px;
  border-radius: var(--radius);
}

.coming-soon-emoji {
  font-size: 5rem;
}

.coming-soon-text {
  flex: 1;
}

.coming-soon-text h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.coming-soon-text p {
  margin: 0 0 1rem 0;
}

.coming-soon-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.75rem;
}

.coming-soon-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
}

.list-icon {
  color: var(--primary-color);
  display: flex;
  align-items: center;
}

/* Active Game Container */
.active-game-container {
  background-color: var(--card-bg);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
  border: 1px solid var(--border);
}

.active-game-header {
  color: white;
  padding: 1rem 1.5rem;
}

.game-header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.game-icon-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.close-button {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: var(--transition);
}

.close-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.active-game-content {
  padding: 1.5rem;
  min-height: 500px;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal {
  background-color: var(--card-bg);
  border-radius: var(--radius);
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
}

.modal-header {
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border);
}

.modal-header-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.modal .close-button {
  color: var(--text);
}

.modal .close-button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

/* Scoreboard Styles */
.scoreboard-content {
  padding: 1.5rem;
}

.user-score-summary {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.user-avatar {
  width: 48px;
  height: 48px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.user-stats h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
}

.user-stats p {
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.8;
}

.scores-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
}

.scores-table th {
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text);
  opacity: 0.7;
  border-bottom: 1px solid var(--border);
}

.scores-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border);
  font-size: 0.9375rem;
}

.scores-table tr:last-child td {
  border-bottom: none;
}

.rank-cell {
  width: 50px;
}

.top-rank {
  color: #f59e0b;
  font-weight: 600;
}

.score-cell {
  font-weight: 600;
  text-align: right;
}

.game-name-with-color {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.game-color-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.no-score {
  opacity: 0.5;
}

.scoreboard-actions {
  display: flex;
  justify-content: center;
}

.secondary-button {
  background-color: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.secondary-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Settings Styles */
.settings-content {
  padding: 1.5rem;
}

.settings-group {
  margin-bottom: 1.5rem;
}

.settings-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.settings-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background-color: var(--card-bg);
  color: var(--text);
  font-size: 0.9375rem;
  transition: var(--transition);
}

.settings-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
}

.toggle-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.theme-toggle {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  width: 50px;
  height: 26px;
}

.toggle-track {
  width: 100%;
  height: 100%;
  background-color: #e5e7eb;
  border-radius: 50px;
  position: relative;
  transition: var(--transition);
}

.theme-toggle.dark .toggle-track {
  background-color: #4f46e5;
}

.toggle-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: var(--transition);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.theme-toggle.dark .toggle-thumb {
  left: calc(100% - 23px);
}

.toggle-icons {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;
}

.toggle-icon-dark, .toggle-icon-light {
  color: white;
  opacity: 0.7;
}

.settings-actions {
  text-align: right;
}

.primary-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.primary-button:hover {
  background-color: var(--primary-dark);
}

/* Footer */
.main-footer {
  background-color: var(--header-bg);
  border-top: 1px solid var(--border);
  padding: 1.5rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-title {
  font-weight: 600;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: var(--text);
  text-decoration: none;
  font-size: 0.875rem;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--primary-color);
}

.footer-copyright {
  font-size: 0.75rem;
  opacity: 0.7;
  text-align: center;
}

/* Game-specific Styles */
.game-color-indicator {
  min-width: 8px;
}

/* Media Queries */
@media (max-width: 768px) {
  .carousel-slide {
    height: auto;
    min-height: 350px;
  }
  
  .carousel-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .carousel-text {
    order: 2;
  }
  
  .carousel-image {
    order: 1;
  }
  
  .carousel-description {
    margin-left: auto;
    margin-right: auto;
  }
  
  .header-actions {
    gap: 0.5rem;
  }
  
  .header-button span {
    display: none;
  }
  
  .coming-soon-content {
    flex-direction: column;
    text-align: center;
  }
  
  .coming-soon-list {
    grid-template-columns: 1fr;
    width: fit-content;
    margin: 0 auto;
  }
  
  .user-welcome {
    display: none;
  }
  
  .search-and-filter {
    flex-direction: column;
  }
  
  .filter-container {
    justify-content: space-between;
  }
  
  .selected-category, .sort-select {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .carousel-slide {
    height: auto;
    min-height: 300px;
  }
  
  .carousel-text h1 {
    font-size: 1.5rem;
  }
  
  .carousel-text p {
    font-size: 0.875rem;
  }
  
  .carousel-button {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
  
  .game-card-header {
    height: auto;
    padding: 1rem;
  }
  
  .game-icon {
    font-size: 2rem;
  }
}


      `}</style>
    </div>
    
  );

};

export default Games;



// import React, { useState } from 'react';

// const GamingHub = () => {
//   const [selectedGame, setSelectedGame] = useState(null);
//   const [activeCategory, setActiveCategory] = useState('all');

//   const games = [
//     {
//       id: 1,
//       title: "Bubble Shooter",
//       category: "puzzle",
//       iframe: "https://www.fupa.com/game/Strategy-flash-games/bubble-shooter.html",
//       image: "/api/placeholder/300/200",
//       description: "Classic bubble shooting puzzle game"
//     },
//     {
//       id: 2,
//       title: "Solitaire",
//       category: "card",
//       iframe: "https://www.fupa.com/game/Cards-flash-games/solitaire.html",
//       image: "/api/placeholder/300/200",
//       description: "Traditional card game solitaire"
//     },
//     {
//       id: 3,
//       title: "Snake Game",
//       category: "arcade",
//       iframe: "https://www.fupa.com/game/Action-flash-games/snake.html",
//       image: "/api/placeholder/300/200",
//       description: "Classic snake arcade game"
//     },
//     {
//       id: 4,
//       title: "Tetris",
//       category: "puzzle",
//       iframe: "https://www.fupa.com/game/Strategy-flash-games/tetris.html",
//       image: "/api/placeholder/300/200",
//       description: "Block-falling puzzle game"
//     },
//     {
//       id: 5,
//       title: "Chess",
//       category: "strategy",
//       iframe: "https://www.fupa.com/game/Strategy-flash-games/chess.html",
//       image: "/api/placeholder/300/200",
//       description: "Classic strategy board game"
//     },
//     {
//       id: 6,
//       title: "Pac-Man",
//       category: "arcade",
//       iframe: "https://www.fupa.com/game/Action-flash-games/pacman.html",
//       image: "/api/placeholder/300/200",
//       description: "Classic arcade maze game"
//     },
//     {
//       id: 7,
//       title: "Mahjong",
//       category: "puzzle",
//       iframe: "https://www.fupa.com/game/Strategy-flash-games/mahjong.html",
//       image: "/api/placeholder/300/200",
//       description: "Traditional tile-matching game"
//     },
//     {
//       id: 8,
//       title: "Racing Game",
//       category: "racing",
//       iframe: "https://www.fupa.com/game/Action-flash-games/racing.html",
//       image: "/api/placeholder/300/200",
//       description: "Fast-paced racing action"
//     },
//     {
//       id: 9,
//       title: "Space Invaders",
//       category: "arcade",
//       iframe: "https://www.fupa.com/game/Action-flash-games/space-invaders.html",
//       image: "/api/placeholder/300/200",
//       description: "Classic space shooter game"
//     },
//     {
//       id: 10,
//       title: "Poker",
//       category: "card",
//       iframe: "https://www.fupa.com/game/Cards-flash-games/poker.html",
//       image: "/api/placeholder/300/200",
//       description: "Popular card gambling game"
//     },
//     {
//       id: 11,
//       title: "Sudoku",
//       category: "puzzle",
//       iframe: "https://www.fupa.com/game/Strategy-flash-games/sudoku.html",
//       image: "/api/placeholder/300/200",
//       description: "Number placement puzzle"
//     },
//     {
//       id: 12,
//       title: "Pinball",
//       category: "arcade",
//       iframe: "https://www.fupa.com/game/Action-flash-games/pinball.html",
//       image: "/api/placeholder/300/200",
//       description: "Classic pinball machine"
//     },
//     {
//       id: 13,
//       title: "Memory Game",
//       category: "puzzle",
//       iframe: "https://www.fupa.com/game/Strategy-flash-games/memory.html",
//       image: "/api/placeholder/300/200",
//       description: "Test your memory skills"
//     },
//     {
//       id: 14,
//       title: "Breakout",
//       category: "arcade",
//       iframe: "https://www.fupa.com/game/Action-flash-games/breakout.html",
//       image: "/api/placeholder/300/200",
//       description: "Classic brick-breaking game"
//     },
//     {
//       id: 15,
//       title: "Pool",
//       category: "sports",
//       iframe: "https://www.fupa.com/game/Sports-flash-games/pool.html",
//       image: "/api/placeholder/300/200",
//       description: "8-ball pool billiards"
//     },
//     {
//       id: 16,
//       title: "Minesweeper",
//       category: "puzzle",
//       iframe: "https://www.fupa.com/game/Strategy-flash-games/minesweeper.html",
//       image: "/api/placeholder/300/200",
//       description: "Classic mine detection game"
//     }
//   ];

//   const categories = [
//     { id: 'all', name: 'All Games' },
//     { id: 'puzzle', name: 'Puzzle' },
//     { id: 'arcade', name: 'Arcade' },
//     { id: 'card', name: 'Card Games' },
//     { id: 'strategy', name: 'Strategy' },
//     { id: 'racing', name: 'Racing' },
//     { id: 'sports', name: 'Sports' }
//   ];

//   const filteredGames = activeCategory === 'all' 
//     ? games 
//     : games.filter(game => game.category === activeCategory);

//   const handleGameSelect = (game) => {
//     setSelectedGame(game);
//   };

//   const handleBackToGames = () => {
//     setSelectedGame(null);
//   };

//   if (selectedGame) {
//     return (
//       <div style={styles.gamePlayer}>
//         <div style={styles.gameHeader}>
//           <button style={styles.backButton} onClick={handleBackToGames}>
//             ← Back to Games
//           </button>
//           <h2 style={styles.gameTitle}>{selectedGame.title}</h2>
//         </div>
//         <div style={styles.gameContainer}>
//           <iframe
//             src={selectedGame.iframe}
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             style={styles.gameFrame}
//             title={selectedGame.title}
//           />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1 style={styles.title}>Gaming Hub</h1>
//         <p style={styles.subtitle}>Choose your favorite game and start playing!</p>
//       </header>

//       <nav style={styles.categoryNav}>
//         {categories.map(category => (
//           <button
//             key={category.id}
//             style={{
//               ...styles.categoryButton,
//               ...(activeCategory === category.id ? styles.activeCategoryButton : {})
//             }}
//             onClick={() => setActiveCategory(category.id)}
//           >
//             {category.name}
//           </button>
//         ))}
//       </nav>

//       <div style={styles.gamesGrid}>
//         {filteredGames.map(game => (
//           <div key={game.id} style={styles.gameCard} onClick={() => handleGameSelect(game)}>
//             <div style={styles.gameImageContainer}>
//               <img src={game.image} alt={game.title} style={styles.gameImage} />
//               <div style={styles.playOverlay}>
//                 <div style={styles.playButton}>▶ Play</div>
//               </div>
//             </div>
//             <div style={styles.gameInfo}>
//               <h3 style={styles.gameCardTitle}>{game.title}</h3>
//               <p style={styles.gameDescription}>{game.description}</p>
//               <span style={styles.categoryTag}>{game.category}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     backgroundColor: '#0f1419',
//     color: '#e8f4fd',
//     minHeight: '100vh',
//     padding: '0',
//     margin: '0'
//   },
//   header: {
//     background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%)',
//     padding: '3rem 2rem',
//     textAlign: 'center',
//     borderBottom: '2px solid #3d7eb8'
//   },
//   title: {
//     fontSize: '3rem',
//     fontWeight: '700',
//     margin: '0 0 0.5rem 0',
//     background: 'linear-gradient(45deg, #64b5f6, #42a5f5)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
//   },
//   subtitle: {
//     fontSize: '1.2rem',
//     margin: '0',
//     color: '#b3d9ff',
//     fontWeight: '300'
//   },
//   categoryNav: {
//     display: 'flex',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     gap: '0.5rem',
//     padding: '2rem',
//     background: '#1a2332'
//   },
//   categoryButton: {
//     padding: '0.8rem 1.5rem',
//     border: '2px solid #3d7eb8',
//     background: 'rgba(29, 78, 137, 0.3)',
//     color: '#e8f4fd',
//     borderRadius: '25px',
//     cursor: 'pointer',
//     fontSize: '0.9rem',
//     fontWeight: '500',
//     transition: 'all 0.3s ease',
//     outline: 'none'
//   },
//   activeCategoryButton: {
//     background: 'linear-gradient(135deg, #2196f3, #1976d2)',
//     borderColor: '#1976d2',
//     boxShadow: '0 4px 15px rgba(33, 150, 243, 0.4)',
//     transform: 'translateY(-2px)'
//   },
//   gamesGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//     gap: '1.5rem',
//     padding: '2rem',
//     maxWidth: '1400px',
//     margin: '0 auto'
//   },
//   gameCard: {
//     background: 'linear-gradient(145deg, #1e2936, #243447)',
//     borderRadius: '15px',
//     overflow: 'hidden',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     border: '1px solid #3d5a80',
//     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
//   },
//   gameImageContainer: {
//     position: 'relative',
//     overflow: 'hidden'
//   },
//   gameImage: {
//     width: '100%',
//     height: '200px',
//     objectFit: 'cover',
//     transition: 'transform 0.3s ease'
//   },
//   playOverlay: {
//     position: 'absolute',
//     top: '0',
//     left: '0',
//     right: '0',
//     bottom: '0',
//     background: 'rgba(33, 150, 243, 0.9)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     opacity: '0',
//     transition: 'opacity 0.3s ease'
//   },
//   playButton: {
//     background: 'white',
//     color: '#1976d2',
//     padding: '1rem 2rem',
//     borderRadius: '50px',
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
//   },
//   gameInfo: {
//     padding: '1.5rem'
//   },
//   gameCardTitle: {
//     margin: '0 0 0.5rem 0',
//     fontSize: '1.3rem',
//     fontWeight: '600',
//     color: '#64b5f6'
//   },
//   gameDescription: {
//     margin: '0 0 1rem 0',
//     color: '#b3d9ff',
//     fontSize: '0.9rem',
//     lineHeight: '1.5'
//   },
//   categoryTag: {
//     background: 'rgba(100, 181, 246, 0.2)',
//     color: '#64b5f6',
//     padding: '0.3rem 0.8rem',
//     borderRadius: '15px',
//     fontSize: '0.8rem',
//     textTransform: 'capitalize',
//     border: '1px solid rgba(100, 181, 246, 0.3)'
//   },
//   gamePlayer: {
//     height: '100vh',
//     backgroundColor: '#0f1419',
//     display: 'flex',
//     flexDirection: 'column'
//   },
//   gameHeader: {
//     background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%)',
//     padding: '1rem 2rem',
//     borderBottom: '2px solid #3d7eb8',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '1rem'
//   },
//   backButton: {
//     background: 'linear-gradient(135deg, #2196f3, #1976d2)',
//     color: 'white',
//     border: 'none',
//     padding: '0.8rem 1.5rem',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontSize: '0.9rem',
//     fontWeight: '500',
//     transition: 'all 0.3s ease',
//     outline: 'none'
//   },
//   gameTitle: {
//     color: '#e8f4fd',
//     margin: '0',
//     fontSize: '1.8rem',
//     fontWeight: '600'
//   },
//   gameContainer: {
//     flex: '1',
//     padding: '1rem',
//     background: '#1a2332'
//   },
//   gameFrame: {
//     borderRadius: '10px',
//     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
//   }
// };

// // Add hover effects using CSS-in-JS
// const styleSheet = document.createElement('style');
// styleSheet.innerHTML = `
//   .game-card:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 30px rgba(100, 181, 246, 0.3) !important;
//   }
//   .game-card:hover .game-image {
//     transform: scale(1.1);
//   }
//   .game-card:hover .play-overlay {
//     opacity: 1 !important;
//   }
//   .category-button:hover {
//     background: linear-gradient(135deg, #2196f3, #1976d2) !important;
//     border-color: #1976d2 !important;
//     transform: translateY(-2px);
//     box-shadow: 0 4px 15px rgba(33, 150, 243, 0.4);
//   }
//   .back-button:hover {
//     background: linear-gradient(135deg, #1976d2, #1565c0) !important;
//     transform: translateY(-2px);
//     box-shadow: 0 4px 15px rgba(25, 118, 210, 0.4);
//   }
// `;
// document.head.appendChild(styleSheet);

// // Add classes to elements for hover effects
// // React.useEffect(() => {
// //   const gameCards = document.querySelectorAll('[data-game-card]');
// //   gameCards.forEach(card => card.classList.add('game-card'));
  
// //   const gameImages = document.querySelectorAll('[data-game-image]');
// //   gameImages.forEach(img => img.classList.add('game-image'));
  
// //   const playOverlays = document.querySelectorAll('[data-play-overlay]');
// //   playOverlays.forEach(overlay => overlay.classList.add('play-overlay'));
  
// //   const categoryButtons = document.querySelectorAll('[data-category-button]');
// //   categoryButtons.forEach(btn => btn.classList.add('category-button'));
  
// //   const backButtons = document.querySelectorAll('[data-back-button]');
// //   backButtons.forEach(btn => btn.classList.add('back-button'));
// // }, []);

// export default GamingHub;