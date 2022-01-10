const sharp = require("sharp");


/* resim birlestirme */
module.exports.compositeImages = async function compositeImages() {
  try {
    await sharp("./picture/face.jpg")
      .composite([
        {
          input: "./resize/anon.jpg",
          top: 10,
          left: 50,
        },
      ])
      .toFile("./result/result.jpg");
  } catch (err) {
    return "compositeImages :"+err
  }
}

/* Yeniden boyutlandirma */
module.exports.reSizePic =  async function reSizePic(file, w, h) {
  try {
    await sharp(file).resize({
      width: w,
      height: h
    })
      .toFormat("jpg", { mozjpeg: true })
      .toFile("./resize/anon.jpg")
  } catch (err) {
    return "reSizePic :"+err
  }
}

/* ana resim bilgilerini getirme */
module.exports.getMetaData =  async function getMetaData(file,type) {
  try {
    const mData = await sharp(file).metadata();
    res = 0
    switch (type) {
      case 'width':
        res = mData.width
        break
      case 'height':
        res = mData.height
        break
      case 'format':
        res = mData.format
        break
      default:
        res = mData
    }
    return res
  } catch (err) {
    return err
  }
}

 


