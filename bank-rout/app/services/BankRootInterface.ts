import Customer from "App/Models/Customer";
import createCustomerDto from "App/Models/DTO/createCustomerDto";
import Gender from "App/Models/Gender";
import PaginationInterface from "./paginationInterface";


export default interface BankrootInteface {
    getAllCustomer(id:number):Promise<PaginationInterface>

    getOneCustomerById(id:number):Promise<Customer|null>

    getOneCustomerByNbCustomer(nbCustomer:string):Promise<Customer|null>

    getAllGender():Promise<Gender[]|null>

    createCustomer(newCustomer:createCustomerDto):Promise<Customer>

    deleteCustomer(id:number)

    // getCustomerTransfer(id:number):Promise<>
}