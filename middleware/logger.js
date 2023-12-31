const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const dateTime = new Date().toLocaleString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  const logItem = `${dateTime}\t${message}\n`;

  try {
    if (!fsPromises.access(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", "logs.log"),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
