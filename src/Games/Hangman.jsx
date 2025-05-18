// src/components/Games/Hangman.jsx
import React, { useState, useEffect } from 'react';

const Hangman = () => {
  const categories = {
    animals: [
      'elephant', 'giraffe', 'zebra', 'penguin', 'dolphin', 'kangaroo', 'leopard', 'rhinoceros',
      'squirrel', 'raccoon', 'hedgehog', 'flamingo', 'crocodile', 'butterfly'
    ],
    countries: [
      'brazil', 'australia', 'canada', 'france', 'germany', 'japan', 'mexico', 'russia',
      'spain', 'sweden', 'thailand', 'egypt', 'argentina', 'portugal'
    ],
    fruits: [
      'apple', 'banana', 'strawberry', 'watermelon', 'pineapple', 'kiwi', 'orange', 'grape',
      'mango', 'blueberry', 'peach', 'coconut', 'apricot', 'papaya'
    ]
  };
  
  const maxWrongGuesses = 6;
  
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('animals');
  const [gameStarted, setGameStarted] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  
  // Initialize game
  useEffect(() => {
    if (gameStarted) {
      startNewGame();
    }
  }, [gameStarted, selectedCategory]);
  
  const startNewGame = () => {
    // Select random word from category
    const wordList = categories[selectedCategory];
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    
    setWord(randomWord);
    setGuesses([]);
    setWrongGuesses(0);
    setGameWon(false);
    setGameLost(false);
  };
  
  const handleGuess = (letter) => {
    if (gameWon || gameLost || guesses.includes(letter)) {
      return;
    }
    
    // Add letter to guessed letters
    const newGuesses = [...guesses, letter];
    setGuesses(newGuesses);
    
    // Check if letter is in word
    if (!word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      
      // Check if game is lost
      if (newWrongGuesses >= maxWrongGuesses) {
        setGameLost(true);
        setLosses(losses + 1);
      }
    } else {
      // Check if game is won
      const isWordGuessed = word.split('').every(char => newGuesses.includes(char));
      if (isWordGuessed) {
        setGameWon(true);
        setWins(wins + 1);
      }
    }
  };
  
  const displayWord = () => {
    return word.split('').map((letter, index) => (
      <span key={index} className="mx-1">
        <span className={`text-2xl font-bold border-b-2 border-gray-400 px-2 py-1 ${guesses.includes(letter) ? 'text-white' : 'invisible'}`}>
          {letter}
        </span>
      </span>
    ));
  };
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  const drawHangman = () => {
    const parts = [
      // Head
      <circle key="head" cx="150" cy="60" r="20" stroke="white" strokeWidth="4" fill="none" />,
      // Body
      <line key="body" x1="150" y1="80" x2="150" y2="130" stroke="white" strokeWidth="4" />,
      // Left Arm
      <line key="leftArm" x1="150" y1="90" x2="120" y2="120" stroke="white" strokeWidth="4" />,
      // Right Arm
      <line key="rightArm" x1="150" y1="90" x2="180" y2="120" stroke="white" strokeWidth="4" />,
      // Left Leg
      <line key="leftLeg" x1="150" y1="130" x2="130" y2="170" stroke="white" strokeWidth="4" />,
      // Right Leg
      <line key="rightLeg" x1="150" y1="130" x2="170" y2="170" stroke="white" strokeWidth="4" />
    ];
    
    const visibleParts = parts.slice(0, wrongGuesses);
    
    return (
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Gallows */}
        <line x1="40" y1="180" x2="160" y2="180" stroke="white" strokeWidth="4" />
        <line x1="60" y1="20" x2="60" y2="180" stroke="white" strokeWidth="4" />
        <line x1="60" y1="20" x2="150" y2="20" stroke="white" strokeWidth="4" />
        <line x1="150" y1="20" x2="150" y2="40" stroke="white" strokeWidth="4" />
        
        {/* Hangman parts based on wrong guesses */}
        {visibleParts}
        
        {/* Face based on game state */}
        {wrongGuesses > 0 && (
          <>
            {/* Eyes */}
            {gameWon ? (
              <>
                {/* Happy eyes */}
                <line x1="142" y1="55" x2="146" y2="60" stroke="white" strokeWidth="2" />
                <line x1="142" y1="60" x2="146" y2="55" stroke="white" strokeWidth="2" />
                <line x1="154" y1="55" x2="158" y2="60" stroke="white" strokeWidth="2" />
                <line x1="154" y1="60" x2="158" y2="55" stroke="white" strokeWidth="2" />
              </>
            ) : gameLost ? (
              <>
                {/* Sad eyes (X) */}
                <line x1="142" y1="55" x2="146" y2="60" stroke="white" strokeWidth="2" />
                <line x1="142" y1="60" x2="146" y2="55" stroke="white" strokeWidth="2" />
                <line x1="154" y1="55" x2="158" y2="60" stroke="white" strokeWidth="2" />
                <line x1="154" y1="60" x2="158" y2="55" stroke="white" strokeWidth="2" />
              </>
            ) : (
              <>
                {/* Normal eyes (dots) */}
                <circle cx="144" cy="57" r="2" fill="white" />
                <circle cx="156" cy="57" r="2" fill="white" />
              </>
            )}
            
            {/* Mouth based on game state */}
            {gameWon ? (
              // Happy mouth
              <path d="M140,70 Q150,80 160,70" stroke="white" strokeWidth="2" fill="none" />
            ) : gameLost ? (
              // Sad mouth
              <path d="M140,75 Q150,65 160,75" stroke="white" strokeWidth="2" fill="none" />
            ) : (
              // Neutral mouth
              <line x1="142" y1="70" x2="158" y2="70" stroke="white" strokeWidth="2" />
            )}
          </>
        )}
      </svg>
    );
  };
  
  return (
    <div className="flex flex-col items-center">
      {!gameStarted ? (
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg max-w-lg mb-8">
          <h2 className="text-2xl font-bold mb-6">Welcome to Hangman!</h2>
          <p className="text-center mb-6">
            Guess the hidden word one letter at a time, but be careful - after 6 wrong guesses, the game is over!
          </p>
          <div className="mb-6">
            <label className="block mb-2">Choose a category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full"
            >
              <option value="animals">Animals</option>
              <option value="countries">Countries</option>
              <option value="fruits">Fruits</option>
            </select>
          </div>
          <button
            onClick={() => setGameStarted(true)}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Start Game
          </button>
        </div>
      ) : (
        <>
          <div className="mb-6 flex items-center justify-between w-full max-w-md">
            <div className="space-y-2">
              <div className="text-sm">Category: <span className="font-medium capitalize">{selectedCategory}</span></div>
              <div className="text-sm">Wrong Guesses: <span className="font-medium">{wrongGuesses} / {maxWrongGuesses}</span></div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-xs text-gray-400">Wins</div>
                <div className="text-lg font-medium text-green-400">{wins}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-400">Losses</div>
                <div className="text-lg font-medium text-red-400">{losses}</div>
              </div>
              <button
                onClick={startNewGame}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                New Word
              </button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg">
              {drawHangman()}
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-6 flex flex-wrap justify-center">
                {displayWord()}
              </div>
              
              {gameWon ? (
                <div className="text-xl font-bold text-green-400 mb-4">You won! 🎉</div>
              ) : gameLost ? (
                <div className="text-center mb-4">
                  <div className="text-xl font-bold text-red-400 mb-2">Game Over!</div>
                  <div className="text-gray-300">The word was: <span className="font-bold">{word}</span></div>
                </div>
              ) : null}
              
              <div className="grid grid-cols-7 gap-2 mt-4">
                {alphabet.map(letter => (
                  <button
                    key={letter}
                    onClick={() => handleGuess(letter)}
                    disabled={guesses.includes(letter) || gameWon || gameLost}
                    className={`w-10 h-10 rounded-md flex items-center justify-center font-medium
                      ${guesses.includes(letter)
                        ? word.includes(letter)
                          ? 'bg-green-700 text-white opacity-70'
                          : 'bg-red-700 text-white opacity-70'
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                      }
                      ${(guesses.includes(letter) || gameWon || gameLost) ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      
      <div className="bg-gray-700 p-4 rounded-lg max-w-lg">
        <h3 className="font-bold mb-2">How to Play:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Select a category and try to guess the hidden word</li>
          <li>Click on letters to make your guess</li>
          <li>You can make up to 6 wrong guesses before losing</li>
          <li>Green letters are correct, red letters are incorrect</li>
        </ul>
      </div>
    </div>
  );
};

export default Hangman;