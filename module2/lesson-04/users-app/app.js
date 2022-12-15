const bodyParser = require('body-parser')
const path = require('path');
const express = require('express');
const app = express();

const port = 3000;

const mongoose = require('mongoose');
const User = require('./models/User.model'); // loading the User model

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true}));

mongoose
  .connect('mongodb://localhost/userAppDemo')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(error => console.log(error))

app.get('/signup', (req, res)=>{
    res.render('signup')
})

app.post('/signup', (req, res) =>{
    console.log('req body', req.body)
    // req.body
    // Get the data from the signup form
    const { username, email, password } = req.body; // --> const username = req.body.username
    // Create a new user in our DB
    User.create({ username, email, password })
        .then(() => res.redirect('/profile'))
        .catch(error => console.log(error))
    // Redirect our user to their profile page
})

app.get('/profile', (req, res) => {
    res.render('profile')
})

app.listen(port, ()=> console.log(`Users App is running on port ${port}`))