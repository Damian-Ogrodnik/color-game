import React, { useContext } from "react";

import { store } from "../../store";

import { InfoModal } from "../InfoModal";

export const Help = () => {
  const { dispatch } = useContext(store);

  const openModal = () => dispatch({ type: "OPEN_MODAL", openModal: true });

  return (
    <>
      <div className="menu__info" onClick={() => openModal()}>
        ?
      </div>
      <InfoModal />
    </>
  );
};
