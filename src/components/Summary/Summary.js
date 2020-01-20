import React, { useContext } from "react";
import { store } from "../../store";

export const Summary = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const {
    state: { time }
  } = useContext(store);

  const renderTime = () => {
    let { minutes, seconds, miliSeconds } = time;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}:${miliSeconds}`;
  };

  return (
    <div className="summary">
      <div className="summary__wrapper">
        <div className="summary__heading">
          <h1>Congratulations!</h1>
          <h2>You Won!</h2>
        </div>
        <div className="summary__time">
          <div className="time__heading">Your Time</div>
          <div className="time__timer">{renderTime()}</div>
        </div>
        <div className="summary__navigation">
          <button onClick={() => dispatch({ type: "RESET_GAME" })}>
            TRY AGAIN
          </button>
          <button>POST </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
