const { rGetInf } = require("./src/run")
const { logo, txtColor } = require("./src/logo")
const readline = require("readline-sync");

var type = "", left = 0, top = 0, fName = ""

function manuelCreater(){
    left = readline.question(txtColor("How many pixels should be entered from the left? : ","?"))
    top = readline.question(txtColor("How many pixels should be entered from the top? : ","?"))
    if((left.charCodeAt(0) >= 47 && left.charCodeAt(0) <= 57) && (top.charCodeAt(0) >= 47 && top.charCodeAt(0) <= 57)){
        
    }
    else{
        console.log(txtColor("Please enter a numeric value.","E"))
        manuelCreater()
    }
    
}

function randomCreater(){
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
            return type
        }
    } catch (err) {
        console.log(txtColor("createdType : ", "E") + " " + err)
    }
}

function resizeStart(fName) {
    try {
        rGetInf(fName)
    } catch (err) {
        console.log(txtColor("onceStart : ", "E") + " " + err)
        return false
    }
}
//logo()
function appStat() {
    fName = resizeStart(readline.question(txtColor("Which variants of the painting will be created? : ", "?")))
    createStart(readline.question(txtColor("How about the type of rendering the images? Enter [R/r] for random, [M/m] for manual entry : ", "?")))    
}

appStat()
