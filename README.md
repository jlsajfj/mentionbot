# mentionbot

Just testing if I can read mentions

The functionality is quite simple actually:

```javascript
client.on("message", function(msg) { 
	if(msg.mentions.users){
		if(msg.mentions.users.keyArray().includes(client.user.id)){
			msg.reply('awef');
		}
	}
});
```

it just checks if the bot user is in the list of mentions in the message.