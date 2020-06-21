import React from "react";
import {Route, Redirect} from "react-router-dom";


export const ProtectedRouteAdmin =
  ({
     component: Component,
     ...rest
   }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (localStorage.role === 'admin') {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }}
      />
    );
  };
