import React, { useContext } from "react";
import { store } from "../../store";

export const Start = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const {
    state: { selectedLevel }
  } = useContext(store);

  const startGame = () => {
    return selectedLevel === false
      ? dispatch({ type: "START_ERROR", startError: true })
      : dispatch({ type: "START_GAME" });
  };

  return (
    <div className="menu__start">
      <button className="btn__start" onClick={() => startGame()}>
        START
      </button>
    </div>
  );
};
