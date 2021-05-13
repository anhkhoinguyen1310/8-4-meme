const express = require("express");
const router = express.Router();

const {upload} = require("../middleware/upload.helper");
const {resize, blur} = require("../middleware/photo.helper");


router.get("/", function (req, res, next) {
  res.json({ status: "ok", data: "Get all memes" });
});

//upload is a middleWare
router.post("/", upload.single("image"), resize, blur, function (req, res, next) {
  console.log({file: req.file})
  res.json({ status: "ok", data: "create a meme" });
});
// multer help to capture files that are sent from postman 
module.exports = router;