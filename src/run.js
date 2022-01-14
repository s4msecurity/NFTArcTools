const { getMetaData, reSizePic, compositeImages } = require("./fun")
const path = require("path")
const fs = require("fs")


var w = 0, h = 0

function reSizePicture(fName, w,h) {
    console.log("File Name: "+fName+"\n"+"Width: "+w+"\n"+"Height: "+h)
}


/* Get Picture Data */
async function getPictureInfo(fName) {
    try {
        mDataResult = await getMetaData(path.join(__dirname, "../", "picture", fName), "") //home picture pix data
        w = mDataResult.width
        h = mDataResult.height
        await getDirectoryData(fName)
    } catch (err) {
        console.log(err)
    }
}
module.exports.rGetInf = function rGetInf(fName) {
    getPictureInfo(fName)
}

/* Get in Directory */
async function getDirectoryData(dirInPicName) {
    try {
        var i = 0
        fs.readdir(path.join(__dirname, "../", "picture"), function (err, data) {
            if (err) {
                console.log("Error readdir: " + err)
            }
            data.forEach(function (value) {
                if (dirInPicName != value) {
                    reSizePicture(value, w,h)
                }
            })

        })
    }
    catch(err){
        console.log("Error getDirectoryData: "+err)
    }
}