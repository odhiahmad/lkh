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
    const {first_name, last_name, email, password,role,jabatan,gelar} = request.only([
      'first_name',
      'last_name',
      'email',
      'password',
      'role',
      'gelar',
      'jabatan'
    ])

    const user = await User.create({
      first_name,
      last_name,
      email,
      password,
      role,
      jabatan,
      gelar
    })
    return response.send({
      data:{
        message: 'User Berhasil di Inputkan!',
        data:user
      }

    })
  }

  async editUser({request, response}) {
    const id = request.input('id');;
    const user = await User.find(id);
    user.jabatan = request.input('jabatan');
    user.gelar = request.input('gelar');
    user.first_name = request.input('first_name');
    user.last_name = request.input('last_name');
    user.role = request.input('role');


    await user.save();

    return response.send({
      data:{
        message: 'Data '+request.input('first_name')+ ' Berhasil di Update!',
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
      role: user.role,
    }
    return response.json(res)
  }

  async showAll({request, response}) {
    try {
      if(request.input('cari') !== null){
        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        const user = await User.query()
          .from('users')
          .where('first_name', 'like', `%${request.input('cari')}%`)
          .orWhere('last_name', 'like', `%${request.input('cari')}%`)
          .orWhere('role', 'like', `%${request.input('cari')}%`)
          .orWhere('email', 'like', `%${request.input('cari')}%`)
          .paginate(1,50)
        return response.json(user)
      }else{
        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        const user = await User.query()
          .from('users')
          .paginate(request.input('page'),request.input('limit'))
        return response.json(user)
      }


    } catch (error) {
      throw error
    }
  }

  async getUser({response}) {
    try {

        const user = await User.query()
          .from('users')
          .paginate(1,50)
        return response.json(user)


    } catch (error) {
      throw error
    }
  }

  async getAllUser({response}) {
    try {

      const user = await User.query()
        .from('users')
        .fetch()
      return response.json(user)


    } catch (error) {
      throw error
    }
  }

  async showAllLkh({request, response}) {
    try {
      if(request.input('cari') !== null){
        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        const user = await User.query()
          .from('users')
          .where('role', 'user')
          .where('first_name', 'like', `%${request.input('cari')}%`)
          .orWhere('last_name', 'like', `%${request.input('cari')}%`)
          .orWhere('role', 'like', `%${request.input('cari')}%`)
          .orWhere('email', 'like', `%${request.input('cari')}%`)
          .paginate(1,50)
        return response.json(user)
      }else{
        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        const user = await User.query()
          .from('users')
          .where('role', 'user').whereRaw('(EXTRACT(MONTH FROM users.created_at)) = ?)', [1])
          .fetch()
          .paginate(request.input('page'),request.input('limit'))
        return response.json(user)
      }


    } catch (error) {
      throw error
    }
  }



  async hapusUser({request, response}){
    const id = request.input('id');
    const user = await User.find(id);
    await user.delete();

    return response.send({
      data:{
        message: 'Data '+request.input('first_name')+ ' Berhasil di Hapus!',
      }

    })
  }
}

module.exports = UserController
