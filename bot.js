const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Sho bdk feh");
console.log("For IIahmad111");


client.on("ready", () => {
let channel =     client.channels.get("606195535325691925")
setInterval(function() {
channel.send(`Helen Is Sad :sob: But She Is Love You :heart: `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
