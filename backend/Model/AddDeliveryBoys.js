const mongoose = require('mongoose')

const AddDeliverBoysSchema = new mongoose.Schema({
    fullname : {
        type: String,
        required: true
    },
    mobilenumber: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }
})

const deliverboy = mongoose.model('deliverboy', AddDeliverBoysSchema)
module.exports = deliverboy