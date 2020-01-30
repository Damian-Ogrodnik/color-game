import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import { FacebookShareButton } from "react-share";

import { store } from "../../store";

export const Icons = () => {
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
    <div className="footer__icons">
      <IconContext.Provider value={{ className: `footer__icon` }}>
        <FacebookShareButton
          url={"https://dogrodnik.github.io/color-game/"}
          quote={`Try to beat my score!
          My time: ${renderTime()}`}
          hashtag={"#ColorGame"}
        >
          <FaFacebook />
        </FacebookShareButton>
      </IconContext.Provider>
    </div>
  );
};
