const express = require("express");
const router = express.Router();

// All route of Meme
const memeAPI = require("./memes.api");
router.use("/memes", memeAPI);

// const userAPI = require("./users.api");
// router.use("/user", userAPI);

// const postAPI = require("./posts.api");
// router.use("/posts", postAPI);

// const commentAPI= require("./comments.api");
// router.use("/comments", commentAPI); 

// const reactionAPI= require("./reactions.api");
// router.use("/comments", commentAPI);

module.exports = router; 