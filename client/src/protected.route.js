import React from "react";
import {Route, Redirect} from "react-router-dom";


export const ProtectedRoute =
  ({
     component: Component,
     ...rest
  }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.usertoken) {
          if(localStorage.role === 'admin'){
            return <Component {...props} />;
          }else{
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
export const ProtectedRouteUser =
  ({
     component: Component,
     ...rest
   }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (localStorage.usertoken) {
            if(localStorage.role === 'user'){
              return <Component {...props} />;
            }else{
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
