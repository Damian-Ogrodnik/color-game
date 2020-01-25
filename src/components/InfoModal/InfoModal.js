import React, { useContext } from "react";
import Modal from "react-modal";

import { store } from "../../store";
import { customStyles } from "./styles";

Modal.setAppElement("#root");

export const InfoModal = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const {
    state: { openModal }
  } = useContext(store);

  return (
    <Modal isOpen={openModal} style={customStyles} contentLabel="Example Modal">
      <div className="modal">
        <h2 className="modal__title">Welcome to my color-game!</h2>
        <p className="modal__text--body">
          I created this simple game to practise context state managment in
          React. To start the game you have to choose the level of difficulty
          and press the start button. Then you will see colorful blocks. Your
          task is to set the same color on each block as quick as possible. You
          can change color of a block by clicking on it.{" "}
        </p>
        <button
          className="modal__btn"
          onClick={() => dispatch({ type: "OPEN_MODAL", openModal: false })}
        >
          GOT IT!
        </button>
      </div>
    </Modal>
  );
};
