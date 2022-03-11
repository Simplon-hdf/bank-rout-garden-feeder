import TransferDto from "./transfertDto"


export default class AccountDto{
    id:number
    balance:number
    overdraft:number
    customer_id:number
    created_at:string
    updated_at:string
    account_nb:string
    transfer:TransferDto[]
}