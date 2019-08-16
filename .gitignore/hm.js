const Discord = require('discord.js')
const client = new Discord.Client;
 
const setupCMD = "!3781718setreactionrole"
let initialMessage = `**Cliquez sur les émojis ci-dessous pour obtenir les rôles associés. Si vous souhaitez enlever un de vos rôle, il suffit de retirer votre réaction assciée!**`;
const roles = ["✔", "Notifications", "Foreign-languages"];
const reactions = ["✅", "🔔", "🌍"];

// A pretty useful method to create a delay without blocking the whole script.

client.on('ready', () => {
  console.log('Ready.')
});


//If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";
 
//Function to generate the role messages, based on your settings
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`Cliquez sur l'émoji ci-dessous pour recevoir le rôle **"${role}"** !`); //DONT CHANGE THIS
    return messages;
}

  client.on("message", message => {



      if (message.member.hasPermission("ADMINISTRATOR") && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                }
            });
        }
    }    

    if(message.channel.name == '28711'){
      console.log('A');
      if(message.author.id == '458664297732636672'){
      client.channels.findAll('name', '28711').map(channel => channel.send(`!rir ` + `\`\`\`\n${message.content}\n\`\`\``))
      }
    }

    if(message.content.startsWith('!rir')){
      const args = message.content.split(/ +/).slice(8);
      const args_ = args.join(' ')
      if(!args_) { return }
      client.channels.findAll('name', '🤖cleverbot').map(channel => channel.send('```' + args_))
    }
    })

    client.on('raw', event => {
      try {
      if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
         
          let channel = client.channels.get(event.d.channel_id);
          let message = channel.fetchMessage(event.d.message_id).then(msg=> {
          let user = msg.guild.members.get(event.d.user_id);
         
          if (msg.author.id == client.user.id && msg.content != initialMessage){
         
              var re = `\\*\\*"(.+)?(?="\\*\\*)`;
              var role = msg.content.match(re)[1];
         
              if (user.id != client.user.id){
                  var roleObj = msg.guild.roles.find(r => r.name === role);
                  var memberObj = msg.guild.members.get(user.id);
                 
                  if (event.t === "MESSAGE_REACTION_ADD"){
                      memberObj.addRole(roleObj);
                  } else {
                      memberObj.removeRole(roleObj);
                  }
              }
          }
          })
   
      }
    }catch(err){
      console.log('Une erreur est survenue.')
    }  
  });


  client.login(process.env.SPY)
