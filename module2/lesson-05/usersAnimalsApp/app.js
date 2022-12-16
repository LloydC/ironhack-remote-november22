const bodyParser = require('body-parser')
const path = require('path');
const express = require('express');
const app = express();

const port = 3000;

const mongoose = require('mongoose');
const User = require('./models/User.model'); // loading the User model
const Pet = require('./models/Pet.model');

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true}));

mongoose
  .connect('mongodb://localhost/usersAnimalApp')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(error => console.log(error))

app.get('/', (req, res) => {
    //Get all the users in my database
    User.find()
        .then( allUsers =>{
            res.render('index', { allUsers })
        })
        .catch(error => console.log(error))
    // Send the list of users to my homepage
})

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
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
    // Redirect our user to their profile page
})

app.get('/profile/:username', (req, res) => {
    const { username } = req.params; // const username = req.params.username
    
    User.findOne({ username })
        .then( foundUser => {
            res.render('profile', foundUser)
        })
        .catch(error => console.log(error))
    
})

// Route for the form which enables the update
app.get('/users/edit/:userId', (req, res) => {
    const { userId }= req.params;

    User.findById(userId)
        .then(foundUser => {
            res.render('edit', foundUser)
        })
        .catch(error => console.log(error))
    
})

// Route that will process the update
app.post('/users/edit/:userId', (req, res) =>{
    const { userId }= req.params;
    const { username, email, password } = req.body;

    User.findByIdAndUpdate(userId, { username, email, password })
        .then(() => res.redirect(`/profile/${username}`))
        .catch(error => console.log(error))
})

//Route that will delete the user 
app.post('/users/delete/:userId', (req, res) =>{
    const { userId }= req.params;

    User.findByIdAndDelete(userId)
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
})

//Route to add a pet in the DB
app.post('/animals/create', async (req,res) => {
    console.log(req.body)
    const { name, animalType, age, userId } = req.body;


    // async/await solution
    
    const owner = await User.findOne({_id: userId})
   
    const petAction = await Pet.create({ name, animalType, age: Number(age), ownersId: userId})
                                .then(newPet => {
                                    owner.petsId.push(newPet._id)
                                    owner.save();
                                })
                                .catch(err => console.log(err))
           
    res.redirect('/');

    // Promise chain solution

    // User.findOne({_id: userId})
    //     .then((owner) => {
    //         return Pet.create({ name, animalType, age: Number(age), ownersId: userId})
    //                 .then(newPet => {
    //                     owner.petsId.push(newPet._id)
    //                     owner.save();
    //                 })
    //     .then(() => res.redirect('/'))
    //     .catch(err => console.log(err))
    // })
    
    
})

app.listen(port, ()=> console.log(`Users App is running on port ${port}`))