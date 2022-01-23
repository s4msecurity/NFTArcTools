const { rGetInf, completPicture } = require("./src/run")
const { logo, txtColor } = require("./src/logo")
const readline = require("readline-sync");

var left = 0, top = 0, fName = "", wPicture = 0, hPicture = 0

const resulSyncFun = async () => {
    await setTimeout(function () {
        completPicture(left, top, fName)
    }, 3000)

}


async function maneulCreateParameter(mType) {

    if (mType == "M" || mType == "m") {

        wPicture = readline.question(txtColor("Enter the width values of the images : ", "?"))
        hPicture = readline.question(txtColor("Enter the height values of the images : ", "?"))

        if (
            (left.charCodeAt(0) >= 47 && left.charCodeAt(0) <= 57) &&
            (top.charCodeAt(0) >= 47 && top.charCodeAt(0) <= 57) &&
            (wPicture.charCodeAt(0) >= 47 && wPicture.charCodeAt(0) <= 57) &&
            (hPicture.charCodeAt(0) >= 47 && hPicture.charCodeAt(0) <= 57)
        ) {
            rGetInf(fName, wPicture, hPicture)
            resulSyncFun()
        }
        else {
            console.log(txtColor("Please enter a numeric value.", "E"))
            manuelCreater()
        }
    }
    else if (mType == "A" || mType == "a") {
        if ((left.charCodeAt(0) >= 47 && left.charCodeAt(0) <= 57) && (top.charCodeAt(0) >= 47 && top.charCodeAt(0) <= 57)) {
            rGetInf(fName, 0 ,0)
            resulSyncFun()
        }
        else {
            console.log(txtColor("Please enter a numeric value.", "E"))
            manuelCreater()
        }
    }
    else {
        console.log(txtColor("Please enter [A/a] or [M/m].", "!"))
        manuelCreater()
    }
}


async function manuelCreater() {
    left = readline.question(txtColor("How many pixels should be entered from the left? : ", "?"))
    top = readline.question(txtColor("How many pixels should be entered from the top? : ", "?"))
    mType = readline.question(txtColor("Should the height and width settings be manual [M/m] or automatic [A/a]? : ", "?"))
    maneulCreateParameter(mType)
}

function randomCreater() {
    console.log("random selected")
}

function createStart(type) {
    try {
        switch (type) {
            case "R":
                randomCreater()
                break
            case "r":
                randomCreater()
                break
            case "M":
                manuelCreater()
                break
            case "m":
                manuelCreater()
                break
            default:
                console.log(txtColor("Please enter R and M.", "!"))
                appStat()
        }
    } catch (err) {
        console.log(txtColor("createdType : ", "E") + " " + err)
    }
}


logo()
function appStat() {
    fName = readline.question(txtColor("Which variants of the painting will be created? : ", "?"))
    createStart(readline.question(txtColor("How about the type of rendering the images? Enter [R/r] for random, [M/m] for manual entry : ", "?")))
}

appStat()
