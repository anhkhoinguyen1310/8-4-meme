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
module.exports = {
  resize,
  blur,
};