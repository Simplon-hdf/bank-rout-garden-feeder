import { DateTime, NumberUnitLength } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import TransferType from './TransferType'

export default class Transfer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public numbertransfer:string

  @column()
  public amount:number
  
  @column()
  public status:boolean

  @column()
  public transfertype_id:Number

  @hasMany(()=>TransferType)
  public typeTransfers:HasMany<typeof TransferType>

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public validatedAt: DateTime
}
