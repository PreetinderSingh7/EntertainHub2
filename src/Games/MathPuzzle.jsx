import { useState, useEffect } from 'react';

const MathPuzzle = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameActive, setGameActive] = useState(false);
  const [equation, setEquation] = useState({ left: '', operator: '', right: '', result: 0 });
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [streak, setStreak] = useState(0);
  
  // Generate a new equation based on the current level
  const generateEquation = () => {
    let left, right, operator, result;
    const operators = ['+', '-', '*'];
    
    // Choose operator based on level
    if (level === 1) {
      operator = '+';
    } else if (level === 2) {
      operator = operators[Math.floor(Math.random() * 2)]; // + or -
    } else {
      operator = operators[Math.floor(Math.random() * 3)]; // +, - or *
    }
    
    // Generate numbers based on level and operator
    switch (operator) {
      case '+':
        left = Math.floor(Math.random() * (10 * level)) + 1;
        right = Math.floor(Math.random() * (10 * level)) + 1;
        result = left + right;
        break;
      case '-':
        right = Math.floor(Math.random() * (10 * level)) + 1;
        result = Math.floor(Math.random() * (10 * level)) + 1;
        left = result + right;
        break;
      case '*':
        left = Math.floor(Math.random() * (level * 2)) + 1;
        right = Math.floor(Math.random() * (level * 2)) + 1;
        result = left * right;
        break;
      default:
        left = 1;
        right = 1;
        result = 2;
    }
    
    setEquation({ left, operator, right, result });
  };
  
  // Start a new game
  const startGame = () => {
    setScore(0);
    setLevel(1);
    setTimeLeft(60);
    setGameActive(true);
    setUserAnswer('');
    setFeedback('');
    setStreak(0);
    generateEquation();
  };
  
  // Check the user's answer
  const checkAnswer = () => {
    if (!userAnswer) return;
    
    const answer = parseInt(userAnswer, 10);
    if (answer === equation.result) {
      // Correct answer
      const pointsEarned = level * 10;
      setScore(score + pointsEarned);
      setStreak(streak + 1);
      setFeedback(`Correct! +${pointsEarned} points`);
      
      // Level up after 3 correct answers in a row
      if ((streak + 1) % 3 === 0 && level < 3) {
        setLevel(level + 1);
        setFeedback(`Correct! +${pointsEarned} points. Level up!`);
      }
    } else {
      // Wrong answer
      setStreak(0);
      setFeedback('Incorrect! Try again.');
    }
    
    setUserAnswer('');
    generateEquation();
    
    // Clear feedback after 1.5 seconds
    setTimeout(() => setFeedback(''), 1500);
  };
  
  // Handle input key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };
  
  // Game timer
  useEffect(() => {
    let interval;
    
    if (gameActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
    
    return () => clearInterval(interval);
  }, [gameActive, timeLeft]);
  
  // Format time as mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Get operator symbol for display
  const getOperatorSymbol = (op) => {
    switch (op) {
      case '+': return '+';
      case '-': return '−';
      case '*': return '×';
      default: return op;
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Math Puzzle</h2>
      
      {!gameActive ? (
        <div className="text-center">
          <p className="mb-4 text-gray-600">
            Solve as many math problems as you can in 60 seconds! 
            The difficulty increases as you progress.
          </p>
          
          {timeLeft === 0 && (
            <div className="mb-4">
              <h3 className="text-xl font-bold">Game Over!</h3>
              <p className="text-lg">Your score: {score}</p>
            </div>
          )}
          
          <button
            onClick={startGame}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            {timeLeft === 0 ? 'Play Again' : 'Start Game'}
          </button>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-gray-600 font-medium">Score: {score}</span>
              <span className="ml-4 px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">
                Level {level}
              </span>
            </div>
            <span className={`font-bold ${timeLeft <= 10 ? 'text-red-500' : 'text-blue-600'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${(timeLeft / 60) * 100}%` }}
            ></div>
          </div>
          
          <div className="mb-6 text-center">
            <div className="text-3xl font-bold mb-4 flex items-center justify-center space-x-3">
              <span>{equation.left}</span>
              <span>{getOperatorSymbol(equation.operator)}</span>
              <span>{equation.right}</span>
              <span>=</span>
              <span>?</span>
            </div>
            
            {feedback && (
              <p className={`text-sm font-medium ${feedback.includes('Correct') ? 'text-green-500' : 'text-red-500'}`}>
                {feedback}
              </p>
            )}
          </div>
          
          <div className="mb-4 flex space-x-2">
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your answer..."
            />
            <button
              onClick={checkAnswer}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </div>
          
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Streak: {streak} {streak > 0 && `(${3 - (streak % 3)} more to level up)`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MathPuzzle;