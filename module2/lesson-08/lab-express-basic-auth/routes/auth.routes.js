const bcrypt = require("bcrypt")
const router = require("express").Router();
const saltRounds = 10;

const User = require('../models/User.model');

/* GET Signup page */
router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post("/signup", async (req,res) => {
    const { username, password, imageUrl } = req.body;
    const imageDB = imageUrl === '' ? 'images/default-avatar.png' : imageUrl;
 
    // make sure users fill all mandatory fields:
    if (!username || !password) {
      res.render('auth/signup', { errorMessage: 'All fields are mandatory. Please provide your username, email and password.' });
      return;
    }

    // make sure passwords are strong:
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res
      .status(500)
      .render('auth/signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
    return;
  }
  const passwordHash = await bcrypt.hash(password, saltRounds);
  
  User.create({username, password: passwordHash, imageUrl: imageDB})
      .then((newUser) => {
        req.session.currentUser = {username: newUser.username, imageUrl: newUser.imageUrl};
        res.redirect(`/auth/profile`)
      })
      .catch(err => console.log(err))
})

router.get('/login', (req, res) => {
    console.log('session ID',req.session.id)
    res.render('auth/login')
})

router.post('/login', (req, res) => {
    console.log('SESSION =====> ', req.session);
    const { username, password } = req.body;
    console.log('req.body', req.body)
//    Data validation check 
  if (username === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Please enter both, email and password to login.'
    });
    return;
  }

  User.findOne({ username })
    .then(user => { // --> { username: '', email: '', password: ''} || null
        console.log('user', user)
      if (!user) { // if user is not found in the DB
        res.render('auth/login', { errorMessage: 'Username is not registered. Try with other email.' });
        return;
      } else if (bcrypt.compareSync(password, user.password)) { // if password is correct
        // res.redirect(`/auth/profile/${user.username}`)
        // res.render('auth/profile', user);
        const { username, imageUrl } = user;
        req.session.currentUser = { username, imageUrl }; // creating the property currentUser 
        res.redirect('/auth/profile')
        
      } else { // if password is incorect
        res.render('auth/login', { errorMessage: 'Incorrect password.' });
      }
    })
    .catch(error => console.log(error));
})

router.get('/profile', (req, res) => {
    console.log(req.session.currentUser)
    res.render('auth/profile', req.session.currentUser)
})

router.post('/logout', (req, res) => {
    req.session.destroy(err => {
      if (err) console.log(err);
      res.redirect('/');
    });
  });

module.exports = router;