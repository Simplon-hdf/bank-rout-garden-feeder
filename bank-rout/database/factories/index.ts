import Transfer from 'App/Models/Transfer'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const TransferFactory = Factory
    .define(Transfer, ({ faker }) => {
        return {
            numberTransfer: faker.numberTransfer(),
        }
    })
    .build()

