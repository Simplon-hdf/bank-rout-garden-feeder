import PaginationInterface from "./paginationInterface";


export default interface BankrootInteface {
    getAllCustomer(id:number):Promise<PaginationInterface>
}