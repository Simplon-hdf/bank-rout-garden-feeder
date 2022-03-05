import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BankrootInteface from 'App/services/BankRootInterface'
import BankRootService from 'App/services/ServiceProvider/BankRoot'

export default class BankRootsController {
    private bankRootService: BankrootInteface = new BankRootService()


    getAllCustomer = async ({ request, view }: HttpContextContract) => {
        let page = Number(request.input('page', 1))
        let customerForPaginate = await this.bankRootService.getAllCustomer(page)
        return view.render('welcome', {
            arrayCustomer: customerForPaginate.customerArray,
            page: customerForPaginate.page,
            nbCustomer: customerForPaginate.nbCunstomer
        })
    }
}
