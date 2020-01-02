import React, { useState } from "react";

export const Cube = () => {
  const [colors, setColors] = useState({
    first: "",
    second: "",
    third: "",
    fourth: ""
  });

  const rotateCube = () => {
    if (colors.first === "rotate") {
      setColors({
        first: "none",
        second: "none",
        third: "hide",
        fourth: "rotate"
      });
    } else if (colors.second === "rotate") {
      setColors({
        first: "rotate",
        second: "none",
        third: "none",
        fourth: "hide"
      });
    } else if (colors.third === "rotate") {
      setColors({
        first: "hide",
        second: "rotate",
        third: "none",
        fourth: "none"
      });
    } else if (colors.fourth === "rotate") {
      setColors({
        first: "none",
        second: "hide",
        third: "rotate",
        fourth: "none"
      });
    } else if (colors.first === "") {
      setColors({
        first: "none",
        second: "none",
        third: "hide",
        fourth: "rotate"
      });
    }
  };

  return (
    <div className="cube_wrapper" onClick={() => rotateCube()}>
      <div className={`cube cube__side--first ${colors.first}`}></div>
      <div className={`cube cube__side--second ${colors.second}`}></div>
      <div className={`cube cube__side--third ${colors.third}`}></div>
      <div className={`cube cube__side--fourth ${colors.fourth}`}></div>
    </div>
  );
};
