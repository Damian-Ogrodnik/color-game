import React, { useContext } from "react";

import Modal from "react-modal";

import { store } from "../../store";

import { ScoreboardInput } from "../ScoreboardInput";
import { ScoreboardClose } from "../ScoreboardClose";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "80%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "0.25rem solid #470100",
    borderRadius: "1rem",
    backgroundColor: "#ad343e"
  }
};

export const ScoreboardModal = () => {
  const {
    state: { openScoreModal }
  } = useContext(store);

  return (
    <Modal
      isOpen={openScoreModal}
      style={customStyles}
      contentLabel="Scoreboard Modal"
    >
      <div className="modal">
        <ScoreboardClose />
        <ScoreboardInput />
      </div>
    </Modal>
  );
};
