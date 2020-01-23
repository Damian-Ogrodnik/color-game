import React from "react";

import { Error } from "../Error";

export const handleError = error => {
  if (error === "NO-NICKNAME") {
    return (
      <Error
        msg={"You have to enter your nickname before save. "}
        class_Name={"scoreboard__error"}
      />
    );
  } else if (error === "SHORT-NICKNAME") {
    return (
      <Error
        msg={"Your nickname is to short. "}
        class_Name={"scoreboard__error"}
      />
    );
  } else if (error === "NICKNAME-TAKEN") {
    return (
      <Error
        msg={"This nickname is already taken. "}
        class_Name={"scoreboard__error"}
      />
    );
  } else if (error === "SERVER-ERROR") {
    return (
      <Error
        msg={"Internal server error. Try again later... "}
        class_Name={"scoreboard__error"}
      />
    );
  }
};
