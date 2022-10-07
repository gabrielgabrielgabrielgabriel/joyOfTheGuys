var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let entrada1 = parseFloat(lines[0]) * 3.5;
let entrada2 = parseFloat(lines[1]) * 7.5;

const media = (entrada1 + entrada2) / 11;

console.log(`MEDIA = ${media.toFixed(5)}\n`);
