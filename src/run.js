const { getMetaData, reSizePic, compositeImages } = require("./fun")
const { txtColor } = require("./logo")
const path = require("path")
const fs = require("fs")

var w = 0, h = 0, fileName = "", crtdSay = 0

/* Picture Control */
async function pictureControl(path) {
    try {
        return fs.statSync(path).isFile()
    } catch (err) {
        console.log(txtColor("pictureControl : ", "E") + " " + err)
        return false
    }
}

const resultSyncFun = async () => {
    await setTimeout(function () {
        autoCompletePicture(fileName)
    }, 1000)
}

function autoCompletePicture(fName) {

    try {

        for (let j = 0; j <= crtdSay; j++) {

            let _left = Math.floor(Math.random() * w)
            let _top = Math.floor(Math.random() * h)

            var i = 0
            fs.readdir(path.join(__dirname, "../", "resize"), function (err, data) {
                if (err) {
                    console.log(txtColor("readdir :", "E") + " " + err)
                }
                data.forEach(function (value) {
                    compositeImages(fName, value, _top, _left, "result_" + j)
                    if (fName != value) {
                        if (i <= data.length) {
                            i++
                        }
                    }
                })
                if (i <= data.length) {
                    setTimeout(function () {
                    }, 3000)
                    console.log(txtColor("NFT creation completed successfully. Total NFT generated : ", "*") + " " + crtdSay)
                }
            })
        }
    }
    catch (err) {
        console.log(txtColor("autoCompletePicture : ", "E") + " " + err)
    }
}


/* Get Picture Data And Create Resize */
async function getPictureInfo(fName, pWidth, pHeight, type, say) {

    var exist = await pictureControl(path.join(__dirname, "../", "picture", fName))

    if (exist == true) {
        if (type == "m") {
            if (pWidth != 0 && pHeight != 0) {
                try {
                    w = pWidth
                    h = pHeight
                    await getResizeDirectoryData(fName)
                    return true
                } catch (err) {
                    console.log(txtColor("width & height : ", "E") + " " + err)
                }
            }
            else if (pWidth == 0 && pHeight == 0) {
                try {
                    mDataResult = await getMetaData(path.join(__dirname, "../", "picture", fName), "") //home picture pix data
                    w = mDataResult.width
                    h = mDataResult.height
                    await getResizeDirectoryData(fName)
                    return true
                } catch (err) {
                    console.log(txtColor("getPictureInfo_type_m : ", "E") + " " + err)
                }
            }
            else {
                console.log(txtColor("Enter the correct width and height information.", "!"))
            }
        }
        else if (type == "a") {
            try {
                mDataResult = await getMetaData(path.join(__dirname, "../", "picture", fName), "") //home picture pix data
                w = mDataResult.width
                h = mDataResult.height
                crtdSay = say
                await getResizeDirectoryData(fName)
                resultSyncFun()
            } catch (err) {
                console.log(txtColor("getPictureInfo_type_a : ", "E") + " " + err)
            }
        }

    }
    else {
        console.log(txtColor("File not exist!", "!"))
    }
}

/* Get in Directory */
function getResizeDirectoryData(dirInPicName) {
    try {
        var i = 0
        fs.readdir(path.join(__dirname, "../", "picture"), function (err, data) {
            if (err) {
                console.log(txtColor("readdir :", "E") + " " + err)
            }
            data.forEach(function (value) {
                if (dirInPicName != value) {
                    reSizePic(value, "resize_" + i + ".jpeg", w, h)
                    if (i <= data.length) {
                        i++
                    }
                }
            })
            if (i <= data.length) {
                console.log(txtColor("Resizing is complete. Total number of resized images : ", "*") + " " + i)
                return true
            }
        })
    }
    catch (err) {
        console.log(txtColor("getDirectoryData : ", "E") + " " + err)
    }
}


module.exports.manuelCompletPicture = async function manuelCompletPicture(left, top, fName) {

    try {
        var i = 0
        fs.readdir(path.join(__dirname, "../", "resize"), function (err, data) {
            if (err) {
                console.log(txtColor("readdir :", "E") + " " + err)
            }
            data.forEach(function (value) {
                compositeImages(fName, value, top, left, "result_" + i)
                if (fName != value) {
                    if (i <= data.length) {
                        i++
                    }
                }
            })
            if (i <= data.length) {
                setTimeout(function () {
                }, 3000)
                console.log(txtColor("NFT creation completed successfully. Total NFT generated : ", "*") + " " + i)
            }
        })
    }
    catch (err) {
        console.log(txtColor("completPicture : ", "E") + " " + err)
    }
}

module.exports.rGetInf = async function rGetInf(fName, width, height, type, say) {
    try {
        getPictureInfo(fName, width, height, type, say)
        fileName = fName
    }
    catch (err) {
        console.log(txtColor("rGetInf : ", "E") + " " + err)
        return false
    }
}