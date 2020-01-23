export const renderTime = (minutes, seconds, miliSeconds) => {
  let min = minutes.toString();
  let sec = seconds.toString();
  let mili = miliSeconds.toString();
  min.length === 1 ? (min = `0${minutes}`) : (min = minutes);
  sec.length === 1 ? (sec = `0${seconds}`) : (sec = seconds);
  mili.length === 1
    ? (mili = `00${miliSeconds}`)
    : mili.length === 2
    ? (mili = `0${miliSeconds}`)
    : (mili = miliSeconds);

  return `${min}:${sec}:${mili}`;
};
