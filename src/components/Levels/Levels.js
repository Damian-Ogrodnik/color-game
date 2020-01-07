import React, { useContext } from "react";
import { store } from "../../store";

export const Levels = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const {
    state: { selectedLevel }
  } = useContext(store);

  const setLevel = ({ target: { value } }) => {
    dispatch({ type: "SELECT_LEVEL", selectedLevel: value });
    dispatch({ type: "START_ERROR", startError: false });
  };

  const isActive = level => {
    return level === selectedLevel ? "selected" : "";
  };

  return (
    <div className="menu__difficulty">
      <h2>Select Level of Difficulty</h2>
      <div className="menu__levels">
        <button
          className={`btn btn__level--easy ${isActive("EASY")}`}
          value={"EASY"}
          onClick={e => setLevel(e)}
        >
          EASY
        </button>
        <button
          className={`btn btn__level--medium ${isActive("MEDIUM")}`}
          value={"MEDIUM"}
          onClick={e => setLevel(e)}
        >
          MEDIUM
        </button>
        <button
          className={`btn btn__level--hard ${isActive("HARD")}`}
          value={"HARD"}
          onClick={e => setLevel(e)}
        >
          HARD
        </button>
      </div>
    </div>
  );
};
