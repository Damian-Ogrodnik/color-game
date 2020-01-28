import React from "react";

import { Spinner } from "../Spinner";
import { Error } from "../Error";

export const withLoader = WrappedComponent => ({
  loading,
  error,
  ...props
}) => {
  console.log(loading);

  const renderComponent = () => {
    if (loading) {
      return <Spinner />;
    } else if (error) {
      return (
        <Error
          class_Name={"error"}
          icon={true}
          msg={"Ooops... Something went wrong. Try again later."}
        />
      );
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  return renderComponent();
};
