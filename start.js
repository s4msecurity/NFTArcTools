const { rGetInf } = require("./src/run")
const { logo } = require("./src/logo")
const readline = require("readline")

var type = "", left = 0, rigth = 0


/* Readline console terminali open */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function start(){  
    rl.question("\n[?] Which variants of the painting will be created?: ", function (answer) {
        if (answer != "") {
                rGetInf(answer)
        }
        rl.close()
    })
}

async function createdType(){
    rl.question("\n[?] How many images do you want to produce?: ", function(answer){
        if(answer != ""){
            console.log("Youre request: "+answer)
        }
    })
    rl.close()
}


/* Logo */
logo()
/* Start func */
start()