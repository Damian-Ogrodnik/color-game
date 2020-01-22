import React, { useContext } from "react";
import axios from "../../axios/axiosSettings";

import { store } from "../../store";

export const ScoreboardView = () => {
  console.log(axios);
  const {
    state: { nickname }
  } = useContext(store);
  return <div>{nickname}</div>;
};
