import React, { useContext } from "react";

import { store } from "../../store";

import { Scoreboard } from "../Scoreboard";

export const SummaryNavigation = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  return (
    <div className="summary__navigation">
      <button onClick={() => dispatch({ type: "RESET_GAME" })}>
        TRY AGAIN
      </button>
      <Scoreboard />
    </div>
  );
};
