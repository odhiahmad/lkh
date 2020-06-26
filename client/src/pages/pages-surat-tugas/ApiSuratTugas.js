import axios from 'axios'


export const TambahUser = newUser => {
  return axios
    .post('tambah/tambahUser', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password,
        role: newUser.role,
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

export const EditUser = newUser => {
  return axios
    .post('edit/editUser', {
        id: newUser.id,
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        role: newUser.role,
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

export const HapusUser = newUser => {
  return axios
    .post('hapus/hapusUser', {
        id: newUser.id,
        first_name: newUser.first_name,
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

export const getAllUser = postData => {

  return axios.post('list/userShowAll', {
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
