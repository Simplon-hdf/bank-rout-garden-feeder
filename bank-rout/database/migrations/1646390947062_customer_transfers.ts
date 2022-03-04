import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CustomerTransfers extends BaseSchema {
  protected tableName = 'customers_transfers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('customer_id').unsigned().references('customers.id')
      table.integer('transfer_id').unsigned().references('transfers.id')
      table.unique(['customer_id','transfer_id'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
