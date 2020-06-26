import React, {Component} from 'react'
import Form from './Form'
import {getAllVerifikasiLkh,VerifikasiLkh} from './ApiVerifikasiLkh'
import {Button, Modal} from 'react-bootstrap';
import Swal from 'sweetalert2'
import moment from "moment";
import 'moment/locale/id';
moment().locale('id')
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

class IndexVerifikasiLkh extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: 'Tes',
      page: 1,
      limit: 10,
      lastPage: '',
      panjang: 0,

      data: [],
      searchData: '',
      loadingButton: false,

      clickTable: [],
      tipeForm: 1,

      index: '',
      setShow: false,
      post: {
        id: '',
        status:'',
        tanggal_pekerjaan:'',
        first_name: '',
        last_name: '',
        email: '',
        role: '',
        password: ''
      },
      modalShow: "modal fade"
    };
  }

  componentDidMount() {
    this.getAll()
  }

  getAll = () => {
    const postVerifikasi = {
      token: localStorage.usertoken,
      page: this.state.page,
      limit: this.state.limit,
      searchData: null,
    }

    getAllVerifikasiLkh(postVerifikasi).then(data => {
      this.setState({
        data: data.data,
        lastPage: data.lastPage,
        panjang: data.total,
      })
    })
  }

  handlePrevPage = () => {
    this.setState({
      data: [],
    })
    const postVerifikasi = {
      token: localStorage.usertoken,
      page: this.state.page - 1,
      limit: this.state.limit,
      searchData: null,
    }

    getAllVerifikasiLkh(postVerifikasi).then(data => {

      this.setState({

        data: data.data,
        lastPage: data.lastPage,
        page: data.page,
        panjang: data.total,
      })
    })
  }

  handleNextPage = () => {
    this.setState({
      data: [],
    })
    const postVerifikasi = {
      searchData: null,
      token: localStorage.usertoken,
      page: this.state.page + 1,
      limit: this.state.limit
    }

    getAllVerifikasiLkh(postVerifikasi).then(data => {
      this.setState({
        data: data.data,
        lastPage: data.lastPage,
        page: data.page,
      })
    })
  }


  handleSearch = event => {
    console.log(event.target.value)
    if (event !== '') {
      const cari = event.target.value;
      this.setState({
        searchData: cari,
        data: [],
      });

      const postVerifikasi = {
        searchData: cari,
        token: localStorage.usertoken,
        page: this.state.page + 1,
        limit: this.state.limit
      }

      getAllVerifikasiLkh(postVerifikasi).then(data => {
        this.setState({
          data: data.data,
          lastPage: data.lastPage,
          page: data.page,
        })
      })
    } else {
      this.getAll()
    }

  }


  handleChange = e => {
    const {name, value} = e.target;

    this.setState(prevState => ({
      post: {...prevState.post, [name]: value}
    }));
  };

  handleClickTable(e) {
    this.state.clickTable[e] = true
  }

  handleSubmit = e => {
    this.setState({
      loadingButton: true
    })

    if (this.state.tipeForm === 1) {
      VerifikasiLkh(this.state.post).then(res => {
        if (res) {
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
          console.log(res.data.data)
          this.state.data.splice(this.state.index, 1);
          this.setState(prevState => ({
            loadingButton: false,
            setLoading: false,
            setShow: false
          }));
        }
      })
    } else if (this.state.tipeForm === 2) {

    } else if (this.state.tipeForm === 3) {


    }


  };

  handleEdit(e) {
    this.setState({
      index: e,
      tipeForm: 2,
      setShow: true,
      post: {
        id: this.state.data[e].id,
        status:1,
        tanggal_pekerjaan:this.state.data[e].tanggal_pekerjaan,
        first_name: this.state.data[e].first_name,
        last_name: this.state.data[e].last_name,
        email: this.state.data[e].email,
        role: this.state.data[e].role,
        password: this.state.data[e].password,
      },
    })
  }

  handleVerifikasi(e) {
    this.setState({
      tipeForm: 1,
      setShow: true,
      post: {
        status:1,
        tanggal_pekerjaan:this.state.data[e].tanggal_pekerjaan,
        id: this.state.data[e].id,
        first_name: this.state.data[e].first_name,
        last_name: this.state.data[e].last_name,
        email: this.state.data[e].email,
        role: this.state.data[e].role,
        password: this.state.data[e].password,
      },
    })
  }

  handleHapus(e) {
    this.setState({
      index: e,
      tipeForm: 3,
      setShow: true,
      post: {
        id: this.state.data[e].id,
        first_name: this.state.data[e].first_name,
        last_name: this.state.data[e].last_name,
        email: this.state.data[e].email,
        role: this.state.data[e].role,
        password: this.state.data[e].password,
      },
    })
  }

  renderTableVerifikasi() {
    return this.state.data.map((user, index) => {
      const {first_name, last_name, email, tanggal_pekerjaan, status} = user //destructuring
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{first_name} {last_name}</td>
          <td>{moment(tanggal_pekerjaan).format("MMMM")}</td>
          <td><span className="right badge badge-danger">Belum di Verifikasi</span></td>
          <td>
            <button onClick={() => {
              this.handleVerifikasi(index)
            }} style={{marginRight: 10}}
                    className="btn btn-danger btn-xs">
              <i className="fas fa-check" style={{marginRight: 4}}></i>
              Verifikasi LKH
            </button>
            <button onClick={() => {
              this.handleEdit(index)
            }} style={{marginRight: 10}}
                    className="btn btn-info btn-xs">
              <i className="fas fa-download" style={{marginRight: 4}}></i>
              Download LKH
            </button>
            <button onClick={() => {
              this.handleHapus(index)
            }} style={{marginRight: 10}}
                    className="btn btn-warning btn-xs">
              <i className="fas fa-info" style={{marginRight: 4}}></i>
              View LKH
            </button>
            {/*{this.state.clickTable[index] !== index ?*/}
            {/*  <button onClick={() => {*/}
            {/*    this.handleClickTable(index)*/}
            {/*  }} style={{marginRight: 10}}*/}
            {/*          className="btn btn-primary btn-xs">*/}
            {/*    <i className="fas fa-circle"></i>*/}
            {/*    Pilih*/}
            {/*  </button>:*/}
            {/*  <button disabled={true}*/}
            {/*          className="btn btn-primary btn-xs">*/}
            {/*    <i className="fas fa-check"></i>*/}
            {/*    Pilih*/}
            {/*  </button>*/}
            {/*}*/}
            {/*<button key={index} value={index} style={{marginRight: 10}}*/}
            {/*        className="btn btn-primary btn-xs">*/}
            {/*  {selectedValue !== index ? 'Pilih' : 'Tidak Pilih'}*/}
            {/*</button>*/}
          </td>
        </tr>
      )
    })
  }

  render() {
    const handleClose = () => this.setState({setShow: false});
    return (
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">VerifikasiLkh</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a>Home</a></li>
                  <li className="breadcrumb-item active">VerifikasiLkh</li>
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
                      <button type="button" className="btn btn-outline-danger"><i className="fas fa-check"
                                                                                  style={{marginRight: 4}}></i>Verifikasi
                        Semua
                      </button>
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
                  <h3 className="card-title">Verifikasi Lkh</h3>

                  <div className="card-tools">
                    <div className="input-group input-group-sm" style={{width: 150}}>
                      <input type="text" value={this.state.searchVerifikasi} onChange={this.handleSearch}
                             className="form-control float-right"
                             placeholder="Search"/>

                      <div className="input-group-append">
                        <button type="submit" className="btn btn-default"><i className="fas fa-search"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body table-responsive p-0">
                  <table className="table table-striped table-hover table-bordered table-sm">
                    <thead>
                    <tr>
                      <th style={{width: 10}}>No</th>
                      <th>Nama</th>
                      <th>Bulan</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderTableVerifikasi()}
                    </tbody>
                  </table>
                </div>
                <div className="card-footer clearfix">
                  <ul className="pagination pagination-sm m-0 float-right">
                    <li className="page-item">
                      {this.state.page !== 1 ? <button className="page-link" onClick={this.handlePrevPage}>«</button> :
                        <button className="page-link" disabled={true}>«</button>}
                    </li>

                    <li className="page-item">
                      {this.state.lastPage !== this.state.page ?
                        <button className="page-link" onClick={this.handleNextPage}>»</button> :
                        <button className="page-link" disabled={true}>»</button>}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Modal
            show={this.state.setShow}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>{
                this.state.tipeForm === 1 ? 'Verifikasi LKH '+this.state.post.first_name+' Bulan '+moment(this.state.post.tanggal_pekerjaan).format("MMMM")+' ?' :
                  this.state.tipeForm === 2 ? 'Edit Verifikasi ' + this.state.post.first_name :
                    this.state.tipeForm === 3 ? 'Hapus Verifikasi ' + this.state.post.first_name + ' ?' : ''}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                tipeForm={this.state.tipeForm}
                loadingButton={this.state.loadingButton}
                handleChange={this.handleChange}
                post={this.state.post}
                handleSubmitForm={this.handleSubmit}/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </section>
      </div>
    )
  }
}

export default IndexVerifikasiLkh
