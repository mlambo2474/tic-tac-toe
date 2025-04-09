import React from "react";
import { Subtitle } from "../../styles/General.styled";
import Avatar, { genConfig } from "react-nice-avatar";
import { PlayerWrapper, AvatarWrapper } from "./Player.styled";

const Player = ({ player, isPlayerActive }) => {
  const config = genConfig();

  return (
    //nullish the isPlayerActive prop if it is not passed(nullish coalescing operator)
    <PlayerWrapper >
      <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
        <Avatar {...player.avatarconfig} />
      </AvatarWrapper>

      <Subtitle>
        {player.name}({player.symbol.toUpperCase()})
      </Subtitle>
      <Subtitle>{player.score}</Subtitle>
    </PlayerWrapper>
  );
};

export default Player;
