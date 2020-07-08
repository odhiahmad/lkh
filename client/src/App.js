import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

// import Index404 from "./pages/pages-404/Index404"
import Sidebar from './pages/component/Sidebar';
import IndexProfile from './pages/pages-profile/IndexProfile';
import Dashboard from './pages/pages-dashboard/Dashboard';
import DashboardKabid from './pages/pages-dashboard/DashboardKabid';
import DashboardKaru from './pages/pages-dashboard/DashboardKaru';
import DashboardKepala from './pages/pages-dashboard/DashboardKepala';
import IndexUser from './pages/pages-user/IndexUser';
import IndexDataLkh from './pages/pages-data-lkh/IndexDataLkh';
import IndexVerifikasiLkh from './pages/pages-verifikasi-lkh/IndexVerifikasiLkh';
import IndexDataDetailLkh from './pages/pages-data-lkh/IndexDataDetailLkh';
import Footer from './pages/component/Footer';
import Login from './pages/Login';
import {
  ProtectedRoute,
  ProtectedRouteUser,
  ProtectedRouteKabid,
  ProtectedRouteKepala,
  ProtectedRouteKaru,
} from './protected.route';
import DashboardUser from './pages/pages-dashboard/DashboardUser';
import IndexLkh from './pages/pages-lkh/IndexLkh';
import IndexLkhUser from './pages/pages-lkh-user/IndexLkhUser';
import Header from './pages/component/Header';
import IndexSuratTugas from './pages/pages-surat-tugas/IndexSuratTugas';


class App extends Component {
  render() {
    const Main = withRouter(({ location }) => {
      return (
        <div className="App">
          {location.pathname !== '/login' && location.pathname !== '/' && <Header/>}
          {location.pathname !== '/login' && location.pathname !== '/' && <Sidebar/>}
          <Route exact path="/" component={Login}/>

          <div className="content-wrapper">
            <Route path="/dashboard-karu" component={DashboardKaru}/>
            <Route path="/dashboard-kabid" component={DashboardKabid}/>
            <Route path="/dashboard-kepala" component={DashboardKepala}/>
            <Route path="/dashboard-user" component={DashboardUser}/>
            <Route path="/dashboard-admin" component={Dashboard}/>
            <Route path="/user" component={IndexUser}/>
            <Route path="/data-lkh" component={IndexDataLkh}/>
            <Route path="/verifikasi-lkh" component={IndexVerifikasiLkh}/>
            <Route path="/data-lkh-detail" component={IndexDataDetailLkh}/>
            <Route path="/surat-tugas" component={IndexSuratTugas}/>
            <Route path="/lkh-user" component={IndexLkhUser}/>
            <Route path="/lkh" component={IndexLkh}/>
            {/*<Route path="*" component={Index404}/>*/}
          </div>
          {location.pathname !== '/login' && location.pathname !== '/' && <Footer/>}

        </div>
      );
    });

    return (
      <Router>
        <Main/>
      </Router>
    );
  }
}

export default App;
