import React, { useContext } from "react";
import { Container } from "../../styles/General.styled";
import { GameBoardWrapper } from "./Game.styled";
import GameCell from "../../components/gameCell/GameCell";
import GameContext from "../../context/GameContext";
import Player from "../../components/Player/Player";

const Game = () => {
  const { gameState } = useContext(GameContext);
  // console.log("gameState in Game is", gameState)
  return (
    <Container>
      <Player
        player={gameState.player1}
        isPlayerActive={gameState.player1.symbol === gameState.turn}
      />
      <GameBoardWrapper>
        {gameState.board.map((item, index) => (
          <GameCell key={index} cellItem={item} index={index} />
        ))}
      </GameBoardWrapper>
      <Player
        player={gameState.player2}
        isPlayerActive={gameState.player2.symbol === gameState.turn}
      />
    </Container>
  );
};

export default Game;
