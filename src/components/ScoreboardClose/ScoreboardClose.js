import React, { useContext } from "react";

import { store } from "../../store";

export const ScoreboardClose = () => {
  const { dispatch } = useContext(store);
  return (
    <button
      className="modal__btn--close"
      onClick={() =>
        dispatch({ type: "OPEN_SCORE_MODAL", openScoreModal: false })
      }
    >
      X
    </button>
  );
};
