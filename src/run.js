const { getMetaData, reSizePic, compositeImages } = require("./fun")
const { txtColor } = require("./logo")
const path = require("path")
const fs = require("fs")

var w = 0, h = 0, nleft = 0, ntop = 0

async function pictureControl(path) {
    try {
        return fs.statSync(path).isFile()
    } catch (err) {
        console.log(txtColor("pictureControl : ", "E") + " " + err)
        return false
    }
}

/* Get Picture Data */
async function getPictureInfo(fName) {

    var exist = await pictureControl(path.join(__dirname, "../", "picture", fName))
    if (exist == true) {
        try {
            mDataResult = await getMetaData(path.join(__dirname, "../", "picture", fName), "") //home picture pix data
            w = mDataResult.width
            h = mDataResult.height
            await getResizeDirectoryData(fName)
            return true
        } catch (err) {
            console.log(txtColor("getPictureInfo : ", "E") + " " + err)
        }
    }
    else {
        console.log(txtColor("File not exist!", "!"))
    }
}

/* Get in Directory */
async function getResizeDirectoryData(dirInPicName) {
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
            }
        })
    }
    catch (err) {
        console.log(txtColor("getDirectoryData : ", "E") + " " + err)
    }
}


module.exports.completPicture = async function completPicture(left, top, fName) {
    
    try {
        var i = 0
        fs.readdir(path.join(__dirname, "../", "resize"), function (err, data) {
            if (err) {
                console.log(txtColor("readdir :", "E") + " " + err)
            }
            data.forEach(function (value) {
                compositeImages(fName,value,top,left,"result_"+i)
                if (fName != value) {
                    if (i <= data.length) {
                        i++
                    }
                }
            })
            if (i <= data.length) {
                console.log(txtColor("NFT creation completed successfully. Total NFT generated : ", "*") + " " + i)
            }
        })
    }
    catch (err) {
        console.log(txtColor("getDirectoryData : ", "E") + " " + err)
    }
}

module.exports.rGetInf = async function rGetInf(fName) {
    try {
        getPictureInfo(fName)
        return true
    }
    catch (err) {
        console.log(txtColor("rGetInf : ", "E") + " " + err)
        return false
    }
}