import React, { useContext } from "react";

import { store } from "../../store";

export const SummaryTime = () => {
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
    <div className="summary__time">
      <div className="time__heading">Your Time</div>
      <div className="time__timer">{renderTime()}</div>
    </div>
  );
};

export default SummaryTime;
