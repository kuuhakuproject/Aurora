import { Emoji } from '../EmojiListUtils'
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
  
  reply(emoji, content) {
    if (content?.embeds !== undefined) {
      for (const embed of content.embeds) {
        this.embeds.push(embed)
      }
    }
    
    this.interaction.reply({
      content: (typeof content === 'string') ? `${emoji} | ${this.interaction.member.user.toString()} ${content}` :  `${emoji} | ${this.interaction.member.user.toString()} ${content?.content}`,
      embeds: this.embeds,
      ephemeral: content?.ephemeral ?? false,
      files: content?.files ?? []
    })
  }
  
  parseEmoji(emoji) {
    const e = emoji
      .replace(/(<:)/, '')
      .replace(/(<a:)/, '')
      .replace(/(>)/, '')
      .split(':')

    return {
      name: e[0],
      id: e[1] ?? '',
      animated: emoji?.startsWith('<a:'),
      mention: emoji
    }
  }
  
  getBotEmoji(name) {
    return this.parseEmoji(Emoji[name])?.mention ?? ':bug:'
  }
}
