import React, { useContext } from "react";

import { store } from "../../store";

import { renderTime } from "./helpers";

export const ScoreboardElement = ({
  data: {
    name,
    time: { minutes, seconds, miliSeconds },
    position
  }
}) => {
  const {
    state: { nickname }
  } = useContext(store);

  const isBold = (nick, id) => {
    if (nick === id) return "bold";
  };

  return (
    <li className="scoreboard__list score">
      <div className={`score__position ${isBold(nickname, name)}`}>
        {position}.
      </div>
      <div className={`score__name ${isBold(nickname, name)}`}>{name}</div>
      <div className={`score__time ${isBold(nickname, name)}`}>
        {renderTime(minutes, seconds, miliSeconds)}
      </div>
    </li>
  );
};
