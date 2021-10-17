const Discord = require('discord.js');
const dotenv = require('dotenv').config();

const client = new Discord.Client();

client.login(process.env.KEY);

client.on('message', (message) => {
  if (
    message.content[0] === '!' ||
    message.content[0] === '/' ||
    (message.content[0] === 'y' && message.content[1] === '!')
  ) {
    message.delete();
  }
});
