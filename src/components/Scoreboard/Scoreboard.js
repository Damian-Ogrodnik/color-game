import React, { useContext, useState } from "react";

import { store } from "../../store";

import { ScoreboardModal } from "../ScoreboardModal";

export const Scoreboard = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const { dispatch } = useContext(store);

  const handleClick = ({ target }) => {
    if (target.value === "post") {
      dispatch({ type: "OPEN_SCORE_MODAL", openScoreModal: true });
      setSelectedButton("post");
    } else {
      dispatch({ type: "OPEN_SCORE_MODAL", openScoreModal: true });
      setSelectedButton("scores");
    }
  };

  return (
    <>
      <button
        value={"scores"}
        onClick={e => {
          handleClick(e);
        }}
      >
        SCORES
      </button>
      <button value={"post"} onClick={e => handleClick(e)}>
        POST
      </button>
      <ScoreboardModal selectedButton={selectedButton} />
    </>
  );
};
