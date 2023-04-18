import { Command, MessageEmbed } from '../../utils/structures/index.js'
export default class HelpCommand extends Command {
  constructor() {
    super({
      data: {
        name: 'help',
        description: 'Shows my commands to you.'
      },
      category: 'utils'
    })
  }
  
  execute(ctx) {
    const command = ctx.client.application.commands.cache.map(command => `</${command.name}:${command.id}> | ${command.description}`)
    const embed = new MessageEmbed()
    embed.setDefaultColor('DEFAULT')
    embed.setDescription(command.join('\n'))
    embed.addField('Support server', 'Would you like to join my [support server](https://discord.gg/tPWPz3E3d2)? I would love to see you there! You can talk with my staff team, send memes, talk about anime and much more?!')
    ctx.send({
      content: 'Here it is my command menu with all my commands!',
      embeds: [embed.build()],
      ephemeral: true
    })
  }
}
