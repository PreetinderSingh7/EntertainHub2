// src/components/Games/MemoryGame.jsx
import React, { useState, useEffect } from 'react';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  
  // Emoji pairs for the game
  const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🦁', '🐯', '🐨', '🐷'];
  
  useEffect(() => {
    initializeGame();
  }, []);
  
  const initializeGame = () => {
    // Get 8 random emoji pairs
    const selectedEmojis = emojis.sort(() => 0.5 - Math.random()).slice(0, 8);
    // Create pairs and shuffle
    const newCards = [...selectedEmojis, ...selectedEmojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji, flipped: false, solved: false }));
    
    setCards(newCards);
    setFlipped([]);
    setSolved([]);
    setDisabled(false);
    setMoves(0);
    setGameWon(false);
  };
  
  const handleCardClick = (id) => {
    if (disabled) return;
    
    // Prevent clicking the same card or already solved cards
    if (flipped.includes(id) || solved.includes(id)) return;
    
    // Add card to flipped array
    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);
    
    // If this is the first card of the pair
    if (newFlipped.length === 1) return;
    
    // If this is the second card
    setDisabled(true);
    setMoves(moves + 1);
    
    // Check if cards match
    const firstCardId = newFlipped[0];
    const secondCardId = newFlipped[1];
    
    if (cards[firstCardId].emoji === cards[secondCardId].emoji) {
      // Match found
      setSolved([...solved, firstCardId, secondCardId]);
      setFlipped([]);
      setDisabled(false);
      
      // Check if game is won
      if (solved.length + 2 === cards.length) {
        setGameWon(true);
      }
    } else {
      // No match
      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  };
  
  const isCardFlipped = (id) => flipped.includes(id) || solved.includes(id);
  
  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 flex items-center justify-between w-full max-w-md">
        <span className="text-lg font-medium">Moves: {moves}</span>
        <button 
          onClick={initializeGame}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          New Game
        </button>
      </div>
      
      {gameWon ? (
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-green-400 mb-4">Congratulations! 🎉</h3>
          <p className="text-lg mb-4">You completed the game in {moves} moves!</p>
          <button 
            onClick={initializeGame}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 w-full max-w-md">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`h-24 flex items-center justify-center rounded-lg cursor-pointer transition-all duration-300 ${
                isCardFlipped(card.id)
                  ? 'bg-blue-600 rotate-y-180'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              {isCardFlipped(card.id) ? (
                <span className="text-4xl">{card.emoji}</span>
              ) : null}
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-8 bg-gray-700 p-4 rounded-lg max-w-md">
        <h3 className="font-bold mb-2">How to Play:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Flip cards to find matching pairs</li>
          <li>Try to complete the game in as few moves as possible</li>
          <li>A move consists of flipping two cards</li>
        </ul>
      </div>
    </div>
  );
};

export default MemoryGame;