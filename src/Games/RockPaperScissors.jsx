import { useState, useEffect } from 'react';

const RockPaperScissors = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [roundCount, setRoundCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [playerStreak, setPlayerStreak] = useState(0);
  const [resultMessage, setResultMessage] = useState('');
  const [animating, setAnimating] = useState(false);

  // Map of choices to their icon representation
  const choiceIcons = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️",
    null: "?"
  };

  // Start a new game
  const startGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setRoundCount(0);
    setGameOver(false);
    setGameStarted(true);
    setPlayerStreak(0);
    resetRound();
  };

  // Reset for a new round
  const resetRound = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult('');
    setResultMessage('');
    setCountdown(null);
    setAnimating(false);
  };

  // Handle player choice
  const makeChoice = (choice) => {
    if (animating || playerChoice !== null) return;
    
    setAnimating(true);
    setPlayerChoice(choice);
    
    // Animate countdown
    setCountdown(3);
    
    // Start countdown animation
    let count = 3;
    const countdownInterval = setInterval(() => {
      count -= 1;
      if (count > 0) {
        setCountdown(count);
      } else {
        clearInterval(countdownInterval);
        setCountdown(null);
        
        // Determine computer choice
        const compChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(compChoice);
        
        // Determine winner
        determineWinner(choice, compChoice);
        setAnimating(false);
      }
    }, 500);
  };

  // Determine the winner of the round
  const determineWinner = (player, computer) => {
    setRoundCount(roundCount + 1);
    
    if (player === computer) {
      setResult('tie');
      setResultMessage("It's a tie!");
      setPlayerStreak(0);
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      setResult('win');
      const newStreak = playerStreak + 1;
      setPlayerStreak(newStreak);
      
      let message = "You win this round!";
      if (newStreak >= 3) {
        message += ` ${newStreak} streak! 🔥`;
      }
      
      setResultMessage(message);
      setPlayerScore(playerScore + 1);
    } else {
      setResult('lose');
      setResultMessage("Computer wins this round!");
      setPlayerStreak(0);
      setComputerScore(computerScore + 1);
    }
    
    // Check for game over (first to 5 wins)
    if (playerScore + 1 >= 5) {
      setGameOver(true);
      setResultMessage("Congratulations! You won the game!");
    } else if (computerScore + 1 >= 5) {
      setGameOver(true);
      setResultMessage("Game over! The computer won.");
    }
  };

  // Get result color class
  const getResultColorClass = () => {
    switch (result) {
      case 'win':
        return 'text-green-500';
      case 'lose':
        return 'text-red-500';
      case 'tie':
        return 'text-blue-500';
      default:
        return 'text-gray-600';
    }
  };

  // Determine background color for choice buttons
  const getChoiceButtonClass = (choice) => {
    const baseClass = "flex flex-col items-center justify-center h-24 w-24 rounded-full text-4xl font-bold transition-all duration-300";
    
    if (choice === playerChoice) {
      return `${baseClass} bg-blue-500 text-white transform scale-110`;
    }
    
    if (playerChoice !== null) {
      return `${baseClass} bg-gray-200 text-gray-400 opacity-50`;
    }
    
    return `${baseClass} bg-gray-200 hover:bg-blue-100 text-gray-700`;
  };

  // Render the score display
  const renderScoreDisplay = () => (
    <div className="flex justify-between items-center mb-4">
      <div className="text-center">
        <div className="text-xl font-bold">You</div>
        <div className="text-3xl font-bold text-blue-600">{playerScore}</div>
      </div>
      
      <div className="text-center">
        <div className="text-sm">Round</div>
        <div className="text-lg">{roundCount}</div>
      </div>
      
      <div className="text-center">
        <div className="text-xl font-bold">CPU</div>
        <div className="text-3xl font-bold text-red-600">{computerScore}</div>
      </div>
    </div>
  );

  // Render the main game area
  const renderGameArea = () => (
    <div>
      {renderScoreDisplay()}
      
      <div className="mb-6 flex justify-center items-center gap-6">
        <div className="text-center">
          <div className="text-sm mb-2">You</div>
          <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-5xl">
            {choiceIcons[playerChoice]}
          </div>
        </div>
        
        <div className="text-center">
          {countdown ? (
            <div className="h-12 w-12 rounded-full bg-yellow-400 flex items-center justify-center text-2xl font-bold animate-pulse">
              {countdown}
            </div>
          ) : (
            <div className="text-3xl font-bold">VS</div>
          )}
        </div>
        
        <div className="text-center">
          <div className="text-sm mb-2">CPU</div>
          <div className="h-24 w-24 rounded-full bg-red-100 flex items-center justify-center text-5xl">
            {choiceIcons[computerChoice]}
          </div>
        </div>
      </div>
      
      {resultMessage && (
        <div className={`text-center mb-6 text-xl font-bold ${getResultColorClass()}`}>
          {resultMessage}
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-center mb-4 text-gray-700">Choose your move:</h3>
        <div className="flex justify-center items-center gap-4">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => makeChoice(choice)}
              disabled={playerChoice !== null || animating}
              className={getChoiceButtonClass(choice)}
              aria-label={choice}
            >
              {choiceIcons[choice]}
              <span className="text-xs mt-2 capitalize">{choice}</span>
            </button>
          ))}
        </div>
      </div>
      
      {playerChoice !== null && !gameOver && (
        <div className="text-center">
          <button
            onClick={resetRound}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Next Round
          </button>
        </div>
      )}
      
      {gameOver && (
        <div className="text-center">
          <button
            onClick={startGame}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Rock Paper Scissors</h2>
      
      {!gameStarted ? (
        <div className="text-center">
          <p className="mb-4 text-gray-600">
            Classic Rock Paper Scissors game. First to 5 wins!
          </p>
          
          <button
            onClick={startGame}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Start Game
          </button>
        </div>
      ) : (
        renderGameArea()
      )}
    </div>
  );
};

export default RockPaperScissors;