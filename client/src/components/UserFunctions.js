import axios from 'axios'
import jwt_decode from "jwt-decode";

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  try{
    return axios.post('users/login', {
      email: user.email,
      password: user.password
    })
      .then(res => {
        localStorage.setItem('usertoken', res.data.token)

        const decoded = jwt_decode(res.data.token)

        return getUser(decoded.uid).then(res => {

          localStorage.setItem('role', res.data.role)
          localStorage.setItem('idUser',decoded.uid)
          localStorage.setItem('namaUser',res.data.first_name+' '+res.data.last_name+res.data.gelar)
          localStorage.setItem('jabatan',res.data.jabatan)
          return res.data
        })
      })
      .catch(err => {
        console.log('Invalid username and password, ' + err)
        return err

      })
  }catch (e) {
    return e
  }

}

export const getUser = id => {
  return axios
    .get(`users/getuser/${id}`)
    .then(response => {
      return response
    })
    .catch(err => {
      return err
    })
}
