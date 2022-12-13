const path = require('path');
const express = require('express'); // loading the express package/module
const app = express() // starting out express server
// const app = require('express')();
const port = 3000; // define the entrypoint/gateway for our server

// app.use(express.static('public')) // serve files located in a "public" folder
  app.use('/', express.static(path.join(__dirname, 'public'))) // alternative way to serve static files
// app.use(arg) --> configure express to work with something

// Home route
app.get('/', (req, res) => { // defining how to handle a request coming from the homepage
  res.sendFile(`${__dirname}/views/index.html`)
})

// Dog route
app.get('/dog', (req, res) => { // defining how to handle a request coming from the dog page
  res.sendFile(`${__dirname}/views/dog.html`)
})
// About route
app.get('/about', (req, res) => { // defining how to handle a request coming from the about page
  res.sendFile(`${__dirname}/views/about.html`)
  })

  // Contact route
app.get('/contact', (req, res) => { // defining how to handle a request coming from the contact page
  // const test = { name: 'Lloyd Chambrier'} 
  // const users = [{}, {}]
  // res.send(test) --> send data to the client
  res.sendFile(`${__dirname}/views/contact.html`) // ---> send a file to the client 

})

app.listen(port, () => { // setting our server to listen at a specific gateway
  console.log(`Example app listening on port ${port}`)
})