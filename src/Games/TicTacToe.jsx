// src/components/Games/TicTacToe.jsx
import React, { useState, useEffect } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState({ X: 0, O: 0, tie: 0 });
  const [gameMode, setGameMode] = useState('pvp'); // 'pvp' or 'ai'
  
  useEffect(() => {
    checkWinner();
    
    // If AI's turn, make a move
    if (gameMode === 'ai' && !isXNext && !winner) {
      const timer = setTimeout(() => {
        makeAIMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [board, isXNext, gameMode]);
  
  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    // Check for winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        updateGameHistory(board[a]);
        return;
      }
    }
    
    // Check for tie
    if (!board.includes(null) && !winner) {
      setWinner('tie');
      updateGameHistory('tie');
    }
  };
  
  const updateGameHistory = (result) => {
    if (result === 'tie') {
      setGameHistory(prev => ({ ...prev, tie: prev.tie + 1 }));
    } else {
      setGameHistory(prev => ({ ...prev, [result]: prev[result] + 1 }));
    }
  };
  
  const handleClick = (index) => {
    if (board[index] || winner) return;
    
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };
  
  const makeAIMove = () => {
    // Simple AI: first try to win, then block, then random move
    const availableSpots = board.map((spot, index) => spot === null ? index : null).filter(val => val !== null);
    
    if (availableSpots.length === 0) return;
    
    // Try to find winning move
    for (let spot of availableSpots) {
      const boardCopy = [...board];
      boardCopy[spot] = 'O';
      if (checkWinningMove(boardCopy, 'O')) {
        handleClick(spot);
        return;
      }
    }
    
    // Try to block X from winning
    for (let spot of availableSpots) {
      const boardCopy = [...board];
      boardCopy[spot] = 'X';
      if (checkWinningMove(boardCopy, 'X')) {
        handleClick(spot);
        return;
      }
    }
    
    // If center is available, take it
    if (availableSpots.includes(4)) {
      handleClick(4);
      return;
    }
    
    // Make a random move
    const randomIndex = Math.floor(Math.random() * availableSpots.length);
    handleClick(availableSpots[randomIndex]);
  };
  
  const checkWinningMove = (board, player) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] === player && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    
    return false;
  };
  
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };
  
  const renderSquare = (index) => {
    return (
      <button
        className={`w-20 h-20 flex items-center justify-center text-3xl font-bold border border-gray-600 ${
          board[index] === 'X' ? 'text-blue-400' : 'text-red-400'
        } ${!board[index] && !winner ? 'hover:bg-gray-700' : ''}`}
        onClick={() => handleClick(index)}
        disabled={!!board[index] || !!winner || (gameMode === 'ai' && !isXNext)}
      >
        {board[index]}
      </button>
    );
  };
  
  const getStatusMessage = () => {
    if (winner === 'tie') {
      return "It's a tie!";
    } else if (winner) {
      return `Player ${winner} wins!`;
    } else {
      return `Next player: ${isXNext ? 'X' : 'O'}`;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 flex items-center justify-between w-full max-w-md">
        <div className="flex space-x-4">
          <button 
            onClick={() => setGameMode('pvp')}
            className={`px-4 py-2 rounded-lg ${
              gameMode === 'pvp' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            2 Players
          </button>
          <button 
            onClick={() => {
              setGameMode('ai');
              resetGame();
            }}
            className={`px-4 py-2 rounded-lg ${
              gameMode === 'ai' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            vs AI
          </button>
        </div>
        <button 
          onClick={resetGame}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Reset
        </button>
      </div>
      
      <div className="text-center mb-6">
        <h3 className={`text-xl font-bold ${winner ? (winner === 'tie' ? 'text-yellow-400' : 'text-green-400') : 'text-white'}`}>
          {getStatusMessage()}
        </h3>
      </div>
      
      <div className="mb-8">
        <div className="flex">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="flex">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="flex">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 w-full max-w-md bg-gray-700 p-4 rounded-lg">
        <div className="text-center">
          <div className="text-blue-400 font-bold">X</div>
          <div className="text-xl">{gameHistory.X}</div>
        </div>
        <div className="text-center">
          <div className="text-yellow-400 font-bold">Ties</div>
          <div className="text-xl">{gameHistory.tie}</div>
        </div>
        <div className="text-center">
          <div className="text-red-400 font-bold">O</div>
          <div className="text-xl">{gameHistory.O}</div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;