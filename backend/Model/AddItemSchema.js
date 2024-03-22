const mongoose = require('mongoose')

const AddItem = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    Itemname: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    SubCategory: {
        type: String,
        required: false
    },
    Price: {
        type: Number,
        required: true
    }
})

const Items = mongoose.model('Items', AddItem)
module.exports = Items