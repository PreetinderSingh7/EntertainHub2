import { useState, useEffect } from 'react';

const WordScramble = () => {
  const wordsList = [
    'javascript', 'programming', 'developer', 'computer', 'keyboard',
    'software', 'algorithm', 'internet', 'database', 'function',
    'variable', 'network', 'application', 'framework', 'language',
    'browser', 'website', 'responsive', 'frontend', 'backend'
  ];

  const [currentWord, setCurrentWord] = useState('');
  const [scrambledWord, setScrambledWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameActive, setGameActive] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [usedWords, setUsedWords] = useState([]);
  const [showHint, setShowHint] = useState(false);

  // Scramble a word
  const scrambleWord = (word) => {
    const wordArray = word.split('');
    let scrambled = '';
    
    // Keep scrambling until we get a different word
    do {
      const shuffled = [...wordArray].sort(() => Math.random() - 0.5);
      scrambled = shuffled.join('');
    } while (scrambled === word);
    
    return scrambled;
  };

  // Choose a new word and scramble it
  const getNewWord = () => {
    const availableWords = wordsList.filter(word => !usedWords.includes(word));
    
    // If all words have been used, reset the list
    if (availableWords.length === 0) {
      setUsedWords([]);
      return getNewWord();
    }
    
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const selectedWord = availableWords[randomIndex];
    
    setCurrentWord(selectedWord);
    setScrambledWord(scrambleWord(selectedWord));
    setUsedWords([...usedWords, selectedWord]);
    setShowHint(false);
  };

  // Start a new game
  const startGame = () => {
    setScore(0);
    setTimeLeft(60);
    setGameActive(true);
    setUserInput('');
    setFeedback('');
    setUsedWords([]);
    getNewWord();
  };

  // Check user's answer
  const checkAnswer = () => {
    if (userInput.toLowerCase().trim() === currentWord) {
      setScore(score + 1);
      setFeedback('Correct!');
      setUserInput('');
      getNewWord();
    } else {
      setFeedback('Try again!');
    }
    
    setTimeout(() => setFeedback(''), 1500);
  };

  // Handle submission
  const handleSubmit = () => {
    checkAnswer();
  };

  // Handle input key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  // Handle hint button
  const handleHint = () => {
    setShowHint(true);
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

  // Convert seconds to mm:ss format
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Word Scramble</h2>
      
      {!gameActive ? (
        <div className="text-center">
          <p className="mb-4 text-gray-600">
            Unscramble as many words as you can in 60 seconds!
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
            <span className="text-gray-600 font-medium">Score: {score}</span>
            <span className={`font-bold ${timeLeft <= 10 ? 'text-red-500' : 'text-blue-600'}`}>
              Time: {formatTime(timeLeft)}
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${(timeLeft / 60) * 100}%` }}
            ></div>
          </div>
          
          <div className="mb-6 text-center">
            <h3 className="text-lg mb-2">Unscramble this word:</h3>
            <p className="text-3xl font-bold tracking-wider text-blue-700 mb-2">
              {scrambledWord.toUpperCase()}
            </p>
            
            {showHint && (
              <p className="text-sm text-gray-500 italic mb-2">
                Hint: The first letter is "{currentWord[0]}" and the last letter is "{currentWord[currentWord.length-1]}"
              </p>
            )}
            
            {feedback && (
              <p className={`text-sm font-bold ${feedback === 'Correct!' ? 'text-green-500' : 'text-red-500'}`}>
                {feedback}
              </p>
            )}
          </div>
          
          <div className="mb-4 flex space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your answer..."
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </div>
          
          <div className="text-center">
            <button
              onClick={handleHint}
              disabled={showHint}
              className={`text-sm ${showHint ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-800'}`}
            >
              {showHint ? 'Hint shown' : 'Get a hint'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordScramble;