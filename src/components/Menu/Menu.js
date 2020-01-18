import React, { useContext } from "react";
import { store } from "../../store";

import { Levels } from "../Levels";
import { Error } from "../Error";
import { Help } from "../Help";
import { Start } from "../Start";

export const Menu = () => {
  const {
    state: { startError }
  } = useContext(store);

  const renderError = () => {
    return (
      startError && (
        <Error
          msg={"You have to select level of difficulty before start."}
          class_Name={"menu__error"}
        />
      )
    );
  };

  return (
    <div className="menu">
      <div className="menu__wrapper">
        <div className="menu__header">
          <h1>Color Game</h1>
        </div>
        <Levels />
        {renderError()}
        <Start />
      </div>
      <Help />
    </div>
  );
};
