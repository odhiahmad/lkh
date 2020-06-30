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
  Route.post('userShowAll', 'UserController.showAll')
  Route.get('getUser', 'UserController.getUser')
Route.post('lkhShowAllByUser', 'LkhController.showAllByUser')
  Route.post('lkhShowAllById', 'LkhController.showAllLkhById')
}).prefix('list')

Route.group(() => {
  Route.post('tambahUser', 'UserController.tambahUser')
  Route.post('tambahLkh', 'LkhController.tambahLkh')
}).prefix('tambah').middleware(['auth:jwt'])

Route.group(() => {
  Route.post('editUser', 'UserController.editUser')
  Route.post('editLkh', 'LkhController.editLkh')
}).prefix('edit').middleware(['auth:jwt'])

Route.group(() => {
  Route.post('hapusUser', 'UserController.hapusUser')
  Route.post('hapusLkh', 'LkhController.hapusLkh')
}).prefix('hapus').middleware(['auth:jwt'])

Route.group(() => {
  Route.post('verifikasiLkh', 'LkhController.verifikasiLkh')
}).prefix('verifikasi').middleware(['auth:jwt'])
