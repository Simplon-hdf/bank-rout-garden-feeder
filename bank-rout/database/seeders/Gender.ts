import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Gender from 'App/Models/Gender'

export default class GenderSeeder extends BaseSeeder {
  public async run () {
    Gender.createMany([
      {typename:"Female"},
      {typename:"Male"},
      {typename:"no gender"},
      {typename:"transgender"}
    ])
  }
}
