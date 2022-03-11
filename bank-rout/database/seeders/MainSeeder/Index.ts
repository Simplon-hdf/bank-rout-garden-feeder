import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Application from '@ioc:Adonis/Core/Application'

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(seeder: { default: typeof BaseSeeder }) {
   
    if (seeder.default.developmentOnly && !Application.inDev) {
      return
    }

    await new seeder.default(this.client).run()
  }

  public async run() {
    await this.runSeeder(await import('../Gender'))
    await this.runSeeder(await import('../Customer'))
    await this.runSeeder(await import('../TrasferType'))
    await this.runSeeder(await import('../Account'))
    await this.runSeeder(await import('../Admin'))
    await this.runSeeder(await import('../Transfer'))
  }
}
