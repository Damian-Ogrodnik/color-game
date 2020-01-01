import React, { useState, useEffect } from "react";

export const StopWatch = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // const [tenthSeconds, setTenthSeconds] = useState(0);
  // const [miliSeconds, setMiliSeconds] = useState(0);

  useEffect(() => {
    setTimeout(() => setSeconds(seconds + 1), 1000);
  });

  const renderMinutes = () => {
    if (minutes < 10) {
      return `0${minutes}`;
    } else return minutes;
  };

  const renderSeconds = () => {
    if (seconds < 10) {
      return `0${seconds}`;
    } else if (seconds > 59) {
      setMinutes(minutes + 1);
      setSeconds(0);
      return "00";
    } else {
      return seconds;
    }
  };

  // const partSeconds = () => {
  //   if (tenthSeconds === 10) {
  //     setSeconds(seconds + 1);
  //     setTenthSeconds(0);
  //   } else {
  //     return tenthSeconds;
  //   }
  // };

  // const renderMiliSeconds = () => {
  //   if (miliSeconds === 10) {
  //     setTenthSeconds(tenthSeconds + 1);
  //     setMiliSeconds(0);
  //   } else {
  //     return miliSeconds;
  //   }
  // };

  return (
    <div>
      {renderMinutes()}:{renderSeconds()}
    </div>
  );
};
