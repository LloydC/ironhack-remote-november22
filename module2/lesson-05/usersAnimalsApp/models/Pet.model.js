// Data modeling

// Name --> String
// animalType --> String
// age --> Number
// owner --> [ObjectId]

const mongoose = require('mongoose');

const { Schema } = mongoose; // const Schema = mongoose.Schema

const petSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    animalType: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    avatarUrl: {
        type: String,
        default: 'images/animal-avatar.png',
      },
    ownersId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;