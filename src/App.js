import React from "react";
import "./css/main.css";
import { Menu } from "./components/Menu";
import { Game } from "./components/Game/Game";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Game></Game>
    </div>
  );
}

export default App;
