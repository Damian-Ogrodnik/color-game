import React, { useEffect, useState } from "react";
import axios from "../../axios/axiosSettings";

import { renderTime } from "./helpers";

export const ScoreboardView = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get("/scores/hard").then(({ data }) => {
      setScores(data);
    });
  }, []);

  const renderScores = () => {
    const scoresArray = [
      <li className="scoreboard__list score score__header">
        <div className="score__position">Position</div>
        <div className="score__name">Nickname</div>
        <div className="score__time">Result</div>
      </li>
    ];
    let i = 0;
    scores.map(({ name, time: { minutes, seconds, miliSeconds } }) => {
      i++;
      return scoresArray.push(
        <li className="scoreboard__list score">
          <div className="score__position">{i}.</div>
          <div className="score__name">{name}</div>
          <div className="score__time">
            {renderTime(minutes, seconds, miliSeconds)}
          </div>
        </li>
      );
    });

    return scoresArray.splice(0, 11);
  };

  return <div className="scoreboard__list">{renderScores()}</div>;
};
