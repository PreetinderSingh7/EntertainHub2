// src/components/Games/SnakeGame.jsx
import React, { useState, useEffect, useRef } from 'react';

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [speed, setSpeed] = useState(100); // Milliseconds between moves
  const [difficulty, setDifficulty] = useState('medium');
  
  // Game state variables (using refs to access them in interval callback)
  const snakeRef = useRef([{ x: 10, y: 10 }]);
  const foodRef = useRef({ x: 5, y: 5 });
  const directionRef = useRef('RIGHT');
  const nextDirectionRef = useRef('RIGHT');
  const scoreRef = useRef(0);
  const gameOverRef = useRef(false);
  
  const gridSize = 20;
  const cellSize = 20;
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Load high score from localStorage
    const savedHighScore = localStorage.getItem('snake-high-score');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
    
    // Draw initial board
    drawBoard(ctx);
    
    // Add keyboard event listener
    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  
  useEffect(() => {
    // Update difficulty speed
    switch (difficulty) {
      case 'easy':
        setSpeed(150);
        break;
      case 'medium':
        setSpeed(100);
        break;
      case 'hard':
        setSpeed(70);
        break;
      default:
        setSpeed(100);
    }
  }, [difficulty]);
  
  useEffect(() => {
    // Game loop
    let gameLoop;
    
    if (gameStarted && !gameOver) {
      gameLoop = setInterval(() => {
        updateGame();
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        drawBoard(ctx);
      }, speed);
    }
    
    return () => {
      if (gameLoop) {
        clearInterval(gameLoop);
      }
    };
  }, [gameStarted, gameOver, speed]);
  
  const handleKeyPress = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        if (directionRef.current !== 'DOWN') {
          nextDirectionRef.current = 'UP';
        }
        break;
      case 'ArrowDown':
        if (directionRef.current !== 'UP') {
          nextDirectionRef.current = 'DOWN';
        }
        break;
      case 'ArrowLeft':
        if (directionRef.current !== 'RIGHT') {
          nextDirectionRef.current = 'LEFT';
        }
        break;
      case 'ArrowRight':
        if (directionRef.current !== 'LEFT') {
          nextDirectionRef.current = 'RIGHT';
        }
        break;
      default:
        break;
    }
  };
  
  const drawBoard = (ctx) => {
    // Clear canvas
    ctx.fillStyle = '#1f2937'; // Dark background
    ctx.fillRect(0, 0, gridSize * cellSize, gridSize * cellSize);
    
    // Draw food
    ctx.fillStyle = '#ef4444'; // Red food
    ctx.fillRect(
      foodRef.current.x * cellSize,
      foodRef.current.y * cellSize,
      cellSize,
      cellSize
    );
    
    // Draw snake
    const snake = snakeRef.current;
    snake.forEach((segment, index) => {
      // Head is a different color than body
      ctx.fillStyle = index === 0 ? '#22c55e' : '#16a34a';
      ctx.fillRect(
        segment.x * cellSize,
        segment.y * cellSize,
        cellSize,
        cellSize
      );
      
      // Draw eyes on the head
      if (index === 0) {
        ctx.fillStyle = '#000';
        
        // Calculate eye positions based on direction
        let eyeOffset1, eyeOffset2;
        
        switch (directionRef.current) {
          case 'UP':
            eyeOffset1 = { x: 0.25, y: 0.25 };
            eyeOffset2 = { x: 0.75, y: 0.25 };
            break;
          case 'DOWN':
            eyeOffset1 = { x: 0.25, y: 0.75 };
            eyeOffset2 = { x: 0.75, y: 0.75 };
            break;
          case 'LEFT':
            eyeOffset1 = { x: 0.25, y: 0.25 };
            eyeOffset2 = { x: 0.25, y: 0.75 };
            break;
          case 'RIGHT':
            eyeOffset1 = { x: 0.75, y: 0.25 };
            eyeOffset2 = { x: 0.75, y: 0.75 };
            break;
          default:
            eyeOffset1 = { x: 0.25, y: 0.25 };
            eyeOffset2 = { x: 0.75, y: 0.25 };
        }
        
        ctx.fillRect(
          (segment.x + eyeOffset1.x) * cellSize,
          (segment.y + eyeOffset1.y) * cellSize,
          cellSize / 5,
          cellSize / 5
        );
        
        ctx.fillRect(
          (segment.x + eyeOffset2.x) * cellSize,
          (segment.y + eyeOffset2.y) * cellSize,
          cellSize / 5,
          cellSize / 5
        );
      }
    });
    
    // Draw grid lines
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= gridSize; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cellSize, 0);
      ctx.lineTo(i * cellSize, gridSize * cellSize);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(0, i * cellSize);
      ctx.lineTo(gridSize * cellSize, i * cellSize);
      ctx.stroke();
    }
    
    // Draw game over message
    if (gameOverRef.current) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(0, 0, gridSize * cellSize, gridSize * cellSize);
      
      ctx.font = '24px Arial';
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.fillText('Game Over!', (gridSize * cellSize) / 2, (gridSize * cellSize) / 2 - 20);
      ctx.fillText(`Score: ${scoreRef.current}`, (gridSize * cellSize) / 2, (gridSize * cellSize) / 2 + 20);
    }
  };
  
  const updateGame = () => {
    // Update direction
    directionRef.current = nextDirectionRef.current;
    
    // Move snake
    const snake = [...snakeRef.current];
    const head = { ...snake[0] };
    
    // Calculate new head position
    switch (directionRef.current) {
      case 'UP':
        head.y -= 1;
        break;
      case 'DOWN':
        head.y += 1;
        break;
      case 'LEFT':
        head.x -= 1;
        break;
      case 'RIGHT':
        head.x += 1;
        break;
      default:
        break;
    }
    
    // Check for collision with walls
    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= gridSize ||
      head.y >= gridSize
    ) {
      gameOverRef.current = true;
      setGameOver(true);
      // Check if score is a new high score
      if (scoreRef.current > highScore) {
        setHighScore(scoreRef.current);
        localStorage.setItem('snake-high-score', scoreRef.current);
      }
      return;
    }
    
    // Check for collision with self
    for (let i = 0; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        gameOverRef.current = true;
        setGameOver(true);
        // Check if score is a new high score
        if (scoreRef.current > highScore) {
          setHighScore(scoreRef.current);
          localStorage.setItem('snake-high-score', scoreRef.current);
        }
        return;
      }
    }
    
    // Add new head
    snake.unshift(head);
    
    // Check for collision with food
    if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
      // Increase score
      scoreRef.current += 1;
      setScore(scoreRef.current);
      
      // Generate new food position
      const newFood = generateFood();
      foodRef.current = newFood;
    } else {
      // Remove tail
      snake.pop();
    }
    
    // Update snake
    snakeRef.current = snake;
  };
  
  const generateFood = () => {
    const food = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
    
    // Make sure food doesn't spawn on the snake
    const snake = snakeRef.current;
    for (let i = 0; i < snake.length; i++) {
      if (food.x === snake[i].x && food.y === snake[i].y) {
        return generateFood();
      }
    }
    
    return food;
  };
  
  const startGame = () => {
    // Reset game state
    snakeRef.current = [{ x: 10, y: 10 }];
    foodRef.current = generateFood();
    directionRef.current = 'RIGHT';
    nextDirectionRef.current = 'RIGHT';
    scoreRef.current = 0;
    setScore(0);
    gameOverRef.current = false;
    setGameOver(false);
    setGameStarted(true);
  };
  
  const handleDirectionClick = (direction) => {
    if (
      (direction === 'UP' && directionRef.current !== 'DOWN') ||
      (direction === 'DOWN' && directionRef.current !== 'UP') ||
      (direction === 'LEFT' && directionRef.current !== 'RIGHT') ||
      (direction === 'RIGHT' && directionRef.current !== 'LEFT')
    ) {
      nextDirectionRef.current = direction;
    }
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 flex items-center justify-between w-full max-w-md">
        <div className="space-y-2">
          <div className="font-medium">Score: {score}</div>
          <div className="text-gray-400">High Score: {highScore}</div>
        </div>
        
        <div className="space-x-2">
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="bg-gray-700 text-white px-3 py-1 rounded-lg"
            disabled={gameStarted && !gameOver}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          
          <button 
            onClick={startGame}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            {gameOver ? 'Try Again' : (gameStarted ? 'Restart' : 'Start')}
          </button>
        </div>
      </div>
      
      <div className="mb-6 relative">
        <canvas 
          ref={canvasRef} 
          width={gridSize * cellSize} 
          height={gridSize * cellSize}
          className="border border-gray-600 rounded-lg"
        />
        
        {!gameStarted && (
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-80 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Snake Game</h3>
            <p className="mb-6 text-center max-w-xs">
              Use arrow keys to control the snake and eat the red food to grow longer.
            </p>
            <button 
              onClick={startGame}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
            >
              Start Game
            </button>
          </div>
        )}
      </div>
      
      {/* Mobile controls */}
      <div className="grid grid-cols-3 gap-2 w-48 mb-6">
        <div className="h-12"></div>
        <button 
          onClick={() => handleDirectionClick('UP')}
          className="h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center"
        >
          ↑
        </button>
        <div className="h-12"></div>
        
        <button 
          onClick={() => handleDirectionClick('LEFT')}
          className="h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center"
        >
          ←
        </button>
        <button 
          onClick={() => handleDirectionClick('DOWN')}
          className="h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center"
        >
          ↓
        </button>
        <button 
          onClick={() => handleDirectionClick('RIGHT')}
          className="h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center"
        >
          →
        </button>
      </div>
      
      <div className="bg-gray-700 p-4 rounded-lg max-w-md">
        <h3 className="font-bold mb-2">How to Play:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Use arrow keys or buttons to control the snake</li>
          <li>Eat the red food to grow longer</li>
          <li>Avoid hitting the walls or yourself</li>
          <li>Try to get the highest score possible</li>
        </ul>
      </div>
    </div>
  );
};

export default SnakeGame;