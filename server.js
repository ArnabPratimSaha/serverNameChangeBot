require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();
let serverName;

const findGuild=guilds=>
{
  for (let i = 0; i < guilds.length; i++) {
    const e = guilds[i];
    if(e.id===process.env.GUILDID)
    {
      return e;
    }
  }
  return null;
}
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const guild=findGuild(client.guilds.cache.array());
  if(!guild)
  {
    return;
  }
  guild.setName(process.env.SERVERNAME+" ");
  serverName=process.env.SERVERNAME+" ";
  var modifiedName=serverName;
  const interval=setInterval(async() => {
      var firstDigit=modifiedName[0];
      modifiedName=modifiedName.slice(1);
      modifiedName=modifiedName+firstDigit;
      console.log(modifiedName);
      await guild.setName(modifiedName);
  }, 50);
});

client.login(process.env.TOKEN);