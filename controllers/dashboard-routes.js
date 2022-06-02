const router = require("express").Router();
const sequelize = require("../config/config");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "title", "post_content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("dashboard", {
        posts,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "post_content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      const posts = dbPostData.get({ plain: true });
      res.render("edit-post", { posts, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/create", (req, res) => {
  // Post.findAll({
  //   where: {
  //     id: req.params.id,
  //   },
  //   attributes: ["id", "title", "post_content", "created_at"],
  //   include: [
  //     {
  //       model: Comment,
  //       attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
  //       include: {
  //         model: User,
  //         attributes: ["username"],
  //       },
  //     },
  //     {
  //       model: User,
  //       attributes: ["username"],
  //     },
  //   ],
  // })
  //   .then((dbPostData) => {
  //     if (!dbPostData) {
  //       res.status(404).json({ message: "No post found with this id" });
  //       return;
  //     }
  //     const posts = dbPostData.get({ plain: true });
  //     res.render("create-post", { post, loggedIn: true });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });
  res.render("create-post");
});

module.exports = router;
