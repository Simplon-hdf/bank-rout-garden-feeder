import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TransferType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public typename: string

}
