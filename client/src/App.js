import React, {Component} from 'react'
import {BrowserRouter as Router,NavLink, Link, Redirect, Route, Switch, withRouter} from 'react-router-dom'

import Index404 from "./pages/pages-404/Index404"
import Sidebar from "./pages/component/Sidebar";
import IndexProfile from "./pages/pages-profile/IndexProfile";
import Dashboard from "./pages/pages-dashboard/Dashboard";
import IndexUser from "./pages/pages-user/IndexUser";
import IndexDataLkh from "./pages/pages-data-lkh/IndexDataLkh";
import IndexVerifikasiLkh from "./pages/pages-verifikasi-lkh/IndexVerifikasiLkh";
import IndexDataDetailLkh from "./pages/pages-data-lkh/IndexDataDetailLkh";
import Footer from "./pages/component/Footer";
import Login from "./pages/Login";
import {ProtectedRoute, ProtectedRouteUser} from "./protected.route";
import DashboardUser from "./pages/pages-dashboard/DashboardUser";
import IndexLkh from "./pages/pages-lkh/IndexLkh";
import IndexLkhUser from "./pages/pages-lkh-user/IndexLkhUser";
import Header from "./pages/component/Header";


class App extends Component {
  logOut(e) {
    const { history } = this.props;
    e.preventDefault()
    localStorage.removeItem('usertoken')
    localStorage.removeItem('role')
    this.props.history.push('/')


  }

  render() {
    const Main = withRouter(({location}) => {
      return (
        <div className="App">
          {location.pathname !== '/login' && location.pathname !== '/' && <Header/>}
          {location.pathname !== '/login' && location.pathname !== '/' && <Sidebar/>}
          <Route exact path="/" component={Login}/>
          <div className="content-wrapper">
            <ProtectedRoute path="/profile" component={IndexProfile}/>
            <ProtectedRoute path="/dashboard-admin" component={Dashboard}/>
            <ProtectedRoute path="/user" component={IndexUser}/>
            <ProtectedRoute path="/data-lkh" component={IndexDataLkh}/>
            <ProtectedRoute path="/verifikasi-lkh" component={IndexVerifikasiLkh}/>
            <ProtectedRoute path="/data-lkh-detail" component={IndexDataDetailLkh}/>
            <ProtectedRouteUser path="/profile" component={IndexProfile}/>
            <ProtectedRouteUser path="/dashboard-user" component={DashboardUser}/>
            <ProtectedRouteUser path="/lkh" component={IndexLkh}/>
            <ProtectedRouteUser path="/lkh-user" component={IndexLkhUser}/>
            {/*<Route path="*" component={Index404}/>*/}
          </div>
          {location.pathname !== '/login' && location.pathname !== '/' && <Footer/>}

        </div>
      )
    })

    return (
      <Router>
        <Main/>
      </Router>
    )
  }
}

export default App
