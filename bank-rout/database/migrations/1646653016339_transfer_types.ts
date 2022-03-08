import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TransferTypes extends BaseSchema {
  protected tableName = 'transfer_types'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('typeName')
      table.string('typename')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
