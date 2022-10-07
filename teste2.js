const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

readline.question("O que você quer?", () => {
	const a = getRndInteger(0, 1);

	if (a === 0) {
		console.log("SIM!");
	} else {
		console.log("NÃO!");
	}
});
