const mongoose = require('mongoose');
const User = require('./models/User.model'); // loading the User model

mongoose
  .connect('mongodb://localhost/blogApp')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .then(() => {
    mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
      });
  })
//   .then(() => User.findByIdAndDelete('639ae66ba8cab600f0aa62cd'))
//   .then(deletedUser => console.log(`user with the id ${deletedUser._id} was successfully deleted`))
//   .then(() => User.findOneAndUpdate({username: 'Lloyd C.'}, {username: 'Lloyd Chambrier', email: 'lloydchambrier@test.com'}, {new: true}))
//   .then(updatedUser => console.log('updated User: ', updatedUser))
//   .then( foundUser => console.log('foundUser:', foundUser))
//   .then(() => User.findOne({ email: 'lloyd@test.com' }))
//   .then(() => User.findById('639ae711b425e01ead042498'))
//   .then(() => User.find())
//   .then(allUsers => console.log('allUsers: ', allUsers))
//   .then(() => User.create({ username: 'Alessandra', email: 'alessandra@test.com', password: 'supersafe2022'}))
//   .then(newUser => console.log('User was successfully created:', newUser))
  .catch(err => console.error('Error connecting to mongo', err));
