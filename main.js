const fs = require("fs");
const readline = require("readline");

const solve = (data) => {
  console.log(data);
  let a = data[0],
    b = data[1],
    c = data[2];
  let d = Math.pow(b, 2) - 4 * a * c;
  let x1 = (-1 * b + Math.sqrt(d)) / (2 * a);
  let x2 = (-1 * b - Math.sqrt(d)) / (2 * a);
  console.log(x1, x2);
};

const checkData = (data) => {
  let reg = new RegExp(/\d\s\d\s\d\r\n/);
  let res = reg.exec(data);
  if (res) return true;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const interactiveMode = (number, data) => {
  rl.question(`${number} = `, (res) => {
    if (isNaN(res) === false && res !== " ") {
      data.push(res);
      if (data.length == 1) interactiveMode("b", data);
      else if (data.length == 2) interactiveMode("c", data);
      else {
        rl.close();
        console.log(
          `Equation is ${numbers[0]}x^2 + ${numbers[1]}x + ${numbers[2]} = 0`
        );
        solve(data);
      }
    } else {
      console.log("Valid number expected");
      interactiveMode(number, data);
    }
  });
  return data;
};

const noninteractiveMode = (filename) => {
  fs.readFile(filename, "utf8", function (err, data) {
    if (err) throw err;
    if (checkData(data)) solve(data);
    else console.log("invalid data");
    process.exit(0);
  });
};

let numbers = [];

if (process.argv.length < 3) {
  console.log("interactive mode");
  numbers = interactiveMode("a", []);
} else {
  let filename = process.argv[2];
  console.log("noninteractive mode");
  noninteractiveMode(filename);
}
