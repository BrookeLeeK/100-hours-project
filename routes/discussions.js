const express = require("express");
const router = express.Router();
const discussionsController = require("../controllers/discussions");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Discussion Routes - simplified for now
router.get("/:id", ensureAuth, discussionsController.getDiscussion);

router.get("/discussions", ensureAuth, discussionsController.getDiscussions);

router.post("/createDiscussion", discussionsController.createDiscussion);

router.put("/likeDiscussion/:id", discussionsController.likeDiscussion);

router.delete("/deleteDiscussion/:id", discussionsController.deleteDiscussion);

module.exports = router;