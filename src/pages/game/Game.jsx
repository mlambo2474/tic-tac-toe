import React, { useContext } from "react";
import { Container } from "../../styles/General.styled";
import { GameBoardWrapper } from "./Game.styled";
import GameCell from "../../components/gameCell/GameCell";
import { GameContext } from "../../context/GameContext";

const Game = () => {
  const { gameState } = useContext(GameContext);
  return (
    <Container>
      <GameBoardWrapper>
        {gameState.board.map((item, index) => (
          <GameCell key={index} cellItem={item} index={index} />
        ))}
      </GameBoardWrapper>
    </Container>
  );
};

export default Game;
