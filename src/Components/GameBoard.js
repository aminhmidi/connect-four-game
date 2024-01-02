import React, { useState } from "react";
import GameCirlce from "./GameCirlce";
import "../Game.css";

const NUM_CIRCLES = 16;
const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  console.log(gameBoard);
  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < NUM_CIRCLES; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };
  const circleClicked = (id) => {
    console.log("circle clicke :" + id);
    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });
    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    console.log(gameBoard);
    console.log(currentPlayer);
  };
  const renderCircle = (id) => {
    return (
      <GameCirlce
        key={id}
        id={id}
        className={`player_${gameBoard[id]}`}
        onCircleClicked={circleClicked}
      />
    );
  };
  return <div className="gameboard">{initBoard()}</div>;
};

export default GameBoard;
