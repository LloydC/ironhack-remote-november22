require('dotenv').config();// this will make your .env file accessible via process.env

const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;

const studentList = require('./sampleData/data');

// https://api.chucknorris.io/jokes/random

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

hbs.registerPartials(`${__dirname}/views/partials`);

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true })); // necessary step for express to parse/translate req.body successfully

app.get('/', (req, res) =>{

    // let janInformation = {
    //     firstName: 'Jan',
    //     age: 30
    // }
   const dadJoke = fetch('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}})
                    .then(response => response.json())
                    .then(data => data.joke)
                    .catch(err => console.log(err))

    const chuckNorrisJoke = fetch('https://api.chucknorris.io/jokes/random')
                            .then(response => response.json())
                            .then(data => data.value)
                            .catch(err => console.log(err))

    Promise.all([dadJoke, chuckNorrisJoke])
            .then(jokes => {
                console.log('jokes:', jokes)
                res.render('index', {
                        janInformation: { 
                                    firstName: 'Jan', 
                                    age: 30, 
                                    movies: ['Inception', 'Lord of the rings Part 1', 'Lord of the Rings'],
                                    tattoos: {
                                        first: 'heartbeat tattoo'
                                    },
                                    jokes // jokes: jokes
                        }
                        
                        });
            })
            .catch(err => console.log(err))


    //     const chuckNorrisJoke = data.value;

    // fetch('https://api.chucknorris.io/jokes/random')
    // .then(response => response.json())
    // .then(data =>{

    //     const chuckNorrisJoke = data.value;

    //     res.render('index', {
    //     janInformation: { 
    //                 firstName: 'Jan', 
    //                 age: 30, 
    //                 movies: ['Inception', 'Lord of the rings Part 1', 'Lord of the Rings'],
    //                 tattoos: {
    //                     first: 'heartbeat tattoo'
    //                 },
    //                 chuckNorrisJoke
    //     } // chuckNorrisJoke: chuckNorrisJoke
        
    //     });
    // })
  
    
})

app.get('/gameofthrones', (req, res) => {
    fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(data =>{
        //console.log('Game of thrones characters: ',data)
    res.render('characters', {characters: data})
    })
    .catch(err => console.log(err))
})

app.get('/users', (req, res) => {
    res.render('users', {students: studentList})
})

app.get('/users/:username', (req, res) => {
    console.log('req params', req.params)
    const foundStudent = studentList.find(student => student.firstName.toLowerCase() === req.params.username.toLowerCase()) // find the student for this profile
    console.log('foundStudent', foundStudent)

    res.render('profile', {student: foundStudent})
})

app.get('/search', (req, res) =>{
    console.log('req query', req.query)
    if(req.query.city){
        const results = studentList.filter( student => student.city.toLowerCase() === req.query.city.toLowerCase());
        res.render('search', { results })
    }
    else {
        res.render('search')
    }
    
})

// Display the Signup form 
app.get('/signup', (req, res) => {
    res.render('signup')
} )

// Route to add a new student 
app.post('/signup', (req, res) =>{
    console.log('req body', req.body)

    const newStudent = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        city: req.body.city
    }

    studentList.push(newStudent);

    setTimeout(() => res.redirect('/users'), 1000)
})

app.get('/login', (req, res) =>{
    res.render('login')
})

app.post('/login', (req, res) => {
    console.log('req body', req.body)
    // look in your db for a user that matches the req.body.username
    const user = studentList.find(student => student.firstName.toLowerCase() === req.body.username.toLowerCase())
    console.log('user', user)

    res.redirect(`/users/${user.firstName}`)
    // check that the password in the db is the same as req.body.password
    // if yes, login the user
    // otherwise don't login the user
})

app.get('/movie', (req, res) => {
    if(req.query.movieTitle){
        // fetch the omdbAPI for my movie
        fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${req.query.movieTitle}`)
        .then(response => response.json())
        .then(data => {
            console.log('movie data', data.Search)
            res.render('movie', { movies: data.Search})
        })
        .catch(err => console.log(err))
        // send the result to the movie page
        
    }
    else {
        res.render('movie')
    }
})

app.listen(port, () => console.log(`App is listening on port ${port}`))