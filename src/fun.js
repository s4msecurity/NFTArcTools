const sharp = require("sharp");
const path = require("path")

/* pic composite */
module.exports.compositeImages = async function compositeImages() {
  try {
    await sharp("./picture/face.jpg")
      .composite([
        {
          input: "./picture/face_1.jpg",
          top: 10,
          left: 50,
        },
      ])
      .toFile("./result/result.jpg");
  } catch (err) {
    return "Error compositeImages :"+err
  }
}


/* again resize */
module.exports.reSizePic =  async function reSizePic(fileName,newFileName, w, h) {
  try {
    await sharp(path.join(__dirname, "../", "picture", fileName)).resize({
      width: w,
      height: h
    })
      .toFormat("jpg", { mozjpeg: true })
      .toFile(path.join(__dirname, "../", "picture", newFileName))
  } catch (err) {
    return "Error reSizePic :"+err
  }
}


/* picture get info */
module.exports.getMetaData = async function getMetaData(file, type) {
  try {
    const mData = await sharp(file).metadata();
    let res = mData
    return res
  } catch (err) {
    return  "Error getMetaData "+err
  }
}