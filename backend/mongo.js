const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/onlinefoodorder';

const mongoDB = async () => {
    try{
        mongoose.connect(mongoURI)
        // mongoose.set('strictQuery', false)
        console.log('Connected to the Database');
    }
    catch(error){
        console.log(console.log(error))
    }
}

module.exports = mongoDB;