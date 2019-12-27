import React from "react";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__header">
        <h1>Color Game</h1>
      </div>
      <div className="menu__info">?</div>
      <div className="menu__difficulty">
        <h2>Select level of difficulty</h2>
        <button className="btn__level--easy ">Easy</button>
        <button className="btn__level--medium ">Medium</button>
        <button className="btn__level--hard ">Hard</button>
      </div>
      <div className="menu__start">
        <button className="btn__start">Start</button>
      </div>
    </div>
  );
};
