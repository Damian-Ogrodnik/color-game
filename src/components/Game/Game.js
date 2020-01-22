import React, { useContext, useEffect } from "react";

import { store } from "../../store";

import { Error } from "../Error";
import { StopWatch } from "../StopWatch";
import { Summary } from "../Summary";
import { Level } from "../Level";

import { easyData, mediumData, hardData } from "../../data/data";

export const Game = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const {
    state: { selectedLevel, colorsArray, clicks, gameFinished }
  } = useContext(store);

  useEffect(() => {
    const arrayColors = [];
    if (colorsArray.length) {
      colorsArray.forEach(({ color }) => {
        arrayColors.push(color);
      });
      const collorsSet = new Set(arrayColors);
      if (collorsSet.size === 1)
        dispatch({ type: "FINISH_GAME", gameFinished: true });
    }
  }, [clicks, colorsArray, dispatch]);

  const renderLevel = () => {
    switch (selectedLevel) {
      case "easy":
        return <Level data={easyData} level={"easy"} />;
      case "medium":
        return <Level data={mediumData} level={"medium"} />;
      case "hard":
        return <Level data={hardData} level={"hard"} />;
      default:
        return <Error msg={"Something went wrong..."} />;
    }
  };

  return (
    <div>
      {gameFinished ? (
        <Summary />
      ) : (
        <div className="game">
          <StopWatch />
          {renderLevel()}
        </div>
      )}
    </div>
  );
};
