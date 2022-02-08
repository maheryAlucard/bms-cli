const backendAction = require("./backendAction");

const backend = (action, actionRef, secArg) => {
  if (backendAction[action]) {
    backendAction[action](actionRef, secArg);
  } else {
    let actionsList = "";
    Object.keys(backendAction).forEach((key) => {
      actionsList = actionsList + "\n- " + key;
    });
    console.log(
      "Available action for 'backend' are: " +
        actionsList +
        "\n for more help type: bms --help"
    );
  }
};

const mobile = (action, actionRef, secArg) => {
  console.log("mobile not yet implemented ==> ", action, actionRef, secArg);
};

module.exports = { backend, mobile };
