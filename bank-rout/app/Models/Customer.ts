import Hash from '@ioc:Adonis/Core/Hash'
import { beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Customer extends User {
  
  @column()
  public nbCusomer:string

  @column()
  public telNumber:string

  @beforeCreate()
  public static async createCustomNbCustomer(customer:Customer){
    customer.nbCusomer='FR'+customer.id + Math.random().toString(36);
    customer.password= await Hash.make(customer.password)
  }
}
