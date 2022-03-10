import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Transfers extends BaseSchema {
  protected tableName = 'transfers'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
     table.integer('account_id')
          .unsigned()
          .references('accounts.id')
          .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
