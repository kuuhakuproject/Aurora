import { Command } from '../../utils/structures/'

export default class PingCommand extends Command {
  constructor() {
    super({
      name: 'ping',
      description: 'A test command.'
    })
  }
  
  execute(ctx) {
    ctx.reply({
      content: `${ctx.client.ws.ping}ms!`,
      ephemeral: true
    })
  }
}