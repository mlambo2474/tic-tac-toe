import React, {useContext} from 'react'
import {CellStyle } from "./GameCell.styled"
import { GameContext } from '../../context/GameContext'
import { CheckForwinner } from '../../Utils'

const GameCell = ({cellItem, index}) => {
  const {updateBoard, gameState} = useContext(GameContext)

  const cellClickHandler = ()=>{
    updateBoard(index);
    const result = CheckForwinner(gameState.board)
  }


  return (
    <CellStyle onClick={cellClickHandler}>{cellItem}</CellStyle>
  )
}

export default GameCell;