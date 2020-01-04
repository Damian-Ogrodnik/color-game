import React, { useContext, useEffect } from "react";
import { store } from "../../store";
import { EasyLevel } from "../EasyLevel";
import { MediumLevel } from "../MediumLevel";
import { HardLevel } from "../HardLevel";
import { Error } from "../Error";
import { StopWatch } from "../StopWatch";

export const Game = () => {
  const {
    state: { selectedLevel, clicks }
  } = useContext(store);
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

  useEffect(() => {
    console.log(clicks);
  }, [clicks]);

  return (
    <div className="game">
      <StopWatch />
      {renderLevel()}
    </div>
  );
};
