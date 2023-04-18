import { Command, MessageEmbed } from '../../utils/structures/index.js'
export default class BotinfoCommand extends Command {
  constructor() {
    super({
      data: {
        name: 'ban',
        description: 'Bans some users from your server (It\'s support multi-user ban)!',
        permissions: ['banMembers'],
        options: [{
          name: 'user',
          description: 'The users that will be punished!',
          type: 3,
          required: true
        },
        {
          name: 'reason',
          description: 'The punishment\'s reason.',
          type: 3,
          required: false
        }
        ]
      },
      category: 'moderation'
    })
  }

  async execute(ctx) {
    const member = await ctx.getUser(ctx.args.get('user')?.value, false)
    const reason = ctx.args.get('reason')?.value ?? 'Reason not specified.'

    if (ctx.interaction.guild.members.cache.get(member.id)?.bannable) return ctx.reply('negative', 'I\'m sorry but you can\'t ban this user!')

    ctx.interaction.guild.bans.create(member, {
      reason
    }).then((banInfo) => {
      ctx.reply('ban_hammer', 'The user was successfully punished!')
    })
  }
}
