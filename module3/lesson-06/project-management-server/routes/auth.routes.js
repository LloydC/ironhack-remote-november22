const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
 
const router = express.Router();
const saltRounds = 10;
 
// POST  /auth/signup
router.post("/signup", (req, res) => {
    const {email, password, name } = req.body;

    if (email === '' || password === '' || name === '') {
        res.status(400).json({ message: "Provide email, password and name" });
        return;
      }
     
      // Use regex to validate the email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(email)) {
        res.status(400).json({ message: 'Provide a valid email address.' });
        return;
      }
      
      // Use regex to validate the password format
      const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
      if (!passwordRegex.test(password)) {
        res.status(400).json({ message: 'Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.' });
        return;
      }

      User.findOne({ email })
        .then(async (foundUser) => {
        // If the user with the same email already exists, send an error response
        if (foundUser) {
            res.status(400).json({ message: "User already exists." });
            return;
        }

        const passwordHash = await bcrypt.hash(password, saltRounds)
        return User.create({email, password: passwordHash, name})
        })
        .then(createdUser => {
            const user = {_id: createdUser._id, email: createdUser.email, name: createdUser.name};
            return res.status(201).json({ user })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Internal Server Error" })
          });
})
 
 
// POST  /auth/login
router.post("/login", (req, res) => {
    
})
 
 
// GET  /auth/verify
// ...
 
module.exports = router;