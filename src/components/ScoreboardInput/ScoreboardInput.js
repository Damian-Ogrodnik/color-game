import React, { useState, useContext } from "react";

import { store } from "../../store";

export const ScoreboardInput = () => {
  const [nickname, setNickname] = useState("");
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const handleChange = ({ target }) => {
    setNickname(target.value);
    console.log(nickname);
  };

  const saveNickname = () => {
    dispatch({ type: "VALUE_NICKNAME", nickname });
    dispatch({ type: "SET_NICKNAME", setNickname: true });
  };

  return (
    <div className="scoreboard__input">
      <h2>Enter Your Nickname</h2>
      <form>
        <label>
          <input
            placeholder="Your nickname"
            type="text"
            value={nickname}
            onChange={e => handleChange(e)}
          ></input>
        </label>
      </form>
      <button onClick={() => saveNickname()}>Save</button>
    </div>
  );
};
