import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UseAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = UseAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Component {...props} /> : <Redirect to="/home" />;
      }}
    ></Route>
  );
};
