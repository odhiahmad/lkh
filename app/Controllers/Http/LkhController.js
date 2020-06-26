'use strict'

const Lkh = use('App/Models/Lkh')
const User = use('App/Models/User')

class LkhController {
  async tambahLkh({request, response}) {
    const {id_user, tanggal_pekerjaan, jam_pekerjaan, detail_pekerjaan} = request.only([
      'id_user',
      'tanggal_pekerjaan',
      'jam_pekerjaan',
      'detail_pekerjaan'
    ])

    const status = 0;

    const lkh = await Lkh.create({
      id_user,
      tanggal_pekerjaan,
      jam_pekerjaan,
      detail_pekerjaan,
      status
    })

    return response.send({
      data: {
        tanggal: tanggal_pekerjaan,
        message: 'LKH Berhasil di Inputkan!',
        data: lkh
      }

    })
  }

  async editLkh({request, response}) {
    const id = request.input('id');
    const lkh = await Lkh.find(id);
    lkh.tanggal_pekerjaan = request.input('tanggal_pekerjaan');
    lkh.jam_pekerjaan = request.input('jam_pekerjaan');
    lkh.detail_pekerjaan = request.input('detail_pekerjaan');

    await lkh.save();

    return response.send({
      data: {
        message: 'Data LKH Berhasil di Update!',
        data: lkh
      }

    })
  }


  async showAllByUser({request, response}) {
    try {
      if (request.input('cari') !== null) {
        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        const lkh = await Lkh.query()
          .from('lkh')
          .where('id_user', request.input('id_user'))
          .where('first_name', 'like', `%${request.input('cari')}%`)
          .orWhere('last_name', 'like', `%${request.input('cari')}%`)
          .orWhere('role', 'like', `%${request.input('cari')}%`)
          .orWhere('email', 'like', `%${request.input('cari')}%`)
          .paginate(1, 50)
        return response.json(lkh)
      } else {
        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        const lkh = await Lkh.query()
          .from('lkh').where('id_user', request.input('id_user'))
          .paginate(request.input('page'), request.input('limit'))
        return response.json(lkh)
      }

    } catch (error) {
      throw error
    }
  }

  async showAllLkhByUser({request, response}) {

    try {
      if (request.input('cari') !== null) {
        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        let user = await Lkh
          .query().innerJoin('users', 'lkh.id_user', 'users.id')
          .where('status', 0)
          .where('users.first_name', 'like', `%${request.input('cari')}%`)
          .orWhere('users.last_name', 'like', `%${request.input('cari')}%`)
          .orWhere('users.role', 'like', `%${request.input('cari')}%`)
          .orWhere('users.email', 'like', `%${request.input('cari')}%`)
          .groupBy('id_user')
          .groupByRaw('month(tanggal_pekerjaan)')
          .paginate(1, 50)
        return response.json(user)
      } else {

        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        let user = await Lkh
          .query().innerJoin('users', 'lkh.id_user', 'users.id')
          .where('status', 0)
          .groupBy('id_user')
          .groupByRaw('month(tanggal_pekerjaan)')
          .paginate(page, limit)
        return response.json(user)

      }
    } catch (error) {
      throw error
    }
  }

  async showAllLkhByUserSpesifik({request, response}) {

    try {
      if (request.input('cari') !== null) {
        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        let user = await Lkh
          .query().innerJoin('users', 'lkh.id_user', 'users.id')
          .where('status', 0)
          .where('users.first_name', 'like', `%${request.input('cari')}%`)
          .orWhere('users.last_name', 'like', `%${request.input('cari')}%`)
          .orWhere('users.role', 'like', `%${request.input('cari')}%`)
          .orWhere('users.email', 'like', `%${request.input('cari')}%`)
          .groupBy('id_user')
          .paginate(1, 50)
        return response.json(user)
      } else {

        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        let user = await Lkh
          .query().innerJoin('users', 'lkh.id_user', 'users.id')
          .where('status', 0)
          .groupBy('id_user')
          .paginate(page, limit)
        return response.json(user)

      }
    } catch (error) {
      throw error
    }
  }

  async showAllLkhById({request, response}) {

    try {
      if (request.input('cari') !== null) {
        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;


        let lkh = await Lkh
          .query().innerJoin('users', 'lkh.id_user', 'users.id')
          .where('id_user', request.input('id_user'))
          .where('users.first_name', 'like', `%${request.input('cari')}%`)
          .orWhere('users.last_name', 'like', `%${request.input('cari')}%`)
          .orWhere('users.role', 'like', `%${request.input('cari')}%`)
          .orWhere('users.email', 'like', `%${request.input('cari')}%`)
          .groupBy('id_user')
          .groupByRaw('month(tanggal_pekerjaan)')
          .paginate(1, 50)
        return response.json({
          dataLkh: lkh,
          dataProfil: []
        })
      } else {

        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        let user = await User.query().where('id', request.input('id_user')).first()
        let lkh = await Lkh
          .query().innerJoin('users', 'lkh.id_user', 'users.id')
          .where('id_user', request.input('id_user'))
          .groupBy('id_user')
          .groupByRaw('month(tanggal_pekerjaan)')
          .paginate(page, limit)
        return response.json({
          dataLkh: lkh,
          dataProfil: user
        })

      }
    } catch (error) {
      throw error
    }
  }

  async showAllLkhByIdPerBulan({request, response}) {
    try {
      const tanggal_pekerjaan = request.input('tanggal_pekerjaan');
      const getYear = tanggal_pekerjaan.substring(0, 7)

      let lkh = await Lkh
        .query()
        .where('id_user', request.input('id_user'))
        .whereRaw("DATE_FORMAT(tanggal_pekerjaan,'%Y-%m')= ?", getYear)
        .fetch()
      return response.json({
        data:lkh
      })
    } catch (error) {
      throw error
    }
  }

  async verifikasiLkh({request, response}) {

    const tanggal_pekerjaan = request.input('tanggal_pekerjaan');
    const getYear = tanggal_pekerjaan.substring(0, 7)

    // const getFull = getYear+'-'+getBulan

    const id_user = request.input('id')
    const lkh = await Lkh.query().where('id_user', id_user).whereRaw("DATE_FORMAT(tanggal_pekerjaan,'%Y-%m')= ?", getYear).update({status: 1})

    return response.send({
      data: {
        message: 'Berhasil verifikasi',
        tes: getYear
      }
    })
  }

  async hapusLkh({request, response}) {
    const lkh = await Lkh.whereRaw('');
    lkh.tanggal_pekerjaan = request.input('tanggal_pekerjaan');
    lkh.jam_pekerjaan = request.input('jam_pekerjaan');
    lkh.detail_pekerjaan = request.input('detail_pekerjaan');

    await lkh.save();

    return response.send({
      data: {
        message: 'Data LKH Berhasil di Update!',
        data: lkh
      }

    })
  }
}

module.exports = LkhController
