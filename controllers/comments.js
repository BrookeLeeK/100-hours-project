const Comment = require("../models/Comment");

module.exports = {

  createComment: async (req, res) => {
    try {
      //adding a comment to a post
      await Comment.create({
        userName: req.body.userName,
        comment: req.body.comment,
        post: req.params.id,
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      try {
        //adding a comment to a discussion
        await Comment.create({
          userName: req.body.userName,
          comment: req.body.comment,
          discussion: req.params.id,
        });
        console.log("Comment has been added!");
        res.redirect("/discussion/"+req.params.id);
      } catch(err){
        console.log(err);
      }
    }
  },
};