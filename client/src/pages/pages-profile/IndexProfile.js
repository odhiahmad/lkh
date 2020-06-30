import React, { Component } from 'react'


class IndexProfile extends Component {
  render() {
    return (
      <div style={{marginLeft:10,marginRight:10}}>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Profile</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a>Home</a></li>
                  <li className="breadcrumb-item active">Profile</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <p>Tes</p>
        </section>
      </div>
    )
  }
}

export default IndexProfile
