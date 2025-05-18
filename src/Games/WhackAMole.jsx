import { useState, useEffect, useRef } from 'react';

const WhackAMole = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [activeMole, setActiveMole] = useState(null);
  const [moleSpeed, setMoleSpeed] = useState(1000);
  const [consecutiveHits, setConsecutiveHits] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const timerRef = useRef(null);
  const moleTimerRef = useRef(null);

  // Start a new game
  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    setActiveMole(null);
    setMoleSpeed(1000);
    setConsecutiveHits(0);
    
    // Create first mole after a short delay
    setTimeout(() => {
      if (gameActive) showRandomMole();
    }, 500);
  };

  // Show a mole in a random hole
  const showRandomMole = () => {
    if (!gameActive) return;
    
    // Hide previous mole
    setActiveMole(null);
    
    // Wait a bit before showing the next mole
    setTimeout(() => {
      if (!gameActive) return;
      
      // Show a new mole in a random position
      const nextMole = Math.floor(Math.random() * 9);
      setActiveMole(nextMole);
      
      // Set timer to hide the mole if not whacked
      moleTimerRef.current = setTimeout(() => {
        if (gameActive) {
          setActiveMole(null);
          setConsecutiveHits(0); // Reset consecutive hits on miss
          
          // Show next mole after a short delay
          setTimeout(showRandomMole, 300);
        }
      }, moleSpeed);
    }, 300);
  };

  // Handle whacking a mole
  const whackMole = (index) => {
    // Only count hits on active moles
    if (index === activeMole && gameActive) {
      // Clear the auto-hide timer
      clearTimeout(moleTimerRef.current);
      
      // Update score
      const pointsEarned = 10 + (Math.floor(consecutiveHits / 2) * 5);
      setScore(prevScore => prevScore + pointsEarned);
      
      // Update consecutive hits
      const newConsecutiveHits = consecutiveHits + 1;
      setConsecutiveHits(newConsecutiveHits);
      
      // Speed up the game every 5 consecutive hits
      if (newConsecutiveHits % 5 === 0 && moleSpeed > 500) {
        setMoleSpeed(current => Math.max(current - 100, 500));
      }
      
      // Hide the whacked mole and show a new one
      setActiveMole(null);
      setTimeout(showRandomMole, 300);
    }
  };

  // Game timer
  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      endGame();
    }
    
    return () => clearInterval(timerRef.current);
  }, [gameActive, timeLeft]);

  // End the game
  const endGame = () => {
    setGameActive(false);
    clearInterval(timerRef.current);
    clearTimeout(moleTimerRef.current);
    
    // Update high score if needed
    if (score > highScore) {
      setHighScore(score);
    }
  };
  
  // Create a grid of mole holes
  const renderMoleHoles = () => {
    const holes = [];
    
    for (let i = 0; i < 9; i++) {
      holes.push(
        <div 
          key={i}
          onClick={() => whackMole(i)}
          className={`relative w-full aspect-square bg-amber-800 rounded-full overflow-hidden cursor-pointer ${gameActive ? 'hover:bg-amber-700' : ''}`}
        >
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-100 ${i === activeMole ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="w-4/5 h-4/5 rounded-full bg-gray-700 flex items-center justify-center">
              <div className="w-4/5 h-4/5 rounded-full bg-gray-500 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return holes;
  };

  // Fix for starting game after it's already active
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      clearTimeout(moleTimerRef.current);
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-full max-w-md mx-auto p-4 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Whack-A-Mole</h2>
        
        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-700">
            <div className="font-bold">Score: {score}</div>
            {highScore > 0 && <div className="text-sm">High Score: {highScore}</div>}
          </div>
          
          {gameActive ? (
            <div className={`font-bold ${timeLeft <= 10 ? 'text-red-500' : 'text-blue-600'}`}>
              Time: {timeLeft}s
            </div>
          ) : (
            <button
              onClick={startGame}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
            >
              {score > 0 ? 'Play Again' : 'Start Game'}
            </button>
          )}
        </div>
        
        {gameActive && (
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            ></div>
          </div>
        )}
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          {renderMoleHoles()}
        </div>
        
        {!gameActive && score > 0 && (
          <div className="text-center mt-4">
            <h3 className="text-xl font-bold">Game Over!</h3>
            <p className="text-lg">Your score: {score}</p>
            {score === highScore && score > 0 && (
              <p className="text-sm text-green-600 font-bold">New High Score!</p>
            )}
          </div>
        )}
        
        {!gameActive && (
          <div className="text-center mt-2 text-sm text-gray-600">
            <p>Click on the moles as they appear to whack them!</p>
            <p>Consecutive hits earn bonus points and make the game faster.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhackAMole;