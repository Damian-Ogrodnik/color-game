import React, { useEffect, useState, useContext } from "react";
import axios from "../../axios/axiosSettings";

import { store } from "../../store";

import { getScores } from "./helpers";
import { ScoreboardList } from "./ScoreboardList/ScoreboardList";

export const ScoreboardView = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [scores, setScores] = useState([]);
  const {
    state: { nickname, selectedLevel }
  } = useContext(store);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/scores/${selectedLevel}`)
      .then(async ({ data }) => {
        let properScores = await getScores(data, nickname);
        setScores(properScores);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      });
  }, [nickname, selectedLevel]);

  return (
    <div className="scoreboard__list">
      <ScoreboardList loading={loading} scores={scores} error={error} />
    </div>
  );
};
