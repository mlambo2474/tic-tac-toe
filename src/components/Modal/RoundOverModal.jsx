import React, { useContext } from "react";
import { ModalTitle, ModalSubTitle } from "./RoundOveModal.styled";
import { ModalHeader, ModalBody, ModalFooter } from "./Modal.styled";
import Button from "../../components/button/Button";
import ModalContext from "../../context/ModalContext";
import GameContext from "../../context/GameContext";
import SfxContext from "../../context/SfxContext";
import { useNavigate } from "react-router";

const RoundOverModal = () => {
  const { handleModal } = useContext(ModalContext);
  const { resetBoard, gameState, restartGame } = useContext(GameContext);
  const { hoverSfx, clickSfx, completedSfx  } = useContext(SfxContext);
  const navigate = useNavigate()

  return (
    <div>
      <ModalHeader>
        {/* {gameState.player1.symbol === gameState.turn ? gameState.player1.name : gameState.player2.name }  */}
        <ModalTitle>
          {gameState.roundWinner
            ? `${gameState.roundWinner.name} wins this round `
            : " Round drawn"}
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <ModalSubTitle>Choices will be switched now</ModalSubTitle>
        <ModalSubTitle>
          {gameState.player1.name}: {gameState.player1.score}
        </ModalSubTitle>
        <ModalSubTitle>
          {gameState.player2.name}: {gameState.player2.score}
        </ModalSubTitle>
      </ModalBody>

      <ModalFooter>
        <Button
          color="#8437f9"
          onClick={() => {
            clickSfx()
            handleModal();
            resetBoard();
          }}
        >
          Continue
        </Button>
        <Button
          color="#f9c811"
          onClick={() => {
           
            
            // clickSfx();
            completedSfx()
            restartGame();
            handleModal();
            navigate("/")
           
          }}
        >
          Restart
        </Button>
      </ModalFooter>
    </div>
  );
};

export default RoundOverModal;
