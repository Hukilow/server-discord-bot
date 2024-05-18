const { Events } = require("discord.js");
const remind = require("/home/container/functions/reminder.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
	setInterval(() => remind(client), 60000); // 60000 ms = 1 minute

      
  }
}

console.log("Bot prêt !");
// Définir l'intervalle pour envoyer le message toutes les 4 minutes


/*
client.users.send('269839929893322753', 'Test');

setInterval(() => {
      const channel = client.channels.cache.get("1192542890094776382");
        



      if (channel) {
        channel.send("Ceci est un message automatique toutes les 4 minutes.");
      } else {
        console.error("Le salon n'a pas été trouvé. Vérifiez l'ID du salon.");
      }
    }, 30000); // 4 minutes en millisecondes
  },*/