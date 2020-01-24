import React, { useEffect, useState, useContext } from "react";
import axios from "../../axios/axiosSettings";

import { store } from "../../store";

import { getScores } from "./helpers";
import { ScoreboardHeader } from "./ScoreboardHeader";
import { ScoreboardElement } from "./ScoreboardElement";

export const ScoreboardView = () => {
  const [scores, setScores] = useState([]);
  const {
    state: { nickname }
  } = useContext(store);

  useEffect(() => {
    axios.get("/scores/hard").then(async ({ data }) => {
      let properScores = await getScores(data, nickname);
      setScores(properScores);
    });
  }, [nickname]);

  const renderScores = () => {
    const scoresArray = [<ScoreboardHeader />];

    scores.map(data => {
      return scoresArray.push(<ScoreboardElement data={data} />);
    });

    return scoresArray;
  };

  return <div className="scoreboard__list">{renderScores()}</div>;
};
