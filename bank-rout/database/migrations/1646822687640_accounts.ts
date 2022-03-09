import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Accounts extends BaseSchema {
  protected tableName = 'accounts'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('accountNb')
      table.string('account_nb')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
