import React, { createContext, useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";


const GameContext = createContext({});

export const GameContextProvider = (props) => {
  //create game  state and functions
  const [gameState, setGameState] = useState({
    board: [null, null, null, null, null, null, null, null, null],
    player1: {
      name: "Player1",
      symbol: "x",
      score: 0,
      color: "#8437f9",
      avatarConfig: genConfig(),
    },
    player2: {
      name: "Player2",
      symbol: "o",
      score: 0,
      color:  "#f9c811",
      avatarConfig: genConfig(),
    },
    turn: "x",
    RoundWinner: "",
    winningCombo: [],
  });
  // console.log("player1 is ", gameState.player1);
  const updateBoard = (index) => {
    let updatedBoard = gameState.board;
    updatedBoard[index] = gameState.turn;
    setGameState({
      ...gameState,
      board: updatedBoard,
      //toggling between x and o
      turn: gameState.turn === "x" ? "o" : "x",
    });
  };

  const resetBoard = () => {
    setGameState({
      ...gameState,
      board: [null, null, null, null, null, null, null, null, null],
      turn: "x",
      RoundWinner: "",
      winningCombo :[],
    });
  };

  const toggleSymbol = (symbol) => (symbol === "x" ? "o" : "x");

  const switchTurn = () => {
    setGameState((prevState) => ({
      ...prevState,
      player1: {
        ...prevState.player1,
        // symbol: gameState.player1.symbol === "x" ? "o" : "x",
        symbol: toggleSymbol(gameState.player1.symbol),
      },
      player2: {
        ...prevState.player2,
        symbol: toggleSymbol(gameState.player2.symbol),
      },
      turn: "x",
    }));
  };

  const updateScore = (winner, result) => {
    //winner is going to be either player, player 2 or draw
    if (winner === "draw") {
      setGameState((prevState) => ({
        ...prevState,
        player1: {
          ...prevState.player1,
          score: prevState.player1.score + 0.5,
        },
        player2: {
          ...prevState.player2,
          score: prevState.player2.score + 0.5,
        },
        roundWinner: "",
        winningCombo: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      }));
    } else {
      setGameState((prevState) => ({
        ...prevState,
        [winner]: {
          ...prevState[winner],
          score: prevState[winner].score + 1,
        },
        roundWinner: prevState[winner],
        winningCombo : result,
      }));
    }
  };

  const roundComplete = (result) => {
    if (gameState.turn === gameState.player1.symbol && result !== "draw") {
      // console.log("player 1 wins");
      updateScore("player1", result);
    } else if (
      gameState.turn === gameState.player2.symbol &&
      result !== "draw"
    ) {
      // console.log("player 2 win");
      updateScore("player2", result);
    } else {
      updateScore("draw", result);
      // console.log("draw");
    }
    switchTurn();
  };

  const restartGame = ()=>{
     setGameState({
      board: [null, null, null, null, null, null, null, null, null],
      player1: {
        name: "Player1",
        symbol: "x",
        score: 0,
        color: "#8437f9",
        avatarConfig: genConfig(),
      },
      player2: {
        name: "Player2",
        symbol: "o",
        score: 0,
        color:  "#f9c811",
        avatarConfig: genConfig(),
      },
      turn: "x",
      RoundWinner: "",
      winningCombo :[],
    })
  }
  return (
    <GameContext.Provider
      value={{ gameState, updateBoard, resetBoard, roundComplete, restartGame }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContext;
