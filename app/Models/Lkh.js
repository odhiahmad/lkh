'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Lkh extends Model {
  static get table() {
    return 'lkh'
  }

  static get primaryKey() {
    return 'id'
  }
}

module.exports = Lkh
