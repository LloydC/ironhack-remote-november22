const express = require('express');
const router = express.Router();

// Signup
router.get('/signup', (req, res) => {
    res.render('auth/signup')
})

router.post('/signup', (req, res) =>{

})
// Login

router.get('/login', (req, res)=>{
    res.render('auth/login')
})

router.post('/login', (req, res) =>{

})

// Profile route
router.get('/profile', (req, res) => {
    res.render('auth/profile')
})

module.exports = router;