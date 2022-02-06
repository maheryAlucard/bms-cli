const creatAction = require("./BackendActions/creatAction");

const creatBaseAction = (actionReq) => ((actionRef, secArg) => {
    if (actionReq[actionRef]) {
        actionReq[actionRef](secArg);
      } else {
        let actionsList = "";
        Object.keys(actionReq).forEach((key) => {
          actionsList = actionsList + "\n- " + key;
        });
        console.log(
          "Available action type are: " +
            actionsList +
            "\n for more help type: bms --help"
        );
      }
})

const create = creatBaseAction(creatAction);

module.exports = { create }