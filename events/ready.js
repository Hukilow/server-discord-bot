const { Events } = require("discord.js");
const remind = require("/home/container/functions/reminder.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    setInterval(() => remind(client), 60000); // 60000 ms = 1 minute
  },
};
