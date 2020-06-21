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
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(res => {
      localStorage.setItem('usertoken', res.data.token)

      const decoded = jwt_decode(res.data.token)
      getUser(decoded.uid).then(res => {
        localStorage.setItem('role', res.data.role)
        console.log(res.data)
      })
      //console.log(res)
      return res.data
    })
    .catch(err => {
      console.log('Invalid username and password, ' + err)
    })
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
