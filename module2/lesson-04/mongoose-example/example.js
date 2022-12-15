const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exampleApp');
 
const Student = mongoose.model('Student', { firstName: String });
const City = mongoose.model('City', { name: String });
 
const promise1 = Student.insertMany([{ firstName: 'Alice' }, { firstName: 'Bob' }]);
const promise2 = City.insertMany([{ name: 'Madrid' }, { name: 'Barcelona' }, { name: 'Paris' }]);
 
Promise.all([promise1, promise2])
  .then(values => {
    console.log('students and cities have been inserted');
    console.log(values);
    /*
    [ [ { _id: 5a4e462048841e65562c465a, firstName: 'Alice', __v: 0 },
      { _id: 5a4e462048841e65562c465b, firstName: 'Bob', __v: 0 } ],
    [ { _id: 5a4e462048841e65562c465c, name: 'Madrid', __v: 0 },
      { _id: 5a4e462048841e65562c465d, name: 'Barcelona', __v: 0 },
      { _id: 5a4e462048841e65562c465e, name: 'Paris', __v: 0 } ] ]
    */
    mongoose.connection.close();
  })
  .catch(err => console.error(err));