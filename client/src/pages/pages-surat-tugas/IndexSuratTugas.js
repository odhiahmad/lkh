import React, {Component} from 'react'
import Form from './Form'
import {getAllSuratTugas, EditSuratTugas, TambahSuratTugas, HapusSuratTugas,PdfDocument} from './ApiSuratTugas'
import {Button, Modal} from 'react-bootstrap';
import Swal from 'sweetalert2'
import moment from 'moment';
import {Page, Text, View, Document, StyleSheet, PDFDownloadLink} from '@react-pdf/renderer';


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


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

class IndexSuratTugas extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: 'Tes',
      page: 1,
      limit: 10,
      lastPage: '',
      panjang: 0,

      dataUser: [],
      data: [],
      dataProfil:[],
      searchData: '',
      loadingButton: false,

      clickTable: [],
      tipeForm: 1,

      index: '',
      setShow: false,
      post: {
        id: '',
        tanggal_tugas: '',
        id_user_penyetuju: '',
        detail_tugas: '',
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

    getAllSuratTugas(postData).then(data => {
      this.setState({
        data: data.dataSuratTugas.data,
        lastPage: data.dataSuratTugas.lastPage,
        panjang: data.dataSuratTugas.total,
        dataProfil:data.dataUser
      })
    })

    // getAllUser().then(data => {
    //   this.setState({
    //     dataUser: data,
    //   })
    // })
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

    getAllSuratTugas(postData).then(data => {

      this.setState({


        page: data.dataSuratTugas.page,
        data: data.dataSuratTugas.data,
        lastPage: data.dataSuratTugas.lastPage,
        panjang: data.dataSuratTugas.total,
        dataProfil:data.dataUser
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

    getAllSuratTugas(postData).then(data => {
      this.setState({
        page: data.dataSuratTugas.page,
        data: data.dataSuratTugas.data,
        lastPage: data.dataSuratTugas.lastPage,
        panjang: data.dataSuratTugas.total,
        dataProfil:data.dataUser
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

      getAllSuratTugas(postData).then(data => {
        this.setState({
          page: data.dataSuratTugas.page,
          data: data.dataSuratTugas.data,
          lastPage: data.dataSuratTugas.lastPage,
          panjang: data.dataSuratTugas.total,
          dataProfil:data.dataUser
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
    this.setState({
      post: {
        tanggal_tugas: date,
      }
    });
    console.log(this.state.post.tanggal_tugas)
  };

  handleClickTable(e) {
    this.state.clickTable[e] = true
  }

  handleSubmit = e => {
    this.setState({
      loadingButton: true
    })

    if (this.state.tipeForm === 1) {
      console.log(this.state.post)
      TambahSuratTugas(this.state.post).then(res => {
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
              tanggal_tugas: '',
              id_user_penyetuju: '',
              detail_tugas: '',
            },
            setLoading: false,
            setShow: false
          }));
        }
      })
    } else if (this.state.tipeForm === 2) {
      EditSuratTugas(this.state.post).then(res => {
        if (res) {
          const id = this.state.index
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
          console.log(res.data.data.detail_tugas)
          this.state.data[id] = this.state.post
          this.setState(prevState => ({
            loadingButton: false,
            setLoading: false,
            setShow: false
          }));
        }
      })
    } else if (this.state.tipeForm === 3) {
      HapusSuratTugas(this.state.post).then(res => {
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
    // var getTanggal = this.state.data[e].tanggal_tugas;
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
        id: this.state.data[e].id_surat_tugas,
        detail_tugas: this.state.data[e].detail_tugas,
        id_user_penyetuju: this.state.data[e].id_user_penyetuju
      },
    })
  }

  handleTambah() {
    this.setState({
      tipeForm: 1,
      setShow: true,
      post: {
        id: '',
        tanggal_tugas: new Date(),
        id_user_penyetuju: new Date(),
        detail_tugas: '',
      },
    })
  }

  handleHapus(e) {
    this.setState({
      index: e,
      tipeForm: 3,
      setShow: true,
      post: {
        id: this.state.data[e].id_surat_tugas,
        tanggal_tugas: this.state.data[e].tanggal_tugas,
        id_user_penyetuju: this.state.data[e].id_user_penyetuju,
        detail_tugas: this.state.data[e].detail_tugas,
      },
    })
  }

  renderTableData() {
    moment.locale();
    return this.state.data.map((lkh, index) => {
      const {tanggal_tugas, id_user_penyetuju, detail_tugas} = lkh //destructuring
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{moment(tanggal_tugas).format('LL')}</td>
          <td>{id_user_penyetuju}</td>
          <td>{detail_tugas}</td>
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

          </td>
        </tr>
      )
    })
  }

  render() {
    const handleClose = () => this.setState({setShow: false});
    return (
      <div style={{marginLeft: 10, marginRight: 10}}>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Surat Tugas</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a>Home</a></li>
                  <li className="breadcrumb-item active">Surat Tugas</li>
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
                        Tambah SuratTugas
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
                  <h3 className="card-title">Data SuratTugas</h3>

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
                      <th>Tanggal Tugas</th>
                      <th>Penyetuju</th>
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
              <Modal.Title>{this.state.tipeForm === 1 ? 'Tambah Surat Tugas' : this.state.tipeForm === 2 ? 'Edit Data' : this.state.tipeForm === 3 ? 'Hapus Data Surat Tugas Berikut ?' : ''}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                dataUser={this.state.dataUser}
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

export default IndexSuratTugas
