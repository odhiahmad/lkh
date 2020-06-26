import React from "react";
import ReactDOM from "react-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import MainUser from "./pages/MainUser";
import Index404 from "./pages/pages-404/Index404"
import {ProtectedRoute,ProtectedRouteUser} from "./protected.route";


import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <ProtectedRoute path="/dashboard-admin" component={Main}/>
        <ProtectedRouteUser path="/dashboard-user" component={MainUser}/>
        {/*<ProtectedRoute path="/user" component={IndexUser}/>*/}
        {/*<ProtectedRoute path="/data-lkh" component={IndexDataLkh}/>*/}
        {/*<ProtectedRoute path="/verifikasi-lkh" component={IndexVerifikasiLkh}/>*/}
        {/*<ProtectedRoute path="/data-lkh-detail" component={IndexDataDetailLkh}/>*/}
        <Route path="*" component={Index404}/>
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  rootElement
);
