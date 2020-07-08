'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {import('@adonisjs/framework/src/Route/Manager'} */
const Route = use('Route')

Route.group(() => {
  Route.post('login', 'UserController.login')
  Route.post('register', 'UserController.register')
  Route.get('getuser/:id', 'UserController.show')
}).prefix('users')

Route.group(() => {
  Route.post('lkhShowAllByIdPerBulan', 'LkhController.showAllLkhByIdPerBulan')
  Route.post('lkhShowAllLkhByUserSpesifik', 'LkhController.showAllLkhByUserSpesifik')
  Route.post('lkhShowAllLkhByUser', 'LkhController.showAllLkhByUser')
  Route.post('userShowAllLkh', 'UserController.showAllLkh')

  Route.post('suratTugasShowAllByIdPerBulan', 'SuratTugasController.showAllSuratTugasByIdPerBulan')
  Route.post('suratTugasShowAllLkhByUserSpesifik', 'SuratTugasController.showAllSuratTugasByUserSpesifik')
  Route.post('suratTugasShowAllByUser', 'SuratTugasController.showAllByUser')
  Route.post('userShowAllSuratTugas', 'UserController.showAllSuratTugas')

  Route.get('getAllUser', 'UserController.getAllUser')
  Route.post('userShowAll', 'UserController.showAll')
  Route.get('getUser', 'UserController.getUser')
Route.post('lkhShowAllByUser', 'LkhController.showAllByUser')
  Route.post('lkhShowAllById', 'LkhController.showAllLkhById')
}).prefix('list')

Route.group(() => {
  Route.post('tambahUser', 'UserController.tambahUser')
  Route.post('tambahLkh', 'LkhController.tambahLkh')
  Route.post('tambahSuratTugas', 'SuratTugasController.tambahSuratTugas')
}).prefix('tambah').middleware(['auth:jwt'])

Route.group(() => {
  Route.post('editUser', 'UserController.editUser')
  Route.post('editLkh', 'LkhController.editLkh')
  Route.post('editSuratTugas', 'SuratTugasController.editSuratTugas')
}).prefix('edit').middleware(['auth:jwt'])

Route.group(() => {
  Route.post('hapusUser', 'UserController.hapusUser')
  Route.post('hapusLkh', 'LkhController.hapusLkh')
  Route.post('hapusSuratTugas', 'SuratTugasController.hapusSuratTugas')
}).prefix('hapus').middleware(['auth:jwt'])

Route.group(() => {
  Route.post('verifikasiLkh', 'LkhController.verifikasiLkh')
  Route.post('verifikasiSuratTugas', 'LkhController.verifikasiSuratTugas')
}).prefix('verifikasi').middleware(['auth:jwt'])
