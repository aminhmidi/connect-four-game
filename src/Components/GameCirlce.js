import React from "react";
import "../Game.css";

const onClick = (ev, id) => {
  alert("on click" + id);
};

const GameCirlce = ({ id, children }) => {
  return (
    <div
      className="gamecircle"
      style={
        id % 2 === 0 ? { backgroundColor: "red" } : { backgroundColor: "blue" }
      }
      onClick={(ev) => onClick(ev, id)}
    >
      {children}
    </div>
  );
};

export default GameCirlce;
