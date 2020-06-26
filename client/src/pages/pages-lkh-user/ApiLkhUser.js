import axios from 'axios'
import React from 'react'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import {Button} from 'react-bootstrap';
export const ExportCSV = ({csvData, fileName}) => {

  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {type: fileType});
    FileSaver.saveAs(data, fileName + fileExtension);
  }

  return (
    <Button variant="warning" onClick={(e) => exportToCSV(csvData,fileName)}>Export</Button>
  )
}

export const TambahDataLkh = newDataLkh => {
  return axios
    .post('tambah/tambahDataLkh', {
        first_name: newDataLkh.first_name,
        last_name: newDataLkh.last_name,
        email: newDataLkh.email,
        password: newDataLkh.password,
        role: newDataLkh.role,
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.usertoken}`
        },
      }, {
        timeOut: 1000
      }
    )
    .then(response => {
      return response.data
    }).catch(err => {
      return err.code
    })
}

export const EditDataLkh = newDataLkh => {
  return axios
    .post('edit/editDataLkh', {
        id: newDataLkh.id,
        first_name: newDataLkh.first_name,
        last_name: newDataLkh.last_name,
        role: newDataLkh.role,
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.usertoken}`
        },
      }, {
        timeOut: 1000
      }
    )
    .then(response => {
      return response.data
    }).catch(err => {
      return err.code
    })
}

export const VerifikasiLkh = newDataLkh => {
  return axios
    .post('verifikasi/verifikasiLkh', {
        id: newDataLkh.id,
        first_name: newDataLkh.first_name,
        tanggal_pekerjaan: newDataLkh.tanggal_pekerjaan
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.usertoken}`
        },
      }, {
        timeOut: 1000
      }
    )
    .then(response => {
      return response.data
    }).catch(err => {
      return err.code
    })
}
export const getAllDataLkhDetail = postData => {

  return axios.post('list/lkhShowAllById', {
      id_user: postData.id_user,
      page: postData.page,
      limit: postData.limit,
      cari: postData.searchData
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${postData.token}`
      },
    }
  )
    .then(res => {
      return res.data
    })
}

export const getAllDataLkhDetailPerBulan = postData => {

  return axios.post('list/lkhShowAllByIdPerBulan', {
      id_user: postData.id_user,
      tanggal_pekerjaan: postData.tanggal_pekerjaan
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${postData.token}`
      },
    }
  )
    .then(res => {
      return res.data
    })
}


export const getAllDataLkh = postData => {

  return axios.post('list/lkhShowAllLkhByUserSpesifik', {
      page: postData.page,
      limit: postData.limit,
      cari: postData.searchData
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${postData.token}`
      },
    }
  )
    .then(res => {
      return res.data
    })
}
