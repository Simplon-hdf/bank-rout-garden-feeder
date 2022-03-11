import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Admin from 'App/Models/Admin'
import { DateTime } from 'luxon'

export default class AdminSeeder extends BaseSeeder {
  public async run () {
  
    await Admin.createMany ([
      {
        firstname: 'Pierre',
        lastname: 'Pistoleto',
        email: 'lepistolet@gmail.com',
        password: 'titatitutu',
        nbemployee: 'gqeg022f32f0',
        protelNb: '078645377',
        createdAt:DateTime.now(),
        updatedAt: DateTime.now() 
      },
      {
        firstname: 'Marie',
        lastname: 'Paquito',
        email: 'lebiscuite@gmail.com',
        password: 'denverledernierdino',
        nbemployee: 'foi23fioj4o3',
        protelNb: '0645378219',
        createdAt:DateTime.now(),
        updatedAt: DateTime.now() 
      },
    ])
  }
}
