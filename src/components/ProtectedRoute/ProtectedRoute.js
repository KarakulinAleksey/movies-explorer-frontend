import React from "react";
import { Route, Redirect } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRoute = ({ component: Comment, ...props }) => {
  return (
    <Route>
      {() => (props.loggedIn ? <Comment {...props} /> : <Redirect to="/" />)}
    </Route>
  );
};

export default ProtectedRoute;
