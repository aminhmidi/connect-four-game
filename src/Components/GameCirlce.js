import React from "react";
import "../Game.css";

const GameCirlce = ({ id, children, className, onCircleClicked }) => {
  return (
    <div
      className={`gamecircle ${className} `}
      onClick={(ev) => onCircleClicked(id)}
    >
      {children}
    </div>
  );
};

export default GameCirlce;
