const path = require('path');
const express = require('express');
const app = express();

const studentList = require('./sampleData/data');
const port = 3000;

app.set('view engine', 'hbs') // configuring express to use handlebars as a template engine
app.set('views', 'views') // configures express to look for handlebars files in the 'views' folder

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

app.listen(port, ()=> console.log(`We are on port ${port}`))