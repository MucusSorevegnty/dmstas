const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');

client.once('ready', () => {
  console.log('Ready.');
});


client.on('message', message => {

if(message.content.startsWith('$work')){
  if(message.author.id != client.user.id){ return }
  var Rdm = Math.floor(Math.random() * (400000 - 300000)) + 300000; 
  setTimeout(() => message.channel.send('$work'), (Rdm))
}

});
client.login(process.env.SPY);