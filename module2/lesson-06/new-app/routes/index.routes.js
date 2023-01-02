const express = require('express');
const router = express.Router();

const User = require('../models/User.model');

/* GET home page */
router.get("/", (req, res, next) => {
  User.find()
      .then(users => res.render("index", { users }))
      .catch(err => console.log(err))
  
});

router.get("/about", (req, res, next) => {
  res.render("about");
});

router.get("/contact", (req, res, next) => {
  res.render("contact");
});

module.exports = router;
