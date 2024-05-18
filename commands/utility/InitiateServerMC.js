const { ButtonStyle, SlashCommandBuilder } = require("discord.js");
const Quatre_boutons = require("/home/container/functions/creerBoutons.js");
const message = require("/home/container/functions/message.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("initiate_mc")
    .setDescription(
      "Initier le message afin de contrôler le serveur Minecraft"
    ),
  async execute(interaction) {
    await interaction.reply("Le serveur a été initialisé");
    const response = interaction.channel.send({
      embeds: [
        message(
          "Panel du serveur MC",
          "https://global-img.gamergen.com/minecraft-image_0903D4000000952190.jpg",
          "Ouvert",
          "Allons-faire une maison moche ?",
          "Minecraft",
          "0x363232"
        ),
      ],
      components: [
        Quatre_boutons(
          "Start_MC",
          "Start ",
          ButtonStyle.Success,
          false,
          "Restart_MC",
          "Restart",
          ButtonStyle.Primary,
          false,
          "Stop_MC",
          "Stop",
          ButtonStyle.Danger,
          false,
          "Kill_MC",
          "Kill",
          ButtonStyle.Danger,
          false
        ),
      ],
    });
  },
};
