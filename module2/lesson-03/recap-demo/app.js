const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;


// https://api.chucknorris.io/jokes/random

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

hbs.registerPartials(`${__dirname}/views/partials`);

app.use(express.static(path.join(__dirname, 'public')))

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

app.listen(port, () => console.log(`App is listening on port ${port}`))