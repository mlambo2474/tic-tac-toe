import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import  GameContext  from "../../context/GameContext";
import { CheckForwinner } from "../../Utils";
import IconX from "../../assets/svgs/iconX";
import IconO from "../../assets/svgs/iconO";
import XIconOutline from "../../assets/svgs/iconXOutline";
import OIconOutline from "../../assets/svgs/iconOOutline";
import  ModalContext  from "../../context/ModalContext";
import RoundOverModal from "../Modal/RoundOverModal";
import SfxContext from "../../context/SfxContext";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, gameState, roundComplete } = useContext(GameContext);
 const {handleModal} = useContext(ModalContext);
 const { hoverSfx, clickSfx, completedSfx, winSfx} = useContext(SfxContext)

  const cellClickHandler = () => {
    clickSfx()
    updateBoard(index);
    const result = CheckForwinner(gameState.board);
    if(result){
      handleModal(<RoundOverModal />);
      roundComplete(result);
      if(result !== "draw"){
        winSfx()
      }else{
        completedSfx()
      }
    }
  };
  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO />
      </CellStyle>
    );
  }
  return (
    <CellStyle onClick={cellClickHandler}  onMouseEnter={()=> hoverSfx()}>
      {gameState.turn === "x" ? <XIconOutline className="OutlineIcon"/> : <OIconOutline className="OutlineIcon"/>}
    </CellStyle>
  );
};

export default GameCell;
