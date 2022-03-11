import AccountDto from "./accountDto"


export default class CustomerDto {
    id:number
    firstname:string
    lastname:string
    email:string
    password:string
    nbcustomer:string
    telnumber:string
    created_at:string
    updated_at:string
    genders_id:number
    accounts:AccountDto[]
}
