const fs = require("fs");

const writeLog = function (message) {
  const logFilePath = "./log.txt";

  const currentDate = new Date();
  currentDate.setUTCHours(currentDate.getUTCHours());
  let dateString = currentDate.toString();
  dateString = dateString.replace(
    "GMT+0200 (Central European Summer Time)",
    ""
  );

  const logMessage = `${dateString}: ${message}\n`;

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) throw err;
  });
};

module.exports = writeLog;
