const writeLog = require("/home/container/functions/writeLog.js");

const remind = function(client) {
    const now = new Date();
    const jour = now.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 4 = Jeudi, ..., 6 = Samedi
    const heures = now.getHours();
    const minutes = now.getMinutes();

    if (heures === 18 && minutes === 30) {
        client.users.send('667030892966838332', 'Ceci est un message pour te rappeler de prendre tes **récompenses quotidiennes** !! ')
            .then(() => writeLog("Message quotidien envoyé"))
            .catch(console.error);
    }
    if (jour === 4 && heures === 18 && minutes === 30) {
        client.users.send('667030892966838332', 'Ceci est un message pour te rappeler de récupérer ton jeu Epic Game __gratuit__ !')
            .then(() => writeLog("Message hebdo envoyé"))
            .catch(console.error);
    }
};

    
module.exports = remind;