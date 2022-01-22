const sharp = require("sharp");
const {txtColor} = require("./logo")
const path = require("path")


/* pic composite */
module.exports.compositeImages = async function compositeImages(fName, inputPictureName, ntop, nleft, resultPictureName) {
  try {
    await sharp(path.join(__dirname, "../", "picture", fName)) //mom picture
      .composite([
        {
          input: path.join(__dirname, "../", "resize", inputPictureName), //picture for add
          top: parseInt(ntop),
          left: parseInt(nleft),
        },
      ])
      .toFile(path.join(__dirname, "../", "result", resultPictureName+".jpg")); //result picture
  } catch (err) {
    return txtColor("compositeImages :","E")+" "+err
  }
}


/* again resize */
module.exports.reSizePic =  async function reSizePic(fileName,newFileName, w, h) {
  try {
    await sharp(path.join(__dirname, "../", "picture", fileName)).resize({
      width: w,
      height: h
    })
      .toFormat("png", { mozpng: true })
      .toFile(path.join(__dirname, "../", "resize", newFileName))
  } catch (err) {
    return txtColor("reSizePic :","E")+" "+err
  }
}


/* picture get info */
module.exports.getMetaData = async function getMetaData(file, type) {
  try {
    const mData = await sharp(file).metadata();
    let res = mData
    return res
  } catch (err) {
    return  txtColor("getMetaData :","E")+" "+err
  }
}