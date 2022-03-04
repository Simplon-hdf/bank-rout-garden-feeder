import { beforeCreate, column } from '@ioc:Adonis/Lucid/Orm';
import User from './User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class Admin extends User {

  @column()
  public nbemployee:string

  @column()
  public protelNb:string

  @beforeCreate()
  public static async createCustomNbCustomer(admin:Admin){
    admin.nbemployee='FR'+admin.id + Math.random().toString(36);
    admin.password= await Hash.make(admin.password)
  }
  
}
