import React, { useContext } from "react";
import { store } from "../../store";
import { Levels } from "../Levels";

export const Menu = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  return (
    <div className="menu">
      <div className="menu__header">
        <h1>Color Game</h1>
      </div>
      <Levels />
      <div className="menu__start">
        <button
          className="btn__start"
          onClick={() => dispatch({ type: "START_GAME" })}
        >
          START
        </button>
      </div>
      <div className="menu__info">?</div>
    </div>
  );
};
