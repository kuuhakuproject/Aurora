import { Command, MessageEmbed } from '../../utils/structures/index.js'
import { PermissionsBitField } from 'discord.js'
export default class UnbanCommand extends Command {
  constructor() {
    super({
      data: {
        name: 'unban',
        description: 'Unbans some users from your server (It\'s support multi-user unban)!',
        permissions: ['BanMembers'],
        options: [{
          name: 'user',
          description: 'The users that will be unbanned!',
          type: 3,
          required: true
        },
        {
          name: 'reason',
          description: 'The unban reason.',
          type: 3,
          required: false,
          maxLength: 100
        }
        ]
      },
      category: 'moderation'
    })
  }

  async execute(ctx) {
    const member = await ctx.getUser(ctx.args.get('user')?.value, false)
    const reason = ctx.args.get('reason')?.value ?? 'Reason not specified.'

    ctx.interaction.guild.bans.remove(member, {
      reason: `Unbanned by ${ctx.interaction.author} | Reason: ${reason}`
    }).then((banInfo) => {
      ctx.reply('ban_hammer', 'The user was successfully unbanned!')
    }).catch(() => ctx.reply('negative', 'I can\'t unban! They aren\'t banned.'))
  }
}
