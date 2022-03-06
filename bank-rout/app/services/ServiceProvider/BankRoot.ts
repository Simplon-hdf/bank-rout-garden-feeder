import BankrootInteface from "../BankRootInterface";
import Customer from "App/Models/Customer";
import Database from "@ioc:Adonis/Lucid/Database";
import PaginationInterface from "../paginationInterface";


export default class BankRootService implements BankrootInteface {

    getAllCustomer=async(page:number):Promise<PaginationInterface>=>
    {
        const limit=6
        let nbCunstomer = (await Customer.all()).length
       let customerArrayByPage = await Database.from(Customer.table).paginate(page,limit)

       let pagitionObject:PaginationInterface = {
        customerArray:customerArrayByPage,
        nbCunstomer:nbCunstomer,
        page:page,
        nbByPage:limit
       }

       return pagitionObject
    }

    getOneCustomerById=async (id:number):Promise<Customer | null>=>{
        return await Customer.findBy('id',id)
    }

    // creatFakeCustomer=async()=>{
       

    //     for(let i=1;i<=10;i++){
    //         let object =new Customer()
    //             object.firstname=`nom${i}`,
    //             object.lastname= `prenom${i}`,
    //             object.email=`email${i}@mail.com`,
    //             object.password='testMot2pass',
    //             object.telnumber=`5444646464`
            
    //             Customer.create({
    //                 firstname:object.firstname,
    //                 lastname:object.lastname,
    //                 email:object.email,
    //                 password:object.password,
    //                 telnumber:object.telnumber
    //             })
    //     }
        
    // }
}