// import { useState, useEffect } from 'react';

// const ColorMatch = () => {
//   const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  
//   // Color configuration for UI elements
//   const colorConfig = {
//     red: {
//       bg: 'bg-red-500',
//       text: 'text-red-500',
//       hover: 'hover:bg-red-600',
//       border: 'border-red-600'
//     },
//     blue: {
//       bg: 'bg-blue-500',
//       text: 'text-blue-500',
//       hover: 'hover:bg-blue-600',
//       border: 'border-blue-600'
//     },
//     green: {
//       bg: 'bg-green-500',
//       text: 'text-green-500',
//       hover: 'hover:bg-green-600',
//       border: 'border-green-600'
//     },
//     yellow: {
//       bg: 'bg-yellow-500',
//       text: 'text-yellow-500',
//       hover: 'hover:bg-yellow-600',
//       border: 'border-yellow-600'
//     },
//     purple: {
//       bg: 'bg-purple-500',
//       text: 'text-purple-500',
//       hover: 'hover:bg-purple-600',
//       border: 'border-purple-600'
//     },
//     orange: {
//       bg: 'bg-orange-500',
//       text: 'text-orange-500',
//       hover: 'hover:bg-orange-600',
//       border: 'border-orange-600'
//     }
//   };

//   const [targetColor, setTargetColor] = useState('');
//   const [targetText, setTargetText] = useState('');
//   const [options, setOptions] = useState([]);
//   const [score, setScore] = useState(0);
//   const [highScore, setHighScore] = useState(0);
//   const [timer, setTimer] = useState(30);
//   const [gameActive, setGameActive] = useState(false);
//   const [feedback, setFeedback] = useState('');
//   const [streak, setStreak] = useState(0);
//   const [animateScore, setAnimateScore] = useState(false);

//   const startGame = () => {
//     setScore(0);
//     setStreak(0);
//     setTimer(30);
//     setGameActive(true);
//     setFeedback('');
//     generateNewRound();
//   };

//   const generateNewRound = () => {
//     // Pick a random color for the text
//     const textColor = colors[Math.floor(Math.random() * colors.length)];
    
//     // Pick a random color name to display (can be different from the text color)
//     const displayText = colors[Math.floor(Math.random() * colors.length)];
    
//     // Create options (shuffled colors)
//     let allOptions = [...colors].sort(() => Math.random() - 0.5).slice(0, 4);
    
//     // Make sure the correct color is included
//     if (!allOptions.includes(textColor)) {
//       allOptions[Math.floor(Math.random() * allOptions.length)] = textColor;
//     }
    
//     setTargetColor(textColor);
//     setTargetText(displayText);
//     setOptions(allOptions);
//   };

//   const handleColorClick = (color) => {
//     if (!gameActive) return;
    
//     if (color === targetColor) {
//       // Correct answer
//       const newScore = score + 1;
//       const newStreak = streak + 1;
//       setScore(newScore);
//       setStreak(newStreak);
//       setAnimateScore(true);
//       setTimeout(() => setAnimateScore(false), 300);
//       setFeedback('Correct!');
      
//       // Update high score if needed
//       if (newScore > highScore) {
//         setHighScore(newScore);
//       }
//     } else {
//       // Wrong answer
//       setStreak(0);
//       setFeedback('Wrong!');
//     }
    
//     setTimeout(() => {
//       setFeedback('');
//       generateNewRound();
//     }, 500);
//   };

//   useEffect(() => {
//     let interval;
    
//     if (gameActive && timer > 0) {
//       interval = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);
//     } else if (timer === 0) {
//       setGameActive(false);
      
//       // Update high score when game ends
//       if (score > highScore) {
//         setHighScore(score);
//       }
//     }
    
//     return () => clearInterval(interval);
//   }, [gameActive, timer, score, highScore]);

//   return (
//     <div className="w-full max-w-md mx-auto p-6 bg-gray-50 rounded-2xl shadow-lg">
//       <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Color Match</h2>
      
//       {!gameActive ? (
//         <div className="text-center">
//           <div className="mb-6 p-4 bg-white rounded-xl shadow-sm">
//             <p className="mb-3 text-gray-700">
//               Match the <span className="font-bold">color</span> of the text, not what the text says!
//             </p>
//             <p className="text-sm text-gray-500">
//               Choose the colored square that matches the text's color
//             </p>
//           </div>
          
//           {timer === 0 && (
//             <div className="mb-6 p-4 bg-white rounded-xl shadow-sm">
//               <h3 className="text-2xl font-bold text-gray-800">Game Over!</h3>
//               <p className="text-lg">Your score: <span className="font-bold text-blue-600">{score}</span></p>
//               {score === highScore && score > 0 && (
//                 <p className="mt-1 text-sm text-green-500 font-semibold">New High Score!</p>
//               )}
//               {highScore > 0 && score !== highScore && (
//                 <p className="mt-1 text-sm text-gray-600">High Score: {highScore}</p>
//               )}
//             </div>
//           )}
          
