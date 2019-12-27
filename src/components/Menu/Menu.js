import React from "react";
import Levels from "../Levels/Levels";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__header">
        <h1>Color Game</h1>
      </div>
      <Levels />
      <div className="menu__start">
        <button className="btn__start">START</button>
      </div>
      <div className="menu__info">?</div>
    </div>
  );
};
