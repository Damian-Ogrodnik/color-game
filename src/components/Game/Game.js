import React, { useContext, useEffect } from "react";
import { store } from "../../store";
import { EasyLevel } from "../EasyLevel";
import { MediumLevel } from "../MediumLevel";
import { HardLevel } from "../HardLevel";
import { Error } from "../Error";
import { StopWatch } from "../StopWatch";

export const Game = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const {
    state: { selectedLevel, colorsArray, clicks }
  } = useContext(store);
  useEffect(() => {
    checkColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicks]);

  const checkColors = () => {
    const arrayColors = [];
    if (colorsArray.length) {
      colorsArray.forEach(({ color }) => {
        arrayColors.push(color);
      });
      const collorsSet = new Set(arrayColors);
      if (collorsSet.size === 1)
        dispatch({ type: "FINISH_GAME", gameFinished: true });
    }
  };

  const renderLevel = () => {
    switch (selectedLevel) {
      case "EASY":
        return <EasyLevel />;
      case "MEDIUM":
        return <MediumLevel />;
      case "HARD":
        return <HardLevel />;
      default:
        return <Error msg={"Something went wrong..."} />;
    }
  };

  return (
    <div className="game">
      <StopWatch />
      {renderLevel()}
    </div>
  );
};
