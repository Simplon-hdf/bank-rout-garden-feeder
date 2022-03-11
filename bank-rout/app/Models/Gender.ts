import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Customer from './Customer'

export default class Gender extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public typename:string

  @hasMany(()=>Customer)
  public use:HasMany<typeof Customer>
}
