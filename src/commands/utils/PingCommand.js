import { Command, MessageEmbed } from '../../utils/structures/'

export default class PingCommand extends Command {
  constructor() {
    super({
      name: 'ping',
      description: 'A test command.',
      options: [{
        name: 'option',
        description: 'Choose if you want to see the status of every shard',
        type: 3,
        required: false,
        choices: [{
          name: 'shards',
          value: 'shards'
        }]
      }]
    })
  }
  
  execute(ctx) {
    const option = ctx.interaction.options.get('option')
    switch(option?.value) {
      case 'shards': {
        ctx.reply(ctx.getBotEmoji('heatbeat_ping'), {
          content: 'Testing',
          ephemeral: true
        })
      }
      break;
      default: {
        const embed = new MessageEmbed()
        embed.setDefaultColor('DEFAULT')
        embed.setDescription(`${ctx.getBotEmoji('heatbeat_ping')} **Ping:** ${(ctx.client.ws.ping).toFixed(2)} ${ctx.getBotEmoji('computer')} **Shard:** ${ctx.client.shard.ids}/${ctx.client.shard.count}`)
        ctx.reply({
          embeds: [embed.build()],
          ephemeral: true
        })
      }
    }
  }
}