import React, { useState, useEffect, useContext } from "react";
import { store } from "../../store";

export const StopWatch = () => {
  const {
    dispatch,
    state: { clicks }
  } = useContext(store);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [miliSeconds, setMiliSeconds] = useState(0);

  useEffect(() => {
    let getSeconds = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearInterval(getSeconds);
  }, [seconds]);

  useEffect(() => {
    let getMiliSeconds = setTimeout(() => {
      miliSeconds > 1000 ? setMiliSeconds(0) : setMiliSeconds(miliSeconds + 1);
    }, 1);
    return () => clearInterval(getMiliSeconds);
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
