import Customer from "App/Models/Customer";

export default interface PaginationInterface{
    customerArray:Customer[]
    nbCunstomer:number
    page:number
    nbByPage:number
}