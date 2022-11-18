const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes 


//Commenting on a Post Route
router.post("/createComment/:id", commentsController.createComment);
//Commenting on a discussion Route 
router.post("/createDiscussionComment/:id", commentsController.createDiscussionComment);
//Deleting a comment
router.delete("/deleteComment/:id", commentsController.deleteComment);

module.exports = router;