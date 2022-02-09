const usage =
  "\nUsage: bms <Platform>:<Action>:<Action_reference> name if needed.\n For further info pleas visit: https://www.npmjs.com/package/bms-cli-mg";

const options = [
  {
    letter: "a",
    actions: {
      alias: "actions",
      describe: "List all supported actions.",
      type: "boolean",
      demandOption: false,
    },
  },
];

module.exports = { usage, options };