//           <button
//             onClick={startGame}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md"
//           >
//             {timer === 0 ? 'Play Again' : 'Start Game'}
//           </button>
//         </div>
//       ) : (
//         <div>
//           <div className="flex justify-between items-center mb-3">
//             <div className="flex flex-col">
//               <span className="text-gray-600 text-sm">Score</span>
//               <span className={`text-xl font-bold text-blue-600 ${animateScore ? 'scale-125 transition-transform' : ''}`}>
//                 {score}
//               </span>
//               {streak >= 3 && (
//                 <span className="text-xs text-green-500 font-semibold">
//                   {streak} streak!
//                 </span>
//               )}
//             </div>
//             <div className="text-center">
//               <span className="text-gray-600 text-sm">High Score</span>
//               <div className="text-lg font-semibold text-indigo-600">{highScore}</div>
//             </div>
//             <div className="flex flex-col items-end">
//               <span className="text-gray-600 text-sm">Time</span>
//               <span className={`text-xl font-bold ${timer <= 10 ? 'text-red-500' : 'text-blue-600'}`}>
//                 {timer}s
//               </span>
//             </div>
//           </div>
          
//           <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
//             <div 
//               className={`h-3 rounded-full transition-all duration-300 ${timer <= 10 ? 'bg-red-500' : 'bg-blue-600'}`}
//               style={{ width: `${(timer / 30) * 100}%` }}
//             ></div>
//           </div>
          
//           <div className="mb-8 p-6 bg-white rounded-xl shadow-sm text-center">
//             <h3 className="text-lg mb-2 text-gray-700">What is the color of this text?</h3>
//             <p className={`text-5xl font-bold ${colorConfig[targetColor].text} transition-colors duration-300`}>
//               {targetText.toUpperCase()}
//             </p>
//           </div>
          
//           <div className="grid grid-cols-2 gap-4">
//             {options.map((color, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleColorClick(color)}
//                 className={`${colorConfig[color].bg} h-24 rounded-xl shadow-md ${colorConfig[color].hover} transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:${colorConfig[color].border}`}
//                 aria-label={color}
//               >
//                 <span className="sr-only">{color}</span>
//               </button>
//             ))}
//           </div>
          
//           {feedback && (
//             <div 
//               className={`text-center mt-4 font-bold text-lg transition-opacity duration-300 
//                 ${feedback === 'Correct!' ? 'text-green-500' : 'text-red-500'}`}
//             >
//               {feedback}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ColorMatch;


import { useState, useEffect } from 'react';

