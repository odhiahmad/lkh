'use strict'

const SuratTugas = use('App/Models/SuratTugas')
const User = use('App/Models/User')

class SuratTugasController {
  async tambahSuratTugas({request, response}) {
    const {id_user, tanggal_tugas, detail_tugas} = request.only([
      'id_user',
      'id_user_penyetuju',
      'tanggal_tugas',
      'detail_tugas',
    ])

    const id_user_penyetuju = 2;
    const status = 0;

    const suratTugas = await SuratTugas.create({
      id_user,
      id_user_penyetuju,
      tanggal_tugas,
      detail_tugas,
      status
    })

    return response.send({
      data: {
        tanggal: tanggal_tugas,
        message: 'LKH Berhasil di Inputkan!',
        data: suratTugas
      }

    })
  }

  async editSuratTugas({request, response}) {
    const id = request.input('id');

    const suratTugas = await SuratTugas.query().where('id_surat_tugas', id).
    update({detail_tugas:request.input('detail_tugas')})

    return response.send({
      data: {
        message: 'Data Surat Tugas Berhasil di Update!',
        data: suratTugas
      }

    })
  }


  async showAllByUser({request, response}) {
    try {
      if (request.input('cari') !== null) {
        const users = await User.query().where('id', request.input('id_user')).fetch()

        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        const suratTugas = await SuratTugas.query()
          .innerJoin('users', 'surat_tugas.id_user_penyetuju', 'users.id')
          .where('id_user', request.input('id_user'))
          .where('first_name', 'like', `%${request.input('cari')}%`)
          .orWhere('last_name', 'like', `%${request.input('cari')}%`)
          .orWhere('role', 'like', `%${request.input('cari')}%`)
          .orWhere('email', 'like', `%${request.input('cari')}%`)
          .paginate(1, 50)
        return response.json({
          dataSuratTugas:suratTugas,
          dataUser:users
        })
      } else {
        const users = await User.query().where('id', request.input('id_user')).fetch()

        let pagination = request.only(['page', 'limit'])

        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        const suratTugas = await SuratTugas.query()
          .innerJoin('users', 'surat_tugas.id_user_penyetuju', 'users.id')
          .where('id_user', request.input('id_user'))
          .paginate(request.input('page'), request.input('limit'))

        return response.json({
          dataSuratTugas:suratTugas,
          dataUser:users
        })
      }

    } catch (error) {
      throw error
    }
  }

  async showAllSuratTugasByUser({request, response}) {

    try {
      if (request.input('cari') !== null) {
        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        let user = await SuratTugas
          .query().innerJoin('users', 'surat_tugas.id_user', 'users.id')
          .where('status', 0)
          .where('users.first_name', 'like', `%${request.input('cari')}%`)
          .orWhere('users.last_name', 'like', `%${request.input('cari')}%`)
          .orWhere('users.role', 'like', `%${request.input('cari')}%`)
          .orWhere('users.email', 'like', `%${request.input('cari')}%`)
          .groupBy('id_user')
          .groupByRaw('month(tanggal_tugas)')
          .paginate(1, 50)
        return response.json(user)
      } else {

        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        let user = await SuratTugas
          .query().innerJoin('users', 'surat_tugas.id_user', 'users.id')
          .where('status', 0)
          .groupBy('id_user')
          .groupByRaw('month(tanggal_tugas)')
          .paginate(page, limit)
        return response.json(user)

      }
    } catch (error) {
      throw error
    }
  }

  async showAllSuratTugasByUserSpesifik({request, response}) {

    try {
      if (request.input('cari') !== null) {
        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        let user = await SuratTugas
          .query().innerJoin('users', 'surat_tugas.id_user', 'users.id')
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
        let user = await SuratTugas
          .query().innerJoin('users', 'surat_tugas.id_user', 'users.id')
          .where('status', 0)
          .groupBy('id_user')
          .paginate(page, limit)
        return response.json(user)

      }
    } catch (error) {
      throw error
    }
  }

  async showAllSuratTugasById({request, response}) {

    try {
      if (request.input('cari') !== null) {
        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;


        let suratTugas = await SuratTugas
          .query().innerJoin('users', 'surat_tugas.id_user', 'users.id')
          .where('id_user', request.input('id_user'))
          .where('users.first_name', 'like', `%${request.input('cari')}%`)
          .orWhere('users.last_name', 'like', `%${request.input('cari')}%`)
          .orWhere('users.role', 'like', `%${request.input('cari')}%`)
          .orWhere('users.email', 'like', `%${request.input('cari')}%`)
          .groupBy('id_user')
          .groupByRaw('month(tanggal_tugas)')
          .paginate(1, 50)
        return response.json({
          dataSuratTugas: suratTugas,
          dataProfil: []
        })
      } else {

        let pagination = request.only(['page', 'limit'])
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        let user = await User.query().where('id', request.input('id_user')).first()
        let suratTugas = await SuratTugas
          .query().innerJoin('users', 'surat_tugas.id_user', 'users.id')
          .where('id_user', request.input('id_user'))
          .groupBy('id_user')
          .groupByRaw('month(tanggal_tugas)')
          .paginate(page, limit)
        return response.json({
          dataSuratTugas: suratTugas,
          dataProfil: user
        })

      }
    } catch (error) {
      throw error
    }
  }

  async showAllSuratTugasByIdPerBulan({request, response}) {
    try {
      const tanggal_pekerjaan = request.input('tanggal_tugas');
      const getYear = tanggal_pekerjaan.substring(0, 7)

      let suratTugas = await SuratTugas
        .query()
        .where('id_user', request.input('id_user'))
        .whereRaw("DATE_FORMAT(tanggal_tugas,'%Y-%m')= ?", getYear)
        .fetch()
      return response.json({
        data: suratTugas
      })
    } catch (error) {
      throw error
    }
  }

  async verifikasiSuratTugas({request, response}) {

    const tanggal_pekerjaan = request.input('tanggal_tugas');
    const getYear = tanggal_pekerjaan.substring(0, 7)

    // const getFull = getYear+'-'+getBulan

    const id_user = request.input('id')
    const suratTugas = await SuratTugas.query().where('id_user', id_user).whereRaw("DATE_FORMAT(tanggal_tugas,'%Y-%m')= ?", getYear).update({status: 1})

    return response.send({
      data: {
        message: 'Berhasil verifikasi',
        tes: getYear
      }
    })
  }

  async hapusSuratTugas({request, response}) {
    const suratTugas = await SuratTugas.whereRaw('');
    suratTugas.tanggal_pekerjaan = request.input('tanggal_tugas');
    suratTugas.jam_pekerjaan = request.input('jam_pekerjaan');
    suratTugas.detail_pekerjaan = request.input('detail_pekerjaan');

    await suratTugas.save();

    return response.send({
      data: {
        message: 'Data LKH Berhasil di Update!',
        data: suratTugas
      }

    })
  }
}

module.exports = SuratTugasController
