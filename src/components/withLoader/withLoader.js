import React from "react";

export const withLoader = WrappedComponent => ({ loading, ...props }) => {
  console.log(loading);

  return loading ? <div>Loading</div> : <WrappedComponent {...props} />;
};
