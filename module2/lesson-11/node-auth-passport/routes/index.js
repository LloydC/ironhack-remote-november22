const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  const isLoggedIn = req.user ? true : false;
  res.render('index', {isLoggedIn});
});

module.exports = router;
