// houseNumber --> Number
// streetName --> String
// city ---> String
// zipCode --> String
// tenants ---> ObjectId

const mongoose = require('mongoose');

const { Schema } = mongoose; // const Schema = mongoose.Schema

const addressSchema = new Schema({
        houseNumber: {
            type: Number,
            required: true
        },
        streetName: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        zipCode: {
            type: String,
            required: true
        },
        tenant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
})

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;