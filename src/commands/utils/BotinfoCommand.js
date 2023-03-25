import { Command, MessageEmbed } from '../../utils/structures/index.js'
export default class BotinfoCommand extends Command {
  constructor() {
    super({
      name: 'botinfo',
      description: 'Shows some information about me!'
    })
  }
  
  execute(ctx) {
    const embed = new MessageEmbed()
    embed.setTitle('My informations')
    embed.setDescription(`Hello dear ${ctx.interaction.member.user}! It's so nice to see you here with me?! Call me Aurora. I'm a singer that is here to entertain you and your friends! Feel free to join my support server as well, see you soon!`)
    embed.setDefaultColor('DEFAULT')
    embed.addField(`${ctx.getBotEmoji('vps_cpu')} CPU usage`, `${(10 * process.cpuUsage().user / process.cpuUsage().system).toFixed(2)}%`, true)
    embed.addField(`${ctx.getBotEmoji('vps_ram')} RAM Usage`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB `)
    ctx.send({
      embeds: [embed],
      ephemeral: true
    })
  }
}
