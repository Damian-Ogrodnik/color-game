import React from "react";
import { Card } from "../Card";

export const CardsView = ({ data: { cardsNum, colors }, level }) => {
  const renderCards = () => {
    const cardsArray = [];
    for (let i = 1; i <= cardsNum; i++) {
      cardsArray.push(<Card key={i} cardNum={i} colors={colors} />);
    }
    return cardsArray;
  };
  return <div className={`level game__${level}`}>{renderCards()}</div>;
};
