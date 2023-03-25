import { InteractionType } from 'discord.js'
import { CommandContext } from '../utils/structures/index.js'
export default {
  label: 'interactionCreate',
  execute: function execute(client, interaction) {
    if (interaction.type !== InteractionType.ApplicationCommand) return

    try {
      const command = client.commands.get(interaction.commandName)
      const ctx = new CommandContext(client, interaction, {}, interaction.options)
      command.execute(ctx)
    } catch (err) {
      console.error(err.name, err)
    }
  }
}
