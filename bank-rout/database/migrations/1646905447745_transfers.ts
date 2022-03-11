import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Transfers extends BaseSchema {
  protected tableName = 'transfers'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('numberTransfer')
      table.dropColumn('transferTypes_id')
      table.string('numbertransfer')
      table.integer('transfertype_id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
