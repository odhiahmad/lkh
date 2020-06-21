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
          <div className="error-page">
            <h1 className="headline text-warning"> 404</h1>

            <div className="error-content">
              <h3><i className="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>
              <p>
                We could not find the page you were looking for.
                Meanwhile, you may <a href="../../index.html">return to dashboard</a> or try using the search form.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default IndexLkh
