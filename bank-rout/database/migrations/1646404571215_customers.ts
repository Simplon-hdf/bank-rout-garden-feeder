import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Customers extends BaseSchema {
  protected tableName = 'customers'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
     table.dropColumn('firstName')
     table.dropColumn('lastName')
     table.dropColumn('telNumber')
     table.dropColumn('nbCusomer')
     table.string('firstname')
     table.string('lastname')
     table.string('telnumber')
     table.string('nbcustomer')

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
