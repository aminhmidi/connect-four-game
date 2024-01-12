import React from "react";

const Footer = ({ onNewGmaeClick, onSuggestClick }) => {
  return (
    <div className="panel footer">
      <button onClick={onNewGmaeClick}>New Game</button>
      <button onClick={onSuggestClick}>Suggest</button>
    </div>
  );
};

export default Footer;
