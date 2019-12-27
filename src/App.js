import React, { useContext } from "react";
import "./css/main.css";
import { store } from "./store";
import { Menu } from "./components/Menu";
import { Game } from "./components/Game/Game";

const App = () => {
  const {
    state: { gameStarted }
  } = useContext(store);

  return <>{gameStarted ? <Game /> : <Menu />}</>;
};

export default App;
