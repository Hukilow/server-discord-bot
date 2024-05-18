const { Events } = require("discord.js");
const Quatre_boutons = require("/home/container/functions/creerBoutons.js");
const { ButtonStyle } = require("discord.js");
const nodeactyl_commands = require("/home/container/functions/nodeactyl.js");
const Nodeactyl = require("nodeactyl");
const message = require("/home/container/functions/message.js");
const writeLog = require("/home/container/functions/writeLog.js");
const panel_link = process.env.panel_link;
const dotenv = require("dotenv");
dotenv.config();
const API_KEY = process.env.API_KEY;
const EFT_ID = process.env.EFT_ID;
const MC_ID = process.env.MC_ID;
let EFT_Discord_State = "offline";
let MC_Discord_State = "offline";

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (interaction.member.roles.cache.some((r) => r.name === "Serveurs")) {
      if (interaction.isChatInputCommand()) {
        const command = interaction.client.commands.get(
          interaction.commandName
        );

        if (!command) {
          console.error(
            `No command matching ${interaction.commandName} was found.`
          );
          return;
        }

        try {
          await command.execute(interaction);
        } catch (error) {
          console.error(`Error executing ${interaction.commandName}`);
          console.error(error);
        }
      } else if (interaction.isButton()) {
        writeLog(
          `{
            By : ${interaction.user.username}
            Action : ${interaction.customId} 
           } `
        );
        if (interaction.customId == "Start_EFT") {
          EFT_Discord_State = "running";
          await interaction.update({
            embeds: [
              message(
                "Panel du serveur EFT",
                "https://assets-prd.ignimgs.com/2021/12/07/escapefromtarkov-1638898094839.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
                "Ouvert",
                "Allez-vous vous prendre une tête ?",
                "Escape From Tarkov",
                "0x04f000"
              ),
            ],
            components: [
              Quatre_boutons(
                "Start_EFT",
                "Start",
                ButtonStyle.Success,
                true,
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
          nodeactyl_commands("start", panel_link, API_KEY, EFT_ID);
        } else if (interaction.customId == "Restart_EFT") {
          EFT_Discord_State = "running";
          await interaction.update({
            embeds: [
              message(
                "Panel du serveur EFT",
                "https://assets-prd.ignimgs.com/2021/12/07/escapefromtarkov-1638898094839.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
                "Ouvert",
                "Allez-vous vous prendre une tête ?",
                "Escape From Tarkov",
                "0x04f000"
              ),
            ],
            components: [
              Quatre_boutons(
                "Start_EFT",
                "Start",
                ButtonStyle.Success,
                true,
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
          nodeactyl_commands("restart", panel_link, API_KEY, EFT_ID);
        } else if (interaction.customId == "Stop_EFT") {
          EFT_Discord_State = "offline";
          await interaction.update({
            embeds: [
              message(
                "Panel du serveur EFT",
                "https://assets-prd.ignimgs.com/2021/12/07/escapefromtarkov-1638898094839.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
                "Fermé",
                "Allez-vous vous prendre une tête ?",
                "Escape From Tarkov",
                "0xff0000"
              ),
            ],
            components: [
              Quatre_boutons(
                "Start_EFT",
                "Start",
                ButtonStyle.Success,
                false,
                "Restart_EFT",
                "Restart",
                ButtonStyle.Primary,
                false,
                "Stop_EFT",
                "Stop",
                ButtonStyle.Danger,
                true,
                "Kill_EFT",
                "Kill",
                ButtonStyle.Danger,
                true,
                "Refresh_EFT",
                "Refresh",
                ButtonStyle.Secondary,
                false
              ),
            ],
          });
          nodeactyl_commands("stop", panel_link, API_KEY, EFT_ID);
        } else if (interaction.customId == "Kill_EFT") {
          EFT_Discord_State = "offline";
          await interaction.update({
            embeds: [
              message(
                "Panel du serveur EFT",
                "https://assets-prd.ignimgs.com/2021/12/07/escapefromtarkov-1638898094839.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
                "Fermé",
                "Allez-vous vous prendre une tête ?",
                "Escape From Tarkov",
                "0xff0000"
              ),
            ],
            components: [
              Quatre_boutons(
                "Start_EFT",
                "Start",
                ButtonStyle.Success,
                false,
                "Restart_EFT",
                "Restart",
                ButtonStyle.Primary,
                false,
                "Stop_EFT",
                "Stop",
                ButtonStyle.Danger,
                true,
                "Kill_EFT",
                "Kill",
                ButtonStyle.Danger,
                true,
                "Refresh_EFT",
                "Refresh",
                ButtonStyle.Secondary,
                false
              ),
            ],
          });
          nodeactyl_commands("kill", panel_link, API_KEY, EFT_ID);
        } else if (interaction.customId == "Refresh_EFT") {
          const panel = new Nodeactyl.NodeactylClient(panel_link, API_KEY);
          panel.getServerUsages(EFT_ID).then((usage) => {
            if (
              usage.current_state === "running" &&
              EFT_Discord_State === "offline"
            ) {
              EFT_Discord_State = "running";
              interaction.update({
                embeds: [
                  message(
                    "Panel du serveur EFT",
                    "https://assets-prd.ignimgs.com/2021/12/07/escapefromtarkov-1638898094839.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
                    "Ouvert",
                    "Allez-vous vous prendre une tête ?",
                    "Escape From Tarkov",
                    "0x04f000"
                  ),
                ],
                components: [
                  Quatre_boutons(
                    "Start_EFT",
                    "Start",
                    ButtonStyle.Success,
                    true,
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
            } else if (
              usage.current_state === "offline" &&
              EFT_Discord_State === "running"
            ) {
              EFT_Discord_State = "offline";
              interaction.update({
                embeds: [
                  message(
                    "Panel du serveur EFT",
                    "https://assets-prd.ignimgs.com/2021/12/07/escapefromtarkov-1638898094839.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
                    "Fermé",
                    "Allez-vous vous prendre une tête ?",
                    "Escape From Tarkov",
                    "0xff0000"
                  ),
                ],
                components: [
                  Quatre_boutons(
                    "Start_EFT",
                    "Start",
                    ButtonStyle.Success,
                    false,
                    "Restart_EFT",
                    "Restart",
                    ButtonStyle.Primary,
                    false,
                    "Stop_EFT",
                    "Stop",
                    ButtonStyle.Danger,
                    true,
                    "Kill_EFT",
                    "Kill",
                    ButtonStyle.Danger,
                    true,
                    "Refresh_EFT",
                    "Refresh",
                    ButtonStyle.Secondary,
                    false
                  ),
                ],
              });
            } else if (
              usage.current_state === "offline" &&
              EFT_Discord_State === "offline"
            ) {
              EFT_Discord_State = "offline";
              interaction.update({
                embeds: [
                  message(
                    "Panel du serveur EFT",
                    "https://assets-prd.ignimgs.com/2021/12/07/escapefromtarkov-1638898094839.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
                    "Fermé",
                    "Allez-vous vous prendre une tête ?",
                    "Escape From Tarkov",
                    "0xff0000"
                  ),
                ],
                components: [
                  Quatre_boutons(
                    "Start_EFT",
                    "Start",
                    ButtonStyle.Success,
                    false,
                    "Restart_EFT",
                    "Restart",
                    ButtonStyle.Primary,
                    false,
                    "Stop_EFT",
                    "Stop",
                    ButtonStyle.Danger,
                    true,
                    "Kill_EFT",
                    "Kill",
                    ButtonStyle.Danger,
                    true,
                    "Refresh_EFT",
                    "Refresh",
                    ButtonStyle.Secondary,
                    false
                  ),
                ],
              });
            } else if (
              usage.current_state === "running" &&
              EFT_Discord_State === "running"
            ) {
              EFT_Discord_State = "running";
              interaction.update({
                embeds: [
                  message(
                    "Panel du serveur EFT",
                    "https://assets-prd.ignimgs.com/2021/12/07/escapefromtarkov-1638898094839.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
                    "Ouvert",
                    "Allez-vous vous prendre une tête ?",
                    "Escape From Tarkov",
                    "0x04f000"
                  ),
                ],
                components: [
                  Quatre_boutons(
                    "Start_EFT",
                    "Start",
                    ButtonStyle.Success,
                    true,
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
            }
          });
        } else if (interaction.customId == "Start_MC") {
          await interaction.update({
            embeds: [
              message(
                "Panel du serveur MC",
                "https://global-img.gamergen.com/minecraft-image_0903D4000000952190.jpg",
                "Ouvert",
                "Allons-faire une maison moche ?",
                "Minecraft",
                "0x04f000"
              ),
            ],
            components: [
              Quatre_boutons(
                "Start_MC",
                "Start",
                ButtonStyle.Success,
                true,
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
                false,
                "Refresh_MC",
                "Refresh",
                ButtonStyle.Secondary,
                false
              ),
            ],
          });
          nodeactyl_commands("start", panel_link, API_KEY, MC_ID);
        } else if (interaction.customId == "Restart_MC") {
          await interaction.update({
            embeds: [
              message(
                "Panel du serveur MC",
                "https://global-img.gamergen.com/minecraft-image_0903D4000000952190.jpg",
                "Ouvert",
                "Allons-faire une maison moche ?",
                "Minecraft",
                "0x04F000"
              ),
            ],
            components: [
              Quatre_boutons(
                "Start_MC",
                "Start",
                ButtonStyle.Success,
                true,
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
                false,
                "Refresh_MC",
                "Refresh",
                ButtonStyle.Secondary,
                false
              ),
            ],
          });
          nodeactyl_commands("restart", panel_link, API_KEY, MC_ID);
        } else if (interaction.customId == "Stop_MC") {
          await interaction.update({
            embeds: [
              message(
                "Panel du serveur MC",
                "https://global-img.gamergen.com/minecraft-image_0903D4000000952190.jpg",
                "Fermé",
                "Allons-faire une maison moche ?",
                "Minecraft",
                "0xff0000"
              ),
            ],
            components: [
              Quatre_boutons(
                "Start_MC",
                "Start",
                ButtonStyle.Success,
                false,
                "Restart_MC",
                "Restart",
                ButtonStyle.Primary,
                false,
                "Stop_MC",
                "Stop",
                ButtonStyle.Danger,
                true,
                "Kill_MC",
                "Kill",
                ButtonStyle.Danger,
                true,
                "Refresh_MC",
                "Refresh",
                ButtonStyle.Secondary,
                false
              ),
            ],
          });
          nodeactyl_commands("stop", panel_link, API_KEY, MC_ID);
        } else if (interaction.customId == "Kill_MC") {
          await interaction.update({
            embeds: [
              message(
                "Panel du serveur MC",
                "https://global-img.gamergen.com/minecraft-image_0903D4000000952190.jpg",
                "Fermé",
                "Allons-faire une maison moche ?",
                "Minecraft",
                "0xff0000"
              ),
            ],
            components: [
              Quatre_boutons(
                "Start_MC",
                "Start",
                ButtonStyle.Success,
                false,
                "Restart_MC",
                "Restart",
                ButtonStyle.Primary,
                false,
                "Stop_MC",
                "Stop",
                ButtonStyle.Danger,
                true,
                "Kill_MC",
                "Kill",
                ButtonStyle.Danger,
                true,
                "Refresh_MC",
                "Refresh",
                ButtonStyle.Secondary,
                false
              ),
            ],
          });
          nodeactyl_commands("kill", panel_link, API_KEY, MC_ID);
        } else if (interaction.customId == "Refresh_MC") {
          const panel = new Nodeactyl.NodeactylClient(panel_link, API_KEY);
          panel.getServerUsages(MC_ID).then((usage) => {
            if (
              usage.current_state === "running" &&
              MC_Discord_State === "offline"
            ) {
              MC_Discord_State = "running";
              interaction.update({
                embeds: [
                  message(
                    "Panel du serveur MC",
                    "https://global-img.gamergen.com/minecraft-image_0903D4000000952190.jpg",
                    "Ouvert",
                    "Allons-faire une maison moche ?",
                    "Minecraft",
                    "0x04F000"
                  ),
                ],
                components: [
                  Quatre_boutons(
                    "Start_MC",
                    "Start",
                    ButtonStyle.Success,
                    true,
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
                    false,
                    "Refresh_MC",
                    "Refresh",
                    ButtonStyle.Secondary,
                    false
                  ),
                ],
              });
            } else if (
              usage.current_state === "offline" &&
              MC_Discord_State === "running"
            ) {
              MC_Discord_State = "offline";
              interaction.update({
                embeds: [
                  message(
                    "Panel du serveur MC",
                    "https://global-img.gamergen.com/minecraft-image_0903D4000000952190.jpg",
                    "Fermé",
                    "Allons-faire une maison moche ?",
                    "Minecraft",
                    "0xff0000"
                  ),
                ],
                components: [
                  Quatre_boutons(
                    "Start_MC",
                    "Start",
                    ButtonStyle.Success,
                    false,
                    "Restart_MC",
                    "Restart",
                    ButtonStyle.Primary,
                    false,
                    "Stop_MC",
                    "Stop",
                    ButtonStyle.Danger,
                    true,
                    "Kill_MC",
                    "Kill",
                    ButtonStyle.Danger,
                    true,
                    "Refresh_MC",
                    "Refresh",
                    ButtonStyle.Secondary,
                    false
                  ),
                ],
              });
            } else if (
              usage.current_state === "running" &&
              MC_Discord_State === "running"
            ) {
              MC_Discord_State = "running";
              interaction.update({
                embeds: [
                  message(
                    "Panel du serveur MC",
                    "https://global-img.gamergen.com/minecraft-image_0903D4000000952190.jpg",
                    "Ouvert",
                    "Allons-faire une maison moche ?",
                    "Minecraft",
                    "0x04F000"
                  ),
                ],
                components: [
                  Quatre_boutons(
                    "Start_MC",
                    "Start",
                    ButtonStyle.Success,
                    true,
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
                    false,
                    "Refresh_MC",
                    "Refresh",
                    ButtonStyle.Secondary,
                    false
                  ),
                ],
              });
            } else if (
              usage.current_state === "offline" &&
              MC_Discord_State === "offline"
            ) {
              MC_Discord_State = "offline";
              interaction.update({
                embeds: [
                  message(
                    "Panel du serveur MC",
                    "https://global-img.gamergen.com/minecraft-image_0903D4000000952190.jpg",
                    "Fermé",
                    "Allons-faire une maison moche ?",
                    "Minecraft",
                    "0xff0000"
                  ),
                ],
                components: [
                  Quatre_boutons(
                    "Start_MC",
                    "Start",
                    ButtonStyle.Success,
                    false,
                    "Restart_MC",
                    "Restart",
                    ButtonStyle.Primary,
                    false,
                    "Stop_MC",
                    "Stop",
                    ButtonStyle.Danger,
                    true,
                    "Kill_MC",
                    "Kill",
                    ButtonStyle.Danger,
                    true,
                    "Refresh_MC",
                    "Refresh",
                    ButtonStyle.Secondary,
                    false
                  ),
                ],
              });
            }
          });
        }
      }
    }
  },
};
