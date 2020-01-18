import React, { useContext } from "react";
import { store } from "../../store";

import { Levels } from "../Levels";
import { Error } from "../Error";
import { Help } from "../Help";
import { Start } from "../Start";
import { Header } from "../Header";

export const Menu = () => {
  const {
    state: { startError }
  } = useContext(store);

  return (
    <div className="menu">
      <div className="menu__wrapper">
        <Header classTitle={"menu"} title={"Color Game"} />
        <Levels />
        {startError && (
          <Error
            msg={"You have to select level of difficulty before start."}
            class_Name={"menu__error"}
          />
        )}
        <Start />
      </div>
      <Help />
    </div>
  );
};
