import React, { useContext, useEffect } from "react";
import axios from "../../axios/axiosSettings";

import { store } from "../../store";

export const ScoreboardView = () => {
  useEffect(() => {
    axios.get("/scores/hard").then(response => {
      console.log(response);
    });
  });

  const {
    state: { nickname }
  } = useContext(store);
  return <div>{nickname}</div>;
};
