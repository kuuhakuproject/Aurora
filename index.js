import 'dotenv/config'
import { AuroraClient } from './src/AuroraClient.js'
const client = new AuroraClient({ intents: 125 })
client.start(process.env.DISCORD_BOT_TOKEN)