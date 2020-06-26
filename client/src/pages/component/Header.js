import {Link} from "react-router-dom";
import React, {Component} from "react";
import Sidebar from "./Sidebar";

class Header extends Component {

  logOut(e) {

    e.preventDefault()
    localStorage.removeItem('usertoken')
    localStorage.removeItem('role')
    this.props.history.push('/login')


  }

  render() {
    return (
      <nav className="main-header navbar navbar-expand navbar-light navbar-green">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars"></i></a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/profile" className="nav-link" data-widget="control-sidebar" data-slide="true" role="button">
              <i className="fas fa-user"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" onClick={this.logOut.bind(this)} className="nav-link" data-widget="control-sidebar"
                  data-slide="true" role="button">
              <i className="fas fa-sign-out-alt"></i>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}export default Header
