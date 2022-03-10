import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Admins extends BaseSchema {
  protected tableName = 'admins'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('proTelNb')
      table.string('protel_nb')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
