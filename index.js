const os = require("os");
const fs = require("fs");
const path = require("path");

module.exports.app = (req, res) => {
  res.end(`
yarn ver: ${fs.readFileSync(path.join(__dirname, "version.txt"), "utf-8")}
currentdir ${__dirname}
  `);
};
