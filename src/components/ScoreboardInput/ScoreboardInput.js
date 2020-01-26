import React, { useState, useContext } from "react";

import axios from "../../axios/axiosSettings";
import { store } from "../../store";

import { handleError } from "./helpers";

export const ScoreboardInput = () => {
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");

  const {
    dispatch,
    state: { time, selectedLevel }
  } = useContext(store);

  const handleChange = ({ target }) => {
    setNickname(target.value);
  };

  const saveNickname = e => {
    e.preventDefault();
    const { minutes, seconds, miliSeconds } = time;
    if (!nickname) {
      setError("NO-NICKNAME");
    } else if (nickname.length < 4) {
      setError("SHORT-NICKNAME");
    } else {
      axios
        .post(`/scores/${selectedLevel}/${nickname}`, {
          minutes,
          seconds,
          miliSeconds
        })
        .then(() => {
          dispatch({ type: "VALUE_NICKNAME", nickname });
        })
        .catch(error => {
          error.response
            ? setError("NICKNAME-TAKEN")
            : setError("SERVER-ERROR");
        });
    }
  };

  return (
    <div className="scoreboard__input">
      <h2>Enter Your Nickname</h2>
      <form onSubmit={e => saveNickname(e)}>
        <label>
          <input
            placeholder="Your nickname"
            type="text"
            value={nickname}
            onChange={e => handleChange(e)}
          ></input>
        </label>
      </form>
      {handleError(error)}
      <button onClick={e => saveNickname(e)}>Save</button>
    </div>
  );
};
