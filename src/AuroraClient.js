import { Client, Collection } from 'discord.js'
import { readdirSync } from 'fs'
export class AuroraClient extends Client {
  constructor(options) {
    super(options)
    this.commands = new Collection()
  }

  commandLoader() {
    readdirSync('src/commands').forEach((category) => {
      readdirSync(`src/commands/${category}`).forEach(async (commandFile) => {
        const Command = await import(`./commands/${category}/${commandFile}`)
        const command = new Command['default']()
        this.commands.set(command.data.name, command)
      })
    })
  }

  eventLoader() {
    readdirSync('src/listeners').forEach(async event => {
      const listener = await import(`./listeners/${event}`)
      super.on(listener.default.label, (...args) => {
        listener.default.execute(this, ...args)
      })
    })
  }

  start(token) {
    this.commandLoader()
    this.eventLoader()
    super.login(token)
  }
}
