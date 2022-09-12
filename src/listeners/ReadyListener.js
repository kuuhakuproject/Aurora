import { ApplicationCommandType } from 'discord.js'
export default {
  label: 'ready',
  execute: function execute(client) {
    client.commands.forEach((data) => {
      client.application.commands.create({
        name: data.name,
        description: data.description,
        options: data.options ?? [],
        type: ApplicationCommandType.ChatInput,
        defaultMembersPermissions: data.permissions ?? []
      })
    })
    console.log(`yay, ${client.user.username} is now online!`)
  }
}