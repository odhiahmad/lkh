import React, {Component} from 'react'
import Form from './Form'
import {getAllLkh, EditLkh, TambahLkh, HapusLkh} from './ApiLkh'
import {Button, Modal} from 'react-bootstrap';
import Swal from 'sweetalert2'
import moment from 'moment';

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

class IndexLkh extends Component {
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
        tanggal_pekerjaan: '',
        jam_pekerjaan: '',
        detail_pekerjaan: '',
      },
    };
  }

  componentDidMount() {
    this.getAll()
  }

  getAll = () => {
    const postData = {
      token: localStorage.usertoken,
      page: this.state.page,
      limit: this.state.limit,
      searchData: null,
    }

    getAllLkh(postData).then(data => {
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
    const postData = {
      token: localStorage.usertoken,
      page: this.state.page - 1,
      limit: this.state.limit,
      searchData: null,
    }

    getAllLkh(postData).then(data => {

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
    const postData = {
      searchData: null,
      token: localStorage.usertoken,
      page: this.state.page + 1,
      limit: this.state.limit
    }

    getAllLkh(postData).then(data => {
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

      const postData = {
        searchData: cari,
        token: localStorage.usertoken,
        page: this.state.page + 1,
        limit: this.state.limit
      }

      getAllLkh(postData).then(data => {
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

  handleChangeDate = date => {
    var jam = date.getHours()
    var minute = date.getMinutes()

    var getJam = jam+':'+minute+':00'
    this.setState({
      post: {
        tanggal_pekerjaan: date,
        jam_pekerjaan:getJam
      }
    });
    console.log(this.state.post.tanggal_pekerjaan)
  };

  handleClickTable(e) {
    this.state.clickTable[e] = true
  }

  handleSubmit = e => {
    this.setState({
      loadingButton: true
    })

    if (this.state.tipeForm === 1) {
      TambahLkh(this.state.post).then(res => {
        if (res) {
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
          console.log(res.data.data)
          this.setState(prevState => ({
            loadingButton: false,
            data: [...prevState.data, res.data.data],
            post: {
              tanggal_pekerjaan: '',
              jam_pekerjaan: '',
              detail_pekerjaan: '',
            },
            setLoading: false,
            setShow: false
          }));
        }
      })
    } else if (this.state.tipeForm === 2) {
      EditLkh(this.state.post).then(res => {
        if (res) {
          const id = this.state.index
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
          console.log(res.data.data.detail_pekerjaan)
          this.state.data[id] = this.state.post
          this.setState(prevState => ({
            loadingButton: false,
            setLoading: false,
            setShow: false
          }));
        }
      })
    } else if (this.state.tipeForm === 3) {
      HapusLkh(this.state.post).then(res => {
        if (res) {
          const id = this.state.index
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
          console.log(res.data.data)
          delete this.state.data[id]
          this.setState(prevState => ({
            loadingButton: false,
            setLoading: false,
            setShow: false
          }));
        }
      })
    }


  };

  handleEdit(e) {
    // var getTanggal = this.state.data[e].tanggal_pekerjaan;
    // var Tanggal =  getTanggal.substring(0,10);
    //
    // var getTahun = Tanggal.substring(0,4)
    // var getBulan = Tanggal.substring(0,4)
    // var getHari = Tanggal.substring(0,4)

    this.setState({
      index: e,
      tipeForm: 2,
      setShow: true,
      post: {
        id: this.state.data[e].id,
        detail_pekerjaan: this.state.data[e].detail_pekerjaan,
        jam_pekerjaan:this.state.data[e].jam_pekerjaan
      },
    })
  }


  handleTambah() {
    this.setState({
      tipeForm: 1,
      setShow: true,
      post: {
        id: '',
        tanggal_pekerjaan: new Date(),
        jam_pekerjaan: new Date(),
        detail_pekerjaan: '',
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
        tanggal_pekerjaan: this.state.data[e].tanggal_pekerjaan,
        jam_pekerjaan: this.state.data[e].jam_pekerjaan,
        detail_pekerjaan: this.state.data[e].detail_pekerjaan,
      },
    })
  }

  renderTableData() {
    moment.locale();
    return this.state.data.map((lkh, index) => {
      const {tanggal_pekerjaan, jam_pekerjaan, detail_pekerjaan} = lkh //destructuring
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{moment(tanggal_pekerjaan).format('LL')}</td>
          <td>{jam_pekerjaan}</td>
          <td>{detail_pekerjaan}</td>
          <td>
            <button onClick={() => {
              this.handleEdit(index)
            }} style={{marginRight: 10}}
                    className="btn btn-info btn-xs">
              <i className="fas fa-edit"></i>
              Edit
            </button>
            <button onClick={() => {
              this.handleHapus(index)
            }} style={{marginRight: 10}}
                    className="btn btn-danger btn-xs">
              <i className="fas fa-trash"></i>
              Hapus
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
                <h1 className="m-0 text-dark">Lkh</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a>Home</a></li>
                  <li className="breadcrumb-item active">Lkh</li>
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
                      <button style={{marginRight: 10}} onClick={() => {
                        this.handleTambah()
                      }} className="btn btn-outline-warning">
                        <i className="fas fa-plus"></i>
                        Tambah Lkh
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
                  <h3 className="card-title">Data Lkh</h3>

                  <div className="card-tools">
                    <div className="input-group input-group-sm" style={{width: 150}}>
                      <input type="text" value={this.state.searchData} onChange={this.handleSearch}
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
                      <th>Tanggal Pekerjaan</th>
                      <th>Jam Pekerjaan</th>
                      <th>Detail</th>
                      <th>Aksi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderTableData()}
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
              <Modal.Title>{this.state.tipeForm === 1 ? 'Tambah Lkh' : this.state.tipeForm === 2 ? 'Edit Data' : this.state.tipeForm === 3 ? 'Hapus Data LKH Berikut ?' : ''}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                handleChangeDate={this.handleChangeDate}
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

export default IndexLkh
