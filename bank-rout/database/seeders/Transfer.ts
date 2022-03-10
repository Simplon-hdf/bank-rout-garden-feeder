import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Transfer from 'App/Models/Transfer'
import { DateTime } from 'luxon'

export default class TransferSeeder extends BaseSeeder {
  public async run () {
    await Transfer.createMany([
      {
        numbertransfer: 'transfer' + "transfer.id" + Math.random().toString(36),
        amount: 1500,
        status: false,
        transfertype_id: 1,
        createdAt:DateTime.now(),
        validatedAt: DateTime.now(),
        account_id:1
      },
      {
        numbertransfer: 'transfer' + "transfer.id" + Math.random().toString(36),
        amount: 100,
        status: true,
        transfertype_id: 2,
        createdAt:DateTime.now(),
        validatedAt: DateTime.now(),
        account_id:1
      },
      {
        numbertransfer: 'transfer' + "transfer.id" + Math.random().toString(36),
        amount: 510,
        status: false,
        transfertype_id: 3,
        createdAt:DateTime.now(),
        validatedAt: DateTime.now(),
        account_id:1
      },
      {
        numbertransfer: 'transfer' + "transfer.id" + Math.random().toString(36),
        amount: 10000,
        status: false,
        transfertype_id: 4,
        createdAt:DateTime.now(),
        validatedAt: DateTime.now(),
        account_id:1
      },
      {
        numbertransfer: 'transfer' + "transfer.id" + Math.random().toString(36),
        amount: 1000,
        status: true,
        transfertype_id: 5,
        createdAt:DateTime.now(),
        validatedAt: DateTime.now(),
        account_id:2
      },
      {
        numbertransfer: 'transfer' + "transfer.id" + Math.random().toString(36),
        amount: 85,
        status: false,
        transfertype_id: 1,
        createdAt:DateTime.now(),
        validatedAt: DateTime.now(),
        account_id:8
      },
      {
        numbertransfer: 'transfer' + "transfer.id" + Math.random().toString(36),
        amount: 900,
        status: false,
        transfertype_id: 2,
        createdAt:DateTime.now(),
        validatedAt: DateTime.now(),
        account_id:2
      },
      {
        numbertransfer: 'transfer' + "transfer.id" + Math.random().toString(36),
        amount: 501,
        status: true,
        transfertype_id: 3,
        createdAt:DateTime.now(),
        validatedAt: DateTime.now(),
        account_id:8
      },
      {
        numbertransfer: 'transfer' + "transfer.id" + Math.random().toString(36),
        amount: 58,
        status: false,
        transfertype_id: 4,
        createdAt:DateTime.now(),
        validatedAt: DateTime.now(),
        account_id:8
      },
      {
        numbertransfer: 'transfer' + "transfer.id" + Math.random().toString(36),
        amount: 90,
        status: false,
        transfertype_id: 5,
        createdAt:DateTime.now(),
        validatedAt: DateTime.now(),
        account_id:8
      },
      {
        numbertransfer: 'transfer' + "transfer.id" + Math.random().toString(36),
        amount: 150,
        status: true,
        transfertype_id: 1,
        createdAt:DateTime.now(),
        validatedAt: DateTime.now(),
        account_id:3
      },
      {
        numbertransfer: 'transfer' + "transfer.id" + Math.random().toString(36),
        amount: 300,
        status: false,
        transfertype_id: 2,
        createdAt:DateTime.now(),
        validatedAt: DateTime.now(),
        account_id:10
      },
      {
        numbertransfer: 'transfer' + "transfer.id" + Math.random().toString(36),
        amount: 550,
        status: false,
        transfertype_id: 3,
        createdAt:DateTime.now(),
        validatedAt: DateTime.now(),
        account_id:10
      },
      {
        numbertransfer: 'transfer' + "transfer.id" + Math.random().toString(36),
        amount: 50,
        status: true,
        transfertype_id: 4,
        createdAt:DateTime.now(),
        validatedAt: DateTime.now(),
        account_id:10
      },
      {
        numbertransfer: 'transfer' + "transfer.id" + Math.random().toString(36),
        amount: 10000,
        status: false,
        transfertype_id: 5,
        createdAt:DateTime.now(),
        validatedAt: DateTime.now(),
        account_id:10
      },
    ])
  }
}
