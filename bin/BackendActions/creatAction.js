const { exec } = require("child_process");
const fs = require("fs");

const initAction = (action) => (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  action();
};

const afterCloning = () => {
  console.log(`stdout: ${stdout}`);
};

const project = (secArg) => {
  if (secArg) {
    const dir = "./fastify-restapi-prisma-boilerplate";
    if (fs.existsSync(dir)) {
      fs.rmdir(dir, { recursive: true }, (err) => {
        if (err) {
          throw err;
        }
        exec(
            "git clone https://github.com/maheryAlucard/fastify-restapi-prisma-boilerplate.git",
            initAction(afterCloning)
          );
      });
    } else {
      exec(
        "git clone https://github.com/maheryAlucard/fastify-restapi-prisma-boilerplate.git",
        initAction(afterCloning)
      );
    }
  } else {
    console.log(
      "You need to provide a name. \n for more help type: bms --help"
    );
  }
};

module.exports = { project };
