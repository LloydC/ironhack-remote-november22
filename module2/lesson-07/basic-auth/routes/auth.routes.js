const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const User = require('../models/User.model')
const saltRounds = 10;

/* GET Signup page */
router.get("/signup", (req, res) => {
  res.render("auth/signup");
});
//  POST Signup page
router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.render('auth/signup', { errorMessage: 'All fields are mandatory. Please provide your username, email and password.' });
        return;
    }

    const passwordHash = await bcrypt.hash(password, saltRounds);
  
    User.create({username, email, password: passwordHash})
        .then(newUser => res.redirect(`/auth/profile/${newUser.username}`))
        .catch(err => console.log(err))
})

// Get Login page
router.get("/login", (req, res) => {
    console.log('SESSION =====> ', req.session);
    res.render("auth/login")
})

// Post Login
router.post("/login", (req, res) => {
    console.log('SESSION =====> ', req.session);
    const { email, password } = req.body;
 
//    Data validation check 
  if (email === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Please enter both, email and password to login.'
    });
    return;
  }


  User.findOne({ email })
    .then(user => { // --> { username: '', email: '', password: ''} || null
        console.log('user', user)
      if (!user) { // if user is not found in the DB
        res.render('auth/login', { errorMessage: 'Email is not registered. Try with other email.' });
        return;
      } else if (bcrypt.compareSync(password, user.password)) { // if password is correct
        // res.redirect(`/auth/profile/${user.username}`)
        // res.render('auth/profile', user);
        const { username, email } = user;
        req.session.currentUser = { username, email }; // creating the property currentUser 
        res.redirect('/auth/profile')
        
      } else { // if password is incorect
        res.render('auth/login', { errorMessage: 'Incorrect password.' });
      }
    })
    .catch(error => console.log(error));
})

// router.get("/profile/:username", (req, res) => {
//     const { username } = req.params;
    
//     User.findOne({ username }) // --> {username..., email..., password...}
//         .then( foundUser => res.render("auth/profile", foundUser))
//         .catch(err => console.log(err))
// })

router.get("/profile", (req, res) => {
    console.log('currentUser:', req.session.currentUser);
    const {currentUser} = req.session;

    if(currentUser){
        res.render("auth/profile", currentUser)
    }
    else {
        res.render("auth/profile")
    }
   
})

router.post('/logout', (req, res) => {
    req.session.destroy(err => {
      if (err) console.log(err);
      res.redirect('/');
    });
  });

module.exports = router;