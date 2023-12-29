import React from "react";
import GameCirlce from "./GameCirlce";
import "../Game.css";

const GameBoard = () => {
  return (
    <div className="gameboard">
      <GameCirlce id={1}></GameCirlce>
      <GameCirlce id={2}></GameCirlce>
      <GameCirlce id={3}></GameCirlce>
      <GameCirlce id={4}></GameCirlce>
      <GameCirlce id={5}></GameCirlce>
      <GameCirlce id={6}></GameCirlce>
      <GameCirlce id={7}></GameCirlce>
      <GameCirlce id={8}></GameCirlce>
      <GameCirlce id={9}></GameCirlce>
      <GameCirlce id={10}></GameCirlce>
      <GameCirlce id={11}></GameCirlce>
      <GameCirlce id={12}></GameCirlce>
      <GameCirlce id={13}></GameCirlce>
      <GameCirlce id={14}></GameCirlce>
      <GameCirlce id={15}></GameCirlce>
      <GameCirlce id={16}></GameCirlce>
    </div>
  );
};

export default GameBoard;
