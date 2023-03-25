import 'dotenv/config'
import { ShardingManager } from 'discord.js'
const client = new ShardingManager('./src/AuroraLauncher.js', {
  totalShards: 2,
  respawn: true,
  token: process.env.DISCORD_BOT_TOKEN
})

client.spawn()
