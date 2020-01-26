import React from "react";

import { BounceLoader } from "react-spinners";

export const Spinner = () => {
  return (
    <div className="spinner">
      <BounceLoader size={150} color={"#e0dcce"} />
      <p>Loading...</p>
    </div>
  );
};
