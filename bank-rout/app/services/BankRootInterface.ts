import Customer from "App/Models/Customer";
import PaginationInterface from "./paginationInterface";


export default interface BankrootInteface {
    getAllCustomer(id:number):Promise<PaginationInterface>

    getOneCustomerById(id:number):Promise<Customer|null>

    getOneCustomerByNbCustomer(nbCustomer:string):Promise<Customer|null>
}