const { execSync } = require("child_process");

const model = (secArg) => {
  try {
    execSync("npm run g:model " + secArg[1], { stdio: [0, 1, 2] });
    console.log("\nMode sets created.\n");
  } catch (error) {
    console.log(
      "\nTry to: \n--cd to your project\n--provide a name parameter.\n--npm install.\n --for more help type: bms --help"
    );
  }
};
module.exports = { model };
