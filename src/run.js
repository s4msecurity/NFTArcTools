const { getMetaData, reSizePic, compositeImages } = require("./fun")
const path = require("path")
const fs = require("fs")

var w = 0, h = 0

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
module.exports.rGetInf = async function rGetInf(fName) {
    try{
    getPictureInfo(fName)
    }
    catch(err){
        console.log("[E] Error rGetInf")
    }
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
                    reSizePic(value, "resize_"+i+".jpeg", w ,h)
                    if(i <= data.length){
                        i++
                    }
                }
            })
            if(i <= data.length){
                console.log("[!] Resizing is complete. Total number of resized images: "+i)
            }
        })
    }
    catch(err){
        console.log("[E] Error getDirectoryData: "+err)
    }
}