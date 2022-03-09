import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Gender from 'App/Models/Gender'

export default class GenderSeeder extends BaseSeeder {
  public async run () {
    Gender.createMany([
      {typename:"fale"},
      {typename:"Female"},
      {typename:"no gender"},
      {typename:"transgender"}
    ])
  }
}
