'use strict'

const User = use('App/Models/User')

class UserController {
  async login({request, response, auth}) {
    const {email, password} = request.only(['email', 'password'])

    const token = await auth.attempt(email, password)
    return response.json(token)
  }

  async register({request, response}) {
    const {first_name, last_name, email, password} = request.only([
      'first_name',
      'last_name',
      'email',
      'password'
    ])

    await User.create({
      first_name,
      last_name,
      email,
      password
    })
    return response.send({message: 'User has been created'})
  }

  async tambahUser({request, response}) {
    const {first_name, last_name, email, password,role} = request.only([
      'first_name',
      'last_name',
      'email',
      'password',
      'role'
    ])

    const user = await User.create({
      first_name,
      last_name,
      email,
      password,
      role
    })
    return response.send({
      data:{
        message: 'User Berhasil di Inputkan!',
        data:user
      }

    })
  }

  async show({params, response}) {
    const user = await User.find(params.id)
    const res = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      role: user.role
    }
    return response.json(res)
  }

  async showAll({request, response}) {
    try {
      let pagination = request.only(['page', 'limit'])
      const page = parseInt(pagination.page, 10) || 1;
      const limit = parseInt(pagination.limit, 10) || 10;
      const user = await User.query()
        .from('users')
        .paginate(page, limit)
      return response.json(user)

    } catch (error) {
      throw error
    }
  }
}

module.exports = UserController
