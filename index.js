import 'dotenv/config'
import { ShardingManager } from 'discord.js'
const client = new ShardingManager('./src/AuroraLauncher.js', {
  totalShards: isNaN(process.env.SHARD_AMOUNT) ? parseInt(process.env.SHARD_AMOUNT) : 1,
  respawn: true,
  token: process.env.DISCORD_BOT_TOKEN
})

client.spawn()
