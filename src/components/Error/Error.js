import React from "react";

export const Error = ({ msg, class_Name }) => {
  return <div className={class_Name}>{msg}</div>;
};
