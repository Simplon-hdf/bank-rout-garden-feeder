import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Admins extends BaseSchema {
  protected tableName = 'admins'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('firstName')
      table.dropColumn('lastName')
      table.string('firstname')
      table.string('lastname')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
