import React from "react";
import { Route, Redirect } from "react-router-dom";
import Swal from "sweetalert2";

const Auth = ({ path, Component }) => {
  return (
    <Route
      path={path}
      render={(routerProps) => {
        if (localStorage.getItem("userLogin")) {
          return <Component {...routerProps} />;
        } else {
          Swal.fire({
            title: "Login required",
            icon: "warning",
          });
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default Auth;
