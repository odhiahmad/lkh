'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SuratTugas extends Model {
  static get table() {
    return 'surat_tugas'
  }

  static get primaryKey() {
    return 'id'
  }
}

module.exports = SuratTugas
