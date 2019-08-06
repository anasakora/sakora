const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Sho bdk feh");
console.log("For IIahmad111");


client.on("ready", () => {
let channel =     client.channels.get("606577146919649301")
setInterval(function() {
channel.send(`#ping رشدي الزبال`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
