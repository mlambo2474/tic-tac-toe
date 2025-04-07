import React, {useContext} from "react";
import { Title, Subtitle } from "../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "./Modal.styled";
import Button from "../../components/button/Button";
import { ModalContext } from "../../context/ModalContext";
import { GameContext } from "../../context/GameContext";


const RoundOverModal = () => {
    const{handleModal} = useContext(ModalContext);
    const {resetBoard} = useContext(GameContext);

  return (
    <div>
      <ModalHeader>
        <Title primary>JokeZ wins this round</Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle primary>Choices will be switched now</Subtitle>
        <Subtitle primary>JokerZ : 1</Subtitle>
        <Subtitle primary>Kiaan : 1</Subtitle>
      </ModalBody>

      <ModalFooter>
        <Button
          color="#8437f9"
          onClick={() => {
            handleModal();
            resetBoard();
          }}
        >
          Continue
        </Button>
        <Button color="#f9c811">Restart</Button>
      </ModalFooter>
    </div>
  );
};

export default RoundOverModal;
