import React, { useContext } from "react";

import { store } from "../../store";

import { Scoreboard } from "../Scoreboard";

export const SummaryNavigation = () => {
  const { dispatch } = useContext(store);

  return (
    <div className="summary__navigation">
      <button onClick={() => dispatch({ type: "RESET_GAME" })}>
        TRY AGAIN
      </button>
      <Scoreboard />
    </div>
  );
};
