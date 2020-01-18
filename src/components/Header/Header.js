import React from "react";

export const Header = ({ classTitle, title }) => {
  return (
    <div className={`${classTitle}__header`}>
      <h1>{title}</h1>
    </div>
  );
};
