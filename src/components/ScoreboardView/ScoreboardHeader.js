import React from "react";

export const ScoreboardHeader = () => {
  return (
    <li className="scoreboard__list score score__header">
      <div className="score__position">Position</div>
      <div className="score__name">Nickname</div>
      <div className="score__time">Result</div>
    </li>
  );
};

export default ScoreboardHeader;
