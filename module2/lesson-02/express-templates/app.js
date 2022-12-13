const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios');
const hbs = require('hbs');

const studentList = require('./sampleData/data');
const port = 3000;

app.set('view engine', 'hbs') // configuring express to use handlebars as a template engine
app.set('views', `${__dirname}/views`) // configures express to look for handlebars files in the 'views' folder

hbs.registerPartials(__dirname + "/views/partials");// this registers my partials

app.use(express.static(path.join(__dirname, 'public'))); // __dirname + 'public'

app.get('/', (req, res) =>{
    res.render('index', {name: 'Lloyd Chambrier', age: 32, job: 'Web Development Instructor'});
})

app.get('/about', (req,res) => {
    res.render('about')
    // res.render('about', {layout: false}) --> cancels out the layout
})

app.get('/class', (req, res) => {
    res.render('class', { students: studentList })
})

app.get('/randomCatFacts', (req, res) => {
// Only works with node version 17.5 or higher 

//   fetch('https://meowfacts.herokuapp.com/')
//     .then(response => response.json())
//     .then( data =>{
//         console.log(data.data[0])
//         res.render('randomCatFacts', { randomFact: data.data[0] })
//     })

    axios.get('https://meowfacts.herokuapp.com?count=3')
    .then(data =>{
            // console.log(data.data.data)
            res.render('randomCatFacts', { randomCatFacts: data.data.data })
    })
    .catch(err => console.log(err))

})

app.get('/randomDogFacts', (req, res) => {
    axios.get('http://dog-api.kinduff.com/api/facts?number=5')
    .then(data =>{
            // console.log(data.data.facts)
            res.render('randomDogFacts', {randomDogFacts: data.data.facts})
    })
    .catch(err => console.log(err))
})
app.listen(port, ()=> console.log(`We are on port ${port}`))

