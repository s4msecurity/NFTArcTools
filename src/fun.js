const sharp = require("sharp");
const {txtColor} = require("./logo")
const path = require("path")


/* pic composite */
module.exports.compositeImages = async function compositeImages(PName, inPName, top, left, resultPicture) {
  try {
    await sharp("./picture/face.jpg") //mom picture
      .composite([
        {
          input: "./picture/face_1.jpg", //picture for add
          top: 10,
          left: 50,
        },
      ])
      .toFile("./result/result.jpg"); //result picture
  } catch (err) {
    return txtColor("[E]","E")+" compositeImages :"+err
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
      .toFile(path.join(__dirname, "../", "resize", newFileName))
  } catch (err) {
    return txtColor("[E]","E")+" reSizePic :"+err
  }
}


/* picture get info */
module.exports.getMetaData = async function getMetaData(file, type) {
  try {
    const mData = await sharp(file).metadata();
    let res = mData
    return res
  } catch (err) {
    return  txtColor("[E]","E")+" getMetaData "+err
  }
}