const { getMetaData, reSizePic, compositeImages } = require("./src/fun")
const { logo } = require("./src/logo")
const readline = require("readline")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


/*
reSizePic("./picture/anon.jpg", 650,600)
compositeImages()
*/

result = ""
fPath  =""

function getInfo(callback){
    setTimeout(() =>{
        result = getMetaData(__dirname+"\\picture\\"+fPath, "width")
        callback()
    }, 100)
}

function writer(){
    setTimeout(() => {
        Promise.resolve(result).then(function(resul) {
            console.log(result)
        })
    }, 100)
}


rl.question("\n| Select folder for picture: ", function (answer) {
    if (answer) {
        fPath = answer
        if(fPath != ""){                
            getInfo(writer)
        }
    }
    rl.close()
})

