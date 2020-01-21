import React, { useContext } from "react";

import { store } from "../../store";

export const ScoreboardView = () => {
  const {
    state: { nickname }
  } = useContext(store);
  return <div>{nickname}</div>;
};
