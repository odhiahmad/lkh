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
          if (localStorage.role === 'admin' && localStorage.usertoken) {
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
        }
        }
      />
    )
      ;
  };

export const ProtectedRouteKaru =
  ({
    component: Component,
    ...rest
  }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (localStorage.role === 'karu' && localStorage.usertoken) {
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
        }
        }
      />
    )
      ;
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
          if (localStorage.usertoken && localStorage.role === 'user') {
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

export const ProtectedRouteKabid =
  ({
    component: Component,
    ...rest
  }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (localStorage.usertoken && localStorage.role === 'kabid') {
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

export const ProtectedRouteKepala =
  ({
    component: Component,
    ...rest
  }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (localStorage.usertoken && localStorage.role === 'kepala') {
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
