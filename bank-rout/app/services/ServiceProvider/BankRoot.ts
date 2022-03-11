import BankrootInteface from "../BankRootInterface";
import Customer from "App/Models/Customer";
import Database from "@ioc:Adonis/Lucid/Database";
import PaginationInterface from "../paginationInterface";
import Gender from "App/Models/Gender";
import createCustomerDto from "App/Models/DTO/createCustomerDto";
import CustomerDto from "App/Models/DTO/customerDto";
import Account from "App/Models/Account";
import AccountDto from "App/Models/DTO/accountDto";
import Transfer from "App/Models/Transfer";
import TransferDto from "App/Models/DTO/transfertDto";


export default class BankRootService implements BankrootInteface {

    getAllCustomer = async (page: number): Promise<PaginationInterface> => {
        const limit = 6
        let nbCunstomer = (await Customer.all()).length
        let customerArrayByPage = await Database.from(Customer.table).orderBy("id","desc").paginate(page, limit)

        let pagitionObject: PaginationInterface = {
            customerArray: customerArrayByPage,
            nbCunstomer: nbCunstomer,
            page: page,
            nbByPage: limit
        }

        return pagitionObject
    }

    getOneCustomerById = async (id: number): Promise<CustomerDto | null> => {
        let result = await (Database.rawQuery('select * from customers where id = ?',[id]))
        let customerDto=result.rows[0] as CustomerDto
        let resultAccount = await Database.rawQuery('select * from accounts where customer_id=?',[customerDto.id])
        customerDto.accounts = resultAccount.rows as AccountDto[]
        
        // customerDto.accounts.map(async(account)=>{
          
        //     let result=await Database.rawQuery('select * from transfers where account_id=?',[account.id])
            
        //     account.transfer=result.rows as TransferDto[]
           
        // })
        
        // customerDto.accounts=arrayTransferDto
        
        
        return customerDto
    }

    getOneCustomerByNbCustomer = async (nbCustomer: string): Promise<Customer | null> => {
        return await Customer.findBy('nbcustomer', nbCustomer)
    }

    getAllGender = async () => {
        return await Database.from(Gender.table).select('*')
    }

    createCustomer = async (newCustomer: createCustomerDto) => {
      
       
        return await Customer.create({
            genders_id: newCustomer.genders,
            firstname: newCustomer.firstname,
            lastname: newCustomer.lastname,
            email: newCustomer.email,
            password: newCustomer.password,
            telnumber: newCustomer.telnumber
        })
    }

    // getCustomerTransfer = async (id: number): Promise
    
    deleteCustomer = async (id: number) => {
        const customer = await Customer.findOrFail(id)
        return await customer.delete()
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