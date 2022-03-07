import BankrootInteface from "../BankRootInterface";
import Customer from "App/Models/Customer";


export default class BankRootService implements BankrootInteface {

    getAllCustomer=async()=>
    {
        return await Customer.all()
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