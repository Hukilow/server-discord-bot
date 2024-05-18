const { ActionRowBuilder, ButtonBuilder } = require("discord.js");

const Quatre_boutons = function (
  ID1,
  LABEL1,
  STYLE1,
  DISABLE1,
  ID2,
  LABEL2,
  STYLE2,
  DISABLE2,
  ID3,
  LABEL3,
  STYLE3,
  DISABLE3,
  ID4,
  LABEL4,
  STYLE4,
  DISABLE4,
  ID5,
  LABEL5,
  STYLE5,
  DISABLE5
) {
  const boutons = [];

  for (let i = 1; i <= 5; i++) {
    const ID = "ID" + i;
    const LABEL = "LABEL" + i;
    const STYLE = "STYLE" + i;
    const DISABLE = "DISABLE" + i;
    const bouton = new ButtonBuilder()
      .setCustomId(eval(ID))
      .setLabel(eval(LABEL))
      .setStyle(eval(STYLE))
      .setDisabled(eval(DISABLE));
    boutons.push(bouton);
  }
  const row = new ActionRowBuilder().addComponents(
    boutons[0],
    boutons[1],
    boutons[2],
    boutons[3],
    boutons[4]
  );
  return row;
};

module.exports = Quatre_boutons;
