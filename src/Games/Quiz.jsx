import { useState, useEffect } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct: 1
    },
    {
      question: "What is the capital of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      correct: 2
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
      correct: 1
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correct: 2
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correct: 3
    }
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(15);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (showScore || gameOver) return;

    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(countdown);
        handleNextQuestion();
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, showScore, gameOver]);

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
    
    if (optionIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      handleNextQuestion();
    }, 1000);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(15);
    } else {
      setShowScore(true);
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setTimer(15);
    setGameOver(false);
    
    // Shuffle questions
    setQuestions([...questions].sort(() => Math.random() - 0.5));
  };

  const getButtonClass = (index) => {
    const baseClass = "w-full p-3 rounded-lg mb-2 font-medium transition-all duration-300";
    
    if (selectedOption === null) {
      return `${baseClass} bg-blue-500 hover:bg-blue-600 text-white`;
    }
    
    if (index === questions[currentQuestion].correct) {
      return `${baseClass} bg-green-500 text-white`;
    }
    
    if (selectedOption === index) {
      return `${baseClass} bg-red-500 text-white`;
    }
    
    return `${baseClass} bg-blue-500 opacity-50 text-white`;
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Quiz Game</h2>
      
      {showScore ? (
        <div className="text-center">
          <h3 className="text-xl mb-4">Your Score: {score}/{questions.length}</h3>
          <p className="mb-4 text-lg">
            {score === questions.length 
              ? "Perfect! Amazing job!" 
              : score > questions.length / 2 
                ? "Good job! Keep practicing!" 
                : "Keep trying, you'll get better!"}
          </p>
          <button 
            onClick={restartGame}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Question {currentQuestion + 1}/{questions.length}</span>
            <span className={`font-bold ${timer <= 5 ? 'text-red-500' : 'text-blue-600'}`}>
              Time: {timer}s
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${(timer / 15) * 100}%` }}
            ></div>
          </div>
          
          <h3 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h3>
          
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={selectedOption !== null}
                className={getButtonClass(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;