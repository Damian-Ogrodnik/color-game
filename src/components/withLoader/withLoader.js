import React from "react";

import { Spinner } from "../Spinner";

export const withLoader = WrappedComponent => ({ loading, ...props }) => {
  console.log(loading);

  return loading ? <Spinner /> : <WrappedComponent {...props} />;
};
