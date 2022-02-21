const fs = require("fs");
const readline = require("readline");

const interactiveMode = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("a =  ", function (a) {
    rl.question("b =  ", function (b) {
      rl.question("c = ", function (c) {
        console.log(a, b, c);
        rl.close();
      });
    });
  });

  rl.on("close", function () {
    console.log("\nBYE BYE !!!");
    process.exit(0);
  });
};

const noninteractiveMode = (filename) => {
  fs.readFile(filename, "utf8", function (err, data) {
    if (err) throw err;
    console.log(data);
  });
};

if (process.argv.length < 3) {
  console.log("interactive mode");
  interactiveMode();
} else {
  let filename = process.argv[2];
  console.log("noninteractive mode");
  noninteractiveMode(filename);
}
