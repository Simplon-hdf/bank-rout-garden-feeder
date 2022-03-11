import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Admins extends BaseSchema {
  protected tableName = 'admins'

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
