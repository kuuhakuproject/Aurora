import { Emoji } from '../EmojiListUtils.js'
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
      content: (typeof content === 'string') ? `${this.getBotEmoji(emoji)} | ${this.interaction.member.user.toString()} ${content}` : `${this.getBotEmoji(emoji) } | ${this.interaction.member.user.toString()} ${content?.content}`,
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

  async getUser(user, author = false) {
    try {
      if (!author && !user) {
        return undefined
      } else if (author && user) {
        return await this.client.users.fetch(this.interaction.author.id) || await this.client.users.fetch(user?.replace(/[<@!>]/g, ''))
      } else if (!author && user) {
        return await this.client.users.fetch(user?.replace(/[<@!>]/g, ''))
      } else {
        return undefined
      }
    } catch {
      console.error('Unfortunately the user was not found.')
      return undefined
    }
  }
}
