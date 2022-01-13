const sharp = require("sharp");

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
    return "compositeImages :"+err
  }
}


/* again resize */
module.exports.reSizePic =  async function reSizePic(file, w, h) {
  try {
    await sharp(file).resize({
      width: w,
      height: h
    })
      .toFormat("jpg", { mozjpeg: true })
      .toFile("./picture/resize/anon.jpg")
  } catch (err) {
    return "reSizePic :"+err
  }
}


/* picture get info */
module.exports.getMetaData = async function getMetaData(file, type) {
  try {
    const mData = await sharp(file).metadata();
    let res = mData
    return res
  } catch (err) {
    return err
  }
}