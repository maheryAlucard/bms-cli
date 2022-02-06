const yargs = require("yargs");
const { usage } = require("./info");
const platformAction = require("./platformAction");

const showHelp = () => {
  console.log(usage);
  console.log("type bms --help for more help.");
};

const switchArgs = () => {
  let argv = yargs.argv._[0];
  let secArg = yargs.argv._[1];
  if (argv == null) {
    showHelp();
    return;
  } else {
    const [platform, action, actionRef] = argv.split(":");
    if (platformAction[platform]) {
      platformAction[platform](action, actionRef, secArg);
    }else console.log("Available platform are: \n- backend\n- mobile\n for more help type: bms --help")
  }
};

module.exports = { switchArgs };
