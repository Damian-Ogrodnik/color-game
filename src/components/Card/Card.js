import React, { useState, useEffect } from "react";

export const Card = ({ cardNum, colors }) => {
  const [color, setColor] = useState("");
  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const randomColor = target => {
    console.log(target.style.backgroundColor);
    const color = colors[Math.floor(Math.random() * colors.length)];
    color === target.style.backgroundColor
      ? randomColor(target)
      : setColor(color);
  };

  return (
    <div
      onClick={e => randomColor(e.target)}
      style={{ background: color }}
      className={`card card__card${cardNum}`}
    ></div>
  );
};
