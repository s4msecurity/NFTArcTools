const {getMetaData, reSizePic, compositeImages} = require("./src/fun")


getMetaData("./picture/anon.jpg","").then(function (result) {
    console.log("{============================================================}")
    console.log(result)
    console.log("{============================================================}")
})

/*
reSizePic("./picture/anon.jpg", 650,600)
compositeImages()
*/