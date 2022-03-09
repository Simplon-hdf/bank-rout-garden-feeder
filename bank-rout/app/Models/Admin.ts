import { beforeCreate, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';
import User from './User'
import Hash from '@ioc:Adonis/Core/Hash'
import Gender from './Gender';

export default class Admin extends User {

  @column()
  public nbemployee:string

  @column()
  public protelNb:string

  @hasMany(()=>Gender)
  public gender:HasMany<typeof Gender>

  @beforeCreate()
  public static async createCustomNbCustomer(admin:Admin){
    admin.nbemployee='FR'+admin.id + Math.random().toString(36);
    admin.password= await Hash.make(admin.password)
  }
  
}
