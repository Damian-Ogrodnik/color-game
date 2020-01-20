import React, { useContext } from "react";

import { store } from "../../store";

import { ScoreboardModal } from "../ScoreboardModal";

export const Scoreboard = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  return (
    <>
      <button
        onClick={() =>
          dispatch({ type: "OPEN_SCORE_MODAL", openScoreModal: true })
        }
      >
        POST
      </button>
      <ScoreboardModal />
    </>
  );
};
