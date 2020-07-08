import React, { Component } from 'react';
import { login } from '../components/UserFunctions';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    login(user)
      .then(res => {
        console.log(res);
        if (res === null || res === undefined) {
          Toast.fire({
            icon: 'success',
            title: 'Username atau Password Salah',
          });
        } else {
          if (res.role === 'karu') {
            this.props.history.push(`/dashboard-karu`);
          } else if (res.role === 'user') {
            this.props.history.push(`/dashboard-user`);
          } else if (res.role === 'admin') {
            this.props.history.push(`/dashboard-admin`);
          } else if (res.role === 'kabid') {
            this.props.history.push(`/dashboard-kabid`);
          } else if (res.role === 'kepala') {
            this.props.history.push(`/dashboard-kepala`);
          } else {
            this.props.history.push(`/`);
          }
        }

      })
      .catch(err => {
        console.log('Invalid username and password, ' + err);
      });
  }

  render() {
    return (
      <body className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html"><b>Sistem Informasi </b>LKH</a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-group mb-3">
                <input
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                  type="email" className="form-control"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  type="password" className="form-control" placeholder="Password"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember"/>
                    <label htmlFor="remember">
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </div>
              </div>
            </form>
            <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <a className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
              </a>
              <a className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
              </a>
            </div>
            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="register.html" className="text-center">Register a new membership</a>
            </p>
          </div>
        </div>
      </div>
      </body>
    );
  }
}

export default Login;
