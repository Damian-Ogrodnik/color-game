import React from "react";
import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import { FacebookShareButton } from "react-share";

export const Icons = () => {
  return (
    <div className="footer__icons">
      <IconContext.Provider value={{ className: `footer__icon` }}>
        <FacebookShareButton
          url={"https://dogrodnik.github.io/color-game/"}
          quote={"Try to beat the best score!"}
        >
          <FaFacebook />
        </FacebookShareButton>
      </IconContext.Provider>
    </div>
  );
};
