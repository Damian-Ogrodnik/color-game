import React, { useState, useContext } from "react";

import { store } from "../../store";

import { Error } from "../Error";

export const ScoreboardInput = () => {
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const handleChange = ({ target }) => {
    setNickname(target.value);
    console.log(nickname);
  };

  const saveNickname = e => {
    e.preventDefault();
    if (!nickname) {
      setError("NO-NICKNAME");
    } else if (nickname.length < 4) {
      setError("SHORT-NICKNAME");
    } else {
      dispatch({ type: "VALUE_NICKNAME", nickname });
      dispatch({ type: "SET_NICKNAME", setNickname: true });
    }
  };

  const renderError = () => {
    if (error === "NO-NICKNAME") {
      return (
        <Error
          msg={"You have to enter your nickname before save. "}
          class_Name={"scoreboard__error"}
        />
      );
    } else if (error === "SHORT-NICKNAME") {
      return (
        <Error
          msg={"Your nickname is to short. "}
          class_Name={"scoreboard__error"}
        />
      );
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
      {renderError()}
      <button onClick={e => saveNickname(e)}>Save</button>
    </div>
  );
};