const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Sho bdk feh");
console.log("For IIahmad111");


client.on("ready", () => {
let channel =     client.channels.get("608318184243855370")
setInterval(function() {
channel.send(`#ping server #avatar `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
