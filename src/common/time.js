export const renderTime = (minutes, seconds, miliSeconds) => {
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}:${miliSeconds}`;
  };