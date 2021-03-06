import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <aside className="main-sidebar sidebar-light-green elevation-4">
        <NavLink to="/dashboard" className="brand-link">
          <img src="assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo"
               className="brand-image img-circle elevation-3"
               style={{ opacity: .8 }}/>
          <span className="brand-text font-weight-light">SI LKH</span>
        </NavLink>
        <div className="sidebar sidebar-nav">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="assets/avatar.png" className="img-circle elevation-2" alt="user"/>
            </div>
            <div className="info">
              <a className="d-block">{localStorage.namaUser}</a>
            </div>
          </div>
          <nav className="mt-2">

            {localStorage.role === 'admin'?
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview"
                  role="menu"
                  data-accordion="false">
                <li className="nav-item">
                  <NavLink to="/dashboard-admin" className="nav-link">
                    <i className="nav-icon fas fa-home"></i>
                    <p>
                      Dashboard
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/user" className="nav-link">
                    <i className="nav-icon fas fa-users"></i>
                    <p>
                      Data User
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/data-lkh" className="nav-link">
                    <i className="nav-icon fas fa-book"></i>
                    <p>
                      Data LKH
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/lkh" className="nav-link">
                    <i className="nav-icon fas fa-book"></i>
                    <p>
                      Isi LKH
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/verifikasi-lkh" className="nav-link">
                    <i className="nav-icon fas fa-check"></i>
                    <p>
                      Verifikasi LKH
                    </p>
                  </NavLink>
                </li>
                {/*<li className="nav-item">*/}
                {/*  <NavLink to="/verifikasi-lkh" className="nav-link">*/}
                {/*    <i className="nav-icon fas fa-check"></i>*/}
                {/*    <p>*/}
                {/*      Verifikasi LKH*/}
                {/*    </p>*/}
                {/*  </NavLink>*/}
                {/*</li>*/}
              </ul>
              :localStorage.role === 'karu' ?
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview"
                  role="menu"
                  data-accordion="false">
                <li className="nav-item">
                  <NavLink to="/dashboard-admin" className="nav-link">
                    <i className="nav-icon fas fa-home"></i>
                    <p>
                      Dashboard
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/data-lkh" className="nav-link">
                    <i className="nav-icon fas fa-book"></i>
                    <p>
                      Data LKH
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/lkh" className="nav-link">
                    <i className="nav-icon fas fa-book"></i>
                    <p>
                      Isi LKH
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/lkh-user" className="nav-link">
                    <i className="nav-icon fas fa-download"></i>
                    <p>
                      LKH SAYA
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/surat-tugas" className="nav-link">
                    <i className="nav-icon fas fa-book"></i>
                    <p>
                      Surat Tugas
                    </p>
                  </NavLink>
                </li>

                {/*<li className="nav-item">*/}
                {/*  <NavLink to="/verifikasi-lkh" className="nav-link">*/}
                {/*    <i className="nav-icon fas fa-check"></i>*/}
                {/*    <p>*/}
                {/*      Verifikasi LKH*/}
                {/*    </p>*/}
                {/*  </NavLink>*/}
                {/*</li>*/}
              </ul> : localStorage.role === 'kabid' ?
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview"
                    role="menu"
                    data-accordion="false">
                  <li className="nav-item">
                    <NavLink to="/dashboard-admin" className="nav-link">
                      <i className="nav-icon fas fa-home"></i>
                      <p>
                        Dashboard
                      </p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/data-lkh" className="nav-link">
                      <i className="nav-icon fas fa-book"></i>
                      <p>
                        Data LKH
                      </p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/verifikasi-lkh" className="nav-link">
                      <i className="nav-icon fas fa-check"></i>
                      <p>
                        Verifikasi LKH
                      </p>
                    </NavLink>
                  </li>
                </ul> : localStorage.role === 'kepala' ?
                  <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview"
                      role="menu"
                      data-accordion="false">
                    <li className="nav-item">
                      <NavLink to="/dashboard-admin" className="nav-link">
                        <i className="nav-icon fas fa-home"></i>
                        <p>
                          Dashboard
                        </p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/data-lkh" className="nav-link">
                        <i className="nav-icon fas fa-book"></i>
                        <p>
                          Data LKH
                        </p>
                      </NavLink>
                    </li>
                  </ul> : localStorage.role === 'user' ?
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview"
                        role="menu"
                        data-accordion="false">
                      <li className="nav-item">
                        <NavLink to="/dashboard-user" className="nav-link">
                          <i className="nav-icon fas fa-home"></i>
                          <p>
                            Dashboard
                          </p>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/lkh" className="nav-link">
                          <i className="nav-icon fas fa-book"></i>
                          <p>
                            Isi LKH
                          </p>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/surat-tugas" className="nav-link">
                          <i className="nav-icon fas fa-book"></i>
                          <p>
                            Surat Tugas
                          </p>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/lkh-user" className="nav-link">
                          <i className="nav-icon fas fa-download"></i>
                          <p>
                            LKH SAYA
                          </p>
                        </NavLink>
                      </li>
                    </ul> : ''}
          </nav>
        </div>
      </aside>

    );
  }
}

export default Sidebar;
