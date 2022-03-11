import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import createCustomerDto from 'App/Models/DTO/createCustomerDto'
import BankrootInteface from 'App/services/BankRootInterface'
import BankRootService from 'App/services/ServiceProvider/BankRoot'

export default class BankRootsController {

    private bankRootService: BankrootInteface = new BankRootService()


    getAllCustomer = async ({ request, view }: HttpContextContract) => {
        let page = Number(request.input('page', 1))
        let customerForPaginate = await this.bankRootService.getAllCustomer(page)
        return view.render('home', {
            arrayCustomer: customerForPaginate.customerArray,
            page: customerForPaginate.page,
            nbCustomer: customerForPaginate.nbCunstomer,
            nbByPage:customerForPaginate.nbByPage
        })
    }

    getOneCustomer= async ({view,request}:HttpContextContract)=>{
        let customer= await this.bankRootService.getOneCustomerById(Number(request.params().id))
        
        
        return view.render('detailsCustomer',{customer:customer,gender:customer&&customer.genders_id,accounts:customer?.accounts})
    }

    getCustomerByNbCustomer= async ({request,view}:HttpContextContract)=>{
        const postSchema = schema.create({
            numCustomer: schema.string({ trim: true }, [
                rules.minLength(3)
            ]),
        })

        let payload= await request.validate({ schema: postSchema })

        let customer = await this.bankRootService.getOneCustomerByNbCustomer(payload.numCustomer)
        
       
        return view.render('detailsCustomer',
                                            {
                                                customer:customer,
                                                successMessage:"Customer found!",
                                                errorMessage:customer?false:"Customer unknow!",
                                                gender:customer&&(customer['$extras']).genders_id
                                            })
    }

    

    createCustomerForm=async({view}:HttpContextContract)=>{
        let genderArray = await this.bankRootService.getAllGender()
        return view.render('createCustomerForm',{genders:genderArray})
    }

    createCustomer=async({request,response}:HttpContextContract)=>{
        let newCustomer=request.body() as createCustomerDto
        await this.bankRootService.createCustomer(newCustomer)
       
       response.redirect('/')
    }

    deleteCustomer=async({request, response}:HttpContextContract)=>{
        let customerId = request.params().id
        await this.bankRootService.deleteCustomer(customerId)
        response.redirect('/')
    }

    gettransfersByAccountsId=async({request, view}:HttpContextContract)=>{
        let accountId = request.params().id
        let transferDtoArray = await this.bankRootService.gettransfersByAccountsId(accountId)

        return view.render('customerTransfer', {transferDtoArray:transferDtoArray})
    }
}
