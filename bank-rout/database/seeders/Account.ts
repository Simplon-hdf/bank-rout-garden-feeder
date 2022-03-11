import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Account from 'App/Models/Account'
import { DateTime } from 'luxon'

export default class AccountSeeder extends BaseSeeder {
  public async run() {

    await Account.createMany([
      {
        account_nb: 'account' + "account.id" + Math.random().toString(36),
        balance: 6000,
        overdraf: 300,
        customer_id: 1,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        account_nb: 'account' + "account.id" + Math.random().toString(36),
        balance: -300,
        overdraf: 300,
        customer_id: 1,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        account_nb: 'account' + "account.id" + Math.random().toString(36),
        balance: 1000,
        overdraf: 900,
        customer_id: 1,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        account_nb: 'account' + "account.id" + Math.random().toString(36),
        balance: 1000,
        overdraf: 300,
        customer_id: 1,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        account_nb: 'account' + "account.id" + Math.random().toString(36),
        balance: 2,
        overdraf: 0,
        customer_id: 2,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        account_nb: 'account' + "account.id" + Math.random().toString(36),
        balance: 542,
        overdraf: 150,
        customer_id: 10,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        account_nb: 'account' + "account.id" + Math.random().toString(36),
        balance: 56,
        overdraf: 50,
        customer_id: 10,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        account_nb: 'account' + "account.id" + Math.random().toString(36),
        balance: 1000000,
        overdraf: 10000,
        customer_id: 10,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        account_nb: 'account' + "account.id" + Math.random().toString(36),
        balance: 3678,
        overdraf: 300,
        customer_id: 3,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        account_nb: 'account' + "account.id" + Math.random().toString(36),
        balance: 503,
        overdraf: 0,
        customer_id: 3,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now()
      }
    ])
  }
}
