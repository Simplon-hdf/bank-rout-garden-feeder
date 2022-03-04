import Customer from "App/Models/Customer";


export default interface BankrootInteface {
    getAllCustomer():Promise<Customer[]>
}