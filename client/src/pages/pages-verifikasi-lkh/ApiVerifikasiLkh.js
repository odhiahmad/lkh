import axios from 'axios'

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

export const getAllVerifikasiLkh = postData => {

  return axios.post('list/lkhShowAllLkhByUser', {
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
