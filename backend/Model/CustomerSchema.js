const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const customer = mongoose.model('customer', CustomerSchema)
module.exports = customer