const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

const readContent = async (namespace, num) => [
  await readFile(`./tests/${namespace}/${num}.${namespace}`, "utf-8"),
  await readFile(`./tests/${namespace}/${num}.example.css`, "utf-8")
];

module.exports = { readContent };
