import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import GameContext from "../../context/GameContext";
import { CheckForwinner } from "../../Utils";
import IconX from "../../assets/svgs/iconX";
import IconO from "../../assets/svgs/iconO";
import XIconOutline from "../../assets/svgs/iconXOutline";
import OIconOutline from "../../assets/svgs/iconOOutline";
import ModalContext from "../../context/ModalContext";
import RoundOverModal from "../Modal/RoundOverModal";
import SfxContext from "../../context/SfxContext";

const GameCell = ({ cellItem, index, isWinningCell }) => {
  const { updateBoard, gameState, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const { hoverSfx, clickSfx, completedSfx, winSfx } = useContext(SfxContext);

  const cellClickHandler = () => {
    clickSfx();
    updateBoard(index);
    const result = CheckForwinner(gameState.board);
    console.log(result);
    if (result) {
      roundComplete(result)
      setTimeout(() =>{
        handleModal(<RoundOverModal />);
      }, 2000)
      if (result !== "draw") {
        winSfx();
      } else {
        completedSfx();
      }
     
    }
  };

  if (cellItem === "x") {
    return (
      <CellStyle isWinningCell={isWinningCell ?? false}>
        <IconX className="markedItem" />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle isWinningCell={isWinningCell ?? false}>
        <IconO className="markedItem" />
      </CellStyle>
    );
  }
  return (
    <CellStyle onClick={cellClickHandler} onMouseEnter={() => hoverSfx()}>
      {gameState.turn === "x" ? (
        <XIconOutline className="OutlineIcon" />
      ) : (
        <OIconOutline className="OutlineIcon" />
      )}
    </CellStyle>
  );
};

export default GameCell;
