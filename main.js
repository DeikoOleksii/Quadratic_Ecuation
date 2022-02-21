const fs = require("fs");

const interactiveMode = () => {};

const noninteractiveMode = () => {};

if (process.argv.length < 3) {
  console.log("interactive mode");
  interactiveMode();
  process.exit(1);
}

console.log("noninteractive mode");
noninteractiveMode();
