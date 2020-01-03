import React from "react";
import { Card } from "../Card";
import { easyData } from "../../data/data";

export const EasyLevel = () => {
  const renderCards = () => {
    const { cardsNum, colors } = easyData;
    const cardsArray = [];
    for (let i = 1; i <= cardsNum; i++) {
      cardsArray.push(<Card cardNum={i} colors={colors} />);
    }
    return cardsArray;
  };
  return <div className="game__easy">{renderCards()}</div>;
};
