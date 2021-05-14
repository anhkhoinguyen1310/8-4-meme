const Jimp = require("jimp");

const resize = async (req, res, next) => {
  if (req.file) {
    try {
      const image = await Jimp.read(req.file.path);
      await image.scaleToFit(400, 400).write(req.file.path);
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next(new Error("Image required"));
  }
};

const blur = async (req, res, next) => {
    if (req.file) {
      try {
        const image = await Jimp.read(req.file.path);
        await image.blur(5).write(req.file.path); //.write to save the status
        next();
      } catch (err) {
        next(err);
      }
    } else {
      next(new Error("Image required"));
    }
  };
  const putTextOnImage = async (originalImagePath, outputMemePath, texts) => {
    try {
        const image = await Jimp.read(originalImagePath);
        const dimension = {
            width: image.bitmap.width,
            height: image.bitmap.height,
        };
        const promises = texts.map(async (text) => {
            const font = await Jimp.loadFont(
                Jimp[`FONT_SANS_${text.size}_${text.color}`]
            );
            await image.print(
                font,
                0,
                0,
                {
                    text: text.content,
                    alignmentX: Jimp[text.alignmentX],
                    alignmentY: Jimp[text.alignmentY],
                },
                dimension.width,
                dimension.height
            );
        });
        await Promise.all(promises);
        await image.writeAsync(outputMemePath);
    } catch (err) {
        throw err;
    }
};


module.exports = {
    resize,
    putTextOnImage
};