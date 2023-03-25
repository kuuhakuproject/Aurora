export class MessageEmbed {
  constructor() {
    this.title = null
    this.color = null
    this.default_color = {
      DEFAULT: '#c90606',
      ERROR: '#ff6b08',
      WARNING: '#ffd208'
    }
    this.description = null
    this.fields = []
  }

  setTitle(title) {
    this.title = title
  }

  setColor(color) {
    this.color = typeof color === 'string' ? parseInt(color.replace('#', '0x'), 16) : parseInt(color, 16)
  }

  setDefaultColor(color) {
    this.setColor(this.default_color[color])
  }

  setDescription(description) {
    this.description = description
  }

  addField(name, value, inline = false) {
    this.fields.push({ name, value, inline })
  }
  
  build() {
    return this
  }
}
