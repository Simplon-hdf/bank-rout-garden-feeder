import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TransferType from 'App/Models/TransferType'

export default class TrasferTypeSeeder extends BaseSeeder {
  public async run () {
    TransferType.createMany([
      {typename:"Deposit"},
      {typename:"Bank transfert"},
      {typename:"Direct debit"},
      {typename:"Salary"},
      {typename:"Bank withdrawal"}
    ])
  }
}
