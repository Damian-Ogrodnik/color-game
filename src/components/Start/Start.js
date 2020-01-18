import React, { useContext } from "react";

import { store } from "../../store";

import { Error } from "../Error";

export const Start = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const {
    state: { selectedLevel, startError }
  } = useContext(store);

  const startGame = () => {
    return selectedLevel === false
      ? dispatch({ type: "START_ERROR", startError: true })
      : dispatch({ type: "START_GAME" });
  };

  return (
    <>
      {startError && (
        <Error
          msg={"You have to select level of difficulty before start."}
          class_Name={"menu__error"}
        />
      )}
      <div className="menu__start">
        <button className="btn__start" onClick={() => startGame()}>
          START
        </button>
      </div>
    </>
  );
};
