import {Link,withRouter} from "react-router-dom";
import React, {Component} from "react";
import Swal from 'sweetalert2'
class Header extends Component {

  logOut(e) {
    Swal.fire({
      title: 'Apakah anda ingin keluar',
      text: "Akun anda akan keluar dari sesi login sekarang!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Keluar!',
      cancelButtonText:'Tidak'
    }).then((result) => {
      if (result.value) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        localStorage.removeItem('role')
        this.props.history.push('/')
      }
    })



  }

  toProfile(e) {
    this.props.history.push('/profile')
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

          {/*<li className="nav-item">*/}
          {/*  <NavLink to="/profile" className="nav-link"  role="button">*/}
          {/*    <i className="fas fa-user"></i>*/}
          {/*  </NavLink>*/}
          {/*</li>*/}
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
}export default withRouter(Header)
