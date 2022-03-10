import Hash from '@ioc:Adonis/Core/Hash'
import { beforeCreate, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'

import Account from './Account'
import User from './User'

export default class Customer extends User implements Partial<{}>{
  
  @column()
  public nbcustomer:string

  @column()
  public telnumber:string

  @hasMany(()=> Account)
  public accounts: HasMany<typeof Account>

  @column()
  public genders_id:number
  

  @beforeCreate()
  public static async createCustomNbCustomer(customer:Customer){
    customer.nbcustomer='Custom'+customer.id + Math.random().toString(36);
    customer.password= await Hash.make(customer.password)
  }
}
