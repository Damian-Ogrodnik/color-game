import React, { useContext } from "react";
import { store } from "../../store";

export const Game = () => {
  const globalState = useContext(store);
  console.log(globalState.state);
  return <div>Game</div>;
};
