import React, { useState, useEffect, useContext } from "react";
import { store } from "../../store";

export const StopWatch = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const {
    state: { clicks, gameFinished }
  } = useContext(store);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [miliSeconds, setMiliSeconds] = useState(0);

  useEffect(() => {
    let miliSec = setTimeout(() => {
      setMiliSeconds(miliSeconds + 10);
      // dispatch({ type: "SET_TIME", minutes, seconds, miliSeconds });
    }, 10);
    return () => clearInterval(miliSec);
  });

  useEffect(() => {
    dispatch({ type: "SET_TIME", time: { minutes, seconds, miliSeconds } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicks]);

  const renderMinutes = () => {
    if (minutes < 10) {
      return `0${minutes}`;
    } else return minutes;
  };

  const renderSeconds = () => {
    if (miliSeconds > 1000) {
      setMiliSeconds(0);
      setSeconds(seconds + 1);
    }
    if (seconds < 10) {
      return `0${seconds}`;
    } else if (seconds > 59) {
      setSeconds(0);
      setMinutes(minutes + 1);
      return "00";
    } else {
      return seconds;
    }
  };

  return (
    <div className="game__timer">
      <div className="game__timer--top">
        {renderMinutes()}:{renderSeconds()}
      </div>
    </div>
  );
};
