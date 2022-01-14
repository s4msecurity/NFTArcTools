const { rGetInf } = require("./src/run")
const { logo } = require("./src/logo")
const readline = require("readline")



/* Readline console terminali open */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* Logo */
logo()

rl.question("\n| Which variants of the painting will be created?: ", function (answer) {
    if (answer != "") {
            rGetInf(answer)
    }
    //rl.close()
})