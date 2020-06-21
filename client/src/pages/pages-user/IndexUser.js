import React, {Component} from 'react'
import FormTambah from './FormTambah'
import {getAllUser, TambahUser} from './ApiUser'


class IndexUser extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: 'Tes',
      page: 1,
      limit: 10,
      data: [],

      post: {
        first_name: '',
        last_name: '',
        email: '',
        role: '',
        password: ''
      },
      modalShow:"modal fade"
    };
  }

  componentDidMount() {
    this.getAll()
  }

  getAll = () => {
    const postData = {
      token: localStorage.usertoken,
      page: this.state.page,
      limit: this.state.limit
    }

    getAllUser(postData).then(data => {
      this.setState({
        data: data
      })
    })
  }

  handleChange = e => {
    const {name, value} = e.target;

    this.setState(prevState => ({
      post: {...prevState.post, [name]: value}
    }));
  };

  handleSubmit = e => {

    TambahUser(this.state.post).then(res => {
      if (res) {
        console.log(res.data.data)
        this.setState(prevState => ({
          data: [...prevState.data, res.data.data],
          post: {
            first_name: '',
            last_name: '',
            email: '',
            role: '',
            password: ''
          },
          modalShow: "modal hide"
        }));
      }
    })


  };

  renderTableData() {
    return this.state.data.map((user, index) => {
      const {id, first_name, last_name, email, role} = user //destructuring
      return (
        <tr key={id}>
          <td>{index + 1}</td>
          <td>{first_name} {last_name}</td>
          <td>{email}</td>
          <td>{role}</td>
          <td>Tes</td>
        </tr>
      )
    })
  }

  render() {

    return (
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">User</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a>Home</a></li>
                  <li className="breadcrumb-item active">User</li>
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
                      <button style={{marginRight: 10}} onClick={this.handleModal} type="button" data-toggle="modal"
                              data-target="#modalTambahUser"
                              className="btn btn-outline-warning">Tambah User
                      </button>
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
                  <h3 className="card-title">Data User</h3>

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
                      <th>No</th>
                      <th>Nama</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Aksi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="modalTambahUser">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Tambah User</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <FormTambah
                    handleChange={this.handleChange}
                    post={this.state.post}
                    handleSubmitForm={this.handleSubmit}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default IndexUser
