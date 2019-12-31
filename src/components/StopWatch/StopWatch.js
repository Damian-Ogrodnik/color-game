import React, { useState, useEffect } from "react";

export const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [miliSeconds, setMiliSeconds] = useState(0);
  useEffect(() => {
    setTimeout(() => setSeconds(seconds + 1), 1000);
  });

  const renderTime = () => {
    return seconds;
  };

  return <div>{renderTime()}</div>;
};
