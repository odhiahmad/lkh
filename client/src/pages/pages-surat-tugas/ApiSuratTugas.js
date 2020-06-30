import axios from 'axios'


export const TambahLkh = newLkh => {

  return axios
    .post('tambah/tambahLkh', {
        id_user: localStorage.idUser,
        tanggal_pekerjaan: newLkh.tanggal_pekerjaan,
        jam_pekerjaan: newLkh.jam_pekerjaan,
        detail_pekerjaan: newLkh.detail_pekerjaan,
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
      console.log(newLkh.tanggal_pekerjaan)
      return response.data
    }).catch(err => {
      return err.code
    })
}

export const EditLkh = newLkh => {

  return axios
    .post('edit/editLkh', {
        id: newLkh.id,
        id_user: localStorage.idUser,
        detail_pekerjaan: newLkh.detail_pekerjaan,
        jam_pekerjaan: newLkh.jam_pekerjaan
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

export const HapusLkh = newLkh => {
  return axios
    .post('hapus/hapusLkh', {
        id: newLkh.id,
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

export const getAllLkh = postData => {

  return axios.post('list/lkhShowAllByUser', {
      id_user: localStorage.idUser,
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
