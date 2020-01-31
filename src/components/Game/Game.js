import React, { useContext, useEffect } from "react";

import { store } from "../../store";

import { Error } from "../Error";
import { StopWatch } from "../StopWatch";
import { Summary } from "../Summary";
import { CardsView } from "../CardsView";

import { easyData, mediumData, hardData } from "../../data/data";

export const Game = () => {
  const {
    dispatch,
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
        return <CardsView data={easyData} level={"easy"} />;
      case "medium":
        return <CardsView data={mediumData} level={"medium"} />;
      case "hard":
        return <CardsView data={hardData} level={"hard"} />;
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
