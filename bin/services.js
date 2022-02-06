const yargs = require("yargs");
const { usage, options } = require("./info");

const initYargs = () => {
  return yargs
    .usage(usage)
    .options(options[0].letter, options[0].actions)
    .help(true).argv;
};

module.exports = { initYargs };
