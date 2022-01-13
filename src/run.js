const { getMetaData, reSizePic, compositeImages } = require("./fun")
const path = require("path")
const fs = require("fs")



function showDir(dirPath){
    fs.readdir(dirPath, function(err,data){
        if(err){
            console.log("Error showFolder: "+err)
        }
        data.forEach(function(value){
            if("face.png" != value){
                console.log(value)
            }
        })
    })
}
