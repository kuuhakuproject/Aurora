import { ApplicationCommandType, PermissionsBitField } from 'discord.js'
export default {
  label: 'ready',
  execute: function execute(client) {
    function random_status(time) {
      const presence = [
        // { name: 'Use /help to see my commands', type: 0 },
        // { name: 'against Angel on chess!' },
        { name: `/help | Shard: ${client.shard?.ids}/${process.env.SHARD_AMOUNT}`, type: 4 }
      ]
      setInterval(function() {
        const status = presence[Math.round(Math.random() * presence.length)]
        if (status !== undefined) {
          client.user.setPresence({ activities: [status] })
        }
      }, parseInt(time) * 1000)
    }
    
    random_status(process.env.PRESENCE_COOLDOWN)
    client.commands.forEach((it) => {
      client.application.commands.create(it.data)
    })
    console.log(`Everything sounds good! ${client.user.username} is now online!`)
  }
}
