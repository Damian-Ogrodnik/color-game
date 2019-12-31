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
        <h2 className="modal__title">How to play?</h2>
        <p className="modal__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
