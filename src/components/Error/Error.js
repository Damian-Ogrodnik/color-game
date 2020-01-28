import React from "react";
import { IconContext } from "react-icons";
import { MdError } from "react-icons/md";

export const Error = ({ msg, class_Name, icon = false }) => {
  return (
    <IconContext.Provider value={{ className: `${class_Name}__icon` }}>
      <div className={class_Name}>
        {icon && <MdError value={{ color: "black" }} />}
        {msg}
      </div>
    </IconContext.Provider>
  );
};
