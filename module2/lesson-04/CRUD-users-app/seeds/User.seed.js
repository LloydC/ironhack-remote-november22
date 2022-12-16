const mongoose = require('mongoose');
const User = require('../models/User.model'); 

mongoose
  .connect('mongodb://localhost/userAppDemo')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .then(() => {
    return User.insertMany([{username: 'jan', email: 'jan@test.com', password: 'test4'},{username: 'Giulia', email: 'giulia@test.com', password: 'test1'}, {username: 'David', email: 'david@test.com', password: 'test2'}, {username: 'Davide', email: 'davide@test.com', password: 'test3'}])
  })
  .then((createdUsers) => console.log('users were added to the DB', createdUsers))
  .then(() => mongoose.connection.close())
  .catch(error => console.log(error))

