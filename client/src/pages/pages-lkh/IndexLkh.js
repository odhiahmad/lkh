import React, { Component } from 'react'


class IndexLkh extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">LKH</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a>Home</a></li>
                  <li className="breadcrumb-item active">LKH</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-6">
                      <button style={{marginRight:10}} type="button" className="btn btn-outline-warning">Tambah LKH</button>
                      <button type="button" className="btn btn-outline-danger">Hapus</button>
                    </div>
                    <div className="col-6">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Responsive Hover Table</h3>

                  <div className="card-tools">
                    <div className="input-group input-group-sm" style={{width: 150}}>
                      <input type="text" name="table_search" className="form-control float-right"
                             placeholder="Search"/>

                      <div className="input-group-append">
                        <button type="submit" className="btn btn-default"><i className="fas fa-search"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body table-responsive p-0">
                  <table className="table table-hover text-nowrap">
                    <thead>
                    <tr>
                      <th>ID</th>
                      <th>User</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Reason</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>183</td>
                      <td>John Doe</td>
                      <td>11-7-2014</td>
                      <td><span className="tag tag-success">Approved</span></td>
                      <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                    <tr>
                      <td>219</td>
                      <td>Alexander Pierce</td>
                      <td>11-7-2014</td>
                      <td><span className="tag tag-warning">Pending</span></td>
                      <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                    <tr>
                      <td>657</td>
                      <td>Bob Doe</td>
                      <td>11-7-2014</td>
                      <td><span className="tag tag-primary">Approved</span></td>
                      <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                    <tr>
                      <td>175</td>
                      <td>Mike Doe</td>
                      <td>11-7-2014</td>
                      <td><span className="tag tag-danger">Denied</span></td>
                      <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default IndexLkh
