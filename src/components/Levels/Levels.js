import React from "react";

export const Levels = () => {
  return (
    <div className="menu__difficulty">
      <h2>Select level of difficulty</h2>
      <div className="menu__levels">
        <button className="btn__level--easy">EASY</button>
        <button className="btn__level--medium">MEDIUM</button>
        <button className="btn__level--hard">HARD</button>{" "}
      </div>
    </div>
  );
};
