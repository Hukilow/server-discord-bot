const {
  ButtonStyle,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");
const Quatre_boutons = require("/home/container/functions/creerBoutons.js");
const message = require("/home/container/functions/message.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("initiate_eft")
    .setDescription("Initier le message afin de contrôler le serveur EFT"),
  async execute(interaction) {
    await interaction.reply("Le serveur a été initialisé");
    const response = interaction.channel.send({
      embeds: [
        message(
          "Panel du serveur EFT",
          "https://assets-prd.ignimgs.com/2021/12/07/escapefromtarkov-1638898094839.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
          "Fermé",
          "Allez-vous vous prendre une tête ?",
          "Escape From Tarkov",
          "0x363232"
        ),
      ],
      components: [
        Quatre_boutons(
          "Start_EFT",
          "Start ",
          ButtonStyle.Success,
          false,
          "Restart_EFT",
          "Restart",
          ButtonStyle.Primary,
          false,
          "Stop_EFT",
          "Stop",
          ButtonStyle.Danger,
          false,
          "Kill_EFT",
          "Kill",
          ButtonStyle.Danger,
          false,
          "Refresh_EFT",
          "Refresh",
          ButtonStyle.Secondary,
          false
        ),
      ],
    });
  },
};
