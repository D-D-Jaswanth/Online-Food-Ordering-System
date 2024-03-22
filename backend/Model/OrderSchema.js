const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    Users: {
        type: mongoose.Schema.ObjectId,
        ref: 'customer',
    },
    Products: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Items'
        }
    ],
    status: {
        type: String,
        default: "Ordered Accepted",
        enum: ["Ordered Accepted", "Prepare to Deliver", "Dispatched", "Started", "Arrived", "cancel"],
    },
},
    { timestamps: true },

)

const order = mongoose.model('order', OrderSchema)
module.exports = order