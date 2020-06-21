import React from "react";
import ReactDOM from "react-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Index404 from "./pages/pages-404/Index404"
import {ProtectedRoute} from "./protected.route";

import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <ProtectedRoute path="/dashboard" component={Main}/>
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
