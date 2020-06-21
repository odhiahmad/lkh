import React, {Component} from 'react'
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import Dashboard from "./pages-dashboard/Dashboard";
import IndexUser from "./pages-user/IndexUser";
import IndexLkh from "./pages-lkh/IndexLkh";
import IndexProfile from "./pages-profile/IndexProfile";
import jwt_decode from "jwt-decode";
import {getUser} from "../components/UserFunctions";
import {ProtectedRouteAdmin} from "./protectedRouterAdmin";
import {ProtectedRouteUser} from "./protectedRouterUser";

class Main extends Component {
  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    getUser(decoded.uid).then(res => {
      this.setState({
        first_name: res.data.first_name,
        last_name: res.data.last_name,
        email: res.data.email
      })
    })
  }

  logOut(e) {

    e.preventDefault()
    localStorage.removeItem('usertoken')
    localStorage.removeItem('role')
    this.props.history.push('/login')


  }
  render() {
    return (
      <Router>
        <div className="wrapper">
          <nav className="main-header navbar navbar-expand navbar-light navbar-green">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars"></i></a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/profile" className="nav-link" data-widget="control-sidebar" data-slide="true"  role="button">
                  <i className="fas fa-user"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" onClick={this.logOut.bind(this)} className="nav-link" data-widget="control-sidebar" data-slide="true"  role="button">
                  <i className="fas fa-sign-out-alt"></i>
                </Link>
              </li>
            </ul>
          </nav>
          <Sidebar/>
          <Switch>
            <Route path="/profile" component={IndexProfile}/>
            <Route path="/dashboard" component={Dashboard}/>
            <ProtectedRouteAdmin path="/user" component={IndexUser}/>
            <ProtectedRouteUser path="/lkh" component={IndexLkh}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default Main