const ThemedColorMatch = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  
  // Color configuration for UI elements - adapted for dark theme
  const colorConfig = {
    red: {
      bg: 'bg-red-500',
      text: 'text-red-500',
      hover: 'hover:bg-red-600',
      border: 'border-red-600'
    },
    blue: {
      bg: 'bg-blue-500',
      text: 'text-blue-500',
      hover: 'hover:bg-blue-600',
      border: 'border-blue-600'
    },
    green: {
      bg: 'bg-green-500',
      text: 'text-green-500',
      hover: 'hover:bg-green-600',
      border: 'border-green-600'
    },
    yellow: {
      bg: 'bg-yellow-500',
      text: 'text-yellow-500',
      hover: 'hover:bg-yellow-600',
      border: 'border-yellow-600'
    },
    purple: {
      bg: 'bg-purple-500',
      text: 'text-purple-500',
      hover: 'hover:bg-purple-600',
      border: 'border-purple-600'
    },
    orange: {
      bg: 'bg-orange-500',
      text: 'text-orange-500',
      hover: 'hover:bg-orange-600',
      border: 'border-orange-600'
    }
  };

  const [targetColor, setTargetColor] = useState('');
  const [targetText, setTargetText] = useState('');
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [streak, setStreak] = useState(0);
  const [animateScore, setAnimateScore] = useState(false);

  const startGame = () => {
    setScore(0);
    setStreak(0);
    setTimer(30);
    setGameActive(true);
    setFeedback('');
    generateNewRound();
  };

  const generateNewRound = () => {
    // Pick a random color for the text
    const textColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Pick a random color name to display (can be different from the text color)
    const displayText = colors[Math.floor(Math.random() * colors.length)];
    
    // Create options (shuffled colors)
    let allOptions = [...colors].sort(() => Math.random() - 0.5).slice(0, 4);
    
    // Make sure the correct color is included
    if (!allOptions.includes(textColor)) {
      allOptions[Math.floor(Math.random() * allOptions.length)] = textColor;
    }
    
    setTargetColor(textColor);
    setTargetText(displayText);
    setOptions(allOptions);
  };

  const handleColorClick = (color) => {
    if (!gameActive) return;
    
    if (color === targetColor) {
      // Correct answer
      const newScore = score + 1;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      setAnimateScore(true);
      setTimeout(() => setAnimateScore(false), 300);
      setFeedback('Correct!');
      
      // Update high score if needed
      if (newScore > highScore) {
        setHighScore(newScore);
      }
    } else {
      // Wrong answer
      setStreak(0);
      setFeedback('Wrong!');
    }
    
    setTimeout(() => {
      setFeedback('');
      generateNewRound();
    }, 500);
  };

  useEffect(() => {
    let interval;
    
    if (gameActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setGameActive(false);
      
      // Update high score when game ends
      if (score > highScore) {
        setHighScore(score);
      }
    }
    
    return () => clearInterval(interval);
  }, [gameActive, timer, score, highScore]);

  return (
    <div className="flex flex-col w-full h-full bg-gray-900">
      {/* Game header with X button */}
      <div className="flex justify-between items-center p-4 border-b border-gray-800">
        <h2 className="text-2xl font-bold text-white">Color Match</h2>
        <button className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Game content area */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          {!gameActive ? (
            <div className="flex flex-col items-center justify-center">
              {/* Game intro card */}
              <div className="w-full max-w-md mx-auto mb-8 bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 text-center">
                  <h2 className="text-3xl font-bold text-blue-400 mb-2">Color Match</h2>
                  <div className="mb-4 text-gray-300">
                    Match the <span className="text-blue-400 font-bold">color</span> of the text, not what the text says!
                  </div>
                  <p className="text-sm text-gray-400 mb-6">
                    Choose the colored square that matches the text's color
                  </p>
                  <button
                    onClick={startGame}
                    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-200 shadow-md"
                  >
                    Start Game
                  </button>
                </div>
              </div>
              
              {/* Game over card */}
              {timer === 0 && (
                <div className="w-full max-w-md mx-auto p-6 bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-lg mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Game Over!</h3>
                  <p className="text-lg text-gray-300 mb-1">Your score: <span className="font-bold text-blue-400">{score}</span></p>
                  {score === highScore && score > 0 && (
                    <p className="text-sm text-green-400 font-semibold mb-2">New High Score!</p>
                  )}
                  {highScore > 0 && score !== highScore && (
                    <p className="text-sm text-gray-400 mb-2">High Score: {highScore}</p>
                  )}
                  <button
                    onClick={startGame}
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-200 shadow-md mt-2"
                  >
                    Play Again
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="w-full max-w-md mx-auto bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              {/* Game stats bar */}
              <div className="p-4 bg-gray-800 border-b border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400">Score</span>
                    <span className={`text-xl font-bold text-blue-400 ${animateScore ? 'scale-125 transition-transform' : ''}`}>
                      {score}
                    </span>
                    {streak >= 3 && (
                      <span className="text-xs text-green-400 font-semibold">
                        {streak} streak!
                      </span>
                    )}
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-400">High Score</span>
                    <div className="text-lg font-semibold text-indigo-400">{highScore}</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-400">Time</span>
                    <span className={`text-xl font-bold ${timer <= 10 ? 'text-red-400' : 'text-blue-400'}`}>
                      {timer}s
                    </span>
                  </div>
                </div>
                {/* Timer bar */}
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${timer <= 10 ? 'bg-red-500' : 'bg-blue-600'}`}
                    style={{ width: `${(timer / 30) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Game display area */}
              <div className="p-6">
                <div className="mb-6 p-6 bg-gray-800/80 rounded-lg shadow-sm text-center">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">What is the color of this text?</h3>
                  <p className={`text-5xl font-bold ${colorConfig[targetColor].text} transition-colors duration-300`}>
                    {targetText.toUpperCase()}
                  </p>
                </div>
                
                {/* Color options */}
                <div className="grid grid-cols-2 gap-4">
                  {options.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorClick(color)}
                      className={`${colorConfig[color].bg} h-20 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 border-2 border-transparent focus:outline-none`}
                      aria-label={color}
                    >
                      <span className="sr-only">{color}</span>
                    </button>
                  ))}
                </div>
                
                {/* Feedback message */}
                {feedback && (
                  <div 
                    className={`text-center mt-4 font-bold text-lg transition-opacity duration-300 
                      ${feedback === 'Correct!' ? 'text-green-400' : 'text-red-400'}`}
                  >
                    {feedback}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemedColorMatch;