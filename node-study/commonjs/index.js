const game = require("./lib.js");
const action = process.argv[process.argv.length - 1];
const result = game(action);
console.log(result);

process.stdin.on("data", (e) => {
  const action = e.toString().trim();
});
p;
