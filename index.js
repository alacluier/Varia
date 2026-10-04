const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.reply('Pong! 🏓');
  }
});

client.login(MTU1Mzc1MTQxMDU2NTMxNjYzOA.G9L8CB.9ubXV4aNa_2H6WO-mTQKi80OkSXCWq7SOLH2ag);
