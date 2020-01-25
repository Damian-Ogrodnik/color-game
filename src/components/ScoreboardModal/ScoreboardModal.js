import React, { useContext } from "react";

import Modal from "react-modal";

import { store } from "../../store";
import { customStyles } from "./styles";

import { ScoreboardClose } from "../ScoreboardClose";
import { ScoreboardInput } from "../ScoreboardInput";
import { ScoreboardView } from "../ScoreboardView";

export const ScoreboardModal = props => {
  const {
    state: { openScoreModal, nickname }
  } = useContext(store);

  const renderView = () => {
    if (props.selectedButton === "scores" || nickname) {
      return <ScoreboardView />;
    } else {
      return <ScoreboardInput />;
    }
  };

  return (
    <Modal
      isOpen={openScoreModal}
      style={customStyles}
      contentLabel="Scoreboard Modal"
    >
      <div className="modal">
        <ScoreboardClose />
        {renderView()}
      </div>
    </Modal>
  );
};
