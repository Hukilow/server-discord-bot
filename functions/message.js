const { EmbedBuilder } = require("discord.js");

const message = function (title, img, etat, blague, nom, couleur) {
  const msg = new EmbedBuilder()
    .setColor(eval(couleur))
    .setTitle(title)
    .setURL("https://panel.ethanfoutry.fr")
    .setAuthor({
      name: nom,
      iconURL: img,
      color: 0x04f000,
    })
    .setThumbnail(img)
    .addFields({
      name: "N'hésitez pas à appuyer sur le bouton 'Refresh' afin d'actualiser l'état du serveur",
      value: " _ _",
      inline: true,
    })
    .addFields(
      { name: " ", value: " " },
      { name: "Etat du serveur", value: " " },
      { name: etat, value: " " },
      { name: " ", value: " " }
    )
    .addFields({
      name: blague,
      value: " _ _",
      inline: true,
    })
    .setImage(img)
    .setTimestamp()
    .setFooter({
      text: "Escape from GayPride",
      iconURL: img,
    });
  return msg;
};

module.exports = message;
