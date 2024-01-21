import React from "react";
import { GAME_STATE_PLAYING } from "../Constants";

const Footer = ({ onNewGmaeClick, onSuggestClick, gameState }) => {
  return (
    <div className="panel footer">
      {gameState === GAME_STATE_PLAYING && (
        <button onClick={onSuggestClick}>Suggest</button>
      )}
      {gameState !== GAME_STATE_PLAYING && (
        <button onClick={onNewGmaeClick}>New Game</button>
      )}
    </div>
  );
};

export default Footer;