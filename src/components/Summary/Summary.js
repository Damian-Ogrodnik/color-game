import React, { useContext } from "react";
import { store } from "../../store";

export const Summary = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  return (
    <div className="summary">
      <div className="summary__wrapper">
        <div className="summary__heading">
          <h1>Congratulations!</h1>
          <h2>You Won!</h2>
        </div>
        <div className="summary__time">
          <div className="time__heading">Your Time</div>
          <div className="time__timer">00:00</div>
        </div>
        <button onClick={() => dispatch({ type: "RESET_GAME" })}>
          TRY AGAIN
        </button>
      </div>
    </div>
  );
};

export default Summary;
