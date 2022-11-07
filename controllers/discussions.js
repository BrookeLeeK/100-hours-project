const Comment = require("../models/Comment");
const Discussion = require("../models/Discussion");

module.exports = {
    //discussion created by the user, showing in their profile 
  getProfile: async (req, res) => {
    try {
      const discussions = await Discussion.find({ user: req.user.id });
      res.render("profile.ejs", { discussions: title, user: req.user, discussions: place_name });
    } catch (err) {
      console.log(err);
    }
  },
  //page for all discussions
  getDiscussions: async (req, res) => {
    try {
      const discussions = await Discussion.find().sort({ createdAt: "desc" }).lean();
      res.render("discussions.ejs", { discussions: discussions });
    } catch (err) {
      console.log(err);
    }
  },
  //specific discussion 
  getDiscussion: async (req, res) => {
    try {
      const discussion = await Discussion.findById(req.params.id);
      const comments = await Comment.find({discussion: req.params.id}).sort({ createdAt: "desc" }).lean();
      res.render("discussion.ejs", { discussion: discussion, user: req.user, comments: comments });
    } catch (err) {
      console.log(err);
    }
  },
  //create discussion
  createDiscussion: async (req, res) => {
    try {
      await Discussion.create({
        title: req.body.title,
        text: req.body.text,
        place_name: req.body.place_name,
        place_id: req.body.place_id,
        place_address: req.body.place_address,
        website: req.body.website,
        likes: 0,
        user: req.user.id,
        createdAt: req.body.createdAt,
        userName: req.body.userName
      });
      console.log("Discussion has been added!");
      console.log(req.body);
      res.redirect("/discussions");
    } catch (err) {
        console.log(err)
    }
  },
  likeDiscussion: async (req, res) => {
    try {
      await Discussion.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/discussion/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteDiscussion: async (req, res) => {
    try {
      // Find discussion by id
      let discussion = await Discussion.findById({ _id: req.params.id });
      // Delete discussion from db
      await Discussion.remove({ _id: req.params.id });
      console.log("Deleted Discussion");
      res.redirect("/discussions");
    } catch (err) {
    }
  },
};