import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BankrootInteface from 'App/services/BankRootInterface'
import BankRootService from 'App/services/ServiceProvider/BankRoot'

export default class BankRootsController {
    private bankRootService:BankrootInteface=new BankRootService()
    

    getAllCustomer= async(ctx:HttpContextContract)=>{
        let customer =await this.bankRootService.getAllCustomer()
                               
        return ctx.response.json(customer)
        
    }
}
