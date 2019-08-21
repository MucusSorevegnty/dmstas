const Discord = require('discord.js')
const client = new Discord.Client;
const ascii = require('ascii-art')
const ms = require('ms')
const setupCMD = "!3781718setreactionrole"
let initialMessage = `**Cliquez sur les émojis ci-dessous pour obtenir les rôles associés. Si vous souhaitez enlever un de vos rôle, il suffit de retirer votre réaction assciée!**`;
const roles = ["✔", "Notifications", "Foreign-languages"];
const reactions = ["✅", "🔔", "🌍"];

// A pretty useful method to create a delay without blocking the whole script.

client.on('ready', () => {
  console.log('Ready.')
})


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

    var randomHex = "#000000".replace(/0/g, function() {
      return (~~(Math.random() * 16)).toString(16);
    });

    const clean = text => {
      if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
          return text;
    }
  
    if (message.content.startsWith('!' + "eval")) {
      if(message.author.id !==  '') return;
      try {
        const code = args.join(" ");
        let evaled = eval(code);
   
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
   
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }

    if(message.channel.type === "dm") return;


    if(message.content === '!' + "open"){ return message.channel.send("Merci d'utiliser la commande `!open-luckyloot`")}
    if(message.content.startsWith('!open-luckyloot')){
    if(!message.member.roles.has("612334609241473034")) return message.reply("Vous ne possèdez pas les permissions suffisantes pour ouvrir un lucky loot.")
    var replys = [
"Un customrole pendant 24h.",
"Un customrole pendant 24h.",
"Customrole.",
"Un customrole pendant 24h.",
"La permission de parler dans le salon des sondages.",
"La permission de parler dans le salon des sondages.",
"La permission de parler dans le salon des sondages.",
"Choisissez un message personnalisé pour la commande `$work`, `$slut` ou `$crime.`",
"200PP",
"100AM"
    ]

    let reponse = (replys[Math.floor(Math.random() * replys.length)])
    let reponse2 = (replys[Math.floor(Math.random() * replys.length)])
    let reponse3 = (replys[Math.floor(Math.random() * replys.length)])
    let reponse4 = (replys[Math.floor(Math.random() * replys.length)])
    
    var embed = new  Discord.RichEmbed()
    .setColor(randomHex)
    .setTitle("Ouverture d'un lucky loot...")
    .addField(`==>  ${reponse}`, "** **")
    .setThumbnail("https://cdn.discordapp.com/attachments/476714543616098314/515863795223232513/513308491897765888.gif")
    
    var embed2 = new  Discord.RichEmbed()
    .setColor(randomHex)
    .setTitle("Ouverture d'un lucky loot..")
    .addField(`==>  ${reponse2}`, "** **")
    .setThumbnail("https://cdn.discordapp.com/attachments/476714543616098314/515863795223232513/513308491897765888.gif")
    
    var embed3 = new  Discord.RichEmbed()
    .setColor(randomHex)
    .setTitle("Ouverture d'un lucky loot...")
    .addField(`==>  ${reponse3}`, "** **")
    .setThumbnail("https://cdn.discordapp.com/attachments/476714543616098314/515863795223232513/513308491897765888.gif")

var embed4 = new  Discord.RichEmbed()
    .setColor(randomHex)
    .setThumbnail("https://cdn.discordapp.com/attachments/515863943311523843/515864024261328906/chest.gif")
    .addField(":tada: Vous venez de gagner: :tada:", "** **")
    .addField(`==>  ${reponse4}`, "** **")
    
    message.channel.send(embed).then(msg => {
setTimeout(() => msg.edit(embed2),  1000)
setTimeout(() => msg.edit(embed3),  2000)
setTimeout(() => msg.edit(embed4),  3000)
    })

    if(reponse4 === "Un customrole pendant 24h."){
      setTimeout(()=> message.member.addRole('611977227113857024')
      .then(console.log)
      .catch(console.error), 3001)
      setTimeout(() => message.channel.send('Pour récupérer votre customrole pendant 24 heures, envoyez la commande `!customrole <#couleur-en-code-hexadécimal> <nom-du-customrole>`'), 3001)
      setTimeout(() => message.member.removeRole("612334609241473034"), 3001)
    }else if(reponse4 === "Customrole."){
      setTimeout(()=> message.member.addRole('612360533231796275')
      .then(console.log)
      .catch(console.error), 3001)
      setTimeout(() => message.channel.send('Pour récupérer votre customrole, entrez la commande >customrole claim.\n\nEnsuite vous pouvez éditer le nom du customrole avec la commande `>customrole setname MyCustomRole` par exemple et la couleur du customrole avec la commande `>customrole setcolor #FF0000` par exemple.'), 3001)
      setTimeout(() => message.member.removeRole("612334609241473034")
      .then(console.log)
      .catch(console.error), 3001)
    }else if(reponse4 === "La permission de parler dans le salon des sondages."){
      setTimeout(() => message.member.addRole('612362912194887683', 3001)
      .then(console.log)
      .catch(console.error), 3001)
      setTimeout(() => message.channel.send('Vous pouvez désormais parler dans le salon des sondages !'), 3001)
      setTimeout(() => message.member.removeRole("612334609241473034")
      .then(console.log)
      .catch(console.error), 3001)
    }else if(reponse4 ===  "Choisissez un message personnalisé pour la commande `$work`, `$slut` ou `$crime.`"){
      setTimeout(() => message.channel.send('Vous pouvez choisir message personnalisé pour la commande `$work`, `$slut` ou `$crime.`! Envoyez le message de votre choix au staff ;)'), 3001)
      setTimeout(() => message.member.removeRole("612334609241473034")
      .then(console.log)
      .catch(console.error), 3001)
    }else if(reponse4 === "200PP"){
      setTimeout(() => message.channel.send('Vous gagnez 200PP. Merci de les reclamer au staff.'), 3001)
      setTimeout(() => message.member.removeRole("612334609241473034")
      .then(console.log)
      .catch(console.error), 3001)
    }else if(reponse4 === "100AM"){
      setTimeout(() => message.channel.send("Vous gagnez 100AM. Merci de les reclamer au staff."), 3001)
      setTimeout(() => message.member.removeRole("612334609241473034")
      .then(console.log)
      .catch(console.error), 3001)
    }else{
      message.channel.send('Une erreur s\'est produite.')
    }
    }

    if(message.content.startsWith('!compte')){
      var args = message.content.split(" ").slice(0)
      var args_ = args.slice(1).join(' ');
      let chanName = args_
		let channel;
		if (!chanName)
			return message.channel.send("Il me faut un nom de salon dans lequel compter les membres.");
		else
      channel = client.channels.find("name", chanName);
		if (!channel)
			return message.channel.send("Le nom du salon n'est pas reconnu.");
		if (channel.type != "voice" && channel.type != "text")
			return message.channel.send("Ce n'est ni un salon vocal, ni un salon textuel !");
		
		return message.channel.send("Il y a " + channel.members.size + " personnes dans le salon " + chanName + " !");
  }

  if(message.content.startsWith('!suggestion')){
    var args = message.content.slice('!suggestion').trim().split(/ +/g);
    if(!args) {
    return message.channel.send('Merci d\'indiquer une suggestion à envoyer dans le salon des suggestions.') }
    var embeded = new Discord.RichEmbed()
    embeded.setColor(randomHex)
    embeded.setDescription(args.slice(1).join(' '))
    embeded.setTimestamp()
    embeded.setAuthor(`${message.author.username} (ID: ${message.author.id})`, message.author.avatarURL)
    var channelel = client.channels.find('id', '612379773867524116')
    if(!channelel) return;
    channelel.send(embeded)
  }

  if(message.channel.id === '612379773867524116'){
    if(message.author.id === '611582180811997184'){
    message.react('❌')
    message.react('✅')
    }
  }

  if(message.content.startsWith('!scream')){
    var args = message.content.slice('!scream').trim().split(/ +/g);
    const argz = args.slice(1).join(' ')
    if(!argz) return message.channel.send('Merci d\'indiquer du texte.')
    message.channel.sendFile('https://cdn.discordapp.com/attachments/401676021469937667/612392232716206239/scream1.png').then(msg => {
    msg.channel.send('**                                       **' + argz)
    msg.channel.sendFile('https://cdn.discordapp.com/attachments/401676021469937667/612399934754521088/scream2.png')
  })
    }
  if(message.content.startsWith('!type')){
                            var caracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 's', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'é', 'è', 'à']
                            var chaine = ""
                            var i = 0
                            var l = Math.random() * (10 - 5) + 5;
                            var ided = message.author.id
                            console.log('ID: ' + ided)
                            while(i < l){
                              chaine += [Math.floor(Math.random()*caracteres.length)];                                                               
                             i += 1
                         }
                         message.channel.send('__**T Y P E**__')
                         message.channel.send('Recopier le plus vite le texte ci-dessous:')
                         console.log(chaine)
                         var date1 = message.createdAt;
                         ascii.font(chaine, 'Doom', async txt => {
                          message.channel.send(txt, {
                              code: 'md'
                          });
                      });
                      const filter =  m => !m.content.includes('!exit');
                      const collector =  message.channel.createMessageCollector(filter, { time: 60000 });
                      collector.on('collect', m => {
                        if(!m.author.id === ided){ return }
                        if(!m){
                          return message.channel.send('Fin du temps réglementaire.')
                        }
                        if (m.content == chaine) {
                          if(!m.author.id === ided){ return }
                          var tempos = Date.now() - date1
                          var temposse = tempos / 1000
                          m.channel.send('Bravo vous avez trouvé la bonne réponse en `' + temposse + '` secondes.')
                          collector.stop('Réponse trouvée.')
                        }
                        else{
                          if(!m.author.bot){
                            if(!m.author.id === ided){ return }
                          m.react('❌')
                          }
                        }
                      })
                    }

                    if(message.content.startsWith('!customrole')){

                      if(!message.member.roles.has('611977227113857024')) return message.channel.send('Vous ne disposez pas des permissions suffisantes pour éxécuter cette commande.')
                      if(!message.content.split(" ")[1]){
                        message.channel.send('Utilisation de la commande `!customrole <customrole> <nom>`')
                      }
                      if(!message.content.split(" ").slice(2).join(" ")){
                        message.channel.send('Utilisation de la commande `!customrole <customrole> <nom>')
                      }
                        let role = message.guild.createRole({
                          name: `Customrole : ${message.content.split(" ").slice(2).join(" ")}`,
                          color: message.content.split(" ")[1]
                      })

                  const embed = new Discord.RichEmbed()
                  .setTitle("Vérification")
                  .setColor(message.content.split(" ")[1])
                  .setDescription('Êtes-vous sûr de bien vouloir récupérer le rôle **'+message.content.split(" ").slice(2).join(" ")+'** avec la couleur **'+message.content.split(" ")[1]+'** comme indiqué ci-contre pour 24 heures ?')
                  const emoji1 = '✅'
                  const emoji2 = '❌'
                  message.channel.send(embed).then(async msg => {
                      await msg.react(emoji1)
                      await msg.react(emoji2)
                      const a = (reaction, user) => reaction.emoji.name === emoji1 && user.id === message.author.id;
                      const b = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
                      const repA = msg.createReactionCollector(a, {
                          time: 1000000
                      });
                      const repB = msg.createReactionCollector(b, {
                          time: 1000000
                      });
                      repA.on('collect', r => {
                          msg.delete()
                         
                          message.member.addRole(message.guild.roles.find(role => role.name === `Customrole : ${message.content.split(" ").slice(2).join(" ")}`).id)
                          message.channel.send('Rôle bien ajouté !')
                          setTimeout(function() {
                              message.guild.roles.find(role => role.name === `Customrole : ${message.content.split(" ").slice(2).join(" ")}`).delete();
                          
                          
                           }, 5000);  
                          
                      })
                      repB.on('collect', r => {
                          msg.delete()
                          message.guild.roles.find(role => role.name === `Customrole : ${message.content.split(" ").slice(2).join(" ")}`).delete();
                  
                      })
                  
                  })
                }
                 if(message.content.startsWith('!giveaway')){
                if(!message.member.hasPermissions('ADMINISTRATOR')) return message.channel.send('Vous ne disposez pas des permissions suffisantes pour éxécuter cette commande.\nIl vous faut la permission: `ADMINISTRATOR` !')
                var messageArray = message.content.split(" ");
                var time;
                var gagnant;
                    gagnant = Number(messageArray[1]);      
                    if(!gagnant) return message.channel.send("**ERREUR**\n__MAUVAIS USAGE!__\n**Combien y aura-t-il de gagnants ? **\n\nExemple d'utilisation:\n`!giveaway 1 120 un cadeau fantastique!`");
                 if(isNaN(gagnant)) return message.channel.send("**ERREUR**\n__MAUVAIS USAGE!__\n**Combien y aura-t-il de gagnants ? **\n\nExemple d'utilisation:\n`!giveaway 1 120 un cadeau fantastique!`");
                 if(gagnant > 999) return message.channel.send("Pour des raisons technique je ne tire au sort que maximum 999 personnes")
                
                    time = messageArray[2];
                    if(!time) return message.channel.send("**ERREUR**\n__MAUVAIS USAGE!__\nQuel est la durée de votre giveaway ?\n\nExemple d'utilisation:\n`!giveaway 1 120 un cadeau fantastique!`")
                let pari = message.content.split(" " + gagnant + " " + time + " ").slice(1);
                        var item = pari
                        if(!item) return message.channel.send("**ERREUR**\n__MAUVAIS USAGE!__\n**Que voulez-vous faire gagner ?**\n\nExemple d'utilisation:\n`!giveaway 60 1 un cadeau fantastique!`");
                
                      
                        let member = message.author
                        var embedgiveaway = new Discord.RichEmbed()
                        .setAuthor(member.username, member.displayAvatarURL)
                        .setTitle(":tada: GIVEAWAY ! :tada:")
                        .addField("Prix:", `** ${item} **`)
                        .setColor("#7289da")
                        .addField("Nombre de gagnants :", `** ${gagnant} ** gagnant(s)`)
                        .addField("Fin du Giveaway dans:", `** ${time} **`)
                        .addField("Pour participer, réagissez avec :tada: !!", "** **")
                        .setFooter(message.author.username, message.author.displayAvatarURL)
                        .setTimestamp()
                        var embedgiveawaySent = message.channel.send(embedgiveaway);
                embedgiveawaySent.react("\uD83C\uDF89");
                
                        setTimeout(function() {
                        embedgiveawaySent.reactions.forEach(r=>r.remove(client.user))
                        
                        if(!embedgiveawaySent.reactions.get("\uD83C\uDF89")){
                         message.channel.send("Personne n'a participé a votre Giveaway. Rt si c'est triste.")
                       return;
                       }
                          embedgiveawaySent.reactions.forEach(r=>r.remove(client.user))
                        
                         var peopleReacted = embedgiveawaySent.reactions.get("\uD83C\uDF89").users.array();
                          var winners = embedgiveawaySent.reactions.get("\uD83C\uDF89").count
                         var inodex = Math.floor(Math.random() * peopleReacted.length);
                          
                         var ggg = [];
                         var gggmessage = "";  
                         for (var i = 0; i < gagnant; i++){
                        ggg.push(peopleReacted[inodex]);
                        inodex = Math.floor(Math.random() * peopleReacted.length);
                         }
                         for (var i = 0; i < ggg.length; i++){
                             if (ggg[i].id === client.user.id){
                             ggg.slice(i, 1);
                                 continue;
                             }
                           gggmessage += (ggg[i].toString() + " ");
                         }
                          
                      
                         var haveHas = "a";
                          var Win = "**NOUVEAU GAGNANT**"
                         if (ggg.length == 1){
                             haveHas = " vient de gagner :";
                           var Win = "**NOUVEAU GAGNANT**";
                         }else{
                             haveHas = " viennent de gagner :";
                          var Win = "**NOUVEAUX GAGNANTS**";
                         }
                         let gigg = ggg
                         
                         if(gagnant > winners) {
                           message.channel.send("Malheureusement, pas assez de personne ont pu être sélectionné,\nVous avez demandé` " + gagnant + " `possibles gagnant(s) mais n'avez eu que `" + winners + "` participant(s) ")
                         return;
                         }
                         
                         message.channel.send(":confetti_ball: " + Win + " ! :confetti_ball: \n\n" + gigg  + haveHas + " " + `${item}`);
                         
                                     var embed2 = new Discord.RichEmbed()
                        .setAuthor(member.username, member.displayAvatarURL)
                        .setTitle(":tada: GIVEAWAY ! :tada:")
                        .setColor("7289da")
                        .addField("Prix:", `** ${item} **`)
                        .addField("Nombre de gagnants :", `** ${gagnant} ** gagnant(s)`)
                        .addField("Giveaway terminé !", `** **`)
                        .addField("Gagnant(s)", gigg)
                        .setFooter(message.author.username, message.author.displayAvatarURL)
                        
                        embedgiveawaySent.edit(embed2)
                        }, ms(time));
                
                
                   setTimeout(function() { 
                embedgiveawaySent.reactions.forEach(r=>r.remove(client.user));
                }, ms(time)-1000)  
                
              }

              if( message.content.startsWith( "!" + "espace")){
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Vous ne disposez pas des permissions suffisantes pour éxécuter cette commande.\nIl vous faut la permission: `ADMINISTRATOR` !')
              let channel = message.mentions.channels.first ( ) || message.channel;
              if(channel.type !== "text") return message.channel.send('Merci de mentionner un salon textuel.')
              channel.setName( (channel.name) .replace( /-/g, '\u2009\u2009') );
              message.channel.send('Le salon a été renommé')
              }

              if(message.content.startsWith('!' + 'convert')){
                const { Canvas } = require('canvas-constructor')
                const fsn = require("fs-nextra")
                 function Welcome(data) {
                  const image =  fsn.readFile('./fond.png');
                  return new Canvas(600, 300)
                  .save()
                  .addImage(image, 0, 0, 600, 300)      
                  .setColor('black')
                  .setTextAlign("center")
                  .setTextFont("bold 60pt sans serif")
                  .addResponsiveText(data, 300, 175, 550)
                  .toBuffer();

              }
              
              message.channel.send({
                  files: [{
                      attachment: Welcome(message.content.split(" ").slice(1).join(" ")),
                      name: "convert.png"
                  }]
              });
            };

    if(message.content.toLowerCase() == setupCMD){
    if (message.member.hasPermission("ADMINISTRATOR")){
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

  client.on('error', err => {
    console.log(err)
  })
  client.login(process.env.TOKENN)
