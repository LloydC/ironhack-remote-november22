const bodyParser = require('body-parser')
const path = require('path');
const express = require('express');
const app = express();

const port = 3000;

const mongoose = require('mongoose');
const User = require('./models/User.model'); // loading the User model
const Pet = require('./models/Pet.model');
const Address = require('./models/Address.model');

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
    // console.log('req body', req.body)
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
        .populate('petsId')
        .then( foundUser => {
            console.log('user: ', foundUser)
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
    // console.log(req.body)
    const { name, animalType, age, userId } = req.body;


    // async/await solution
    
    try {
        const owner = await User.findOne({_id: userId}) // add await to ensure that User.findOne() gets resolved before continuing our code execution
   
        const petAction = await Pet.create({ name, animalType, age: Number(age), ownersId: userId}) // add the Pet to the DB
                                    .then(newPet => {
                                        owner.petsId.push(newPet._id) // update owner.petsId
                                        owner.save(); // save the update in the DB
                                    })
                                  
           
        res.redirect('/');
    }
    catch(err) {
        console.log(err)
    }
    

    // Promise chain solution

    // update the owner of the pet after adding the pet to the DB
    // User.findOne({_id: userId}) // finding the owner in advance so I can update its petsId field later
    //     .then((owner) => {
    //         return Pet.create({ name, animalType, age: Number(age), ownersId: userId}) // adding the pet to the DB
    //                 .then(newPet => {
    //                     owner.petsId.push(newPet._id) // adding the newPet to the petsId field
    //                     owner.save(); // saving that change to the DB
    //                 })
    //     .then(() => res.redirect('/'))
    //     .catch(err => console.log(err))
    // })
    
    
})

app.get('/animals/:animalId', (req, res) => {
    const { animalId} = req.params;

    Pet.findOne({_id: animalId})
        .populate('ownersId')
        .then((pet) =>{
            console.log('pet:', pet)
            res.render('petProfile', pet)
        })
})

app.post('/address/create', async (req, res) =>{
   // console.log(req.body)
    const { houseNumber, streetName, city, zipCode, userId } = req.body;


    // async/await solution
    
    try {
        const tenant = await User.findOne({_id: userId}) // add await to ensure that User.findOne() gets resolved before continuing our code execution
   
        const addressAction = await Address.create({ houseNumber, streetName, city, zipCode, tenant: userId }) // add the Pet to the DB
                                    .then(newAddress => {
                                        tenant.address = newAddress._id; // update tenant.petsId
                                        tenant.save(); // save the update in the DB
                                    })
                                  
           
        res.redirect('/');
    }
    catch(err) {
        console.log(err)
    }
})

app.listen(port, ()=> console.log(`Users App is running on port ${port}`))