import { Command, MessageEmbed } from '../../utils/structures/index.js'
export default class HelpCommand extends Command {
  constructor() {
    super({
      name: 'help',
      description: 'Shows my commands to you.'
    })
  }
  
  execute(ctx) {
    const command = ctx.client.application.commands.cache.map(command => `</${command.name}:${command.id}> | ${command.description}`)
    ctx.send({
      content: `${command.join('\n')}`,
      ephemeral: true
    })
  }
}
