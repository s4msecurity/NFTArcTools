const { getMetaData, reSizePic, compositeImages } = require("./src/fun")
const { logo } = require("./src/logo")
const readline = require("readline")



/* Readline console terminali open */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* Logo */
logo()


/* Get Picture Data */
var result, fPath

function getPictureInfo(callback){
    setTimeout(() =>{
        result = getMetaData(__dirname+"\\picture\\"+fPath, "")
        callback()
    }, 100)
}

function writer(){
    setTimeout(() => {
        Promise.resolve(result).then(function(res) {
            console.log("width: "+res.width)
            console.log("height: "+res.height)
        })
    }, 100)
}

rl.question("\n| Which variants of the painting will be created?: ", function (answer) {
    if (answer) {
        fPath = answer
        if(fPath != ""){                
            getPictureInfo(writer)
        }
    }
    //rl.close()
})
