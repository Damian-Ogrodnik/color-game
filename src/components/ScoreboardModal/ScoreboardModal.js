import React, { useContext } from "react";

import Modal from "react-modal";

import { store } from "../../store";

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
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const {
    state: { openScoreModal }
  } = useContext(store);

  return (
    <Modal
      isOpen={openScoreModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="modal">
        <h2 className="modal__title">Scoreboard</h2>
        <button
          className="modal__btn"
          onClick={() =>
            dispatch({ type: "OPEN_SCORE_MODAL", openScoreModal: false })
          }
        >
          GOT IT!
        </button>
      </div>
    </Modal>
  );
};
