// Data modeling

// name: String
// age: Number
// breed: String/Array
// color: String/Array
// furType: String
const mongoose = require('mongoose');

const { Schema } = mongoose; 

const catSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        breed: {
            type: String
        },
        color: {
            type: String
        },
        furType: {
            type: String
        },
})

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;