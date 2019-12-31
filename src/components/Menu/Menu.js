import React, { useContext } from "react";
import { store } from "../../store";
import { Levels } from "../Levels";
import { Error } from "../Error";
import { InfoModal } from "../InfoModal";

export const Menu = () => {
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

  const renderError = () => {
    return (
      startError && (
        <Error
          msg={"You have to select level of difficulty before start."}
          class_Name={"menu__error"}
        />
      )
    );
  };

  return (
    <div className="menu">
      <div className="menu__wrapper">
        <div className="menu__header">
          <h1>Color Game</h1>
        </div>
        <Levels />
        {renderError()}
        <div className="menu__start">
          <button className="btn__start" onClick={() => startGame()}>
            START
          </button>
        </div>
      </div>
      <div
        className="menu__info"
        onClick={() => dispatch({ type: "OPEN_MODAL", openModal: true })}
      >
        ?
      </div>
      <InfoModal />
    </div>
  );
};
