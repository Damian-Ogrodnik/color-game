export const renderTime = (minutes, seconds, miliSeconds) => {
  let min, sec, mili;
  minutes ? (min = minutes.toString()) : (min = "0");
  seconds ? (sec = seconds.toString()) : (sec = "0");
  miliSeconds ? (mili = miliSeconds.toString()) : (mili = "0");

  min.length === 1 ? (min = `0${minutes}`) : (min = minutes);
  sec.length === 1 ? (sec = `0${seconds}`) : (sec = seconds);
  mili.length === 1
    ? (mili = `00${miliSeconds}`)
    : mili.length === 2
    ? (mili = `0${miliSeconds}`)
    : (mili = miliSeconds);

  return `${min}:${sec}:${mili}`;
};
