const Comment = require("../models/Comment");

module.exports = {

  createComment: async (req, res) => {
    try {
      //adding a comment to a post
      await Comment.create({
        user: req.user.id,
        comment: req.body.comment,
        post: req.params.id,
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err)
    }
  },
  createDiscussionComment: async (req, res) => {
    try {
      await Comment.create({
        user: req.user.id,
        comment: req.body.comment,
        discussion: req.params.id,
      });
      console.log("Comment created for Discussion!");
      res.redirect("/discussion/"+req.params.id)
    } catch (err) {
      console.log(err)
    }
  },
  deleteComment: async (req, res) => {
    try {
      // Find comment by id
      let comment = await Comment.findById({ _id: req.params.id });
      // Delete comment from db
      await Comment.remove({ _id: req.params.id });
      console.log("Deleted Comment");
      //res.redirect('back');
      res.redirect("/discussions");
    } catch (err) {
      console.log(err);
    }
  },
};
