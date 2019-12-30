import React from "react";
import { Route, Redirect } from "react-router-dom";
import {notify} from '../notify/Notify'
const Auth = ({ path, Component }) => {
   return <Route
    path={path}
    render={routerProps => {
      if (localStorage.getItem("userLogin")) {
        return <Component {...routerProps} />;
      }
      else {
        notify("","Yêu cầu đăng nhập")
        return <Redirect to="/" />;
      }
     
     
    }}
  />;
};

export default Auth;
