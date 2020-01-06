import React from "react";
import { Card } from "../Card";

export const Level = ({ data, level }) => {
  const renderCards = () => {
    const { cardsNum, colors } = data;
    const cardsArray = [];
    for (let i = 1; i <= cardsNum; i++) {
      cardsArray.push(<Card key={i} cardNum={i} colors={colors} />);
    }
    return cardsArray;
  };
  return <div className={`game__${level}`}>{renderCards()}</div>;
};
