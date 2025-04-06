import React from "react";
import { Container, Title, Subtitle } from "../../styles/General.styled";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Tic Tac Toe</Title>
      <Subtitle>play with your friends, higher score wins!</Subtitle>
      <Button onClick={() => navigate("/game")}>Play Now</Button>
    </Container>
  );
};

export default Home;
