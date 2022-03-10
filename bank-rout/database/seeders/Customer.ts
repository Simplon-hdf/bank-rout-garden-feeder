import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Customer from 'App/Models/Customer'
import { DateTime } from 'luxon'

export default class CustomerSeeder extends BaseSeeder {
  public async run() {


    await Customer.createMany([
      {
        firstname: "Luc",
        lastname: "Bertier",
        email: "lucbertier@mail.com",
        telnumber: "095645668",
        password: "password",
        nbcustomer: 'Custom' + "customer.id" + Math.random().toString(36),
        genders_id: 2,
        createdAt:DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        firstname: "Martine",
        lastname: "Laloutre",
        email: "mloutre@mail.com",
        telnumber: "095645668",
        password: "password",
        nbcustomer: 'Custom' + "customer.id" + Math.random().toString(36),
        genders_id: 1,
        createdAt:DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        firstname: "John",
        lastname: "Burn",
        email: "jburn@mail.com",
        telnumber: "095645668",
        password: "password",
        nbcustomer: 'Custom' + "customer.id" + Math.random().toString(36),
        genders_id: 4,
        createdAt:DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        firstname: "Vincent",
        lastname: "Terrien",
        email: "terienvince@mail.com",
        telnumber: "095645668",
        password: "password",
        nbcustomer: 'Custom' + "customer.id" + Math.random().toString(36),
        genders_id: 2,
        createdAt:DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        firstname: "Lucie",
        lastname: "Terreur",
        email: "terreurlucie@mail.com",
        telnumber: "095645668",
        password: "password",
        nbcustomer: 'Custom' + "customer.id" + Math.random().toString(36),
        genders_id: 1,
        createdAt:DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        firstname: "Jean paul",
        lastname: "Pape",
        email: "papejp@mail.com",
        telnumber: "095645668",
        password: "password",
        nbcustomer: 'Custom' + "customer.id" + Math.random().toString(36),
        genders_id: 2,
        createdAt:DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        firstname: "Nicole",
        lastname: "Honore",
        email: "nhonore@mail.com",
        telnumber: "095645668",
        password: "password",
        nbcustomer: 'Custom' + "customer.id" + Math.random().toString(36),
        genders_id: 1,
        createdAt:DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        firstname: "Michelle",
        lastname: "Nganou",
        email: "ngnoumichelle@mail.com",
        telnumber: "095645668",
        password: "password",
        nbcustomer: 'Custom' + "customer.id" + Math.random().toString(36),
        genders_id: 1,
        createdAt:DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        firstname: "Karima",
        lastname: "Rachida",
        email: "krachida@mail.com",
        telnumber: "095645668",
        password: "password",
        nbcustomer: 'Custom' + "customer.id" + Math.random().toString(36),
        genders_id: 1,
        createdAt:DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        firstname: "Amir",
        lastname: "N'nour",
        email: "nouramir@mail.com",
        telnumber: "095645668",
        password: "password",
        nbcustomer: 'Custom' + "customer.id" + Math.random().toString(36),
        genders_id: 2,
        createdAt:DateTime.now(),
        updatedAt: DateTime.now()
      },
      {
        firstname: "Pierre",
        lastname: "Rodrigue",
        email: "rodriguepierre@mail.com",
        telnumber: "095645668",
        password: "password",
        nbcustomer: 'Custom' + "customer.id" + Math.random().toString(36),
        genders_id: 2,
        createdAt:DateTime.now(),
        updatedAt: DateTime.now()
      },
    ])
  }
}
