import React, { useContext } from "react";

import { store } from "../../store";
import { renderTime } from "../../common/time";

export const SummaryTime = () => {
  const {
    state: {
      time: { minutes, seconds, miliSeconds }
    }
  } = useContext(store);

  return (
    <div className="summary__time">
      <div className="time__heading">Your Time</div>
      <div className="time__timer">
        {renderTime(minutes, seconds, miliSeconds)}
      </div>
    </div>
  );
};

export default SummaryTime;
