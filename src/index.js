const postcss = require("postcss");

const { plugin } = require("./plugin");

module.exports = postcss.plugin("postcss-transform-pxvw", plugin);
