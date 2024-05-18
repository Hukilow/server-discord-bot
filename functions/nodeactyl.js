const Nodeactyl = require("nodeactyl");

const nodeactyl_commands = function (todo, panel_link, API_KEY, SERVER_ID) {
    const panel = new Nodeactyl.NodeactylClient(panel_link,API_KEY);
    eval(`panel.${todo}Server("${SERVER_ID}")`);
	
}

module.exports = nodeactyl_commands;