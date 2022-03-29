import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRouteAuth = ({ component: Comment, ...props }) => {
  return (
   
    <Route>
      {() => (!props.loggedIn ? <Comment {...props} /> : <Redirect to="/" />)}
    </Route>
  );
};

export default ProtectedRouteAuth;
