import { beforeCreate, column } from '@ioc:Adonis/Lucid/Orm';
import User from './User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class Admin extends User {

  @column()
  public nbEmployee:string

  @column()
  public proTelNb:string

  @beforeCreate()
  public static async createCustomNbCustomer(admin:Admin){
    admin.nbEmployee='FR'+admin.id + Math.random().toString(36);
    admin.password= await Hash.make(admin.password)
  }
  
}
