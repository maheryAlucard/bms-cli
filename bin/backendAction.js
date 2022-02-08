const creatAction = require("./BackendActions/creatAction");
const gAction = require("./BackendActions/gAction");
const dbAction = require("./BackendActions/dbAction");

const creatBaseAction = (actionReq) => (actionRef, secArg) => {
  if (actionReq[actionRef]) {
    actionReq[actionRef](secArg);
  } else {
    let actionsList = "";
    Object.keys(actionReq).forEach((key) => {
      actionsList = actionsList + "\n- " + key;
    });
    console.log(
      "Available sub action are: " +
        actionsList +
        "\n for more help type: bms --help"
    );
  }
};

const create = creatBaseAction(creatAction);
const g = creatBaseAction(gAction);
const db = creatBaseAction(dbAction);

module.exports = { create, g, db };
