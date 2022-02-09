const { execSync } = require("child_process");

const mehtods = {
  GET: 1,
  POST: 1,
  PUT: 1,
  DELETE: 1,
};

const route = (secArg) => {
  try {
    if (secArg && secArg[1] && secArg[2] && secArg[3] && mehtods[secArg[2]]) {
      execSync(
        `hygen route new --file ${secArg[1]} --method ${secArg[2]} --name ${secArg[3]}`,
        {
          stdio: [0, 1, 2],
        }
      );
      console.log("\nRoute created.\n");
    } else {
      console.log(
        "\n3 argument are needed to add route: <model_name> <method> <route_name> \n-- Model name to add the route\n-- Route method : GET, POST, PUT, DELETE\n-- The route name\n --for more help type: bms --help"
      );
    }
  } catch (error) {
    console.log(
      "\nTry to: \n--cd to your project\n--provide a name parameter.\n--npm install.\n --for more help type: bms --help"
    );
  }
};
module.exports = { route };
