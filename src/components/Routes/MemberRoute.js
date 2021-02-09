import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

const MemberRoute = ({
  component: Component,
  match,
  path,
  location,
  ...rest
}) => {
  const ok = localStorage.getItem("BWAMICRO:token");
  console.log(rest);
  localStorage.removeItem("BWAMICRO:redirect");

  return (
    <Route
      {...rest}
      render={(props) =>
        ok ? (
          <Component {...props} />
        ) : path === "/joined/:class" ? (
          <Redirect to={'/login'} />
        ) : (
          <Redirect to={`/`} />
        )
      }
    />
  );
};

export default withRouter(MemberRoute);
