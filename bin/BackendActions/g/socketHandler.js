const { execSync } = require("child_process");

const sochandler = (secArg) => {
  try {
    execSync("npm run g:sochandler " + secArg, { stdio: [0, 1, 2] });
    console.log("\nMode sets created.\n");
  } catch (error) {
    console.log(
      "\nTry to: \n--cd to your project\n--provide a name parameter.\n--npm install.\n --for more help type: bms --help"
    );
  }
};
module.exports = { sochandler };
