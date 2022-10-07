var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let entrada1 = parseFloat(lines[0]);
let entrada2 = parseFloat(lines[1]);
let entrada3 = parseFloat(lines[2]);
let entrada4 = parseFloat(lines[3]);

const resultado = entrada1 * entrada2 - entrada3 * entrada4;

console.log(`DIFERENÇA = ${resultado}\n`);
