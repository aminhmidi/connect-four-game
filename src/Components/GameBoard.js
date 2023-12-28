import React from "react";
import GameCirlce from "./GameCirlce";

const GameBoard = () => {
  return (
    <div>
      <GameCirlce id={1} value={5}>
        Red
      </GameCirlce>
      <GameCirlce id={2} value={6}>
        Blue
      </GameCirlce>
      <GameCirlce id={3}>Red</GameCirlce>
      <GameCirlce id={4}>Blue</GameCirlce>
      <GameCirlce id={5}>Red</GameCirlce>
      <GameCirlce id={6}>Blue</GameCirlce>
      <GameCirlce id={7}>Red</GameCirlce>
      <GameCirlce id={8}>Blue</GameCirlce>
    </div>
  );
};

export default GameBoard;
