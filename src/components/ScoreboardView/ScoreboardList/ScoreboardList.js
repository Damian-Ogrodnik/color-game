import React from "react";

import { ScoreboardHeader } from "./ScoreboardHeader";
import { ScoreboardElement } from "./ScoreboardElement";

import { withLoader } from "../../withLoader";

const ScoreboardList = ({ scores }) => {
  const renderScores = () => {
    const scoresArray = [<ScoreboardHeader />];

    scores.map(data => {
      return scoresArray.push(<ScoreboardElement data={data} />);
    });

    return scoresArray;
  };

  return <>{renderScores()}</>;
};

const scoreboardListWithLoader = withLoader(ScoreboardList);

export { scoreboardListWithLoader as ScoreboardList };
