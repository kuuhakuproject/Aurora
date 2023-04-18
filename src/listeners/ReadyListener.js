import { ApplicationCommandType } from 'discord.js'
export default {
  label: 'ready',
  execute: function execute(client) {
    function random_status(time) {
      const presence = [
        { name: 'Use /help to see my commands', type: 0 },
        { name: 'against Angel on chess!' }
      ]
      setInterval(function() {
        const status = presence[Math.round(Math.random() * presence.length)]
        if (status !== undefined) {
          client.user.setPresence({ activities: [status] })
        }
      }, parseInt(time) * 1000)
    }
    
    random_status(process.env.PRESENCE_COOLDOWN)
    client.commands.forEach((data) => {
      client.application.commands.create(data.data)
    })
    console.log(`Everything sounds good! ${client.user.username} is now online!`)
  }
}
