
const express = require("express");
const router = express.Router();

const { upload } = require("../middleware/upload.helper");
const { resize } = require("../middleware/photo.helper");
const { createMeme, getAllMemes } = require("../controllers/meme.controller");


router.get("/", getAllMemes,function (req, res, next) {
    res.json({ status: "ok", data: "Get all memes" });
});

router.post("/", upload.single("image"), resize, createMeme, (req, res, next) => {
    console.log(req.file);
    res.json({ status: "ok" });
});
 
module.exports = router;