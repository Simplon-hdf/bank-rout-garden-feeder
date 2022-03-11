import TransferDto from 'App/Models/DTO/transfertDto';
import Customer from "App/Models/Customer";
import createCustomerDto from "App/Models/DTO/createCustomerDto";
import CustomerDto from "App/Models/DTO/customerDto";
import Gender from "App/Models/Gender";
import PaginationInterface from "./paginationInterface";


export default interface BankrootInteface {
    getAllCustomer(id:number):Promise<PaginationInterface>

    getOneCustomerById(id:number):Promise<CustomerDto|null>

    getOneCustomerByNbCustomer(nbCustomer:string):Promise<Customer|null>

    getAllGender():Promise<Gender[]|null>

    createCustomer(newCustomer:createCustomerDto):Promise<Customer>

    deleteCustomer(id:number)

    gettransfersByAccountsId(id:number):Promise<TransferDto[] | null>

    // getCustomerTransfer(id:number):Promise<>
}