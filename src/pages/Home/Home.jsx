import React, { useContext } from "react";
import { Container, Title, Subtitle } from "../../styles/General.styled";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router";
import SfxContext from "../../context/SfxContext";

const Home = () => {
  const { hoverSfx, clickSfx } = useContext(SfxContext);

  const navigate = useNavigate();
  return (
    <Container columnBased>
      <Title>Tic Tac Toe</Title>
      <Subtitle>play with your friends, higher score wins!</Subtitle>
      <Button
        onClick={() => {
          clickSfx();
          navigate("/game");
        }}
        onMouseEnter={() => hoverSfx()}
      >
        Play Now
      </Button>
    </Container>
  );
};

export default Home;
