import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'

export default class Account extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public account_nb:string

  @column()
  public balance:number

  @column()
  public overdraf:number

  @column()
  public customer_id: number
  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static accountNb(account: Account){
    account.account_nb='FR'+account.id + Math.random().toString(36)
  }
}
