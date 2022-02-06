#! /usr/bin/env node
const { initYargs } = require("./services");
const { switchArgs } = require("./utils");
initYargs();
switchArgs();
