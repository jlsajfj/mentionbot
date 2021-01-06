const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
client.login(config.token);


client.on("message", function(msg) { 
	if(msg.mentions.users){
		if(msg.mentions.users.keyArray().includes(client.user.id)){
			msg.reply('awef');
		}
	}
});

client.on('ready', () => {
	console.log('bot is active');
});