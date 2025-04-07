import React, { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  //create game  state and functions
  const [gameState, setGameState] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1 : {
        name: "Tonderai",
        symbol : "x",
        score: 0
    },
    player2: {
        name: "Shawn",
        symbol : "o",
        score: 0
    },
    turn: "x"
});
 const updateBoard = (index)=>{
        let updatedBoard = gameState.board;
        updatedBoard[index] = gameState.turn
        setGameState({
            ...gameState,
          board : updatedBoard,
          //toggling between x and o
          turn: gameState.turn === "x"? "o" : "x"
        })
}
const resetBoard = ()=>{
    setGameState({
        ...gameState,
        board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        turn: "x"
    })
}


  return (
    <GameContext.Provider value={{ gameState, updateBoard, resetBoard  }}>
      {props.children}
    </GameContext.Provider>
  );
};