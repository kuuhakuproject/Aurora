import 'dotenv/config'
import { AuroraClient } from './AuroraClient.js'
const client = new AuroraClient({ intents: 4733 })
client.start(process.env.DISCORD_BOT_TOKEN)