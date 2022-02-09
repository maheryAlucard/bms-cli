const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const afterRenamin = (secArg) => {
  fs.readFile("./" + secArg[1] + "/package.json", function (err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data.toString().replace(/___project_name___/g, secArg[1]);

    fs.writeFile("./" + secArg[1] + "/package.json", result, function (err) {
      if (err) return console.log(err);
      console.log(
        "Project created:\ncd to " +
          secArg[1] +
          "\n - npm i to install modules\n - open README for more details."
      );
    });
  });
};

const afterCloning = (secArg) => {
  const oldDirName = "./fastify-restapi-prisma-boilerplate";
  const newDirName = "./" + secArg[1];
  try {
    fs.renameSync(oldDirName, newDirName);
    afterRenamin(secArg);
  } catch (err) {
    console.log(err);
  }
};

const cloneRepo = (secArg) => {
  execSync(
    "git clone https://github.com/maheryAlucard/fastify-restapi-prisma-boilerplate.git",
    { stdio: [0, 1, 2] }
  );
  afterCloning(secArg);
};

const project = (secArg) => {
  if (secArg) {
    const dir = "./fastify-restapi-prisma-boilerplate";
    const prDir = "./" + secArg[1];
    if (fs.existsSync(dir)) {
      if (fs.existsSync(prDir)) {
        afterRenamin(secArg);
      } else {
        fs.rm(dir, { recursive: true }, (err) => {
          if (err) {
            throw err;
          }
          cloneRepo(secArg);
        });
      }
    } else {
      if (fs.existsSync(prDir)) {
        afterRenamin(secArg);
      } else cloneRepo(secArg);
    }
  } else {
    console.log(
      "You need to provide a name. \n for more help type: bms --help"
    );
  }
};

module.exports = { project };
