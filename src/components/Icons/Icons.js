import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import { FacebookShareButton } from "react-share";

import { store } from "../../store";
import { renderTime } from "../../common/time";

export const Icons = () => {
  const {
    state: {
      time: { minutes, seconds, miliSeconds }
    }
  } = useContext(store);

  return (
    <div className="footer__icons">
      <IconContext.Provider value={{ className: `footer__icon` }}>
        <FacebookShareButton
          url={"https://dogrodnik.github.io/color-game/"}
          quote={`Try to beat my score!
          My time: ${renderTime(minutes, seconds, miliSeconds)}`}
          hashtag={"#ColorGame"}
        >
          <FaFacebook />
        </FacebookShareButton>
      </IconContext.Provider>
    </div>
  );
};
