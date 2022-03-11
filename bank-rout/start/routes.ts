/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'BankRootsController.getAllCustomer')
Route.post('/customers','BankRootsController.getCustomerByNbCustomer')
Route.get('/customers/:id','BankRootsController.getOneCustomer')
Route.get('/customers/:id/transfer','BankRootsController.getCustomerTransfer')
Route.get('/customers-form', 'BankRootsController.createCustomerForm')
Route.post('/form-create','BankRootsController.createCustomer')
Route.get('/accounts/:id/transfers','BankRootsController.gettransfersByAccountsId')