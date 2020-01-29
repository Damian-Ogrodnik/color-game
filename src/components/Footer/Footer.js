import React, { useContext } from "react";

import { store } from "../../store";

import { Icons } from "../Icons";

export const Footer = () => {
  const {
    state: { gameFinished }
  } = useContext(store);
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <a
          href="https://github.com/dogrodnik"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2020 DOGRODNIK
        </a>
      </div>
      {gameFinished && <Icons />}
    </div>
  );
};
