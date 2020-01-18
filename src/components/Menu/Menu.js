import React from "react";

import { Levels } from "../Levels";
import { Help } from "../Help";
import { Start } from "../Start";
import { Header } from "../Header";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__wrapper">
        <Header classTitle={"menu"} title={"Color Game"} />
        <Levels />
        <Start />
      </div>
      <Help />
    </div>
  );
};
