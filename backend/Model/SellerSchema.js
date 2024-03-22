const mongoose = require('mongoose')

const SellerSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    ownername: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: String,
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

const sellers = mongoose.model('sellers', SellerSchema)
module.exports = sellers