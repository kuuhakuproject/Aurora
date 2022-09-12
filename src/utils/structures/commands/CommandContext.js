export class CommandContext {
  constructor(client, interaction, database, args) {
    this.client = client
    this.interaction = interaction
    this.database = database
    this.args = args
    this.embeds = []
  }
  
  send(content) {
    if (content?.embeds !== undefined) {
      for (const embed of content.embeds) {
        this.embeds.push(embed)
      }
    }
    
    this.interaction.reply({
      content: (typeof content === 'string') ? content : content?.content,
      embeds: this.embeds,
      ephemeral: content?.ephemeral ?? false,
      files: content?.files ?? []
    })
  }
  
  reply(content) {
    if (content?.embeds !== undefined) {
      for (const embed of content.embeds) {
        this.embeds.push(embed)
      }
    }
    
    this.interaction.reply({
      content: (typeof content === 'string') ? `:bug: | ${this.interaction.member.user.toString()} ${content}` : `:bug: | ${this.interaction.member.user.toString()} ${content?.content}`,
      embeds: this.embeds,
      ephemeral: content?.ephemeral ?? false,
      files: content?.files ?? []
    })
  }
}