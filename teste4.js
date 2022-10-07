var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let entrada1 = parseFloat(lines[0]) * 2;
let entrada2 = parseFloat(lines[1]) * 3;
let entrada3 = parseFloat(lines[2]) * 5;

const media = (entrada1 + entrada2 + entrada3) / 10;

console.log(`MEDIA = ${media.toFixed(5)}\n`);
