const { getMetaData, reSizePic, compositeImages } = require("./src/fun")
const { logo } = require("./src/logo")
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

logo()

function getInfo() {
    getMetaData("./picture/face.png", "").then(function (result) {
        console.log("{============================================================}")
        console.log(result)
        console.log("{============================================================}")
    })
}

/*
reSizePic("./picture/anon.jpg", 650,600)
compositeImages()
*/

rl.question("\n| Select folder for picture: ", function (answer) {
    if (answer) {
        console.log("its run!")
        getInfo()
    }
    rl.close()
})