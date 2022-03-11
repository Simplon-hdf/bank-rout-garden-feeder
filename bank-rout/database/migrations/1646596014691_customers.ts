import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Customers extends BaseSchema {
  protected tableName = 'customers'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('genders_id')
            .unsigned()
            .references('genders.id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
